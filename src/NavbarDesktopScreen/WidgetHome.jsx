// src/screen2/WidgetHome.jsx
import ComplexHeaderInterface from "../components/interface/ComplexHeaderInterface.jsx";
import { Button } from "../components/ui/button";
import { ArrowLeft } from "lucide-react";
import BlueArrowIcon from "../assets/blue-arrow.svg";
import IncreasingDotsInterface from "../components/interface/IncreasingDotsInterface.jsx";
import WidgetColorInterface from "../components/interface/WidgetColorInterface.jsx";
import WidgetPositionInterface from "../components/interface/WidgetPositionInterface.jsx";

export default function WidgetHome({ onNext, onPrevious }) {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#F5F7FB]">
      {/* Top header */}
      <ComplexHeaderInterface />

      {/* Main content */}
      <main className="flex-1 w-full flex flex-col items-center px-4">
        {/* Back to Dashboard */}
        <div className="w-full max-w-[1030px] mt-6 mb-4">
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

        {/* Center description */}
        <section className="w-full max-w-[1030px] mt-2 flex flex-col items-center text-center">
          <p className="text-[14px] leading-[20px] text-[#111827] max-w-[700px] font-medium">
            Generate the widget code and configure where it appears on your
            website.
          </p>
        </section>

        {/* Main two-column layout */}
        <section className="w-full max-w-[1030px] mt-10 flex justify-between">
          {/* LEFT: Widget Color */}
          <div className="flex flex-col">
            <WidgetColorInterface />
          </div>

          {/* RIGHT: Widget Position */}
          <div className="flex flex-col items-start">
            <WidgetPositionInterface />
          </div>
        </section>

        {/* Bottom navigation */}
        <div className="w-full max-w-[1030px] mt-16 mb-3 flex items-center justify-between">
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
          >
            Next
          </Button>
        </div>
      </main>
    </div>
  );
}
