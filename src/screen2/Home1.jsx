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
    // or if you later want a back button to return here:
    // return <ExtendedChatBotHome onBack={() => setShowExtended(false)} />;
  }

  return (
    <div className="w-full h-screen flex flex-col bg-[#F5F7FB]">
      {/* Top 2-part header */}
      <ComplexHeaderInterface />

      {/* Main content – compact so everything fits in one screen */}
      <main className="flex-1 w-full flex justify-center">
        <div className="w-full max-w-[1030px] flex flex-col items-center gap-5 pt-4 pb-6">
          <CreateNewChatBotInterface />
          <RecentChatBotTable />

          <button
            type="button"
            onClick={() => setShowExtended(true)}
            className="text-[14px] font-medium text-[#4443E4] hover:underline"
          >
            Show All
          </button>
        </div>
      </main>
    </div>
  );
}
