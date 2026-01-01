// src/screens/NavbarDesktopScreen/ChatBotHome.jsx
import { useState } from "react";
import Navbar from "../../components/Navbar.jsx";
import { ChatInput, BackButton, NavigationButtons } from "../../components/ui";
import SparklesIconImg from "../../assets/sparkles-1.svg";

export default function ChatBotHome({ onNext, onPrevious }) {
  const steps = [
    "Upload Sources",
    "Generate Sitemap",
    "Set Goals",
    "Try It Out",
    "DNS Verification",
    "Deploy Widget",
  ];

  const [selectedIndex, setSelectedIndex] = useState(3);
  const [chatInputValue, setChatInputValue] = useState("");

  const handleChatSend = (message) => {
    console.log("Send clicked:", message);
    setChatInputValue("");
  };

  const handleStepClick = (index) => {
    setSelectedIndex(index);
  };

  const progressRatio =
    steps.length > 1 ? selectedIndex / (steps.length - 1) : 0;

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#F5F7FB]">
      {/* Top header */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1 w-full flex flex-col items-center px-4">
        {/* Back to Dashboard */}
        <BackButton />

        {/* Stepper */}
        <div className="w-full max-w-[1030px]">
          <div className="w-full flex justify-center py-4 -mt-4">
            <div
              className="
                w-[1100px] h-[80px]
                rounded-[6px]
                bg-white
                px-8
                flex flex-col justify-center
              "
            >
              <div className="relative w-full pt-2">
                {/* Base grey line */}
                <div
                  className="
                    absolute
                    left-[28px] right-[28px]
                    top-[18px]
                    h-[3px]
                    bg-[#4B5563]
                    rounded-full
                  "
                />

                {/* Purple progress line */}
                <div
                  className="
                    absolute
                    left-[28px] right-[28px]
                    top-[18px]
                    h-[3px]
                    bg-[#4443E4]
                    rounded-full
                    origin-left
                  "
                  style={{ transform: `scaleX(${progressRatio})` }}
                />

                {/* Masks to hide line overshoot */}
                <div
                  className="
                    absolute left-0 top-[11px]
                    h-[18px] w-[40px]
                    bg-white
                    pointer-events-none
                  "
                />
                <div
                  className="
                    absolute right-0 top-[11px]
                    h-[18px] w-[40px]
                    bg-white
                    pointer-events-none
                  "
                />

                {/* Circles + labels */}
                <div className="relative z-10 flex justify-between items-start">
                  {steps.map((label, index) => {
                    const isActive = index <= selectedIndex;

                    return (
                      <div
                        key={label}
                        className="flex flex-col items-center gap-1"
                        style={{ minWidth: 0 }}
                      >
                        {/* Circle */}
                        <button
                          type="button"
                          onClick={() => handleStepClick(index)}
                          className={`
                            flex items-center justify-center
                            w-7 h-7 rounded-full
                            transition-transform
                            ${
                              isActive
                                ? "border-[3px] border-[#4443E4] bg-white scale-105"
                                : "border-2 border-[#D1D5DB] bg-[#E5E7EB]"
                            }
                          `}
                        />

                        {/* Label */}
                        <span
                          className={
                            isActive
                              ? "text-[13px] text-[#111827] font-semibold text-center"
                              : "text-[13px] text-[#9CA3AF] font-normal text-center"
                          }
                        >
                          {label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
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
            <div className="w-full flex justify-center py-4">
              {/* Outer card – horizontal variant (953 x 450) */}
              <div
                className="
                  w-[953px] h-[450px]
                  rounded-[15px]
                  border border-[#E5E7EB]
                  bg-white
                  px-4 pt-4 pb-3
                  flex flex-col
                "
              >
                {/* Header: sparkles + title */}
                <div className="flex items-center gap-2 mb-4">
                  <img src={SparklesIconImg} alt="Sparkles" className="w-5 h-5" />
                  <h2 className="text-[20px] font-medium text-[#171A1F]">
                    Chat With Bot
                  </h2>
                </div>

                {/* Chat body */}
                <div
                  className="
                    flex-1
                    bg-[#F6F7FB]
                    rounded-[12px]
                    px-5 pt-4 pb-3
                    flex flex-col
                  "
                >
                  {/* Messages */}
                  <div className="flex-1 flex flex-col gap-4 pr-2 overflow-y-auto">
                    {/* Bot message 1 */}
                    <div className="flex justify-start">
                      <div
                        className="
                          bg-[#4443E4]/10
                          rounded-[16px]
                          text-[16px]
                          px-4 py-4
                          w-[595px] min-h-[53px]
                        "
                      >
                        <div className="flex items-start gap-3">
                          <img
                            src={SparklesIconImg}
                            alt="Bot"
                            className="w-5 h-5 mt-[2px]"
                          />
                          <p className="text-[#111827] text-[16px] leading-[20px] text-left">
                            Hello! I'm chat bot. How can I assist you today?
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* User message 1 */}
                    <div className="flex justify-end">
                      <div
                        className="
                          bg-white
                          text-[#111827]
                          text-[16px]
                          leading-[20px]
                          font-normal
                          rounded-[16px]
                          px-5 py-4
                          w-[595px] min-h-[53px]
                          shadow-sm
                          text-left
                        "
                      >
                        Hello! Can you help me how to increase my sales?
                      </div>
                    </div>

                    {/* Bot message 2 */}
                    <div className="flex justify-start">
                      <div
                        className="
                          bg-[#4443E4]/10
                          rounded-[16px]
                          px-4 py-4
                          w-[595px] min-h-[53px]
                        "
                      >
                        <div className="flex items-start gap-3">
                          <img
                            src={SparklesIconImg}
                            alt="Bot"
                            className="w-5 h-5 mt-[2px]"
                          />
                          <p className="text-[#111827] text-[16px] leading-[20px] text-left">
                            Could you provide me with more details about your product,
                            so I can prepare a detailed strategic plan on how to
                            increase sales.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* User message 2 */}
                    <div className="flex justify-end">
                      <div
                        className="
                          bg-white
                          text-[#111827]
                          text-[16px]
                          leading-[20px]
                          font-normal
                          rounded-[16px]
                          px-5 py-4
                          w-[595px] min-h-[53px]
                          shadow-sm
                          text-left
                        "
                      >
                        Sure!!!
                      </div>
                    </div>
                  </div>

                  {/* Input area */}
                  <ChatInput
                    value={chatInputValue}
                    onChange={(e) => setChatInputValue(e.target.value)}
                    onSend={handleChatSend}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom navigation */}
        <NavigationButtons onPrevious={onPrevious} onNext={onNext} />
      </main>
    </div>
  );
}
