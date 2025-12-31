// src/screens/NavbarDesktopScreen/ChatBotHome.jsx
import ComplexHeaderInterface from "../../components/interface/ComplexHeaderInterface.jsx";
import { Button } from "../../components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import BlueArrowIcon from "../../assets/blue-arrow.svg";
import IncreasingDotsInterface from "../../components/interface/IncreasingDotsInterface.jsx";
import HorizontalChatBotInterface from "../../components/interface/HorizontalChatBotInterface.jsx";

export default function ChatBotHome({ onNext, onPrevious }) {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#F5F7FB]">
      {/* Top header */}
      <ComplexHeaderInterface />

      {/* Main content */}
      <main className="flex-1 w-full flex flex-col items-center px-4">
        {/* Back to Dashboard */}
        <div className="w-full max-w-[1030px] mt-3 mb-4">
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

        {/* Stepper */}
        <div className="w-full max-w-[1030px]">
          <IncreasingDotsInterface />
        </div>

        {/* Center section */}
        <section className="w-full max-w-[1030px] mt-8 flex flex-col items-center text-center">
          {/* Description under stepper */}
          <p className="text-[14px] leading-[20px] -mt-8 -mb-6 text-[#0e1111] font-medium">
            Test your bot before deploying it to your website. Try different
            questions and see how it responds.
          </p>

          {/* Chat card */}
          <div className="mt-6 w-full flex justify-center">
            <HorizontalChatBotInterface />
          </div>
        </section>

        {/* Bottom navigation */}
        <div className="w-full max-w-[1030px] mt-auto mb-3 flex justify-between">
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
