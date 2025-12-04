import React, { useState } from "react";

export default function AddCustomGoalsInterface() {
  const [inputValue, setInputValue] = useState("");
  const [goals, setGoals] = useState([
    "Resolve Purchase-Inhibiting Questions",
    "Guide Product Discovery",
  ]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const trimmed = inputValue.trim();
      if (!trimmed) return;

      setGoals((prev) => [...prev, trimmed]);
      setInputValue("");
    }
  };

  const removeGoal = (indexToRemove) => {
    setGoals((prev) => prev.filter((_, i) => i !== indexToRemove));
  };

  return (
    <div className="w-full flex justify-center py-4">
      <div
        className="
          w-[418px] h-[138px]
          flex flex-col
        "
      >
        {/* Label: Add Custom Goals */}
        <label
          className="
            mb-1
            text-[15px] leading-[20px]
            font-medium
            text-[#111827]
            w-[256px]
          "
        >
          Add Custom Goals
        </label>

        {/* Text input */}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="e.g., Book a consultation"
          className="
            w-[335px] h-[35px]
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

        {/* Pills / goals list */}
        <div className="mt-3 flex flex-col gap-2">
          {goals.map((goal, index) => (
            <div
              key={`${goal}-${index}`}
              className="
                inline-flex items-center
                h-[26px]
                rounded-full
                bg-[#4443E4]
                text-white
                px-4
                text-[13px]
                self-start
              "
            >
              <span className="whitespace-nowrap leading-none">
                {goal}
              </span>

              <button
                type="button"
                onClick={() => removeGoal(index)}
                className="
                  ml-3
                  flex items-center justify-center
                  w-[16px] h-[16px]
                  rounded-full
                  hover:bg-[rgba(255,255,255,0.15)]
                  text-white
                  text-[12px]
                  leading-none
                  cursor-pointer
                "
                aria-label="Remove goal"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
