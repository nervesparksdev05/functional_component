// src/screen2/RagSlackBotHome2.jsx
import ComplexHeaderInterface from "../interface/ComplexHeaderRagInterface";
import BackToDashBoardButton from "../buttons/BackToDashBoardButton";
import ExistingDocumentsTable from "../tables/ExtendedExistingDocumentsTable";

export default function RagSlackBotHome2() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#F5F7FB]">
      {/* Top header (logo + nav) */}
      <ComplexHeaderInterface />

      {/* Main content */}
      <main className="w-full flex flex-col items-center px-4">
        {/* Page content wrapper (matches card width / centering from design) */}
        <div className="w-full max-w-[1100px] mt-3 mb-4">
          {/* Back to Dashboard link */}
          <div className="mb-4">
            <BackToDashBoardButton />
          </div>

          {/* Existing Documents card (with search + pagination inside) */}
          <ExistingDocumentsTable />
        </div>
      </main>
    </div>
  );
}
