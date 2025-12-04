// AccordianTitleInterface.jsx
import { useState } from "react";

export default function AccordianTitleInterface() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className="w-full flex justify-center py-6">
      <div
        className="
          w-[710px]
          rounded-[10px]
          border border-[#D5E0FF]
          bg-white
          px-6 py-4
        "
        style={{
          fontFamily:
            '"IBM Plex Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        {/* Header row */}
        <button
          type="button"
          onClick={toggleOpen}
          className="w-full flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            {/* Icon square */}
            <div className="w-9 h-9 rounded-[10px] bg-[#E6EDFF] flex items-center justify-center">
              <BriefcaseIcon />
            </div>

            <span className="text-[18px] leading-[24px] text-[#111827] font-medium">
              Accordion Title
            </span>
          </div>

          {/* Arrow icon (small triangle) */}
          <span
            className={`
              inline-flex items-center justify-center
              w-6 h-6
              text-[#1E3A8A]
              transition-transform duration-200
              ${isOpen ? "rotate-180" : ""}
            `}
          >
            <TriangleIcon />
          </span>
        </button>

        {/* Expanded content */}
        {isOpen && (
          <div
            className="
              mt-5
              rounded-[10px]
              bg-[#F4F3FF]
              h-[320px]
              flex items-center justify-center
            "
          >
            <div className="text-center text-[#3538CD] text-[13px] leading-[18px]">
              {/* Row with arrows + text */}
              <div className="flex items-center justify-center gap-2 mb-1">
                <SlotArrowRight /> {/* looks like » on the left side */}
                <span className="font-medium">This is a slot</span>
                <SlotArrowLeft />  {/* looks like « on the right side */}
              </div>

              <a
                href="#"
                className="underline text-[12px]"
                onClick={(e) => e.preventDefault()}
              >
                Learn more about slots
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* --- Icons --- */

function BriefcaseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5"
      fill="none"
      stroke="#1D4ED8"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="8" width="16" height="11" rx="2" />
      <path d="M9 8V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" />
      <path d="M4 13h16" />
    </svg>
  );
}

function TriangleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-[14px] h-[14px]"   // bigger than before
      fill="#1E3A8A"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* slightly larger triangle shape */}
      <path d="M6 9l6 7 6-7H6z" />
    </svg>
  );
}


/* --- Slot arrow icons (14x14 like the image) --- */

/* --- Slot arrow icons (14x14, bold, slightly separated) --- */

function SlotArrowRight() {
  // bold » (double arrow pointing right, with spacing)
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-[14px] h-[14px]"
      fill="none"
      stroke="#3538CD"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* left chevron */}
      <polyline points="6 5 11 11 6 17" />
      {/* right chevron, shifted a bit right for separation */}
      <polyline points="13 5 18 11 13 17" />
    </svg>
  );
}

function SlotArrowLeft() {
  // bold « (double arrow pointing left, with spacing)
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-[14px] h-[14px]"
      fill="none"
      stroke="#3538CD"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* right chevron */}
      <polyline points="18 5 13 11 18 17" />
      {/* left chevron, shifted a bit left for separation */}
      <polyline points="12 5 7 11 12 17" />
    </svg>
  );
}

