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

  // Slide-in animation for the upload panel
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

  // 🔒 Lock body scroll whenever any overlay is open
  useEffect(() => {
    const hasOverlay = showWelcome || showUploadPanel;

    if (hasOverlay) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // cleanup on unmount just in case
    return () => {
      document.body.style.overflow = "";
    };
  }, [showWelcome, showUploadPanel]);

  return (
    <div className="w-full min-h-screen bg-[#F5F7FB] flex flex-col relative">
      {/* Top navigation bar – full-width white bar with bottom border */}
      <header className="w-full bg-white border-b border-white -mt-4 -mb-2">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={NodaIcon}
              alt="Noda Technologies"
              className="h-12 w-auto"
            />
          </div>

          {/* Tabs + actions */}
          <div className="flex items-center gap-2">
            <Container2 />

            {/* Bell icon */}
            <button
              type="button"
              className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full"
            >
              <img src={AlarmIcon} alt="Notifications" className="w-8 h-8" />
            </button>

            {/* Profile avatar */}
            <div className="hidden sm:block w-9 h-9 rounded-full overflow-hidden bg-[#E5E7EB]">
              <img
                src={FemaleIcon}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 w-full">
        {/* FULL-WIDTH strip for Product Demo Assistant + button */}
        <div className="w-full bg-white border-b border-white">
          <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2">
              {/* Lightbulb icon */}
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm border border-[#E5E7EB]">
                <img src={BulbIcon} alt="Idea" className="h-6 w-6" />
              </span>
              <h1 className="text-xl md:text-2xl font-semibold text-[#2F3542]">
                Product Demo Assistant
              </h1>
            </div>

            {/* Update Knowledge Base button */}
            <div className="self-start md:self-auto">
              <UpdateKnowledgeButton
                onClick={() => setShowUploadPanel(true)}
              />
            </div>
          </div>
        </div>

        {/* Content below (avatar + chat) */}
        <div className="max-w-6xl mx-auto px-4 md:px-6 pt-4 pb-10">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-center gap-2">
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

      {/* Welcome overlay (center card + blurred background) */}
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
