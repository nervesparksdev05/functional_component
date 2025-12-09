import { useRef, useState } from "react";
import CloudUpload from "../assets/cloud-upload.svg";
import PinIcon from "../assets/pin-icon.svg";
import Radio from "../assets/radio.svg";        
import EmptyRadio from "../assets/empty-radio.svg"; 

export default function MultipleDocumentUploadInterface() {
  const [docType, setDocType] = useState("pdf");
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

  const handleUpload = () => {
    console.log("Upload and Process Document clicked");
  };

  return (
    <div className="w-full flex justify-center py-8">
      <section
        className="
          w-[1076px] h-[458px]
          rounded-[10px]
          border border-[#E5E7EB]
          bg-white
          px-8 pt-6 pb-6
          flex flex-col
        "
      >
        {/* Header + radio row */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={PinIcon} alt="Pin" className="w-6 h-6" />
            <h2 className="text-[20px] leading-[24px] font-semibold text-[#111827]">
              Upload Document
            </h2>
          </div>

          {/* Document type radios */}
          <div className="flex items-center gap-6 mb-6">
            {/* PDF */}
            <button
              type="button"
              onClick={() => setDocType("pdf")}
              className="flex items-center gap-2 cursor-pointer"
            >
              <img
                src={docType === "pdf" ? Radio : EmptyRadio}
                alt="PDF document radio"
                className="w-6 h-6"
              />
              <span className="text-[16px] text-[#111827]">PDF Document</span>
            </button>

            {/* Text */}
            <button
              type="button"
              onClick={() => setDocType("text")}
              className="flex items-center gap-2 cursor-pointer"
            >
              <img
                src={docType === "text" ? Radio : EmptyRadio}
                alt="Text document radio"
                className="w-6 h-6"
              />
              <span className="text-[16px] text-[#111827]">Text Document</span>
            </button>
          </div>
        </div>

        {/* Document ID input */}
        <div className="mb-6">
          <label className="block text-[13px] leading-[18px] text-[#4B5563] mb-1">
            Document ID (unique)
            <span className="text-[#EF4444]">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g., support-article-01"
            className="
              w-full h-[40px]
              rounded-[6px]
              bg-[#F5F6FA]
              border border-transparent
              px-3
              text-[14px] text-[#111827]
              placeholder:text-[#9CA3AF]
              outline-none
              focus:border-[#4443E4]
            "
          />
        </div>

        {/* Dropzone */}
        <div
          className="
            flex-1
            rounded-[16px]
            border border-dashed border-[#4443E4]
            bg-[#F5F6FF]
            flex flex-col items-center justify-center
            text-center
            mb-4
          "
        >
          <img src={CloudUpload} alt="Cloud upload" className="w-16 h-16" />

          <p className="mt-3 text-[14px] text-[#111827]">
            Drag &amp; drop your files here
          </p>
          <p className="text-[14px] text-[#6B7280] mt-1 mb-1">OR</p>

          <button
            type="button"
            onClick={handleBrowseClick}
            className="
              inline-flex items-center justify-center
              h-[34px] px-5
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
        </div>

        {/* Upload and Process button */}
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleUpload}
            className="
              inline-flex items-center justify-center
              h-[44px] px-6
              rounded-full
              bg-[#4443E4]
              text-white text-[14px] font-semibold
              cursor-pointer
            "
          >
            Upload and Process Document
          </button>
        </div>
      </section>
    </div>
  );
}
