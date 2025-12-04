import AppleIcon from "../assets/apple.svg";

export default function AppleButton() {
  const handleClick = () => {
    alert("AppleButton!");
  };

  return (
    <button
      onClick={handleClick}
      className="
        inline-flex items-center justify-center
        w-[164px] h-9
        rounded-[18px]
        border border-[#171A1F]
        bg-white
        text-[#171A1F] text-[14px] leading-[22px] font-normal
        cursor-pointer
      "
    >
      {/* Apple logo from assets */}
      <img
        src={AppleIcon}
        alt="Apple"
        className="w-4 h-4 mr-2"
      />

      <span>Apple</span>
    </button>
  );
}
