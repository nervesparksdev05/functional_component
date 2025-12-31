// src/screens/NavbarDesktopScreen/UploadDocumentHome.jsx
import { useState, useRef } from "react";

import Navbar from "../../components/Navbar.jsx";
import { Button } from "../../components/ui/button";
import { ArrowRight } from "lucide-react";
import BlueArrowIcon from "../../assets/blue-arrow.svg";
import IncreasingDotsInterface from "../../components/interface/IncreasingDotsInterface.jsx";
import CloudUpload from "../../assets/cloud-upload.svg";
import PdfIcon from "../../assets/pdf-icon.svg";
import TxtIcon from "../../assets/text-icon.svg";

export default function UploadDocumentHome({ onNext }) {
  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState({});

  const handleFilesUploaded = (incomingFiles) => {
    const newFiles = incomingFiles.map((file, index) => ({
      id: Date.now() + index,
      name: file.name,
      size: Math.round(file.size / 1024) + " kb",
      type: file.name.toLowerCase().endsWith(".txt") ? "txt" : "pdf",
    }));

    setFiles((prev) => [...prev, ...newFiles]);

    newFiles.forEach((file) => {
      setProgress((p) => ({ ...p, [file.id]: 0 }));
      simulateProgress(file.id);
    });
  };

  const simulateProgress = (fileId) => {
    let value = 0;

    const interval = setInterval(() => {
      value += Math.floor(Math.random() * 15) + 10;
      if (value >= 100) {
        value = 100;
        clearInterval(interval);
      }
      setProgress((prev) => ({ ...prev, [fileId]: value }));
    }, 600);
  };

  const removeFile = (id) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
    setProgress((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };

  const fileInputRef = useRef(null);

  const handleBrowseClick = () => fileInputRef.current?.click();

  const handleFilesSelected = (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;
    handleFilesUploaded(files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const files = Array.from(e.dataTransfer.files || []);
    if (files.length === 0) return;
    handleFilesUploaded(files);
  };

  return (
    <div className="w-full h-screen flex flex-col ">
      <Navbar />

      <main className="flex-1 w-full flex flex-col items-center px-4 relative">
        {/* Back button */}
        <div className="w-full max-w-[1030px] mt-6 mb-4">
          <Button
            type="button"
            variant="ghost"
            size="default"
            radius="default"
            leftIcon={<img src={BlueArrowIcon} alt="Back" className="w-6 h-6" />}
            className="text-[21px] text-[#4443E4] font-normal"
          >
            Back to Dashboard
          </Button>
        </div>

        {/* Stepper */}
        <div className="w-full max-w-[1030px]">
          <IncreasingDotsInterface />
        </div>

        {/* Upload area */}
        <div className="w-full max-w-[1030px] mt-3 flex flex-col items-center text-center">
          <p className="text-[14px] font-medium text-[#000000] mb-1">
            Upload documents (PDF, DOCX, TXT) that your bot will use to train
            our self and try to answer questions.
          </p>

          {/* Drag box – 696px */}
          <div className="w-full flex justify-center py-4">
            <section
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              className="
                w-[696px] h-[166px]
                rounded-[16px]
                border-2 border-dashed border-[#4C57FF]
                bg-[#4443E4]/10
                flex flex-col items-center justify-center
                text-center
                transition-all
              "
            >
              <img
                src={CloudUpload}
                alt="Cloud upload"
                className="w-[55px] h-[55px] opacity-100"
              />
              <p className="mt-1 text-[14px] leading-[20px] text-[#111827] font-normal">
                Drag & drop your files here
              </p>
              <p className="mt-1 mb-2 text-[14px] leading-[16px] text-[#4B5563]">
                OR
              </p>
              <button
                type="button"
                onClick={handleBrowseClick}
                className="
                  inline-flex items-center justify-center
                  h-[32px] px-5
                  rounded-[6px]
                  bg-[#4443E4]
                  text-white text-[14px] font-normal
                  cursor-pointer
                  mb-2
                "
              >
                Browse files
              </button>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                className="hidden"
                onChange={handleFilesSelected}
              />
            </section>
          </div>

          {/* Uploading files label – aligned with 696px content */}
          {files.length > 0 && (
            <div className="mt-2 mb-2 w-full flex justify-center">
              <p className="text-[14px] text-[#2F3542] w-[696px] text-left">
                Uploading files
              </p>
            </div>
          )}

          {/* Empty state */}
          {files.length === 0 && (
            <div className="mt-14">
              <h2 className="text-[28px] font-medium text-[#111827] mb-1">
                You have not Upload any files
              </h2>
              <p className="text-[14px] text-[#000000]">
                Start uploading files to train your bot
              </p>
            </div>
          )}

          {/* File rows – same width as drag box */}
          {files.length > 0 && (
            <div className="mt-2 w-full flex justify-center">
              <div className="w-[696px]">
                {files.map((file) => (
                  <div key={file.id} className="flex items-start gap-3 mb-4">
                    {/* Icon */}
                    <img
                      src={file.type === "txt" ? TxtIcon : PdfIcon}
                      alt={file.type.toUpperCase()}
                      className="w-8 h-8 mt-[2px]"
                    />

                    {/* Text + progress */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col items-start">
                          <p className="text-[14px] font-medium text-[#111827]">
                            {file.name}
                          </p>
                          <p className="text-[11px] text-[#6B7280]">
                            {file.size}
                          </p>
                        </div>

                        <div className="flex items-center gap-4">
                          <span className="text-[14px] text-[#434446]">
                            {progress[file.id] || 0}%
                          </span>
                          <button
                            type="button"
                            onClick={() => removeFile(file.id)}
                            className="text-[#4443E4] text-[36px] font-normal leading-none"
                          >
                            ×
                          </button>
                        </div>
                      </div>

                      <div className="mt-2 bg-[#E5E7EB] h-[6px] rounded-full">
                        <div
                          className="h-[6px] bg-[#4443E4] rounded-full"
                          style={{ width: `${progress[file.id] || 0}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Next button bottom-right */}
        <div className="w-full max-w-[1030px] mt-auto mb-4 flex justify-end">
          <Button
            onClick={onNext}
            variant="default"
            size="default"
            radius="md"
            width="87px"
            rightIcon={<ArrowRight size={16} className="text-white" />}
          >
            Next
          </Button>
        </div>
      </main>
    </div>
  );
}
