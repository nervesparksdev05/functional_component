// src/interface/HorizontalChatBotInterface.jsx
import SparklesIconImg from "../assets/sparkles-1.svg";
import SendIconImg from "../assets/paper-plane-dark.svg";

export default function HorizontalChatBotInterface() {
  const handleSend = () => {
    console.log("Send clicked from horizontal chat input");
  };

  return (
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
              {/* Left: sparkles + input */}
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
  );
}
