// src/screens/UploadDocumentHome.jsx
import { useState } from "react";

import ComplexHeaderInterface from "../interface/ComplexHeaderInterface.jsx";
import BackToDashBoardButton from "../buttons/BackToDashBoardButton.jsx";
import IncreasingDotsInterface from "../interface/IncreasingDotsInterface.jsx";
import DragOrBrowsefilesInterface from "../interface/DragOrBrowsefilesInterface.jsx";
import NextButton from "../buttons/NextButton.jsx";

import PdfIcon from "../assets/pdf-icon.svg";
import TxtIcon from "../assets/text-icon.svg";

export default function UploadDocumentHome() {
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

  return (
    <div className="w-full h-screen flex flex-col ">
      <ComplexHeaderInterface />

      <main className="flex-1 w-full flex flex-col items-center px-4 relative">
        {/* Back button */}
        <div className="w-full max-w-[1030px] mt-6 mb-4">
          <BackToDashBoardButton />
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
          <DragOrBrowsefilesInterface onFilesUploaded={handleFilesUploaded} />

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
        <div className="w-full max-w-[1030px] mt-auto mb-8 flex justify-end">
          <NextButton />
        </div>
      </main>
    </div>
  );
}
