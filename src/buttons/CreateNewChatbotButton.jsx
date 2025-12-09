
export default function CreateNewChatbotButton() {
  const handleClick = () => {
    alert("CreateNewChatbotButton!");
  };

  return (
    <button
      onClick={handleClick}
      className="
        inline-flex items-center justify-center
        w-[250px] h-[40px]
        mb-5
        rounded-[18px]
        bg-[#4443E4]
        px-4
        text-white text-[14px] leading-[22px] font-medium
        cursor-pointer
      "
    >
      + Start creating new chat bot
    </button>
  );
}
