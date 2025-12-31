// src/screens/NavbarDesktopScreen/CustomGoalsHome.jsx
import { useState } from "react";

import Navbar from "../../components/Navbar.jsx";
import { Button } from "../../components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import BlueArrowIcon from "../../assets/blue-arrow.svg";

export default function CustomGoalsHome({ onNext, onPrevious }) {
  const steps = [
    "Upload Sources",
    "Generate Sitemap",
    "Set Goals",
    "Try It Out",
    "DNS Verification",
    "Deploy Widget",
  ];

  const [selectedIndex, setSelectedIndex] = useState(3);

  const handleStepClick = (index) => {
    setSelectedIndex(index);
  };

  const progressRatio =
    steps.length > 1 ? selectedIndex / (steps.length - 1) : 0;

  const suggestedGoals = [
    "Generate Sales Leads",
    "Book a demo",
    "Troubleshoot Issues",
    "Process Simple Transactions",
  ];

  const [selectedSuggested, setSelectedSuggested] = useState([]);

  // ⬇️ customGoals now starts empty (no default chips)
  const [customGoals, setCustomGoals] = useState([]);

  const toggleSuggested = (goal) => {
    setSelectedSuggested((prev) =>
      prev.includes(goal) ? prev.filter((g) => g !== goal) : [...prev, goal]
    );
  };

  const handleAddCustomGoal = (goal) => {
    setCustomGoals((prev) => [...prev, goal]);
  };

  const handleRemoveCustomGoal = (indexToRemove) => {
    setCustomGoals((prev) => prev.filter((_, i) => i !== indexToRemove));
  };

  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    handleAddCustomGoal(trimmed);
    setInputValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAdd();
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#F5F7FB]">
      {/* Header */}
      <Navbar />

      {/* MAIN */}
      <main className="flex-1 w-full flex flex-col items-center px-4">
        {/* Back to Dashboard */}
        <div className="w-full max-w-[1030px] mt-6 mb-4 flex justify-start">
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

        {/* CENTER CONTENT */}
        <section className="w-full max-w-[1030px] mt-3 flex flex-col items-center text-center">
          {/* Description */}
          <p className="text-[14px] text-[#0e1111] font-semibold leading-[20px] max-w-[800px]">
            Select suggested goals or add multiple custom goals that your bot
            should achieve.
          </p>

          {/* Suggested Goals */}
          <div className="w-full max-w-[850px] mt-5 text-left">
            <h2 className="text-[16px] font-medium text-[#111827] mb-3">
              Suggested Goals
            </h2>

            <div className="flex flex-wrap gap-3">
              {suggestedGoals.map((goal) => {
                const isActive = selectedSuggested.includes(goal);
                return (
                  <button
                    key={goal}
                    type="button"
                    onClick={() => toggleSuggested(goal)}
                    className={`
                      px-4 py-[6px] rounded-[20px] text-[14px] font-medium
                      border cursor-pointer transition
                      ${
                        isActive
                          ? "bg-[#4443E4] text-white border-[#4443E4]"
                          : "bg-[#EEF0FF] text-[#4443E4] border-[#D7DAFF]"
                      }
                    `}
                  >
                    {goal}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Add Custom Goals row + chips */}
          <div className="w-full max-w-[850px] mt-5 text-left">
            <div className="w-full flex flex-col">
              <label className="mb-2 text-[15px] leading-[20px] font-medium text-[#111827]">
                Add Custom Goals
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="e.g., Book a consultation"
                  className="
                    flex-1
                    h-[35px]
                    rounded-[6px]
                    border border-[#E5E7EB]
                    px-3
                    text-[13px]
                    text-[#111827]
                    placeholder:text-[#9CA3AF]
                    outline-none
                    focus:border-[#4443E4]
                  "
                />
                <Button
                  onClick={handleAdd}
                  variant="default"
                  size="default"
                  radius="default"
                  width="68px"
                >
                  Add
                </Button>
              </div>
              {customGoals.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {customGoals.map((goal, index) => (
                    <div
                      key={`${goal}-${index}`}
                      className="
                        inline-flex items-center
                        px-4 h-[26px]
                        rounded-full
                        bg-[#4443E4]
                        text-white
                        text-[13px]
                      "
                    >
                      <span className="whitespace-nowrap leading-none">
                        {goal}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleRemoveCustomGoal(index)}
                        className="
                          ml-3
                          flex items-center justify-center
                          w-[16px] h-[16px]
                          rounded-full
                          hover:bg-[rgba(255,255,255,0.15)]
                          text-white
                          text-[22px]
                          leading-none
                          cursor-pointer
                        "
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Enter Greeting Message */}
          <div className="w-full max-w-[850px] mt-5 text-left">
            <div className="w-full flex flex-col">
              <label className="text-[16px] font-medium leading-[20px] text-[#171A1F] mb-2">
                Enter Greeting Message
              </label>
              <textarea
                placeholder="Enter Message..."
                className="
                  w-[811px]
                  h-[84px]
                  border
                  border-[#D1D5DB]
                  rounded-[6px]
                  outline-none
                  text-[16px]
                  font-normal
                  text-[#171A1F]
                  px-3
                  py-2
                  resize-none
                  placeholder:text-[#9CA3AF]
                "
              />
            </div>
          </div>
        </section>

        {/* Bottom navigation */}
        <div className="w-full max-w-[1030px] mt-4 mb-6 flex justify-between">
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
            rightIcon={<ArrowRight size={16} className="text-white" />}
          >
            Next
          </Button>
        </div>
      </main>
    </div>
  );
}
