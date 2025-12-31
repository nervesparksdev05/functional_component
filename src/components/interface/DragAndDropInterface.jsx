import { useRef } from "react";
import ArrowUpload from "../../assets/arrow-upload.svg";

export default function DragAndDropInterface({
  accept = "",
  multiple = true,
  onFilesSelected = () => {},
}) {
  const fileInputRef = useRef(null);

  const handleBrowseClick = () => fileInputRef.current?.click();

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;
    onFilesSelected(Array.from(files));
    event.target.value = "";
  };

  const onDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (!files || files.length === 0) return;
    onFilesSelected(Array.from(files));
  };

  const onDragOver = (e) => e.preventDefault();

  return (
    <div
      onDrop={onDrop}
      onDragOver={onDragOver}
      className="
        w-full h-[150px]
        rounded-[12px]
        flex flex-col items-center justify-center
        gap-2
      "
    >
      <input
        ref={fileInputRef}
        type="file"
        multiple={multiple}
        accept={accept}
        className="hidden"
        onChange={handleFileChange}
      />

      <div className="w-12 h-12 flex items-center justify-center">
        <img src={ArrowUpload} alt="Upload" className="w-10 h-10" />
      </div>

      <p className="text-[16px] text-center text-[#111827]">
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
