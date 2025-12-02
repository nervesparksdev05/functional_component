export default function DemoButton() {
  const handleClick = () => {
    alert("DemoButton!");
  };

  return (
    <button
      onClick={handleClick}
      className="
        inline-flex items-center justify-center
        w-[578px] h-10
        pt- pb-[11px] px-[30px]
        rounded-[50px]
        bg-[#4443e4]
        text-white text-[13px] font-medium
        cursor-pointer
      "
    >
      DemoButton
    </button>
  );
}
