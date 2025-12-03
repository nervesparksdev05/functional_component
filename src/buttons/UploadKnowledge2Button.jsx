export default function UploadKnowledge2Button() {
  const handleClick = () => {
    alert("UploadKnowledge2Button!");
  };

  return (
    <button
      onClick={handleClick}
      className="
        inline-flex items-center justify-center
        w-[128px] h-[35px]
        rounded-[15px]
        bg-[#4443E4]
        pt-[12px] pb-[11px] px-[30px]
        text-white text-[10px] font-medium leading-none
        cursor-pointer
      "
    >
      Upload Knowledge Base
    </button>
  );
}
