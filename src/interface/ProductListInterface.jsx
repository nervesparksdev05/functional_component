import { useMemo } from "react";
import WordIcon from "../assets/word-icon.svg";
import TrashIcon from "../assets/trash-icon.svg";
import VideoIcon from "../assets/video-icon.svg";

function getIconForType(type) {
  const t = String(type || "").toUpperCase();
  if (t === "MP3" || t === "MP4" || t === "MOV" || t === "AVI") return VideoIcon;
  return WordIcon;
}

function bytesToPretty(bytes) {
  if (bytes === 0) return "0 mb";
  if (bytes == null || Number.isNaN(bytes)) return "";
  const mb = bytes / (1024 * 1024);
  if (mb < 1024) return `${mb.toFixed(0)} mb`;
  const gb = mb / 1024;
  return `${gb.toFixed(1)} gb`;
}

export default function ProductListInterface({
  files = [],
  mode = "documents", // "documents" | "videos"
  onProcess = () => {}, // ✅ row-level process
  onRemove = () => {},
  maxRowsBeforeScroll = 3, // ✅ show max 3 rows height, then scroll
}) {
  const shouldScroll = files.length > maxRowsBeforeScroll;

  // A simple “row-height based” max-height
  // (3 rows + gaps ≈ 220px; adjust if you want tighter/looser)
  const listClass = useMemo(() => {
    return shouldScroll ? "max-h-[220px] overflow-auto pr-1" : "";
  }, [shouldScroll]);

  return (
    <div className="w-full flex flex-col h-full overflow-hidden">
      <div className={`${listClass} space-y-4`}>
        {files.map((file) => {
          const icon = getIconForType(file.type);
          const size = file.sizeText || bytesToPretty(file.sizeBytes) || "—";
          const isVideoMode = mode === "videos";
          const isProcessed = !!file.processed;

          return (
            <div key={file.id} className="flex items-center justify-between">
              <div className="flex items-center gap-4 min-w-0">
                <div className="w-[48px] h-[48px] rounded-[12px] bg-[#EEF2FF] flex items-center justify-center flex-shrink-0">
                  <img src={icon} alt="" className="w-6 h-6" />
                </div>

                <div className="flex flex-col min-w-0">
                  <div className="text-[16px] text-[#111827] truncate">
                    {file.name}
                    {isProcessed && (
                      <span className="ml-2 text-[12px] font-semibold text-[#16A34A]">
                        • Processed
                      </span>
                    )}
                  </div>

                  <div className="text-[12px] text-[#6B7280] uppercase">
                    {file.type}
                    <span className="ml-2 normal-case">({size})</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 flex-shrink-0">
                {/* ✅ Process button INSIDE list row (videos only) */}
                {isVideoMode && (
                  <button
                    type="button"
                    onClick={() => onProcess(file.id)}
                    disabled={isProcessed}
                    className={`h-[36px] px-5 rounded-full text-[14px] font-semibold ${
                      isProcessed
                        ? "bg-[#E5E7EB] text-[#64748B] cursor-not-allowed"
                        : "bg-[#4443E4] text-white hover:opacity-95"
                    }`}
                  >
                    {isProcessed ? "Processed" : "Process"}
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => onRemove(file.id)}
                  className="p-2 rounded-full hover:bg-[#F3F4F6]"
                  aria-label={`Remove ${file.name}`}
                >
                  <img src={TrashIcon} alt="" className="w-5 h-5" />
                </button>
              </div>
            </div>
          );
        })}

        {files.length === 0 && (
          <div className="text-[14px] text-[#6B7280]">No files uploaded.</div>
        )}
      </div>
    </div>
  );
}
