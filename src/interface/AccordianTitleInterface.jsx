import { useState } from "react";
import SuitCase from "../assets/suitcase.svg";

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
      >
        {/* Header row */}
        <button
          type="button"
          onClick={toggleOpen}
          className="w-full flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <img
              src={SuitCase}
              alt="Suitcase"
              className="w-8 h-8 flex-shrink-0"
            />

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
              <div className="flex items-center justify-center gap-2 mb-1">
                <SlotArrowRight />
                <span className="font-medium text-[#392494]">This is a slot</span>
                <SlotArrowLeft />
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


function TriangleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-[24px] h-[24px]"
      fill="#0f1010ff"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 9l6 7 6-7H6z" />
    </svg>
  );
}



function SlotArrowRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-[14px] h-[14px]"
      fill="none"
      stroke="#3a3b74ff"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 5 11 11 6 17" />
      <polyline points="13 5 18 11 13 17" />
    </svg>
  );
}

function SlotArrowLeft() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-[14px] h-[14px]"
      fill="none"
      stroke="#3a3b74ff"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="18 5 13 11 18 17" />
      <polyline points="12 5 7 11 12 17" />
    </svg>
  );
}
