export default function AddButton({ onClick }) {
  const handleClick = onClick || (() => {
    console.log("Add clicked");
  });

  return (
    <button
      onClick={handleClick}
      className="
        inline-flex items-center justify-center
        w-[68px] h-[36px]
        rounded-[6px]
        bg-[#4443E4]
        border border-[#00000000]
        text-[14px] leading-[22px] font-normal
        text-white
        cursor-pointer
      "
    >
      Add
    </button>
  );
}