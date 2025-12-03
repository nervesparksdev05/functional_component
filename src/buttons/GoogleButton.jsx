import GoogleLogo from "../assets/logo-google.svg";

export default function GoogleButton() {
  const handleClick = () => {
    alert("GoogleButton!");
  };

  return (
    <button
      onClick={handleClick}
      className="
        inline-flex items-start justify-center gap-2
        w-[164px] h-9
        rounded-[18px]
        border border-[#171A1F]
        bg-white
        text-[#171A1F] text-[14px] font-normal
        cursor-pointer
        whitespace-nowrap
        pt-[10px]
      "
    >
      <img
        src={GoogleLogo}
        alt="Google logo"
        className="w-4 h-4 block"
      />

      <span className="leading-none">
        Google
      </span>
    </button>
  );
}