// src/screen2/LastHome.jsx
import ComplexHeaderInterface from "../interface/ComplexHeaderInterface.jsx";
import TickDotInterface from "../interface/TickDotInterface.jsx";
import BackToDashBoardButton from "../buttons/BackToDashBoardButton.jsx";
import DownloadFileButton from "../buttons/DownloadFileButton.jsx";

import SearchIcon from "../assets/search-icon.svg";
import HandIcon from "../assets/hand-icon.svg";
import BuildingIcon from "../assets/building-icon.svg";
import DotsLine from "../assets/dots-line.svg";

export default function LastHome() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#F5F7FB]">
      {/* Top header */}
      <ComplexHeaderInterface />

      {/* Main content */}
      <main className="flex-1 w-full flex flex-col items-center px-4">
        {/* Back to Dashboard */}
        <div className="w-full max-w-[1030px] mt-6 mb-4">
          <BackToDashBoardButton />
        </div>

        {/* Full completed stepper */}
        <div className="w-full max-w-[1030px]">
          <TickDotInterface />
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

          <DownloadFileButton />

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
                className="w-[90px] h-[90px] mb-4 flex-shrink-0"
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
                className="w-[90px] h-[90px] mb-4 flex-shrink-0"
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
                className="w-[90px] h-[90px] mb-4 flex-shrink-0"
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