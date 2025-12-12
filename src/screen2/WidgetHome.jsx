// src/screen2/WidgetHome.jsx
import ComplexHeaderInterface from "../interface/ComplexHeaderInterface.jsx";
import BackToDashBoardButton from "../buttons/BackToDashBoardButton.jsx";
import IncreasingDotsInterface from "../interface/IncreasingDotsInterface.jsx";
import WidgetColorInterface from "../interface/WidgetColorInterface.jsx";
import WidgetPositionInterface from "../interface/WidgetPositionInterface.jsx";
import PreviousButton from "../buttons/PreviousButton.jsx";
import DoneAndProcessingButton from "../buttons/DoneAndProcessing.jsx";

export default function WidgetHome({ onNext, onPrevious }) {
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
          <PreviousButton onClick={onPrevious} />
          <DoneAndProcessingButton onClick={onNext} />
        </div>
      </main>
    </div>
  );
}
