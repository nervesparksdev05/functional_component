import { useRef } from "react";
import ArrowUpload from "../assets/arrow-upload.svg";

export default function DragAndDropInterface() {
  const fileInputRef = useRef(null);

  const handleBrowseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    // For now just log them – replace this with real upload logic
    console.log("Selected files:", Array.from(files));
  };

  return (
    <div
      className="
        w-[360px] h-[120px]
        rounded-[10px]
        border border-dashed border-[#77889A]
        bg-[#77889A33]
        flex flex-col items-center justify-center
        gap-3
      "
    >
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        className="hidden"
        onChange={handleFileChange}
      />

      {/* Upload icon using imported SVG */}
      <div className="w-6 h-6 flex items-center justify-center">
        <img
          src={ArrowUpload}
          alt="Upload"
          className="w-6 h-6"
        />
      </div>

      {/* Text */}
      <p className="text-[16px] leading-[1] text-center text-[#1F2933]">
        <span>Drag and Drop Files, or </span>
        <button
          type="button"
          onClick={handleBrowseClick}
          className="text-[#2563EB] underline-offset-[2px] hover:underline"
        >
          Browse
        </button>
      </p>
    </div>
  );
}
