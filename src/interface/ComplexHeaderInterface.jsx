import NodaIcon from "../assets/noda-icon.svg";
import BulbIcon from "../assets/bulb.svg";
import Container2 from "../interface/Container2.jsx";
import AlarmIcon from "../assets/alarm-icon.svg";
import FemaleIcon from "../assets/female-icon.svg";
import BotIcon from "../assets/bot.svg";

export default function ComplexHeaderInterface() {
  return (
    <header className="w-full bg-white">
      {/* Top bar – 76px height */}
      <div className="w-full h-[76px] border-b border-[#E5E7EB] flex items-center">
        <div className="w-full flex items-center justify-between px-4 md:px-6">
          {/* Left: logo */}
          <div className="flex items-center">
            <img
              src={NodaIcon}
              alt="Noda Technologies"
              className="h-10 w-auto ml-8"
            />
          </div>

          {/* Right: tabs + divider + bell + profile */}
          <div className="flex items-center gap-2">
            <Container2 />

            {/* Vertical divider between Help and bell */}
            <div className="h-6 w-px bg-[#E5E7EB]" />

            {/* Bell icon */}
            <button
              type="button"
              className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full"
            >
              <img src={AlarmIcon} alt="Notifications" className="w-12 h-12" />
            </button>

            {/* Profile avatar */}
            <div className="hidden sm:block w-9 h-9 rounded-full overflow-hidden bg-[#E5E7EB] mr-12">
              <img
                src={FemaleIcon}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar – 68px height */}
      <div className="w-full h-[68px] border-b border-[#E5E7EB] flex items-center">
        <div className="w-full flex items-center px-4 md:px-6">
          {/* Bot label (left-aligned with logo above) */}
          <div className="flex items-center gap-2 ml-8">
            <img src={BotIcon} alt="Bot" className="w-7 h-7" />
            <span className="text-[18px] font-medium text-[#171A1F]">
              Navigation Helper Bot
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
