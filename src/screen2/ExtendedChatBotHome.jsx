// src/screen2/ExtendedChatBotHome.jsx
import ComplexHeaderInterface from "../interface/ComplexHeaderInterface.jsx";
import ExtendedRecentChatBotTable from "../Tables/ExtendedRecentChatBotTable.jsx";
import BackToDashBoardButton from "../buttons/BackToDashBoardButton.jsx";
import PreviousButton from "../buttons/PreviousButton.jsx";
import NextButton from "../buttons/NextButton.jsx";

export default function ExtendedChatBotHome({ onNext, onPrevious }) {
  return (
    <div className="w-full flex flex-col bg-[#F5F7FB]">
      {/* Top header */}
      <ComplexHeaderInterface />

      {/* Main content */}
      <main className="flex-1 w-full flex flex-col items-center px-4">
        <div className="w-full max-w-[1030px] mx-auto flex flex-col mt-3 mb-3">
          {/* Back to dashboard button (kept for UX) */}
          <BackToDashBoardButton />

          {/* Extended table */}
          <ExtendedRecentChatBotTable />
        </div>

        {/* Wizard navigation */}
        <div className="w-full max-w-[1030px] mt-auto mb-1 flex justify-between">
          <PreviousButton onClick={onPrevious} />
          <NextButton onClick={onNext} />
        </div>
      </main>
    </div>
  );
}
