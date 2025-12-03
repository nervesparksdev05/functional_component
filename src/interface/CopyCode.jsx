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
            {/* Code icon badge (circle with </>) */}
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#E4DEFF]">
              <span className="text-[#4F46E5] text-[18px] font-semibold">
                {"</>"}
              </span>
            </div>

            <span className="text-[16px] font-semibold text-[#111827]">
              Copy Code
            </span>
          </div>

          {/* Copy icon button (matches top-right icon) */}
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
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 text-[#111827]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* front square */}
              <rect x="9" y="9" width="11" height="11" rx="2" ry="2" />
              {/* back square */}
              <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8" />
            </svg>
          </button>
        </div>

        {/* Code area */}
        <div className="mt-1 rounded-[16px] border border-[#E7E0FF] bg-[#F7F4FF] px-5 py-4">
          <pre className="font-mono text-[13px] leading-[20px] text-[#4F46E5] whitespace-pre-wrap">
            {CODE_SNIPPET}
          </pre>
        </div>
      </div>
    </div>
  );
}
