import SparklesIconImg from "../assets/sparkles-1.svg";      // blue sparkles icon
import SendIconImg from "../assets/paper-plane-dark.svg";   // dark circle + paper plane

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

        {/* Right: send button (uses imported icon as-is) */}
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
  );
}
