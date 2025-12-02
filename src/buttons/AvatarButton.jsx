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
        pt-[7px] pb-1.5 px-[30px]
        gap-2.5
        bg-[#1BC469]
        text-[13px] font-medium leading-none text-white
        cursor-pointer
      "
    >
      {/* icon block */}
      <span
        aria-hidden="true"
        className="inline-flex w-[10.5px] h-3 bg-white rounded-xs"
      />

      {/* text */}
      <span>
        Start Avatar Session
      </span>
    </button>
  );
}
