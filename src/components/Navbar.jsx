import { useState } from "react";
import NodaIcon from "../assets/noda-icon.svg";
import AlarmIcon from "../assets/alarm-icon.svg";
import FemaleIcon from "../assets/female-icon.svg";
import BotIcon from "../assets/bot.svg";
import SlackIcon from "../assets/slack.svg";
import BulbIcon from "../assets/bulb.svg";

export default function Navbar({ 
  isLoggedIn = true,
  bottomBarIcon = BotIcon, 
  bottomBarText = "Navigation Helper Bot",
  bottomBarTextSize = "text-[18px]"
}) {
  const tabs = ["Dashboard", "Playbook", "Agent", "Help"];
  const [activeTab, setActiveTab] = useState("Agent");
  // If user is not logged in, show simple header (just logo)
  if (!isLoggedIn) {
    return (
      <header className="w-full h-[72px] bg-white flex items-center">
        <div className="w-full flex items-center px-8 md:px-8">
          <img src={NodaIcon} alt="Noda Technologies" className="h-12 w-auto ml-5" />
        </div>
      </header>
    );
  }

  // If user is logged in, show full navbar
  return (
    <header className="w-full bg-[#FFFFFF] sticky top-0 z-50">
      {/* Top bar – 76px height */}
      <div className="w-full h-[75.92px] border-b border-[#797a85] flex items-center">
        <div className="w-full flex items-center justify-between px-4 md:px-6">
          {/* Left: logo */}
          <div className="flex items-center">
            <img
              src={NodaIcon}
              alt="Noda Technologies"
              className="h-12 w-auto ml-18"
            />
          </div>

          {/* Right: tabs + divider + bell + profile */}
          <div className="flex items-center gap-2">
            {/* Header Right Top Tabs */}
            <div className="w-full flex justify-center py-4">
              <div
                className="
                  w-[299px] h-[40px]
                  rounded-[4px]
                  -mr-8
                  flex items-center justify-between
                  px-2
                "
              >
                {tabs.map((tab) => {
                  const isActive = tab === activeTab;
                  return (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                      className={`
                        flex items-center justify-center
                        w-[89px] h-[24px]
                        rounded-[5px]
                        px-[10px] py-[3px]
                        text-[14px] leading-[18px]
                        cursor-pointer
                        ${
                          isActive
                            ? "bg-[#d5daf2] text-[#4443E4]"
                            : "bg-transparent text-[#2F3542]"
                        }
                      `}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>
            </div>

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
                className="w-10 h-10 mr-30 ml-1 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar – 68px height */}
      <div className="w-full h-[68px] border-b border-[#797a85] flex items-center">
        <div className="w-full flex items-center px-4 md:px-6">
          <div className="flex items-center gap-2 ml-18">
            <img src={bottomBarIcon} alt="Icon" className="w-7 h-7" />
            <span className={`${bottomBarTextSize} font-medium text-[#171A1F]`}>
              {bottomBarText}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

