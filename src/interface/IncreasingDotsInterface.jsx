import { useState } from "react";

export default function IncreasingDotsInterface() {
  const steps = [
    "Upload Sources",
    "Generate Sitemap",
    "Set Goals",
    "Try It Out",
    "DNS Verification",
    "Deploy Widget",
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleStepClick = (index) => {
    setSelectedIndex(index);
  };

  const progressRatio =
    steps.length > 1 ? selectedIndex / (steps.length - 1) : 0;

  return (
    <div className="w-full flex justify-center py-4">
      <div
        className="
          w-[1100px] h-[80px]
          rounded-[6px]
          border border-[#0F8AFD]
          bg-white
          px-8
          flex flex-col justify-center
        "
      >
        <div className="relative w-full pt-2">
          {/* Base grey line */}
          <div
            className="
              absolute
              left-[28px] right-[28px]
              top-[18px]
              h-[3px]
              bg-[#4B5563]
              rounded-full
            "
          />

          {/* Purple progress line */}
          <div
            className="
              absolute
              left-[28px] right-[28px]
              top-[18px]
              h-[3px]
              bg-[#4443E4]
              rounded-full
              origin-left
            "
            style={{ transform: `scaleX(${progressRatio})` }}
          />

          {/* Masks to hide line overshoot */}
          <div
            className="
              absolute left-0 top-[11px]
              h-[18px] w-[40px]
              bg-white
              pointer-events-none
            "
          />
          <div
            className="
              absolute right-0 top-[11px]
              h-[18px] w-[40px]
              bg-white
              pointer-events-none
            "
          />

          {/* Circles + labels */}
          <div className="relative z-10 flex justify-between items-start">
            {steps.map((label, index) => {
              const isActive = index <= selectedIndex;

              return (
                <div
                  key={label}
                  className="flex flex-col items-center gap-1"
                  style={{ minWidth: 0 }}
                >
                  {/* Circle */}
                  <button
                    type="button"
                    onClick={() => handleStepClick(index)}
                    className={`
                      flex items-center justify-center
                      w-7 h-7 rounded-full
                      transition-transform
                      ${
                        isActive
                          ? "border-[3px] border-[#4443E4] bg-white scale-105"
                          : "border-2 border-[#D1D5DB] bg-[#E5E7EB]"
                      }
                    `}
                  />

                  {/* Label */}
                  <span
                    className={
                      isActive
                        ? "text-[13px] text-[#111827] font-semibold text-center"
                        : "text-[13px] text-[#9CA3AF] font-normal text-center"
                    }
                  >
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
