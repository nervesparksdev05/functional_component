import BracketArrow from "../../assets/bracket-arrow.svg";
import CopyIcon from "../../assets/copy-icon.svg";

const CODE_SNIPPET = `def get_bot_response(user_input):
    """
    Checks the user's input against predefined patterns and returns a response.
    """

    # 1. Standardize the input for easier matching
    user_input = user_input.lower().strip()

    # 2. Define the response map (Keywords -> Bot Response)
    response_map = {
        "hello": "Hello there! How can I help you today?",
        "hi": "Hi! What's on your mind?",
    }`;

export default function CopyCode() {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CODE_SNIPPET);
      alert("Code copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <div className="w-full flex justify-center py-8">
      {/* Outer card */}
      <div className="w-[540px] rounded-[18px] border border-[#E3D9FF] bg-[#FAF8FF] px-5 pt-4 pb-5">
        {/* Header row */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            {/* Left badge: imported bracket-arrow icon */}
            <div className="flex items-center justify-center  bg-[#E4DEFF]">
              <img
                src={BracketArrow}
                alt="Code icon"
                className="w-8 h-8"
              />
            </div>

            <span className="text-[16px] font-semibold text-[#111827]">
              Copy Code
            </span>
          </div>

          {/* Copy icon button: imported copy-icon */}
          <button
            onClick={handleCopy}
            className="
              flex items-center justify-center
              w-8 h-8
              rounded-[8px]
              bg-transparent
              cursor-pointer
            "
            aria-label="Copy code"
          >
            <img
              src={CopyIcon}
              alt="Copy"
              className="w-5 h-5"
            />
          </button>
        </div>

        {/* Code area */}
        <div className="mt-1 rounded-[16px] border border-[#E7E0FF] bg-[#F7F4FF] px-5 py-4">
          <pre className="font-mono text-[13px] leading-[20px] text-[#392494] whitespace-pre-wrap">
            {CODE_SNIPPET}
          </pre>
        </div>
      </div>
    </div>
  );
}
