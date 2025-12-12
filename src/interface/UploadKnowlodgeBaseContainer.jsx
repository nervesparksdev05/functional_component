import DragAndDropInterface from "./DragAndDropInterface.jsx";
import ProductListInterface from "./ProductListInterface.jsx";

export default function UploadKnowlodgeBaseContainer({ onClose }) {
  return (
    <div
      className="
        w-[400px] h-[700px]
        rounded-[16px]
        flex items-center justify-center
      "
    >
      {/* Inner modal card */}
      <div
        className="
          w-[400px] h-[700px]
          bg-white
          rounded-[16px]
          border border-[#E5E7EB]
          px-5 py-4
          flex flex-col
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[16px] font-medium text-[#111827]">
            Upload Knowledge Base
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-[#F3F4F6]"
          
          >
            <span className="text-[36px] leading-none text-[#6B7280]">×</span>
          </button>
        </div>

        {/* Files label */}
        <div className="mb-2">
          <p className="text-[13px] font-medium text-[#4B5563]">Files</p>
        </div>

        {/* Drag & Drop / Browse area */}
        <div className="mb-4">
          <DragAndDropInterface />
        </div>

        {/* File list with spacing */}
        <div className="px-1 mt-1">
          <ProductListInterface />
        </div>

        {/* Small bottom spacer instead of big flex-1 */}
        <div className="mt-2" />
      </div>
    </div>
  );
}
