// src/screens/NavbarDesktopScreen/NavbarDesktop.jsx
import { useState } from "react";

import SignUp from "../../components/SignUp.jsx";
import Login from "../../components/Login.jsx";
import Home1 from "./Navbot-Dashboard.jsx";
import ExtendedChatBotHome from "./ExtendedChatBotHome.jsx";
import UploadDocumentHome from "./UploadDocumentHome.jsx";
import SitemapGeneratedHome from "./SitemapGeneratedHome.jsx";
import CustomGoalsHome from "./CustomGoalsHome.jsx";
import ChatBotHome from "./ChatBotHome.jsx";
import VerifyDNSHome from "./VerifyDNSHome.jsx";
import WidgetHome from "./WidgetHome.jsx";
import LastHome from "./LastPage-DownloadScreen.jsx";

const STEPS = [
  { id: "signup", Component: SignUp },
  { id: "login", Component: Login },
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

export default function NavbarDesktop() {
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
