import { useState } from "react";

import NodaIcon from "../../assets/noda-icon.svg";
import BulbIcon from "../../assets/bulb.svg";
import HeaderRightTop from "../../components/interface/HeaderRightTopInterface.jsx";
import AlarmIcon from "../../assets/alarm-icon.svg";
import FemaleIcon from "../../assets/female-icon.svg";
import { Button } from "../../components/ui/button.jsx";
import AIAvatarInterface from "../../components/interface/AIAvatarInterface.jsx";
import UploadKnowledgeBaseContainer from "../../components/interface/UploadKnowledgeBaseContainer.jsx";
import WelcomeScreenInterface from "../../components/interface/WelcomeScreenInterface.jsx";
import SparklesIconImg from "../../assets/sparkles-1.svg";
import SendIconImg from "../../assets/paper-plane-dark.svg";

export default function ProductDemo() {
  const [showUploadPanel, setShowUploadPanel] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  const handleSend = () => {
    console.log("Send clicked from chat input");
  };

  return (
    <div>
      {/* Top navigation bar */}
      <header className="w-full bg-[#FFFFFF] border-b border-[#bfc1d3] -mb-1">
        <div className="max-w-10xl mx-18 flex items-center justify-between px-4 md:px-6 py-1">
          <div className="flex items-center gap-2">
            <img src={NodaIcon} alt="Noda Technologies" className="h-14 w-auto" />
          </div>

          <div className="flex items-center gap-2">
            <HeaderRightTop />
            <div className="h-10 w-px bg-[#b4bcc9]" />

            <button
              type="button"
              className="hidden sm:flex items-center justify-center w-18 h-18 rounded-full"
            >
              <img src={AlarmIcon} alt="Notifications" />
            </button>

            <div>
              <img
                src={FemaleIcon}
                alt="Profile"
                className="w-10 h-10 mr-5 ml-1 rounded-full"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 w-full">
        <div className="w-full bg-[#FFFFFF] h-[200] border border-[#bfc0d0]">
          <div className="max-w-8xl mx-18 px-3 md:px-6 py-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
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
                  if (showWelcome) return; // prevent opening behind welcome
                  setShowUploadPanel(true);
                }}
                variant="default"
                size="2xl"
                radius="full"
                width="205px"
              >
                Upload Knowledge Base
              </Button>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-6 pt-4 pb-6">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-center gap-4">
            <section className="lg:w-auto">
              <AIAvatarInterface />
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
          <WelcomeScreenInterface onStartDemo={() => setShowWelcome(false)} />
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
