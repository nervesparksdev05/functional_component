import SparklesIconImg from "../../assets/sparkles-1.svg";
import SendIconImg from "../../assets/paper-plane-dark.svg";

export default function ChatInput({
  placeholder = "Ask anything",
  onSend,
  value,
  onChange,
  className = "",
}) {
  const handleSend = () => {
    if (onSend && value?.trim()) {
      onSend(value);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={`mt-3 flex items-center ${className}`}>
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
            placeholder={placeholder}
            value={value || ""}
            onChange={onChange}
            onKeyDown={handleKeyDown}
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
  );
}

