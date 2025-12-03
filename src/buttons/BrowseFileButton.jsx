export default function BrowseFilesButton({ onClick }) {
  const handleClick = onClick || (() => {
    console.log("Browse files clicked");
  });

  return (
    <button
      onClick={handleClick}
      className="
        inline-flex flex-none items-center justify-center
        w-[100px] h-[35px]
        rounded-[6px]
        bg-[#4443E4]
        border border-[#00000000]
        text-[14px] leading-[22px] font-normal
        text-white text-center
        cursor-pointer
      "
      style={{
        fontFamily:
          '"Open Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      Browse files
    </button>
  );
}