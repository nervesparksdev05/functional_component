import { useState } from "react";
import AddButton from "../buttons/AddButton.jsx";

export default function AddCustomGoalsInterface({
  customGoals = [],
  onAddGoal,
  onRemoveGoal,
}) {
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    if (onAddGoal) onAddGoal(trimmed);
    setInputValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAdd();
    }
  };

  return (
    <div className="w-full flex flex-col">
      {/* Label */}
      <label
        className="
          mb-2
          text-[15px] leading-[20px]
          font-medium
          text-[#111827]
        "
      >
        Add Custom Goals
      </label>

      {/* Input + Add button in one row */}
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

        {/* Add button aligned to the right */}
        <AddButton onClick={handleAdd} />
      </div>

      {/* Custom goal chips */}
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
                onClick={() => onRemoveGoal && onRemoveGoal(index)}
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
  );
}
