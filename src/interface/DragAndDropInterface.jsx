export default function DragAndDropInterface() {
  const handleBrowseClick = () => {
    console.log("Browse clicked");
  };

  return (
    <div
      className="
        w-[360px] h-[120px]
        rounded-[10px]
        border border-dashed border-[#77889A]
        bg-[#77889A33]
        flex flex-col items-center justify-center
        gap-3
      "
      style={{
        fontFamily:
          '"IBM Plex Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      {/* Upload icon */}
      <div className="w-6 h-6 flex items-center justify-center text-[#4B5B6B]">
        <svg
          viewBox="0 0 24 24"
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* tray */}
          <rect x="4" y="13" width="16" height="7" rx="2" />
          {/* arrow */}
          <path d="M12 4v8" />
          <polyline points="8 8 12 4 16 8" />
        </svg>
      </div>

      {/* Text */}
      <p className="text-[16px] leading-[1] text-center text-[#1F2933]">
        <span>Drag and Drop Files, or </span>
        <button
          type="button"
          onClick={handleBrowseClick}
          className="text-[#2563EB] underline-offset-[2px] hover:underline"
        >
          Browse
        </button>
      </p>
    </div>
  );
}
