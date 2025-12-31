import { useState } from "react";
import BulbIcon from "../../assets/bulb.svg";
import { Button } from "../../components/ui/button.jsx";
import UploadKnowledgeBaseContainer from "../../components/UploadKnowledgeBase.jsx";
import SparklesIconImg from "../../assets/sparkles-1.svg";
import SendIconImg from "../../assets/paper-plane-dark.svg";
import Avatar from "../../assets/ai-avatar.svg";
import PlayIcon from "../../assets/play-icon.svg";
import UploadIcon from "../../assets/blue-upload.svg";
import MicIcon from "../../assets/green-mic.svg";
import AnswerIcon from "../../assets/answer-icon.svg";
import Navbar from "../../components/Navbar.jsx";

export default function ProductDemo() {
  const [showUploadPanel, setShowUploadPanel] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  const handleSend = () => {
    console.log("Send clicked from chat input");
  };

  return (
    <div>
      <Navbar />
      {/* Main content */}
      <main className="flex flex-col w-full h-full">
        <div className="w-full bg-[#FFFFFF] border border-[#bfc0d0]">
          <div className="max-w-8xl mx-18 md:px-6 py-2 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center rounded-full">
                <img src={BulbIcon} alt="Idea" className="h-10 w-10" />
              </span>
              <h1 className="text-xl md:text-2xl font-semibold text-[#2F3542]">
                Product Demo Assistant
              </h1>
            </div>

            <div className="self-start md:self-auto">
              <Button
                onClick={() => {
                  if (showWelcome) return; 
                  setShowUploadPanel(true);
                }}
                variant="default"
                size="2xl"
                radius="full"
                width="205px"
              >
                Upload Resources
              </Button>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-6  ">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-center gap-4">
            <section className="lg:w-auto">
              {/* AI Avatar Container */}
              <div className="w-full flex justify-center py-4">
                {/* Outer card */}
                <div
                  className="
                    w-[505px] h-[500px]
                    rounded-[10px]
                    border border-[#E5E7EB]
                    bg-white
                    px-[10px] pt-4 pb-0
                    flex flex-col
                  "
                >
                  {/* Header */}
                  <div className="flex items-center gap-2 mb-3">
                    {/* Imported avatar icon */}
                    <img
                      src={Avatar}
                      alt="AI Avatar"
                      className="w-5 h-5"
                    />
                    <span className="text-[16px] font-medium text-[#171A1F]">
                      AI Avatar
                    </span>
                  </div>

                  {/* Inner grey box with button INSIDE */}
                  <div
                    className="
                      relative
                      w-full h-[436px]
                      rounded-[10px]
                      bg-[#F4F5FB]
                      text-center text-[14px] text-[#9CA3AF]
                    "
                  >
                    {/* Centered text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      Start session to activate avatar
                    </div>

                    {/* Button at bottom, inside grey box */}
                    <button
                      type="button"
                      onClick={() => console.log("Start Avatar Session clicked")}
                      className="
                        absolute
                        left-1/2 -translate-x-1/2
                        bottom-2
                        inline-flex items-center justify-center
                        w-[201.5px] h-[30px]
                        rounded-[50px]
                        bg-[#1BC469]
                        text-white text-[12px] font-medium leading-none
                        px-[30px]
                        pt-[7px] pb-[6px]
                        gap-[3px]
                        cursor-pointer
                      "
                    >
                      <img src={PlayIcon} alt="Play" className="w-3 h-3" />
                      <span>Start Avatar Session</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section className="lg:w-auto">
              {/* Chat With Bot Container */}
              <div className="w-full flex justify-center py-4">
                {/* Outer card – same size as AI Avatar (505 x 500) */}
                <div
                  className="
                    w-[505px] h-[500px]
                    rounded-[10px]
                    border border-[#E5E7EB]
                    bg-white
                    px-[10px] pt-4 pb-3
                    flex flex-col
                  "
                >
                  {/* Header: sparkles + title */}
                  <div className="flex items-center gap-2 mb-3">
                    <img src={SparklesIconImg} alt="Sparkles" className="w-5 h-5" />
                    <h2 className="text-[16px] font-medium text-[#171A1F]">
                      Chat
                    </h2>
                  </div>

                  {/* Chat area fills the remaining height */}
                  <div
                    className="
                      flex flex-col flex-1
                      bg-[#F6F7FB]
                      rounded-[10px]
                      px-4 pt-4 pb-3
                    "
                  >
                    {/* Messages list */}
                    <div className="flex-1 flex flex-col gap-4 pr-1 overflow-y-auto">
                      {/* Bot message 1 */}
                      <div className="flex justify-start">
                        <div className="bg-[#DFE4FF] rounded-[16px] px-4 py-3 max-w-[80%]">
                          <div className="flex items-start gap-3">
                            <img
                              src={SparklesIconImg}
                              alt="Bot"
                              className="w-5 h-5 mt-[2px]"
                            />
                            <p className="text-[#111827] text-[14px] leading-[20px]">
                              Hello! I'm chat bot of (Company Name). How can I assist you
                              today?
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* User message 1 */}
                      <div className="flex justify-end">
                        <div className="bg-white text-[#111827] text-[14px] leading-[20px] font-normal rounded-[16px] px-4 py-3 max-w-[70%] shadow-sm">
                          Hello! Can you help me how to increase my sales?
                        </div>
                      </div>

                      {/* Bot message 2 */}
                      <div className="flex justify-start">
                        <div className="bg-[#DFE4FF] rounded-[16px] px-4 py-3 max-w-[80%]">
                          <div className="flex items-start gap-3">
                            <img
                              src={SparklesIconImg}
                              alt="Bot"
                              className="w-5 h-5 mt-[2px]"
                            />
                            <p className="text-[#111827] text-[14px] leading-[20px]">
                              Could you provide me with more details about your product,
                              so I can prepare a detailed strategic plan on how to
                              increase sales.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* User message 2 */}
                      <div className="flex justify-end">
                        <div className="bg-white text-[#111827] text-[14px] leading-[20px] font-normal rounded-[16px] px-4 py-3 max-w-[40%] shadow-sm">
                          Sure!!!
                        </div>
                      </div>
                    </div>

                    {/* Input area */}
                    <div className="mt-3 flex items-center">
                      <div
                        className="
                          flex-1
                          h-[48px]
                          rounded-[25px]
                          border border-[#D9DCE1]
                          bg-white
                          flex items-center
                          px-4
                        "
                      >
                        {/* Left: sparkle + input */}
                        <div className="flex items-center flex-1 gap-2 mr-2">
                          <img src={SparklesIconImg} alt="Sparkles" className="w-5 h-5" />
                          <input
                            type="text"
                            placeholder="Ask anything"
                            className="
                              flex-1
                              bg-transparent
                              outline-none
                              border-none
                              text-[14px] leading-[22px]
                              text-[#2F3542]
                              placeholder:text-[#2F3542]/50
                            "
                          />
                        </div>

                        {/* Right: send button */}
                        <button
                          type="button"
                          onClick={handleSend}
                          className="
                            flex items-center justify-center
                            w-10 h-10
                            rounded-[30px]
                            cursor-pointer
                          "
                        >
                          <img src={SendIconImg} alt="Send" className="w-10 h-10" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Welcome overlay */}
      {showWelcome && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/20 backdrop-blur-[2px]">
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
                onClick={() => setShowWelcome(false)}
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
        </div>
      )}

      {/* ✅ Upload modal overlay (centered + instant) */}
      {showUploadPanel && !showWelcome && (
        <div className="fixed inset-0 z-50">
          {/* overlay */}
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"
            onClick={() => setShowUploadPanel(false)} // click outside closes
          />

          {/* modal mount (center) */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* small scale/fade animation (requires keyframes in CSS) */}
            <div className="animate-[modalIn_160ms_ease-out]">
              <UploadKnowledgeBaseContainer onClose={() => setShowUploadPanel(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
