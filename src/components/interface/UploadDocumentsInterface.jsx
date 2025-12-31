import { useRef } from "react";
import CloudUpload from "../../assets/cloud-upload.svg";

export default function UploadDocumentsInterface() {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFilesSelected = (event) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    
    console.log("Selected files:", files);
    alert(`${files.length} file(s) selected for upload.`);
  };

  return (
    <div className="w-full flex justify-center py-6">
      <section
        className="
          w-[600px] h-[235px]
          rounded-[16px]
          border border-dashed border-[#4443E4]
          bg-[#F4F4FF]
          flex flex-col items-center justify-center
          text-center px-6
        "
      >
        {/* Upload icon */}
        <div className="mb-4">
          {/* Cloud icon (imported SVG) */}
        <img
          src={CloudUpload}
          alt="Cloud upload"
          className="w-9 h-9"
        />

        </div>

        {/* Title */}
        <h2 className="text-[22px] leading-[28px] font-semibold text-[#111827] mb-2">
          Upload Documents
        </h2>

        {/* Subtitle */}
        <p className="text-[14px] leading-[20px] text-[#374151] mb-6">
          Click on this button to start uploading documents
        </p>

        {/* Primary button */}
        <button
          type="button"
          onClick={handleButtonClick}
          className="
            inline-flex items-center justify-center
            w-[260px] h-[44px]
            rounded-full
            bg-[#4443E4]
            text-white text-[14px] font-semibold
            shadow-sm
            mb-3
            cursor-pointer
          "
        >
          Start Uploading Documents
        </button>

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept=".pdf,.doc,.docx,.txt"
          className="hidden"
          onChange={handleFilesSelected}
        />

        {/* Supported formats */}
        <p className="text-[12px] leading-[16px] text-[#6B7280]">
          Supported file formats: PDF, DOCX, TXT
        </p>
      </section>
    </div>
  );
}


