// src/buttons/StartUploadingDocumentButton.jsx
export default function StartUploadingDocumentButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        inline-flex items-center justify-center
        w-[250px] h-[40px]
        rounded-[18px]
        bg-[#4443E4]
        text-white
        text-[14px] leading-[22px] font-medium
        cursor-pointer
      "
    >
      Start Uploading Documents
    </button>
  );
}
