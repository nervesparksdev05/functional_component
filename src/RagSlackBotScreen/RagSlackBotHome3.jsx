// src/screen2/RagSlackBotHome3.jsx
import ComplexHeaderRagInterface from "../components/interface/ComplexHeaderRagInterface";
import MultipleDocumentUploadInterface from "../components/interface/UploadMultipleDocumentInterface";
import ExistingDocumentsTable from "../tables/ExistingDocumentsTable";
import { Button } from "../components/ui/button";
import BlueArrowIcon from "../assets/blue-arrow.svg";

export default function RagSlackBotHome3() {
  // same demo data as the design
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
      <ComplexHeaderRagInterface />

      {/* Main content */}
      <main className="flex-1 w-full flex justify-center px-4">
        {/* Fixed content width like design */}
        <div className="w-[1038px] mt-3 ">
          {/* Back to Dashboard link */}
          <div>
            <Button
              type="button"
              variant="ghost"
              size="default"
              radius="default"
              leftIcon={<img src={BlueArrowIcon} alt="Back" className="w-6 h-6" />}
              className="text-[21px] text-[#4443E4] font-normal"
            >
              Back to Dashboard
            </Button>
          </div>

          {/* Upload card */}
          <MultipleDocumentUploadInterface />

          {/* Existing documents card */}
          <div >
            <ExistingDocumentsTable documents={documents} />
          </div>

          {/* Show All link */}
          <div className="mt-3 flex justify-center">
            <button
              type="button"
              className="text-[14px] mb-2 font-medium text-[#2828b5] hover:underline"
            >
              Show All
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
