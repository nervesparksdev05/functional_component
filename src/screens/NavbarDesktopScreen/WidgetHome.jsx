// src/screens/NavbarDesktopScreen/WidgetHome.jsx
import Navbar from "../../components/Navbar.jsx";
import { Button } from "../../components/ui/button";
import { ArrowLeft } from "lucide-react";
import BlueArrowIcon from "../../assets/blue-arrow.svg";
import { useState, useRef } from "react";
import BotIcon from "../../assets/bot.svg";

export default function WidgetHome({ onNext, onPrevious }) {
  const steps = [
    "Upload Sources",
    "Generate Sitemap",
    "Set Goals",
    "Try It Out",
    "DNS Verification",
    "Deploy Widget",
  ];

  const [selectedIndex, setSelectedIndex] = useState(5);

  const handleStepClick = (index) => {
    setSelectedIndex(index);
  };

  const progressRatio =
    steps.length > 1 ? selectedIndex / (steps.length - 1) : 0;

  const [color, setColor] = useState("#F3A822");
  const [position, setPosition] = useState("bottomRight");
  const colorInputRef = useRef(null);

  const handleCustomizeClick = () => {
    if (colorInputRef.current) {
      colorInputRef.current.click();
    }
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const options = [
    { key: "topLeft", label: "Top Left" },
    { key: "bottomLeft", label: "Bottom Left" },
    { key: "topRight", label: "Top Right" },
    { key: "bottomRight", label: "Bottom Right" },
  ];

  const iconPositionStyles = {
    topLeft: { top: "10px", left: "10px" },
    bottomLeft: { top: "132px", left: "10px" },
    topRight: { top: "10px", left: "202px" },
    bottomRight: { top: "132px", left: "202px" },
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#F5F7FB]">
      {/* Top header */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1 w-full flex flex-col items-center px-4">
        {/* Back to Dashboard */}
        <div className="w-full max-w-[1030px] mt-6 mb-4">
          <Button
            type="button"
            variant="ghost"
            size="default"
            radius="default"
            leftIcon={<img src={BlueArrowIcon} alt="Back" className="w-6 h-6" />}
            className="text-[21px] text-[#4443E4] font-normal"
          >
            Back to Dashboard
          </Button>
        </div>

        {/* Stepper */}
        <div className="w-full max-w-[1030px]">
          <div className="w-full flex justify-center py-4 -mt-4">
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
        </div>

        {/* Center description */}
        <section className="w-full max-w-[1030px] mt-2 flex flex-col items-center text-center">
          <p className="text-[14px] leading-[20px] text-[#111827] max-w-[700px] font-medium">
            Generate the widget code and configure where it appears on your
            website.
          </p>
        </section>

        {/* Main two-column layout */}
        <section className="w-full max-w-[1030px] mt-10 flex justify-between">
          {/* LEFT: Widget Color */}
          <div className="flex flex-col">
            <div className="w-full flex justify-center py-4">
              <div className="w-[490px] h-[100px] flex flex-col">
                <div className="ml-[18px] mb-2">
                  <span className="text-[18px] leading-[20px] font-medium text-[#171A1F]">
                    Widget Color
                  </span>
                </div>
                <div className="relative flex items-center gap-4 ml-[14px]">
                  <div
                    className="w-[67px] h-[62px] rounded-[100px]"
                    style={{ backgroundColor: color }}
                  />
                  <button
                    type="button"
                    onClick={handleCustomizeClick}
                    className="
                      inline-flex items-center justify-center
                      w-[155px] h-[36px]
                      rounded-[6px]
                      bg-[#4443E4]
                      text-white
                      text-[14px] leading-[22px] font-normal
                      cursor-pointer
                    "
                  >
                    Customize Color
                  </button>
                  <input
                    ref={colorInputRef}
                    type="color"
                    value={color}
                    onChange={handleColorChange}
                    className="
                      absolute
                      left-[250px]
                      top-[-2px]
                      w-[155px] h-[36px]
                      opacity-0
                      cursor-pointer
                    "
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Widget Position */}
          <div className="flex flex-col items-start">
            <div className="w-full flex justify-center py-4">
              <div
                className="
                  w-[438px] h-[198px]
                  flex items-start
                "
              >
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
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span className="text-[12px] font-medium text-[#111827]">
                        Desktop Screen
                      </span>
                    </div>
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
          </div>
        </section>

        {/* Bottom navigation */}
        <div className="w-full max-w-[1030px] mt-16 mb-3 flex items-center justify-between">
          <Button
            onClick={onPrevious}
            variant="outline"
            size="default"
            radius="md"
            width="112px"
            leftIcon={<ArrowLeft size={16} className="text-[#374151]" />}
            className="text-[13px] font-medium text-[#374151] hover:bg-[#F3F4F6]"
          >
            Previous
          </Button>
          <Button
            onClick={onNext}
            variant="default"
            size="default"
            radius="md"
            width="87px"
          >
            Next
          </Button>
        </div>
      </main>
    </div>
  );
}
