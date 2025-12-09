// src/screens/SitemapGeneratedHome.jsx
import { useState } from "react";

import ComplexHeaderInterface from "../interface/ComplexHeaderInterface.jsx";
import BackToDashBoardButton from "../buttons/BackToDashBoardButton.jsx";
import GenerateSiteMapButton from "../buttons/GenerateSiteMapButton.jsx";
import PreviousButton from "../buttons/PreviousButton.jsx";
import NextButton from "../buttons/NextButton.jsx";
import IncreasingDotsInterface from "../interface/IncreasingDotsInterface.jsx";
import EnterWebsiteLinkInterface from "../interface/EnterWebsiteLinkInterface.jsx";
import SitemapGeneratedButton from "../buttons/SiteMapGeneratedButton.jsx";
import Table21 from "../Tables/Table21.jsx";

export default function SitemapGeneratedHome() {
  const [isGenerated, setIsGenerated] = useState(false);

  const handleGenerateClick = () => {
    setIsGenerated(true);
  };

  return (
    <div className="w-full h-screen flex flex-col">
      {/* Top header */}
      <ComplexHeaderInterface />

      {/* Main content */}
      <main className="flex-1 w-full flex flex-col items-center px-4">
        {/* Back to Dashboard */}
        <div className="w-full max-w-[1030px] mt-6 mb-4">
          <BackToDashBoardButton />
        </div>

        {/* Stepper */}
        <div className="w-full max-w-[1030px]">
          <IncreasingDotsInterface />
        </div>

        {/* Center content */}
        <section className="w-full max-w-[1030px] mt-8 flex flex-col items-center text-center">
          {/* Description text */}
          <p className="max-w-[820px] text-[14px] -mt-3 leading-[20px] font-medium text-[#0c0b0d] font-medium">
            Give us your website link. We&apos;ll send a smart program to read
            all of your pages and map out how everything is connected. Then,
            our AI will figure out the top reasons people visit, so the bot
            knows how to quickly help them get what they need.
          </p>

          {/* Enter Website Link field */}
          <div className="mt-8 w-full flex justify-center">
            <div className="w-[833px] text-left">
              <EnterWebsiteLinkInterface />
            </div>
          </div>

          {/* Button area – switches after generation */}
          <div className="mt-6">
            {isGenerated ? (
              <SitemapGeneratedButton />
            ) : (
              <GenerateSiteMapButton onClick={handleGenerateClick} />
            )}
          </div>
        </section>

        {/* Bottom section when sitemap is generated */}
        {isGenerated ? (
          <section className="w-full max-w-[1030px] mt-10 mb-10 flex flex-col items-center">
            {/* Heading + table centered at 833px */}
            <div className="w-[833px]">
              <h2 className="text-[18px] font-medium text-[#111827] mb-4 text-left">
                Generate Sitemap
              </h2>

              <div className="border border-[#E5E7EB] rounded-[4px] overflow-hidden bg-white">
                <Table21 />
              </div>
            </div>

            {/* Prev / Next full-width row, extremes left/right */}
            <div className="mt-10 mb-20 w-full flex items-center justify-between">
              <PreviousButton />
              <NextButton />
            </div>
          </section>
        ) : (
          // When sitemap not generated yet
          <div className="w-full max-w-[1030px] mt-40 mb-20 flex items-center justify-between">
            <PreviousButton />
            <NextButton />
          </div>
        )}
      </main>
    </div>
  );
}
