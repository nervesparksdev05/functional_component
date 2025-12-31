// src/screen2/RagSlackBotHome2.jsx
import ComplexHeaderInterface from "../interface/ComplexHeaderRagInterface";
import { Button } from "../components/ui/button";
import BlueArrowIcon from "../assets/blue-arrow.svg";
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

          {/* Existing Documents card (with search + pagination inside) */}
          <ExistingDocumentsTable />
        </div>
      </main>
    </div>
  );
}
