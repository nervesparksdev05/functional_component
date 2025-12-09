// src/screens/Home1.jsx
import { useState } from "react";

import ComplexHeaderInterface from "../interface/ComplexHeaderInterface.jsx";
import CreateNewChatBotInterface from "../interface/CreateNewChatBotInterface.jsx";
import RecentChatBotTable from "../Tables/RecentChatBotTable.jsx";
import ExtendedChatBotHome from "./ExtendedChatBotHome.jsx";


export default function Home1() {
  const [showExtended, setShowExtended] = useState(false);

  // When "Show All" is clicked, show the extended page instead
  if (showExtended) {
    return <ExtendedChatBotHome />;
  }

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

          {/* Show All button */}
          <button
            type="button"
            onClick={() => setShowExtended(true)}
            className="text-[14px] font-medium text-[#4443E4] hover:underline self-center"
          >
            Show All
          </button>
        </div>
      </main>
    </div>
  );
}
