// src/interface/CreateNewChatBotInterface.jsx
import CreateNewChatBotButton from "../buttons/CreateNewChatBotButton.jsx";
import { Routes, Route } from "react-router-dom";


export default function CreateNewChatBotInterface() {
  return (
    <div className="w-full flex justify-center">
      <div
        className="
          w-[1030px]
          rounded-[10px]
          border border-[#E5E7EB]/80
          bg-[#4443E40D]
          flex flex-col items-center justify-center
          text-center
          py-10
        "
      >
        <h2 className="text-[24px] leading-[32px] font-semibold text-[#323743] mb-3">
          Create New Chat Bot
        </h2>

        <p className="max-w-[600px] text-[14px] leading-[22px] text-[#000000] mb-6">
          To create a new Chat Bot without writing a single line of code, just
          click this button to get started!
        </p>

        <CreateNewChatBotButton />
      </div>
    </div>
  );
}
