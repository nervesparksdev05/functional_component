// src/interface/StartUploadingDocumentInterface.jsx
import { Button } from "../ui/button";

export default function StartUploadingDocumentInterface({ onStartUpload }) {
  return (
    <div
      className="
        w-[600px] h-[173px]
        rounded-[16px]
        border border-[#4443E4]
        bg-[#4443E4]/5
        flex flex-col items-center justify-center
        text-center px-6
      "
    >
      {/* Heading */}
      <h2 className="text-[22px] leading-[28px] font-semibold text-[#111827] mb-1">
        Start Adding Documents
      </h2>

      {/* Subtext */}
      <p className="text-[14px] leading-[20px] text-[#374151] mb-5">
        Click on this button to start uploading documents
      </p>

      {/* Button */}
      <Button
        type="button"
        onClick={onStartUpload}
        variant="default"
        size="md"
        radius="xl"
        width="250px"
      >
        Start Uploading Documents
      </Button>
    </div>
  );
}
