// src/screen1/Dashboard1.jsx
import { useState, useEffect } from "react";

import BulbIcon from "../assets/bulb.svg";
import UpdateKnowledgeButton from "../buttons/UpdateKnowledgeButton.jsx";
import AIAvatarInterface from "../interface/AIAvatarInterface.jsx";
import ChatWithBotInterface from "../interface/ChatWithBotInterface.jsx";
import UploadKnowledgeBaseContainer from "../interface/UploadKnowlodgeBaseContainer.jsx";
import WelcomeScreen from "../interface/WelcomeScreen.jsx";
import ProductDemoHeader from "../interface/PrroductDemoHeader.jsx";

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

  // Lock scroll on this page (same as before)
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "true";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#F5F7FB] flex flex-col relative">
      {/* Top navigation bar (replaced with shared header) */}
      <ProductDemoHeader />

      {/* Main content */}
      <main className="flex-1 w-full">
        {/* FULL-WIDTH strip for Product Demo Assistant + button */}
        <div className="w-full bg-white border-b border-white">
          <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2">
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
        <div className="max-w-6xl mx-auto px-4 md:px-6 pt-4 pb-10 -mt-3">
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
