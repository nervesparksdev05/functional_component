import { useRef } from "react";
import CloudUpload from "../assets/cloud-upload.svg";

export default function DragOrBrowsefilesInterface({ onFilesUploaded }) {
  const fileInputRef = useRef(null);

  const handleBrowseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFilesSelected = (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    console.log("Selected via browse:", files);
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

    console.log("Selected via drop:", files);
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
          border border-dashed border-[#4443E4]
          bg-[#F5F6FF]
          flex flex-col items-center justify-center
          text-center
          transition-all
        "
      >
        <img src={CloudUpload} alt="Cloud upload" className="w-9 h-9" />

        <p className="mt-3 text-[14px] leading-[20px] text-[#111827]">
          Drag &amp; drop your files here
        </p>

        <p className="mt-1 mb-2 text-[12px] leading-[16px] text-[#4B5563]">OR</p>

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
  );
}
