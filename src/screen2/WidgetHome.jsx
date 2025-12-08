// src/screens/WidgetHome.jsx

import ComplexHeaderInterface from "../interface/ComplexHeaderInterface.jsx";
import BackToDashBoardButton from "../buttons/BackToDashBoardButton.jsx";
import IncreasingDotsInterface from "../interface/IncreasingDotsInterface.jsx";
import WidgetColorInterface from "../interface/WidgetColorInterface.jsx";
import WidgetPositionInterface from "../interface/WidgetPositionInterface.jsx";
import PreviousButton from "../buttons/PreviousButton.jsx";
import DoneAndProcessingButton from "../buttons/DoneAndProcessing.jsx";

export default function WidgetHome() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#F5F7FB]">
      {/* Top header */}
      <ComplexHeaderInterface />

      {/* Main content */}
      <main className="flex-1 w-full flex flex-col items-center px-4">
        {/* Back to Dashboard */}
        <div className="w-full max-w-[1030px] mt-6 mb-4">
          <BackToDashBoardButton />
        </div>

        {/* Stepper */}
        <div className="w-full max-w-[1030px]">
          <IncreasingDotsInterface />
        </div>

        {/* Center description */}
        <section className="w-full max-w-[1030px] mt-10 flex flex-col items-center text-center">
          <p className="text-[13px] leading-[20px] text-[#111827] max-w-[700px] font-semibold">
            Generate the widget code and configure where it appears on your website.
          </p>
        </section>

        {/* Main two-column layout */}
        <section className="w-full max-w-[1030px] mt-10 flex justify-between">
          {/* LEFT: Widget Color */}
          <div className="flex flex-col">
            <h2 className="text-[16px] font-medium text-[#111827] mb-4">
              Widget Color
            </h2>
            <WidgetColorInterface />
          </div>

          {/* RIGHT: Widget Position */}
          <div className="flex flex-col items-start">
            <h2 className="text-[16px] font-medium text-[#111827] mb-4">
              Widget Position
            </h2>
            <WidgetPositionInterface />
          </div>
        </section>

        {/* Bottom navigation */}
        <div className="w-full max-w-[1030px] mt-16 mb-10 flex items-center justify-between">
          <PreviousButton />
          <DoneAndProcessingButton />
        </div>
      </main>
    </div>
  );
}
