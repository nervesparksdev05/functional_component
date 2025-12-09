// src/screen2/RagSlackBotHome.jsx
import { useState } from "react";

import ComplexHeaderInterface from "../interface/ComplexHeaderRagInterface";
import StartUploadingDocumentInterface from "../interface/StartUploadingDocumentInterface";
import SmallSystemviewInterface from "../interface/SmallSytemOverviewInterface";
import ExistingDocumentsTable from "../tables/ExistingDocumentsTable";
import RagSlackBotHome2 from "./RagSlackBotHome2";
import RagSlackBotHome3 from "./RagSlackBotHome3";

export default function RagSlackBotHome() {
  const [showAll, setShowAll] = useState(false);
  const [showUploadPage, setShowUploadPage] = useState(false);

  // Upload page
  if (showUploadPage) {
    return <RagSlackBotHome3 />;
  }

  // Extended table page
  if (showAll) {
    return <RagSlackBotHome2 />;
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
    <div className="w-full min-h-screen flex flex-col bg-[#F5F7FB]">
      {/* Top header (logo + nav) */}
      <ComplexHeaderInterface />

      {/* Main content */}
      <main className="flex-1 w-full flex justify-center px-4">
        {/* Fixed content width like design */}
        <div className="w-[1038px] mt-6 mb-10">
          {/* Top row: Start Adding Documents (left) + System Overview (right) */}
          <div className="w-full flex items-stretch gap-4 mb-6">
            <StartUploadingDocumentInterface
              onStartUpload={() => setShowUploadPage(true)}
            />
            <SmallSystemviewInterface />
          </div>

          {/* Existing documents table */}
          <ExistingDocumentsTable documents={documents} />

          {/* Show All button centered under the table */}
          <div className="mt-4 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="text-[14px] font-medium text-[#4443E4] hover:underline"
            >
              Show All
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
