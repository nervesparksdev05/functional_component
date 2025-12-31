// src/screens/NavbarDesktopScreen/Home1.jsx
import Navbar from "../../components/Navbar.jsx";
import RecentChatBotTable from "../../components/tables/RecentChatBotTable.jsx";
import { Button } from "../../components/ui/button.jsx";

export default function NavbotDashboard({ onNext }) {
  return (
    <div className="w-full h-screen flex flex-col bg-[#F5F7FB]">
      {/* Top header */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1 w-full flex justify-center px-4">
        <div className="w-full max-w-[1030px] flex flex-col gap-5 pt-6 pb-6">
          {/* Create New Chat Bot Card */}
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

          <RecentChatBotTable />

          {/* Show All -> go to ExtendedChatBotHome step */}
          <button
            type="button"
            onClick={onNext}
            className="text-[14px] font-medium text-[#4443E4] hover:underline self-center"
          >
            Show All
          </button>
        </div>
      </main>
    </div>
  );
}
