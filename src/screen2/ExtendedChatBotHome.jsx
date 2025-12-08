// src/screens/ExtendedChatBotHome.jsx
import ComplexHeaderInterface from "../interface/ComplexHeaderInterface.jsx";
import ExtendedRecentChatBotTable from "../Tables/ExtendedRecentChatBotTable.jsx";
import BlueArrowIcon from "../assets/blue-arrow.svg";

export default function ExtendedChatBotHome() {
  return (
    <div className="w-full h-screen flex flex-col bg-[#F5F7FB]">
      {/* Top 2-part header */}
      <ComplexHeaderInterface />

      {/* Main content: kept tight so header + table fit in one screen */}
      <main className="flex-1 w-full flex justify-center">
        <div className="w-full max-w-[1030px] mx-auto flex flex-col mt-4 mb-4">
          {/* Back link */}
          <button
            type="button"
            className="mb-3 flex items-center gap-2 text-[#4443E4]"
          >
            <img
              src={BlueArrowIcon}
              alt="Back"
              className="w-5 h-5"
            />
            <span className="text-[26px] font-normal hover:underline">
              Back to Dashboard
            </span>
          </button>

          {/* Extended table card */}
          <ExtendedRecentChatBotTable />
        </div>
      </main>
    </div>
  );
}
