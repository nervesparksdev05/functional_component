// src/screens/NavbarDesktopScreen/LastHome.jsx
import Navbar from "../../components/Navbar.jsx";
import { Button } from "../../components/ui/button.jsx";
import BlueArrowIcon from "../../assets/blue-arrow.svg";
import TickIcon from "../../assets/TickIcon.svg";
import SearchIcon from "../../assets/search-icon.svg";
import HandIcon from "../../assets/hand-icon.svg";
import BuildingIcon from "../../assets/building-icon.svg";
import DotsLine from "../../assets/dots-line.svg";

export default function LastHome() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#F5F7FB]">
      {/* Top header */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1 w-full flex flex-col items-center px-4">
        {/* Back to Dashboard */}
        <div className="w-full max-w-[1030px] mt-6 mb-4">
          <Button
            type="button"
            variant="ghost"
            size="default"
            radius="default"
            leftIcon={<img src={BlueArrowIcon} alt="Back" className="w-6 h-6" />}
            className="text-[21px] text-[#4443E4] font-normal"
          >
            Back to Dashboard
          </Button>
        </div>

        {/* Full completed stepper */}
        <div className="w-full max-w-[1030px]">
          <div className="w-full flex justify-center py-4">
            <div
              className="
                w-[1100px] h-[80px]
                rounded-[6px]
                bg-white
                px-8
                flex flex-col justify-center
              "
            >
              <div className="relative w-full pt-2">
                {/* Base line (light grey) */}
                <div
                  className="
                    absolute
                    left-[28px] right-[28px]
                    top-[18px]
                    h-[3px]
                    bg-[#D1D5DB]
                    rounded-full
                  "
                />

                {/* Completed progress line (full purple) */}
                <div
                  className="
                    absolute
                    left-[28px] right-[28px]
                    top-[18px]
                    h-[3px]
                    bg-[#4443E4]
                    rounded-full
                  "
                />

                {/* Masks to hide line overshoot at the ends */}
                <div
                  className="
                    absolute left-0 top-[11px]
                    h-[18px] w-[40px]
                    bg-white
                    pointer-events-none
                  "
                />
                <div
                  className="
                    absolute right-0 top-[11px]
                    h-[18px] w-[40px]
                    bg-white
                    pointer-events-none
                  "
                />

                {/* Circles + labels */}
                <div className="relative z-10 flex justify-between items-start">
                  {["Upload Sources", "Generate Sitemap", "Set Goals", "Try It Out", "DNS Verification", "Deploy Widget"].map((label) => (
                    <div
                      key={label}
                      className="flex flex-col items-center gap-1"
                      style={{ minWidth: 0 }}
                    >
                      {/* Circle with tick */}
                      <div
                        className="
                          flex items-center justify-center
                          w-7 h-7 rounded-full
                          border-[3px] border-[#4443E4]
                          bg-white
                        "
                      >
                        {/* Tick icon (small inline SVG) */}
                        <img src={TickIcon} alt="Tick" className="w-3 h-3" />
                      </div>

                      {/* Label */}
                      <span className="text-[13px] text-[#111827] font-semibold text-center">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Center content */}
        <section className="w-full max-w-[1030px] mt-8 flex flex-col items-center text-center">
          <p className="text-[13px] text-[#000000] font-semibold mb-2">
            Chat Bot backend code is Ready!!! You can copy the Code or Download
            Chat Bot code and integrate it into code
          </p>

          <p className="text-[15px] text-[#111827] mb-6">
            Click on this file to Start download your chat bot backend file
          </p>

          <Button
            variant="default"
            size="lg"
            radius="2xl"
            width="330px"
          >
            Download Your File
          </Button>

          <div className="mt-6 text-left max-w-[420px] text-[14px] leading-[18px] text-[#111827]">
            <p className="font-semibold mb-1">What you&apos;ll get in this file</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Complete code</li>
              <li>RAG (Retrieval-Augmented Generation) system</li>
              <li>Database models and API endpoints</li>
              <li>Installation instructions and requirements</li>
              <li>Environment configuration examples</li>
            </ul>
          </div>
        </section>

        {/* How to use this file? */}
        <section className="w-full max-w-[1030px] mt-16 mb-10 flex flex-col items-center text-center">
          <h2 className="text-[18px] font-semibold text-[#171A1F] mb-10">
            How to use this file?
          </h2>

          <div className="w-full flex items-start justify-center gap-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center w-[260px] h-[254px]">
              <img
                src={SearchIcon}
                alt="Search"
                className="w-[90px] h-[90px] mb-4 shrink-0"
              />
              <h3 className="text-[14px] font-semibold text-[#171A1F] mb-2">
                Lorem ipsum dolor
              </h3>
              <p className="text-[12px] leading-[18px] text-[#4B5563] text-center">
                Lorem ipsum dolor sit amet consectetur. Congue et fringilla
                dictum ac id elit porttitor interdum sit.
              </p>
            </div>

            {/* Dots */}
            <div className="flex items-center h-[90px]">
              <img
                src={DotsLine}
                alt="Step connector"
                className="w-[90px] h-auto opacity-90"
              />
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center w-[260px] h-[254px]">
              <img
                src={HandIcon}
                alt="Hand"
                className="w-[90px] h-[90px] mb-4 shrink-0"
              />
              <h3 className="text-[14px] font-semibold text-[#171A1F] mb-2">
                Lorem ipsum dolor
              </h3>
              <p className="text-[12px] leading-[18px] text-[#4B5563] text-center">
                Lorem ipsum dolor sit amet consectetur. Congue et fringilla
                dictum ac id elit porttitor interdum sit.
              </p>
            </div>

            {/* Dots */}
            <div className="flex items-center h-[90px]">
              <img
                src={DotsLine}
                alt="Step connector"
                className="w-[90px] h-auto opacity-90"
              />
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center w-[260px] h-[254px]">
              <img
                src={BuildingIcon}
                alt="Building"
                className="w-[90px] h-[90px] mb-4 shrink-0"
              />
              <h3 className="text-[14px] font-semibold text-[#171A1F] mb-2">
                Lorem ipsum dolor
              </h3>
              <p className="text-[12px] leading-[18px] text-[#4B5563] text-center">
                Lorem ipsum dolor sit amet consectetur. Congue et fringilla
                dictum ac id elit porttitor interdum sit.
              </p>
            </div>
          </div>

        </section>
      </main>
    </div>
  );
}