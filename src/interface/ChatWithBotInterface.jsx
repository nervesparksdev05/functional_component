// adjust these paths/file names to match your project
import SparklesIconImg from "../assets/sparkles-1.svg";      // blue sparkles icon
import SendIconImg from "../assets/paper-plane-dark.svg";   // dark circle + paper plane icon

export default function ChatWithBotInterface() {
  const handleSend = () => {
    console.log("Send clicked from chat input");
  };

  return (
    <div className="w-full flex justify-center py-8">
      {/* Outer frame with blue border */}
      <div
        className="
          w-[960px] h-[420px]
          border border-[#0F8AFD]
          rounded-[6px]
          bg-[#F6F7FB]
          p-6
        "
      >
        {/* Header: sparkles + title */}
        <div className="flex items-center gap-2 mb-4">
          <img src={SparklesIconImg} alt="Sparkles" className="w-6 h-6" />
          <h2 className="text-[20px] font-semibold text-[#111827]">
            Chat with Bot
          </h2>
        </div>

        {/* Chat area */}
        <div className="flex flex-col h-[330px] bg-[#F6F7FB] rounded-[14px]">
          {/* Messages list */}
          <div className="flex-1 flex flex-col gap-4 pr-2 overflow-y-auto">
            {/* Bot message 1 */}
            <div className="flex justify-start">
              <div className="bg-[#DFE4FF] rounded-[16px] px-4 py-3 max-w-[72%]">
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
              <div className="bg-white text-[#111827] text-[14px] leading-[20px] font-normal rounded-[16px] px-4 py-3 max-w-[60%] shadow-sm">
                Hello! Can you help me how to increase my sales?
              </div>
            </div>

            {/* Bot message 2 */}
            <div className="flex justify-start">
              <div className="bg-[#DFE4FF] rounded-[16px] px-4 py-3 max-w-[72%]">
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

          {/* Input area – full-width like original */}
          <div className="mt-4 flex items-center">
            <div
              className="
                flex-1
                h-[52px]
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

              {/* Right: send button (imported icon) */}
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
