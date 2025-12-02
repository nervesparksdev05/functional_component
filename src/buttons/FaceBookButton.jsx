export default function FaceBookButton() {
  const handleClick = () => {
    alert("FaceBookButton!");
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
      {/* Facebook icon placeholder */}
      <span
        aria-hidden="true"
        className="
          flex items-center justify-center
          w-4 h-4
          mr-2
          rounded-full
          bg-[#171A1F]
          text-[11px] text-white
        "
      >
        f
      </span>

      <span>Facebook</span>
    </button>
  );
}
