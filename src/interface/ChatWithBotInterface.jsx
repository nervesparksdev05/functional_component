export default function ChatWithBotInterface() {
  return (
    <div className="w-full flex justify-center py-8">
      {/* Outer frame with blue border */}
      <div className="w-[960px] h-[420px] border border-[#0F8AFD] rounded-[6px] bg-[#F6F7FB] p-6">
        {/* Header */}
        <h2 className="text-[20px] font-semibold text-[#111827] mb-4">
            <SparklesIcon />
          Chat with Bot
        </h2>

        {/* Chat area */}
        <div className="flex flex-col h-[330px] bg-[#F6F7FB] rounded-[14px]">
          {/* Messages list */}
          <div className="flex-1 flex flex-col gap-4 pr-2 overflow-y-auto">
            {/* Bot message 1 */}
            <div className="flex justify-start">
              <div className="bg-[#DFE4FF] rounded-[16px] px-4 py-3 max-w-[72%]">
                <div className="flex items-start gap-3">
                  <SparklesIcon />
                  <p className="text-[#111827] text-[14px] leading-[20px] font-medium">
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
                  <SparklesIcon />
                  <p className="text-[#111827] text-[14px] leading-[20px] font-medium">
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
          <div className="mt-4 flex items-center gap-3">
            {/* Input pill */}
            <div className="flex-1 flex items-center bg-white rounded-[999px] px-4 py-2">
              <span className="mr-2">
                <SparklesIcon small />
              </span>
              <input
                type="text"
                placeholder="Ask anything"
                className="flex-1 bg-transparent outline-none text-[14px] text-[#6B7280] placeholder-[#9CA3AF]"
              />
            </div>

            {/* Send button */}
            <button
              className="
                inline-flex items-center justify-center
                w-10 h-10 rounded-full
                bg-[#111827]
                text-white
                cursor-pointer
              "
            >
              <PaperPlaneIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- Small helper icons --- */

function SparklesIcon({ small }) {
  const size = small ? 16 : 20;
  return (
    <div
      className={`
        inline-flex items-center justify-center
        rounded-full
        ${small ? "w-4 h-4" : "w-6 h-6"}
        bg-transparent
      `}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        className="text-[#6366F1]"
        fill="none"
      >
        <path
          d="M12 2.5l1.1 3.5 3.5 1.1-3.5 1.1-1.1 3.5-1.1-3.5-3.5-1.1 3.5-1.1L12 2.5zM6 12.5l.7 2.3 2.3.7-2.3.7L6 18.5l-.7-2.3-2.3-.7 2.3-.7.7-2.3zm12 0l.7 2.3 2.3.7-2.3.7L18 18.5l-.7-2.3-2.3-.7 2.3-.7.7-2.3z"
          fill="#6366F1"
        />
      </svg>
    </div>
  );
}

function PaperPlaneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 2L11 13" />
      <path d="M22 2L15 22L11 13L2 9L22 2Z" />
    </svg>
  );
}
