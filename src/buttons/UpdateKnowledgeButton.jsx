export default function UpdateKnowledgeButton() {
  const handleClick = () => {
    alert("UpdateKnowledgeButton!");
  };

  return (
    <button
      onClick={handleClick}
      className="
        inline-flex items-center justify-center
        w-[205px] h-10
        rounded-[50px]
        pt-3 pb-[11px] px-[30px]
        bg-[#4443E4]
        text-white text-[13px] font-medium leading-none
        cursor-pointer
      "
    >
      Upload Knowledge Base
    </button>
  );
}
