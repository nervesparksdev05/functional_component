// src/screens/NavbarDesktopScreen/ExtendedChatBotHome.jsx
import ComplexHeaderInterface from "../../components/interface/ComplexHeaderInterface.jsx";
import ExtendedRecentChatBotTable from "../../components/tables/ExtendedRecentChatBotTable.jsx";
import { Button } from "../../components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import BlueArrowIcon from "../../assets/blue-arrow.svg";

export default function ExtendedChatBotHome({ onNext, onPrevious }) {
  return (
    <div className="w-full flex flex-col bg-[#F5F7FB]">
      {/* Top header */}
      <ComplexHeaderInterface />

      {/* Main content */}
      <main className="flex-1 w-full flex flex-col items-center px-4">
        <div className="w-full max-w-[1030px] mx-auto flex flex-col mt-3 mb-3">
          {/* Back to dashboard button (kept for UX) */}
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

          {/* Extended table */}
          <ExtendedRecentChatBotTable />
        </div>

        {/* Wizard navigation */}
        <div className="w-full max-w-[1030px] mt-auto mb-1 flex justify-between">
          <Button
            onClick={onPrevious}
            variant="outline"
            size="default"
            radius="md"
            width="112px"
            leftIcon={<ArrowLeft size={16} className="text-[#374151]" />}
            className="text-[13px] font-medium text-[#374151] hover:bg-[#F3F4F6]"
          >
            Previous
          </Button>
          <Button
            onClick={onNext}
            variant="default"
            size="default"
            radius="md"
            width="87px"
            rightIcon={<ArrowRight size={16} className="text-white" />}
          >
            Next
          </Button>
        </div>
      </main>
    </div>
  );
}
