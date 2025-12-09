// src/screen2/ChatBotHome.jsx
import ComplexHeaderInterface from "../interface/ComplexHeaderInterface.jsx";
import BackToDashBoardButton from "../buttons/BackToDashBoardButton.jsx";
import IncreasingDotsInterface from "../interface/IncreasingDotsInterface.jsx";
import HorizontalChatBotInterface from "../interface/HorizontalChatBotInterface.jsx";
import PreviousButton from "../buttons/PreviousButton.jsx";
import NextButton from "../buttons/NextButton.jsx";

export default function ChatBotHome({ onNext, onPrevious }) {
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
        <div className="w-full max-w-[1030px] mt-auto mb-8 flex justify-between">
          <PreviousButton onClick={onPrevious} />
          <NextButton onClick={onNext} />
        </div>
      </main>
    </div>
  );
}
