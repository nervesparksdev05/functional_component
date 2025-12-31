import UploadIcon from "../../assets/blue-upload.svg";
import MicIcon from "../../assets/green-mic.svg";
import AnswerIcon from "../../assets/answer-icon.svg";

export default function WelcomeScreen({ onStartDemo }) {
  const handleStartDemo = () => {
    if (onStartDemo) {
      onStartDemo();     
    }
  };

  return (
    <div className="w-full flex justify-center py-8">
      <section
        className="
          w-[638px] h-[360px]
          rounded-[20px]
          bg-white
          border border-[#E5E7EB]
          shadow-sm
          px-8 pt-8 pb-6
          flex flex-col
          items-center
        "
      >
        {/* Heading */}
        <h1 className="text-[24px] leading-[24px] font-medium text-[#2F3542] mb-3 text-center">
          Welcome to AI Product Demo
        </h1>

        {/* Subheading */}
        <p className="text-[14px] leading-[20px] text-[#6B7280] text-center mb-10">
          Get personalized product demonstrations with our AI Agent
        </p>

        {/* Three steps */}
        <div className="flex justify-between w-full mb-10">
          {/* Upload Content */}
          <div className="flex flex-col items-center text-center w-1/3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3">
              <img src={UploadIcon} alt="Upload content" className="w-10 h-10" />
            </div>
            <p className="text-[14px] font-medium text-[#111827] mb-1">
              Upload Content
            </p>
            <p className="text-[13px] leading-[18px] text-[#6B7280]">
              Add documents and
              <br />
              videos about your product
            </p>
          </div>

          {/* Ask Questions */}
          <div className="flex flex-col items-center text-center w-1/3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3">
              <img src={MicIcon} alt="Ask questions" className="w-10 h-10" />
            </div>
            <p className="text-[14px] font-medium text-[#111827] mb-1">
              Ask Questions
            </p>
            <p className="text-[13px] leading-[18px] text-[#6B7280]">
              Use voice or text to interact
              <br />
              with the AI
            </p>
          </div>

          {/* Get Answers */}
          <div className="flex flex-col items-center text-center w-1/3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3">
              <img src={AnswerIcon} alt="Get answers" className="w-10 h-10" />
            </div>
            <p className="text-[14px] font-medium text-[#111827] mb-1">
              Get Answers
            </p>
            <p className="text-[13px] leading-[18px] text-[#6B7280]">
              Receive instant,
              <br />
              accurate responses
            </p>
          </div>
        </div>

        {/* Start Demo button */}
        <button
          type="button"
          onClick={handleStartDemo}
          className="
            w-[578px] h-[40px]
            rounded-[50px]
            mb-0
            bg-[#4443E4]
            text-white
            text-[14px] font-medium
            flex items-center justify-center
            px-[30px] pt-[12px] pb-[11px]
          "
        >
          Start Demo
        </button>
      </section>
    </div>
  );
}
