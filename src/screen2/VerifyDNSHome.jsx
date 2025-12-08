// src/screens/VerifyDNSHome.jsx
import { useState } from "react";

import ComplexHeaderInterface from "../interface/ComplexHeaderInterface.jsx";
import BackToDashBoardButton from "../buttons/BackToDashBoardButton.jsx";
import IncreasingDotsInterface from "../interface/IncreasingDotsInterface.jsx";
import VerifyDnsButton from "../buttons/VerifyDnsButton.jsx";
import VerifyingDNSButton from "../buttons/VerifyingDNSButton.jsx";
import DNSTableInterface from "../tables/DNSTable.jsx";
import PreviousButton from "../buttons/PreviousButton.jsx";
import NextButton from "../buttons/NextButton.jsx";

export default function VerifyDNSHome() {
  // Has the user clicked "Verify DNS"?
  const [isVerified, setIsVerified] = useState(false);

  const handleVerifyClick = () => {
    // later you can plug in real API logic here
    setIsVerified(true);
  };

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

        {/* Stepper */}
        <div className="w-full max-w-[1030px]">
          <IncreasingDotsInterface />
        </div>

        {/* Central content (text + button + table + messages) */}
        <section className="w-full max-w-[1030px] mt-16 flex flex-col items-center">
          {/* Description */}
          <p className="max-w-[900px] text-[15px] leading-[20px] text-[#0c0b0d] font-semibold text-center">
            Verify that your domain is accessible and ready for bot deployment.
            This ensures the widget will work properly on your website.
          </p>

          {/* Button area */}
          <div className="mt-8 w-full flex justify-center">
            {isVerified ? (
              <VerifyingDNSButton />
            ) : (
              <VerifyDnsButton onClick={handleVerifyClick} />
            )}
          </div>

          {/* Verified DNS area – only after click */}
          {isVerified && (
            <div className="mt-6 w-full flex flex-col items-center gap-3">
              {/* Table */}
              <DNSTableInterface />

              {/* Success message – reduced width */}
              <div className="w-[700px] rounded-[8px] border border-[#16A34A] bg-white px-6 py-3 text-center">
                <p className="text-[14px] text-[#16A34A] font-medium">
                  Great! Your DNS has been verified
                </p>
              </div>

              {/* Error message – reduced width */}
              <div className="w-[700px] rounded-[8px] border border-[#EF4444] bg-white px-6 py-3 text-center">
                <p className="text-[14px] text-[#B91C1C]">
                  Oops! We couldn&apos;t verify your DNS because a bot is
                  already registered and active under this domain.
                </p>
              </div>
            </div>
          )}
        </section>

        {/* Bottom navigation */}
        <div className="w-full max-w-[1030px] mt-auto mb-8 flex justify-between">
          <PreviousButton />
          <NextButton />
        </div>
      </main>
    </div>
  );
}
