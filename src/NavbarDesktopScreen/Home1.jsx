// src/screen2/Home1.jsx
import ComplexHeaderInterface from "../components/interface/ComplexHeaderInterface.jsx";
import CreateNewChatBotInterface from "../components/interface/CreateNewChatBotInterface.jsx";
import RecentChatBotTable from "../components/tables/RecentChatBotTable.jsx";

export default function Home1({ onNext }) {
  return (
    <div className="w-full h-screen flex flex-col bg-[#F5F7FB]">
      {/* Top header */}
      <ComplexHeaderInterface />

      {/* Main content */}
      <main className="flex-1 w-full flex justify-center px-4">
        <div className="w-full max-w-[1030px] flex flex-col gap-5 pt-6 pb-6">
          {/* Main components */}
          <CreateNewChatBotInterface />

          <RecentChatBotTable />

          {/* Show All -> go to ExtendedChatBotHome step */}
          <button
            type="button"
            onClick={onNext}
            className="text-[14px] font-medium text-[#4443E4] hover:underline self-center"
          >
            Show All
          </button>
        </div>
      </main>
    </div>
  );
}
