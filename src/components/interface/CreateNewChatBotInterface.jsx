import { Button } from "../ui/button";

export default function CreateNewChatBotInterface() {
  return (
    <div className="w-full flex justify-center">
      <div
        className="
          w-[1030px]
          rounded-[10px]
          border border-[#4443E480]
          bg-[#4443E40D]
          flex flex-col items-center justify-center
          text-center
          py-7
        "
      >
        <h2 className="text-[24px] leading-[32px] font-medium text-[#323743] mb-3">
          Create New Chat Bot
        </h2>

        <p className="max-w-[458px] h-[44px] leading-[22px] text-[#000000] mb-3">
          To create a new Chat Bot without writing a single line of code, just
          click this button to get started!
        </p>

        <Button
          variant="default"
          size="md"
          radius="xl"
          width="250px"
          leftIcon={<span>+</span>}
          className="mb-5"
        >
          Start creating new chat bot
        </Button>
      </div>
    </div>
  );
}
