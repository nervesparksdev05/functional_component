import NodaIcon from "../assets/noda-icon.svg";
import HeaderRightTop from "../interface/HeaderRightTopInterface.jsx";
import AlarmIcon from "../assets/alarm-icon.svg";
import FemaleIcon from "../assets/female-icon.svg";
import BulbIcon from "../assets/bulb.svg";

export default function ComplexHeaderInterface() {
  return (
    <header className="w-full bg-[#FFFFFF]">
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
            <HeaderRightTop />

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
            <div >
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
          {/* Bot label (left-aligned with logo above) */}
          <div className="flex items-center gap-2 ml-18">
            <img src={BulbIcon} alt="Bot" className="w-7 h-7" />
            <span className="text-[18px] font-medium text-[#171A1F]">
              Product Demo Assistant
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
