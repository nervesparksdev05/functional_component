import VectorIcon from "../assets/vector.svg";

export default function AvatarButton() {
  const handleClick = () => {
    alert("AvatarButton!");
  };

  return (
    <button
      onClick={handleClick}
      className="
        inline-flex items-center justify-center
        w-[201.5px] h-[30px]
        rounded-[50px]
        pt-[7px] pb-[6px] px-[30px]
        gap-[2px]
        bg-[#1BC469]
        text-white text-[12px] font-medium leading-none
        cursor-pointer
      "
    >
      <span className="inline-flex items-center justify-center w-[14px] h-[14px]">
        <img
          src={VectorIcon}
          alt="Play"
          className="w-[14px] h-[14px]"
        />
      </span>

      <span>Start Avatar Session</span>
    </button>
  );
}
