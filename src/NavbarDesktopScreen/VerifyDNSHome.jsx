// src/screen2/VerifyDNSHome.jsx
import { useState } from "react";

import ComplexHeaderInterface from "../components/interface/ComplexHeaderInterface.jsx";
import { Button } from "../components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import BlueArrowIcon from "../assets/blue-arrow.svg";
import IncreasingDotsInterface from "../components/interface/IncreasingDotsInterface.jsx";
import DNSTableInterface from "../tables/DNSTable.jsx";

export default function VerifyDNSHome({ onNext, onPrevious }) {
  const [isVerified, setIsVerified] = useState(false);

  const handleVerifyClick = () => {
    setIsVerified(true);
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Top header */}
      <ComplexHeaderInterface />

      {/* Main content */}
      <main className="flex-1 w-full flex flex-col items-center px-4">
        {/* Back to Dashboard */}
        <div className="w-full max-w-[1030px] mt-3 mb-2">
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

        {/* Central content */}
        <section className="w-full max-w-[1030px] mt-16 flex flex-col items-center">
          <p className="max-w-[900px] -mt-14 text-[15px] leading-[20px] text-[#0c0b0d] font-semibold text-center">
            Verify that your domain is accessible and ready for bot deployment.
            This ensures the widget will work properly on your website.
          </p>

          {/* Button area */}
          <div className="mt-4 w-full flex justify-center">
            {isVerified ? (
              <Button
                variant="muted"
                size="lg"
                radius="2xl"
                width="356px"
                loading
                disabled
              >
                Verifying DNS...
              </Button>
            ) : (
              <Button
                onClick={handleVerifyClick}
                variant="default"
                size="lg"
                radius="2xl"
                width="356px"
              >
                Verify DNS
              </Button>
            )}
          </div>

          {/* Verified DNS area – only after click */}
          {isVerified && (
            <div className="mt-4 w-full flex flex-col items-center gap-3">
              <DNSTableInterface />

              {/* Success message */}
              <div
                className="
                  w-[546px]
                  rounded-[15px]
                  border border-[#2ECB29]
                  bg-[#29CB2E03]
                  px-6 py-4
                  text-left
                "
              >
                <p className="text-[15px] text-[#2ECB29] font-semibold">
                  Great! Your DNS has been verified
                </p>
              </div>

              {/* Error message */}
              <div
                className="
                  w-[546px]
                  rounded-[15px]
                  border border-[#CB2936]
                  bg-[#CB29360D]
                  px-6 py-3
                  text-left
                "
              >
                <p className="text-[15px] text-[#CB2936] font-medium">
                  Oops! We couldn&apos;t verify your DNS because a bot is
                  already registered and active under this domain.
                </p>
              </div>
            </div>
          )}
        </section>

        {/* Bottom navigation – DIFFERENT spacing before vs after verify */}
        {!isVerified ? (
          // Before clicking "Verify DNS" → push buttons lower
          <div className="w-full max-w-[1030px] mt-70 mb-3 flex justify-between">
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
        ) : (
          // After DNS is verified → a bit closer to content
          <div className="w-full max-w-[1030px] mt-2 mb-3 flex justify-between">
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
