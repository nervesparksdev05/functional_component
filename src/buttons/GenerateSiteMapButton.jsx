export default function GenerateSiteMapButton({ onClick }) {
  const handleClick = onClick || (() => {
    console.log("Generate SiteMap clicked");
  });

  return (
    <button
      onClick={handleClick}
      className="
        inline-flex items-center justify-center
        w-[356px] h-[45px]
        rounded-[26px]
        bg-[#4443E4]
        border border-[#00000000]
        text-white text-[18px] leading-[28px] font-normal
        cursor-pointer
      "
    >
      Generate SiteMap
    </button>
  );
}