// src/screen2/VerifyDNSHome.jsx
import { useState } from "react";

import ComplexHeaderInterface from "../interface/ComplexHeaderInterface.jsx";
import BackToDashBoardButton from "../buttons/BackToDashBoardButton.jsx";
import IncreasingDotsInterface from "../interface/IncreasingDotsInterface.jsx";
import VerifyDnsButton from "../buttons/VerifyDnsButton.jsx";
import VerifyingDNSButton from "../buttons/VerifyingDNSButton.jsx";
import DNSTableInterface from "../tables/DNSTable.jsx";
import PreviousButton from "../buttons/PreviousButton.jsx";
import NextButton from "../buttons/NextButton.jsx";

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
          <BackToDashBoardButton />
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
              <VerifyingDNSButton />
            ) : (
              <VerifyDnsButton onClick={handleVerifyClick} />
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
            <PreviousButton onClick={onPrevious} />
            <NextButton onClick={onNext} />
          </div>
        ) : (
          // After DNS is verified → a bit closer to content
          <div className="w-full max-w-[1030px] mt-2 mb-3 flex justify-between">
            <PreviousButton onClick={onPrevious} />
            <NextButton onClick={onNext} />
          </div>
        )}
      </main>
    </div>
  );
}
