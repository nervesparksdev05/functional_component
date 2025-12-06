import { useState } from "react";
import WordIcon from "../assets/word-icon.svg";
import TrashIcon from "../assets/trash-icon.svg";

const DEFAULT_FILES = [
  { id: 1, name: "Product_Roadmap_Q3_2025", type: "PDF" },
  { id: 2, name: "AI_Module_Integration_Guide", type: "DOCX" },
  { id: 3, name: "API_Reference_v2.4", type: "MP4" },
  // extra dummy files
  { id: 4, name: "Pricing_Sheet_2025", type: "XLSX" },
  { id: 5, name: "Onboarding_Playbook", type: "PDF" },
  { id: 6, name: "Sales_Enablement_Deck", type: "PPTX" },
  { id: 7, name: "Customer_FAQ_v1.2", type: "DOCX" },
];

const MAX_ROWS_BEFORE_SCROLL = 7;

export default function ProductListInterface({ files = DEFAULT_FILES }) {
  const [showAll, setShowAll] = useState(false);

  // When collapsed → only first 3
  // When expanded → all files (but container height is capped)
  const visibleFiles = showAll ? files : files.slice(0, 3);

  const shouldScroll = showAll && files.length > MAX_ROWS_BEFORE_SCROLL;

  return (
    <div
      className="
        w-[360px] min-h-[188px]
        bg-white
        rounded-[12px]
        border border-[#E5E7EB]
        shadow-sm
        p-4
        flex flex-col
      "
    >
      {/* Files list */}
      <div
        className={`
          flex-1 space-y-3
          ${shouldScroll ? "max-h-[260px] overflow-y-auto pr-1" : ""}
        `}
      >
        {visibleFiles.map((file) => (
          <div
            key={file.id}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3 min-w-0">
              {/* File icon */}
              <div className="w-9 h-9 rounded-[10px] bg-[#EEF0FF] flex items-center justify-center flex-shrink-0">
                <img
                  src={WordIcon}
                  alt={`${file.type} file icon`}
                  className="w-4 h-4"
                />
              </div>

              {/* File name + type */}
              <div className="flex flex-col min-w-0">
                <span className="text-[13px] leading-4 text-[#111827] truncate">
                  {file.name}
                </span>
                <span className="text-[11px] leading-[14px] text-[#9CA3AF] uppercase">
                  {file.type}
                </span>
              </div>
            </div>

            {/* Delete icon */}
            <button
              type="button"
              className="p-1 rounded-full hover:bg-[#F3F4F6] flex-shrink-0"
              aria-label={`Remove ${file.name}`}
            >
              <img src={TrashIcon} alt="" className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>

      {/* View all / View less link */}
      <button
        type="button"
        onClick={() => setShowAll((prev) => !prev)}
        className="mt-2 self-end text-[12px] font-medium text-[#4443E4] hover:underline"
      >
        {showAll ? "View Less" : "View All Files"}
      </button>
    </div>
  );
}
