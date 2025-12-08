import { useNavigate } from "react-router-dom";

export default function CreateNewChatbotButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/upload-documents");
  };

  return (
    <button
      onClick={handleClick}
      className="
        inline-flex items-center justify-center
        w-[250px] h-10
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
