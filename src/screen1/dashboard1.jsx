import { useState, useEffect } from "react";

import NodaIcon from "../assets/noda-icon.svg";
import BulbIcon from "../assets/bulb.svg";
import Container2 from "../interface/Container2.jsx";
import AlarmIcon from "../assets/alarm-icon.svg";
import FemaleIcon from "../assets/female-icon.svg";
import UpdateKnowledgeButton from "../buttons/UpdateKnowledgeButton.jsx";
import AIAvatarInterface from "../interface/AIAvatarInterface.jsx";
import ChatWithBotInterface from "../interface/ChatWithBotInterface.jsx";
import UploadKnowledgeBaseContainer from "../interface/UploadKnowlodgeBaseContainer.jsx";
import WelcomeScreen from "../interface/WelcomeScreen.jsx";

export default function Dashboard1() {
  const [showUploadPanel, setShowUploadPanel] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [panelSlideIn, setPanelSlideIn] = useState(false);

  useEffect(() => {
    if (showUploadPanel) {
      setPanelSlideIn(false);
      const id = requestAnimationFrame(() => {
        setPanelSlideIn(true);
      });
      return () => cancelAnimationFrame(id);
    } else {
      setPanelSlideIn(false);
    }
  }, [showUploadPanel]);

  return (
    <div>
      {/* Top navigation bar – full-width white bar with bottom border */}
      <header className="w-full bg-[#FFFFFF] border-b border-[#bfc1d3] -mt-4 -mb-1">
        <div className="max-w-10xl mx-18 flex items-center justify-between px-4 md:px-6 py-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={NodaIcon}
              alt="Noda Technologies"
              className="h-14 w-auto"
            />
          </div>

          {/* Tabs + actions */}
          <div className="flex items-center gap-2">
            <Container2 />

            {/* Vertical divider between Help and bell */}
            <div className="h-10 w-px bg-[#b4bcc9]" />

            {/* Bell icon */}
            <button
              type="button"
              className="hidden sm:flex items-center justify-center w-18 h-18 rounded-full "
            >
              <img src={AlarmIcon} alt="Notifications" />
            </button>

            {/* Profile avatar */}
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
      <main className="flex-1 w-full ">
        {/* FULL-WIDTH strip for Product Demo Assistant + button */}
        <div className="w-full bg-[#FFFFFF] h-[200] border border-[#bfc0d0] ">
          <div className="max-w-8xl mx-18 px-3 md:px-6 py-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2">
              {/* Lightbulb icon */}
              <span className="inline-flex items-center justify-center rounded-full">
                <img src={BulbIcon} alt="Idea" className="h-10 w-10" />
              </span>
              <h1 className="text-xl md:text-2xl font-semibold text-[#2F3542]">
                Product Demo Assistant
              </h1>
            </div>

            {/* Update Knowledge Base button */}
            <div className="self-start md:self-auto">
              <UpdateKnowledgeButton onClick={() => setShowUploadPanel(true)} />
            </div>
          </div>
        </div>

        {/* Content below (avatar + chat) */}
        <div className="max-w-6xl mx-auto px-4 md:px-6 pt-4 pb-6">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-center gap-4">
            {/* Left: AI Avatar card */}
            <section className="lg:w-auto">
              <AIAvatarInterface />
            </section>

            {/* Right: Chat card */}
            <section className="lg:w-auto">
              <ChatWithBotInterface />
            </section>
          </div>
        </div>
      </main>

      {/* Welcome overlay */}
      {showWelcome && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/20 backdrop-blur-[2px]">
          <WelcomeScreen onStartDemo={() => setShowWelcome(false)} />
        </div>
      )}

      {/* Upload panel – slide in on the RIGHT (only after welcome is gone) */}
      {showUploadPanel && !showWelcome && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/20 backdrop-blur-[2px]">
          <div
            className={`
              h-full flex items-start pt-4 pr-4
              transform transition-transform duration-300
              ${panelSlideIn ? "translate-x-0" : "translate-x-full"}
            `}
          >
            <UploadKnowledgeBaseContainer
              onClose={() => setShowUploadPanel(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
