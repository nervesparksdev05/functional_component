export default function TickDotInterface() {
  const steps = [
    "Upload Sources",
    "Generate Sitemap",
    "Set Goals",
    "Try It Out",
    "DNS Verification",
    "Deploy Widget",
  ];

  return (
    <div className="w-full flex justify-center py-4">
      <div
        className="
          w-[1100px] h-[80px]
          rounded-[6px]
          bg-white
          px-8
          flex flex-col justify-center
        "
      >
        <div className="relative w-full pt-2">
          {/* Base line (light grey) */}
          <div
            className="
              absolute
              left-[28px] right-[28px]
              top-[18px]
              h-[3px]
              bg-[#D1D5DB]
              rounded-full
            "
          />

          {/* Completed progress line (full purple) */}
          <div
            className="
              absolute
              left-[28px] right-[28px]
              top-[18px]
              h-[3px]
              bg-[#4443E4]
              rounded-full
            "
          />

          {/* Masks to hide line overshoot at the ends */}
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
            {steps.map((label) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1"
                style={{ minWidth: 0 }}
              >
                {/* Circle with tick */}
                <div
                  className="
                    flex items-center justify-center
                    w-7 h-7 rounded-full
                    border-[3px] border-[#4443E4]
                    bg-white
                  "
                >
                  {/* Tick icon (small inline SVG) */}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 8.5L6.2 11.5L13 4.5"
                      stroke="#4443E4"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Label */}
                <span className="text-[13px] text-[#111827] font-semibold text-center">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
