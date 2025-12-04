import { useRef } from "react";

export default function DragOrBrowsefilesInterface() {
  const fileInputRef = useRef(null);

  const handleBrowseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFilesSelected = (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    console.log("Selected files:", files);
  };

  return (
    <div className="w-full flex justify-center py-4">
      <section
        className="
          w-[696px] h-[166px]
          rounded-[16px]
          border border-dashed border-[#4443E4]
          bg-[#F5F6FF]
          flex flex-col items-center justify-center
          text-center
        "
      >
        {/* Cloud icon */}
        <CloudUploadIcon />

        {/* Main text */}
        <p className="mt-3 text-[14px] leading-[20px] text-[#111827]">
          Drag &amp; drop your files here
        </p>

        {/* OR */}
        <p className="mt-1 mb-2 text-[12px] leading-[16px] text-[#4B5563]">
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
          "
        >
          Browse files
        </button>

        {/* Hidden file input */}
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

/* --- Icon --- */

function CloudUploadIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      className="w-9 h-9"
      fill="none"
      stroke="#4443E4"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20a8 8 0 0 1 15.6-2.4A6 6 0 1 1 34 30H16a6 6 0 0 1 0-12h.4" />
      <path d="M24 28V18" />
      <path d="M20 22l4-4 4 4" />
    </svg>
  );
}
