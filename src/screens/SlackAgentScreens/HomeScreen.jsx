// src/screens/RagSlackBotScreen/HomeScreen.jsx
import { useState } from "react";

import Navbar from "../../components/Navbar.jsx";
import SlackIcon from "../../assets/slack.svg";
import { Button } from "../../components/ui/button.jsx";
import ExistingDocumentsTable from "../../components/tables/ExistingDocumentsTable.jsx";
import ExtendedTable from "./ExtendedTable.jsx";
import UploadDocsScreen from "./UploadDocsScreen.jsx";

export default function HomeScreen() {
  const [showAll, setShowAll] = useState(false);
  const [showUploadPage, setShowUploadPage] = useState(false);

  // Upload page
  if (showUploadPage) {
    return <UploadDocsScreen />;
  }

  // Extended table page
  if (showAll) {
    return <ExtendedTable />;
  }

  const documents = [
    {
      id: 1,
      name: "Tech requirements.pdf",
      size: "200 KB",
      dateUploaded: "Jan 4, 2022",
      uploadedBy: "Olivia Rhye",
      type: "pdf",
    },
    {
      id: 2,
      name: "Dashboard screenshot.png",
      size: "720 KB",
      dateUploaded: "Jan 4, 2022",
      uploadedBy: "Phoenix Baker",
      type: "png",
    },
    {
      id: 3,
      name: "General information.txt",
      size: "16 KB",
      dateUploaded: "Jan 2, 2022",
      uploadedBy: "Lana Steiner",
      type: "txt",
    },
  ];

  return (
    <div className="w-full flex flex-col bg-[#F5F7FB]">
      {/* Top header (logo + nav) */}
      <Navbar 
        bottomBarIcon={SlackIcon}
        bottomBarText="RAG Slack Bot Manager"
        bottomBarTextSize="text-[20px]"
      />

      {/* Main content */}
      <main className="flex-1 w-full flex justify-center px-4">
        {/* Fixed content width like design */}
        <div className="w-[1038px] mt-4 mb-2">
          {/* Top row: Start Adding Documents (left) + System Overview (right) */}
          <div className="w-full flex items-stretch gap-4 mb-6">
            {/* Start Adding Documents */}
            <div
              className="
                w-[600px] h-[173px]
                rounded-[16px]
                border border-[#4443E4]
                bg-[#4443E4]/5
                flex flex-col items-center justify-center
                text-center px-6
              "
            >
              <h2 className="text-[22px] leading-[28px] font-semibold text-[#111827] mb-1">
                Start Adding Documents
              </h2>
              <p className="text-[14px] leading-[20px] text-[#374151] mb-5">
                Click on this button to start uploading documents
              </p>
              <Button
                type="button"
                onClick={() => setShowUploadPage(true)}
                variant="default"
                size="md"
                radius="xl"
                width="250px"
              >
                Start Uploading Documents
              </Button>
            </div>
            {/* System Overview */}
            <section
              className="
                w-[425px] h-[173px]
                rounded-[6px]
                border border-[#4443E4]
                bg-[#4443E4]
                text-white
                px-6 pt-5 pb-4
                flex flex-col
                cursor-pointer
              "
            >
              <h2 className="text-[30px] leading-[24px] font-semibold tracking-[-0.04em] mb-4">
                System Overview
              </h2>
              <ul className="list-disc list-inside space-y-2 text-[22px] leading-[30px]">
                <li>Total Documents: N/A</li>
                <li>LLM Model: gpt-3.5-turbo</li>
              </ul>
            </section>
          </div>

          {/* Existing documents table */}
          <ExistingDocumentsTable documents={documents} />

          {/* Show All button centered under the table */}
          <div className="mt-4 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="text-[14px] font-medium text-[#4443E4] "
            >
              Show All
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
