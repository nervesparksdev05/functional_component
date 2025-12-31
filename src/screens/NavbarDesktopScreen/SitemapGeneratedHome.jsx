// src/screens/NavbarDesktopScreen/SitemapGeneratedHome.jsx
import { useState } from "react";

import Navbar from "../../components/Navbar.jsx";
import { Button } from "../../components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import BlueArrowIcon from "../../assets/blue-arrow.svg";
import IncreasingDotsInterface from "../../components/interface/IncreasingDotsInterface.jsx";
import ApllloTable from "../../components/tables/ApllloTable.jsx";

export default function SitemapGeneratedHome({ onNext, onPrevious }) {
  const [isGenerated, setIsGenerated] = useState(false);

  const handleGenerateClick = () => {
    setIsGenerated(true);
  };

  return (
    <div className="w-full h-screen flex flex-col">
      {/* Top header */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1 w-full flex flex-col items-center px-4">
        {/* Back to Dashboard */}
        <div className="w-full max-w-[1030px] mt-2 mb-2">
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

        {/* Stepper */}
        <div className="w-full max-w-[1030px]">
          <IncreasingDotsInterface />
        </div>

        {/* Center content */}
        <section className="w-full max-w-[1030px] mt-2 flex flex-col items-center text-center">
          {/* Description text */}
          <p className="max-w-[820px] text-[14px] leading-[20px] font-medium text-[#0c0b0d]">
            Give us your website link. We&apos;ll send a smart program to read
            all of your pages and map out how everything is connected. Then,
            our AI will figure out the top reasons people visit, so the bot
            knows how to quickly help them get what they need.
          </p>

          {/* Enter Website Link field */}
           <div className="mt-6 ml-8 w-full flex justify-center">
            <div className="w-[833px] text-left">
              <div className="w-full flex flex-col">
                <label className="text-[18px] leading-[20px] text-[#171A1F] mb-1 font-medium">
                  Enter Website Link
                </label>
                <input
                  type="url"
                  placeholder="www.example.in Or https://example.in/"
                  className="
                    w-[833px] h-[35px]
                    rounded-[10px]
                    border border-[#D3D8E3]
                    bg-white
                    px-3
                    text-[14px] text-[#171A1F]
                    placeholder:text-[#9CA3AF]
                    outline-none
                  "
                />
              </div>
            </div>
          </div>

          {/* Button area – switches after generation */}
          <div className="mt-4">
            {isGenerated ? (
              <Button
                variant="muted"
                size="lg"
                radius="2xl"
                width="356px"
                loading
                disabled
              >
                Generated SiteMap...
              </Button>
            ) : (
              <Button
                onClick={handleGenerateClick}
                variant="default"
                size="lg"
                radius="2xl"
                width="272px"
              >
                Generate SiteMap
              </Button>
            )}
          </div>
        </section>

        {/* Bottom section when sitemap is generated */}
        {isGenerated ? (
          <section className="w-full max-w-[1030px] mt-4 mb-1 flex flex-col items-center">
            {/* Heading + table centered at 833px */}
            <div className="w-[833px]">
              <h2 className="text-[19px] font-medium text-[#111827] mb-2 ml-5 text-left">
                Generate Sitemap
              </h2>

              <div className="border border-[#E5E7EB] rounded-[4px] ml-5 bg-white">
                <ApllloTable/>
              </div>
            </div>

            {/* Prev / Next full-width row, extremes left/right */}
            <div className="mt-6 mb-2 w-full flex items-center justify-between">
              <Button
                onClick={onPrevious}
                variant="outline"
                size="default"
                radius="md"
                width="112px"
                leftIcon={<ArrowLeft size={16} className="text-[#374151]" />}
                className="text-[13px] font-medium text-[#374151] hover:bg-[#F3F4F6]"
              >
                Previous
              </Button>
              <Button
                onClick={onNext}
                variant="default"
                size="default"
                radius="md"
                width="87px"
                rightIcon={<ArrowRight size={16} className="text-white" />}
              >
                Next
              </Button>
            </div>
          </section>
        ) : (
          // When sitemap not generated yet
          <div className="w-full max-w-[1030px] mt-40 mb-2 flex items-center justify-between">
            <Button
              onClick={onPrevious}
              variant="outline"
              size="default"
              radius="md"
              width="112px"
              leftIcon={<ArrowLeft size={16} className="text-[#374151]" />}
              className="text-[13px] font-medium text-[#374151] hover:bg-[#F3F4F6]"
            >
              Previous
            </Button>
            <Button
              onClick={onNext}
              variant="default"
              size="default"
              radius="md"
              width="87px"
              rightIcon={<ArrowRight size={16} className="text-white" />}
            >
              Next
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}
