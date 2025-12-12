export default function ContinueButton() {
  const handleClick = () => {
    alert("ContinueButton!");
  };

  return (
    <button
      onClick={handleClick}
      className="
        inline-flex items-center justify-center
        w-[464px] h-[52px]
        rounded-[26px]
        border border-[#00000000]
        bg-[#4443E4]
        text-[18px] leading-7 font-normal
        text-white
        text-center
        cursor-pointer
      "
    >
      Continue
    </button>
  );
}
