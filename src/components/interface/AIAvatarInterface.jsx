import Avatar from "../../assets/ai-avatar.svg";

export default function AIAvatarInterface() {
  const handleClick = () => {
    console.log("Start Avatar Session clicked");
  };

  return (
    <div className="w-full flex justify-center py-4">
      {/* Outer card */}
      <div
        className="
          w-[505px] h-[500px]
          rounded-[10px]
          border border-[#E5E7EB]
          bg-white
          px-[10px] pt-4 pb-0
          flex flex-col
        "
      >
        {/* Header */}
        <div className="flex items-center gap-2 mb-3">
          {/* Imported avatar icon */}
          <img
            src={Avatar}
            alt="AI Avatar"
            className="w-5 h-5"
          />
          <span className="text-[16px] font-medium text-[#171A1F]">
            AI Avatar
          </span>
        </div>

        {/* Inner grey box with button INSIDE */}
        <div
          className="
            relative
            w-full h-[436px]
            rounded-[10px]
            bg-[#F4F5FB]
            text-center text-[14px] text-[#9CA3AF]
          "
        >
          {/* Centered text */}
          <div className="absolute inset-0 flex items-center justify-center">
            Start session to activate avatar
          </div>

          {/* Button at bottom, inside grey box */}
          <button
            type="button"
            onClick={handleClick}
            className="
              absolute
              left-1/2 -translate-x-1/2
              bottom-2
              inline-flex items-center justify-center
              w-[201.5px] h-[30px]
              rounded-[50px]
              bg-[#1BC469]
              text-white text-[12px] font-medium leading-none
              px-[30px]
              pt-[7px] pb-[6px]
              gap-[3px]
              cursor-pointer
            "
          >
            <PlayIcon />
            <span>Start Avatar Session</span>
          </button>
        </div>
      </div>
    </div>
  );
}

/* --- Play icon stays the same --- */
function PlayIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="w-[18px] h-[18px]"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 3v10l7-5-7-5z" />
    </svg>
  );
}
