// src/screen2/CustomGoalsHome.jsx
import { useState } from "react";

import ComplexHeaderInterface from "../interface/ComplexHeaderInterface.jsx";
import BackToDashBoardButton from "../buttons/BackToDashBoardButton.jsx";
import IncreasingDotsInterface from "../interface/IncreasingDotsInterface.jsx";
import AddCustomGoalsInterface from "../interface/AddCustomGoalsInterface.jsx";
import EnterGreetingMessageInterface from "../interface/EnterGreetingMessageInterface.jsx";
import PreviousButton from "../buttons/PreviousButton.jsx";
import NextButton from "../buttons/NextButton.jsx";

export default function CustomGoalsHome({ onNext, onPrevious }) {
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

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#F5F7FB]">
      {/* Header */}
      <ComplexHeaderInterface />

      {/* MAIN */}
      <main className="flex-1 w-full flex flex-col items-center px-4">
        {/* Back to Dashboard */}
        <div className="w-full max-w-[1030px] mt-6 mb-4">
          <BackToDashBoardButton />
        </div>

        {/* Stepper */}
        <div className="w-full max-w-[1030px]">
          <IncreasingDotsInterface />
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
            <AddCustomGoalsInterface
              customGoals={customGoals}
              onAddGoal={handleAddCustomGoal}
              onRemoveGoal={handleRemoveCustomGoal}
            />
          </div>

          {/* Enter Greeting Message */}
          <div className="w-full max-w-[850px] mt-5 text-left">
            <EnterGreetingMessageInterface />
          </div>
        </section>

        {/* Bottom navigation */}
        <div className="w-full max-w-[1030px] mt-4 mb-6 flex justify-between">
          <PreviousButton onClick={onPrevious} />
          <NextButton onClick={onNext} />
        </div>
      </main>
    </div>
  );
}
