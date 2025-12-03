export default function DoneAndProcessingButton({ onClick }) {
  const handleClick = onClick || (() => {
    console.log("Done & Start Processing clicked");
  });

  return (
    <button
      onClick={handleClick}
      className="
        inline-flex items-center justify-center
        h-[36px] w-[183px]
        rounded-[8px]
        bg-[#4443E4]
        px-[14px]
        text-white text-[14px] leading-[20px] font-medium
        cursor-pointer
      "
    
    >
      Done &amp; Start Processing
    </button>
  );
}
