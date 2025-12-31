export default function Footer() {
  return (
    <footer
      className="
        w-full h-[54px]
        bg-white
        flex items-center
      "
    >
      <div className="w-full flex items-center px-8 md:px-8">
        <p className="text-[12px] leading-[18px] text-[#9CA3AF] flex items-center gap-2">
          <span>Copyright©2025</span>
          <span className="h-4 w-px bg-[#E5E7EB]" />
          <button
            type="button"
            className="text-[#9CA3AF] hover:underline"
          >
            Privacy Policy
          </button>
        </p>
      </div>
    </footer>
  );
}

