// src/screens/DashBoard2.jsx
import { useState } from "react";

import SignUpInterface from "../interface/SignUpInterface.jsx";
import LoginPage from "../interface/LoginInterface.jsx";
import Home1 from "../screen2/Home1.jsx";
import ExtendedChatBotHome from "../screen2/ExtendedChatBotHome.jsx";
import UploadDocumentHome from "../screen2/UploadDocumentHome.jsx";
import SitemapGeneratedHome from "../screen2/SitemapGeneratedHome.jsx";
import CustomGoalsHome from "../screen2/CustomGoalsHome.jsx";
import ChatBotHome from "../screen2/ChatBotHome.jsx";
import VerifyDNSHome from "../screen2/VerifyDNSHome.jsx";
import WidgetHome from "../screen2/WidgetHome.jsx";
import LastHome from "../screen2/LastHome.jsx";

const STEPS = [
  { id: "signup", Component: SignUpInterface },
  { id: "login", Component: LoginPage },
  { id: "home1", Component: Home1 },
  { id: "extendedChat", Component: ExtendedChatBotHome },
  { id: "upload", Component: UploadDocumentHome },
  { id: "sitemap", Component: SitemapGeneratedHome },
  { id: "goals", Component: CustomGoalsHome },
  { id: "chatbot", Component: ChatBotHome },
  { id: "verifyDns", Component: VerifyDNSHome },
  { id: "widget", Component: WidgetHome },
  { id: "last", Component: LastHome },
];

export default function DashBoard2() {
  const [stepIndex, setStepIndex] = useState(0);

  const goNext = () => {
    setStepIndex((prev) => (prev < STEPS.length - 1 ? prev + 1 : prev));
  };

  const goPrevious = () => {
    setStepIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const { Component } = STEPS[stepIndex];

  return (
    <Component
      onNext={goNext}
      onPrevious={goPrevious}
      currentStep={stepIndex}
      totalSteps={STEPS.length}
    />
  );
}
