// src/screens/ExtendedChatBotHome.jsx
import ComplexHeaderInterface from "../interface/ComplexHeaderInterface.jsx";
import ExtendedRecentChatBotTable from "../Tables/ExtendedRecentChatBotTable.jsx";
import BackToDashBoardButton from "../buttons/BackToDashBoardButton.jsx";

export default function ExtendedChatBotHome() {
  return (
    <div className="w-full h-screen flex flex-col bg-[#F5F7FB]">
      {/* Top header */}
      <ComplexHeaderInterface />

      {/* Main content */}
      <main className="flex-1 w-full flex justify-center px-4">
        <div className="w-full max-w-[1030px] mx-auto flex flex-col mt-4 mb-4">

          {/* Back to dashboard button */}
          <BackToDashBoardButton />

          {/* Extended table */}
          <ExtendedRecentChatBotTable />
        </div>
      </main>
    </div>
  );
}
