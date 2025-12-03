export default function EndSessionButton({ onClick }) {
  const handleClick = onClick || (() => {
    console.log("End Session clicked");
  });

  return (
    <button
      onClick={handleClick}
      className="
        inline-flex items-center justify-center
        h-[34.35px] w-[113px]
        rounded-[15px]
        bg-[#F73F49]
        pt-3 pb-[11px] px-[30px]
        text-white text-[10px] font-medium leading-[1] tracking-tight
        cursor-pointer
      "
    >
      End Session
    </button>
  );
}