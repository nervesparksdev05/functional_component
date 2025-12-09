import { useState } from "react";
import BotIcon from "../assets/bot.svg";

export default function WidgetPositionInterface() {
  const [position, setPosition] = useState("bottomRight");

  const options = [
    { key: "topLeft", label: "Top Left" },
    { key: "bottomLeft", label: "Bottom Left" },
    { key: "topRight", label: "Top Right" },
    { key: "bottomRight", label: "Bottom Right" },
  ];

  // Absolute positions for the icon inside 240x170 box
  const iconPositionStyles = {
    topLeft: { top: "10px", left: "10px" },
    bottomLeft: { top: "132px", left: "10px" },
    topRight: { top: "10px", left: "202px" },
    bottomRight: { top: "132px", left: "202px" },
  };

  return (
    <div className="w-full flex justify-center py-4">
      <div
        className="
          w-[438px] h-[198px]
          flex items-start
        "
        style={{
          fontFamily:
            '"IBM Plex Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        {/* Left: label + options */}
        <div className="flex flex-col gap-3">
          <h3 className="text-[18px] font-medium text-[#111827]">
            Widget Position
          </h3>
          <div className="flex flex-col gap-2">
            {options.map((opt) => {
              const isSelected = position === opt.key;
              return (
                <button
                  key={opt.key}
                  type="button"
                  onClick={() => setPosition(opt.key)}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  {/* Custom radio circle */}
                  <span
                    className={`
                      inline-flex items-center justify-center
                      w-[18px] h-[18px] rounded-full border
                      ${
                        isSelected
                          ? "border-[#4443E4] bg-white"
                          : "border-[#D1D5DB] bg-white"
                      }
                    `}
                  >
                    {isSelected && (
                      <span className="w-[10px] h-[10px] rounded-full bg-[#4443E4]" />
                    )}
                  </span>
                  {/* Label */}
                  <span
                    className={
                      isSelected
                        ? "text-[14px] text-[#111827] font-semibold"
                        : "text-[14px] text-[#4B5563] font-normal"
                    }
                  >
                    {opt.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: preview box */}
        <div className="ml-8">
          <div
            className="
              relative
              w-[240px] h-[170px]
              border border-[#D1D5DB]
              rounded-[5px]
              bg-white
            "
          >
            {/* Centered label */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-[12px] font-medium text-[#111827]">
                Desktop Screen
              </span>
            </div>

            {/* Chatbot icon */}
            <div
              className="
                absolute
                transition-all duration-1000 ease-in-out
              "
              style={iconPositionStyles[position]}
            >
              <img src={BotIcon} alt="Chatbot widget" className="w-7 h-7" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
