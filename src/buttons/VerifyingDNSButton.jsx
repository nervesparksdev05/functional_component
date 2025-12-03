export default function VerifyingDNSButton({ onClick }) {
  const handleClick = onClick || (() => {
    console.log("Verifying DNS...");
  });

  return (
    <button
      onClick={handleClick}
      className="
        inline-flex items-center justify-center
        w-[356px] h-[45px]
        rounded-[26px]
        border border-[#0000001A]
        bg-[#4443E40D]
        text-[18px] leading-[28px] font-normal
        text-[#2F3542]
        cursor-pointer
      "
    >
      Verifying DNS...
    </button>
  );
}