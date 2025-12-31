import { useEffect, useMemo, useRef, useState } from "react";
import DragAndDropInterface from "./DragAndDropInterface.jsx";
import ProductListInterface from "./ProductListInterface.jsx";

import EmptyRadioIcon from "../../assets/empty-radio.svg";
import FilledRadioIcon from "../../assets/radio.svg";


const makeId = () => Math.floor(Math.random() * 1e9);

const LS_DOCS_KEY = "ukb_doc_files_v1";
const LS_VIDEOS_KEY = "ukb_video_files_v1";

function extToType(name) {
  const ext = String(name).split(".").pop()?.toUpperCase() || "";
  return ext || "FILE";
}

function bytesToPretty(bytes) {
  if (bytes === 0) return "0 mb";
  if (bytes == null || Number.isNaN(bytes)) return "";
  const mb = bytes / (1024 * 1024);
  if (mb < 1024) return `${mb.toFixed(0)} mb`;
  const gb = mb / 1024;
  return `${gb.toFixed(1)} gb`;
}

function safeLoadArray(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : fallback;
  } catch {
    return fallback;
  }
}

function stripForStorage(file) {
  const { raw, ...rest } = file || {};
  return rest;
}

function Loader() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="w-20 h-20 rounded-full border-4 border-[#E5E7EB] border-t-[#4443E4] animate-spin" />
      <div className="text-[20px] font-semibold text-[#111827] text-center">
        Please wait, generating transcription in progress
      </div>
    </div>
  );
}

export default function UploadKnowlodgeBaseContainer({ onClose = () => {} }) {
  const initialDocs = [
    { id: 1, name: "Product_Roadmap_Q3_2025", type: "PDF", sizeText: "—", sizeBytes: null },
    { id: 2, name: "AI_Module_Integration_Guide", type: "DOCX", sizeText: "—", sizeBytes: null },
    { id: 3, name: "API_Reference_v2.4", type: "PDF", sizeText: "—", sizeBytes: null },
  ];

  const [mode, setMode] = useState("documents"); // "documents" | "videos"
  const [step, setStep] = useState("upload"); // "upload" | "generating" | "form"
  const [processingId, setProcessingId] = useState(null);

  const [docFiles, setDocFiles] = useState(() => safeLoadArray(LS_DOCS_KEY, initialDocs));
  const [videoFiles, setVideoFiles] = useState(() => safeLoadArray(LS_VIDEOS_KEY, []));

  const files = mode === "documents" ? docFiles : videoFiles;
  const setFiles = mode === "documents" ? setDocFiles : setVideoFiles;

  const [form, setForm] = useState({
    title: "Lorem ipsum dolor sit amet consectetur.",
    description:
      "Lorem ipsum dolor sit amet consectetur. Congue et fringilla dictum ac id elit porttitor interdum sit.Lorem ipsum dolor sit amet consectetur. Congue et fringilla dictum ac id elit porttitor interdum sit.Lorem ipsum",
    transcription:
      "Lorem ipsum dolor sit amet consectetur. Congue et fringilla dictum ac id elit porttitor interdum sit.Lorem ipsum dolor sit amet consectetur. Congue et fringilla dictum ac id elit porttitor interdum sit.Lorem ipsum",
    tags: "Lorem ipsum dolor sit amet consectetur.",
  });

  // Persist to LocalStorage (temporary)
  useEffect(() => {
    localStorage.setItem(LS_DOCS_KEY, JSON.stringify(docFiles.map(stripForStorage)));
  }, [docFiles]);

  useEffect(() => {
    localStorage.setItem(LS_VIDEOS_KEY, JSON.stringify(videoFiles.map(stripForStorage)));
  }, [videoFiles]);

  const accept = useMemo(() => {
    if (mode === "documents") return ".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx";
    return ".mp3,.mp4,.mov,.avi";
  }, [mode]);

  const supportedText =
    mode === "documents"
      ? "Supported file formats: PDF, Word"
      : "Supported file formats: MP3, MP4";

  const addNewFiles = (picked) => {
    const arr = Array.from(picked || []).filter(Boolean);

    const mapped = arr.map((f) => {
      const type = extToType(f.name);
      const sizeBytes = Number(f?.size);
      const sizeText = bytesToPretty(sizeBytes) || "—";

      return {
        id: makeId(),
        name: f.name?.replace(/\.[^/.]+$/, "") || "Untitled",
        type,
        raw: f,
        sizeBytes,
        sizeText,
        processed: false,
        meta: null,
      };
    });

    // videos: newest first (optional)
    setFiles((prev) => (mode === "videos" ? [...mapped, ...prev] : [...prev, ...mapped]));
  };

  const removeFile = (id) => setFiles((prev) => prev.filter((x) => x.id !== id));

  const switchMode = (nextMode) => {
    setMode(nextMode);
    setStep("upload");
    setProcessingId(null);
  };

  // Screen4 timing (5 sec)
  const timerRef = useRef(null);
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleProcessFile = (fileId) => {
    if (mode !== "videos") return;

    const target = videoFiles.find((f) => f.id === fileId);
    if (!target || target.processed) return;

    setProcessingId(fileId);
    setStep("generating");

    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setStep("form");
    }, 5000);
  };

  const handleSaveDetails = () => {
    if (mode !== "videos" || !processingId) return;

    setVideoFiles((prev) =>
      prev.map((f) =>
        f.id === processingId
          ? {
              ...f,
              processed: true,
              processedAt: Date.now(),
              meta: { ...form },
              name: form.title?.trim() ? form.title.trim() : f.name,
            }
          : f
      )
    );

    setStep("upload");
    setProcessingId(null);
  };

  const isUploadScreen = step === "upload";
  const isGenerating = step === "generating";
  const isForm = step === "form";

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40">
      {/* Modal */}
      <div className="w-[1071px] h-[704px] rounded-[16px] bg-white border border-[#E5E7EB] relative flex flex-col">
        {/* Header */}
        <div className="h-[64px] px-8 flex items-center justify-between border-b border-[#E5E7EB] flex-shrink-0">
          <div className="text-[18px] font-semibold text-[#111827]">
            Upload Knowledge Base
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-full hover:bg-[#F3F4F6] flex items-center justify-center"
            aria-label="Close"
          >
            <span className="text-[32px] leading-none text-[#64748B]">×</span>
          </button>
        </div>

        {/* Top radios */}
        <div className="px-8 pt-6 flex items-center gap-12 flex-shrink-0">
          <button
            type="button"
            onClick={() => switchMode("documents")}
            className="flex items-center gap-3"
          >
            <img
              src={mode === "documents" ? FilledRadioIcon : EmptyRadioIcon}
              alt=""
              className="w-7 h-7"
            />
            <span className="text-[18px] text-[#111827]">Upload Documents</span>
          </button>

          <button
            type="button"
            onClick={() => switchMode("videos")}
            className="flex items-center gap-3"
          >
            <img
              src={mode === "videos" ? FilledRadioIcon : EmptyRadioIcon}
              alt=""
              className="w-7 h-7"
            />
            <span className="text-[18px] text-[#111827]">Upload Videos</span>
          </button>
        </div>

        {/* BODY (no overflow-hidden; use min-h-0 so inner scroll works) */}
        <div className="px-8 pt-8 flex-1 min-h-0">
          {/* Screen2 */}
          {isUploadScreen && (
            <div className="h-full flex flex-col min-h-0">
              <div className="text-[18px] font-semibold text-[#111827] mb-4 flex-shrink-0">
                {mode === "documents" ? "Upload Document Files" : "Upload Videos Files"}
              </div>

              {/* Upload area ONLY */}
              <div className="border border-dashed border-[#CBD5E1] rounded-[12px] p-5 bg-[#77889A]/20 flex-shrink-0">
                <DragAndDropInterface accept={accept} multiple onFilesSelected={addNewFiles} />
                <div className="text-center text-[12px] text-[#6B7280] mt-2">
                  {supportedText}
                </div>
              </div>

              {/* List area (stays inside modal because parent is fixed height + min-h-0) */}
              <div className="mt-6 flex-1 min-h-0">
                <ProductListInterface
                  files={files}
                  mode={mode}
                  onProcess={handleProcessFile}
                  onRemove={removeFile}
                  maxRowsBeforeScroll={3}
                />
              </div>
            </div>
          )}

          {/* Screen4 */}
          {isGenerating && (
            <div className="h-full flex items-center justify-center">
              <Loader />
            </div>
          )}

          {/* Screen5 (scrolls if needed; no overflow-hidden used) */}
          {isForm && (
            <div className="h-full min-h-0 overflow-auto pb-6">
              <div className="pt-1">
                <div className="text-[16px] font-semibold text-[#111827] mb-3">
                  Generate Transcript
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="text-[13px] font-semibold text-[#111827] mb-1">
                      Video Title:
                    </div>
                    <textarea
                      value={form.title}
                      onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
                      className="w-full h-[52px] rounded-[10px] border border-[#E5E7EB] px-4 py-3 text-[14px] outline-none"
                    />
                  </div>

                  <div>
                    <div className="text-[13px] font-semibold text-[#111827] mb-1">
                      Video Description:
                    </div>
                    <textarea
                      value={form.description}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, description: e.target.value }))
                      }
                      className="w-full h-[76px] rounded-[10px] border border-[#E5E7EB] px-4 py-3 text-[14px] outline-none"
                    />
                  </div>

                  <div>
                    <div className="text-[13px] font-semibold text-[#111827] mb-1">
                      Video Transcription:
                    </div>
                    <textarea
                      value={form.transcription}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, transcription: e.target.value }))
                      }
                      className="w-full h-[76px] rounded-[10px] border border-[#E5E7EB] px-4 py-3 text-[14px] outline-none"
                    />
                  </div>

                  <div>
                    <div className="text-[13px] font-semibold text-[#111827] mb-1">
                      Video Tags:
                    </div>
                    <textarea
                      value={form.tags}
                      onChange={(e) => setForm((p) => ({ ...p, tags: e.target.value }))}
                      className="w-full h-[52px] rounded-[10px] border border-[#E5E7EB] px-4 py-3 text-[14px] outline-none"
                    />
                  </div>
                </div>

                <div className="w-full flex justify-center mt-5">
                  <button
                    type="button"
                    onClick={handleSaveDetails}
                    className="h-[46px] px-12 rounded-full bg-[#4443E4] text-white text-[14px] font-semibold hover:opacity-95"
                  >
                    Save Details
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
