import { useRef } from "react";
import CloudUpload from "../assets/cloud-upload.svg";

export default function DragOrBrowsefilesInterface({ onFilesUploaded }) {
  const fileInputRef = useRef(null);

  const handleBrowseClick = () => fileInputRef.current?.click();

  const handleFilesSelected = (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    if (onFilesUploaded) onFilesUploaded(files);
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

    if (onFilesUploaded) onFilesUploaded(files);
  };

  return (
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
        {/* Bigger cloud icon */}
        <img
          src={CloudUpload}
          alt="Cloud upload"
          className="w-[55px] h-[55px] opacity-100"
        />

        {/* Main text */}
        <p className="mt-1 text-[14px] leading-[20px] text-[#111827] font-normal">
          Drag & drop your files here
        </p>

        {/* "OR" */}
        <p className="mt-1 mb-2 text-[14px] leading-[16px] text-[#4B5563]">
          OR
        </p>

        {/* Browse button */}
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

        {/* File input (hidden) */}
        <input
          ref={fileInputRef}
          type="file"
          multiple
          className="hidden"
          onChange={handleFilesSelected}
        />
      </section>
    </div>
  );
}
