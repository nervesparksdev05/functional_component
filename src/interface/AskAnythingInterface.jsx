export default function AskAnythingInterface() {
  const handleSend = () => {
    console.log("Send clicked");
  };

  return (
    <div className="w-full flex justify-center py-4">
      <div
        className="
          w-[485px] h-[52px]
          rounded-[25px]
          border border-[#D9DCE1]
          bg-white
          flex items-center
          px-4
        "
        style={{
          fontFamily:
            '"Lato", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        {/* Left: sparkle + input */}
        <div className="flex items-center flex-1 gap-2 mr-2">
          <SparklesIcon />
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
            bg-[#2F3542]
            text-white
            cursor-pointer
          "
        >
          <PaperPlaneIcon />
        </button>
      </div>
    </div>
  );
}

/* --- Icons --- */

function SparklesIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* central sparkle */}
      <path
        d="M12 3l1.1 3.3L16.5 7.5 13.1 8.7 12 12l-1.1-3.3L7.5 7.5l3.4-1.2L12 3z"
        fill="#1D4ED8"
      />
      {/* small sparkles */}
      <path
        d="M6 11l.5 1.6 1.6.5-1.6.5L6 15.2l-.5-1.6-1.6-.5 1.6-.5L6 11zM18 9l.5 1.6 1.6.5-1.6.5L18 13.2l-.5-1.6-1.6-.5 1.6-.5L18 9z"
        fill="#60A5FA"
      />
    </svg>
  );
}

function PaperPlaneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-[18px] h-[18px]"
      fill="none"
      stroke="white"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 2L11 13" />
      <path d="M22 2L15 22L11 13L2 9L22 2Z" />
    </svg>
  );
}
