import { useState } from "react";

import NodaIcon from "../assets/noda-icon.svg";
import BulbIcon from "../assets/bulb.svg";
import HeaderRightTop from "../interface/HeaderRightTopInterface.jsx";
import AlarmIcon from "../assets/alarm-icon.svg";
import FemaleIcon from "../assets/female-icon.svg";
import { Button } from "../components/ui/button";
import AIAvatarInterface from "../interface/AIAvatarInterface.jsx";
import ChatWithBotInterface from "../interface/ChatWithBotInterface.jsx";
import UploadKnowledgeBaseContainer from "../interface/UploadKnowledgeBaseContainer.jsx";
import WelcomeScreenInterface from "../interface/WelcomeScreenInterface.jsx";

export default function ProductDemo() {
  const [showUploadPanel, setShowUploadPanel] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div>
      {/* Top navigation bar */}
      <header className="w-full bg-[#FFFFFF] border-b border-[#bfc1d3] -mb-1">
        <div className="max-w-10xl mx-18 flex items-center justify-between px-4 md:px-6 py-1">
          <div className="flex items-center gap-2">
            <img src={NodaIcon} alt="Noda Technologies" className="h-14 w-auto" />
          </div>

          <div className="flex items-center gap-2">
            <HeaderRightTop />
            <div className="h-10 w-px bg-[#b4bcc9]" />

            <button
              type="button"
              className="hidden sm:flex items-center justify-center w-18 h-18 rounded-full"
            >
              <img src={AlarmIcon} alt="Notifications" />
            </button>

            <div>
              <img
                src={FemaleIcon}
                alt="Profile"
                className="w-10 h-10 mr-5 ml-1 rounded-full"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 w-full">
        <div className="w-full bg-[#FFFFFF] h-[200] border border-[#bfc0d0]">
          <div className="max-w-8xl mx-18 px-3 md:px-6 py-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center rounded-full">
                <img src={BulbIcon} alt="Idea" className="h-10 w-10" />
              </span>
              <h1 className="text-xl md:text-2xl font-semibold text-[#2F3542]">
                Product Demo Assistant
              </h1>
            </div>

            <div className="self-start md:self-auto">
              <Button
                onClick={() => {
                  if (showWelcome) return; // prevent opening behind welcome
                  setShowUploadPanel(true);
                }}
                variant="default"
                size="2xl"
                radius="full"
                width="205px"
              >
                Upload Knowledge Base
              </Button>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 md:px-6 pt-4 pb-6">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-center gap-4">
            <section className="lg:w-auto">
              <AIAvatarInterface />
            </section>

            <section className="lg:w-auto">
              <ChatWithBotInterface />
            </section>
          </div>
        </div>
      </main>

      {/* Welcome overlay */}
      {showWelcome && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/20 backdrop-blur-[2px]">
          <WelcomeScreenInterface onStartDemo={() => setShowWelcome(false)} />
        </div>
      )}

      {/* ✅ Upload modal overlay (centered + instant) */}
      {showUploadPanel && !showWelcome && (
        <div className="fixed inset-0 z-50">
          {/* overlay */}
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"
            onClick={() => setShowUploadPanel(false)} // click outside closes
          />

          {/* modal mount (center) */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* small scale/fade animation (requires keyframes in CSS) */}
            <div className="animate-[modalIn_160ms_ease-out]">
              <UploadKnowledgeBaseContainer onClose={() => setShowUploadPanel(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
