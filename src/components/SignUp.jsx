// src/components/SignUp.jsx
import { Button } from "./ui/button";
import { Input } from "./ui";
import GoogleLogo from "../assets/logo-google.svg";
import AppleIcon from "../assets/apple.svg";
import FaceBookIcon from "../assets/facebook-icon.svg";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function SignUp({ onNext }) {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      {/* Top logo bar - not logged in */}
      <Navbar isLoggedIn={false} />

      {/* Center content (compact so header+form+footer fit on one screen) */}
      <main className="flex-1 flex items-center justify-center">
        {/* Main card */}
        <section className="flex flex-col items-center">
          {/* Title */}
          <h1 className="text-[30px] leading-[36px] font-bold text-[#323743] mb-1">
            Join us!!!
          </h1>
          <p className="text-[13px] leading-[18px] text-[#9CA3AF] mb-3 text-center">
            Enter your details to create new account
          </p>

          {/* Form area */}
          <div className="w-[460px] flex flex-col gap-2.5">
            {/* Full name */}
            <Input
              label="Full name"
              type="text"
              placeholder="Tester"
              variant="default"
            />

            {/* Email */}
            <Input
              label="Email"
              type="email"
              placeholder="test@gmail.com"
              variant="default"
            />

            {/* Password */}
            <Input
              label="Password"
              type="password"
              placeholder="••••••••••••••••"
              variant="default"
            />

            {/* Confirm Password */}
            <Input
              label="Confirm Password"
              type="password"
              placeholder="••••••••••••••••"
              variant="default"
            />

            {/* Continue button */}
            <div className="mt-2 w-full">
              <Button
                onClick={onNext}
                variant="default"
                size="xl"
                radius="2xl"
                width="464px"
              >
                Continue
              </Button>
            </div>

            {/* Divider: Or sign in with */}
            <div className="flex items-center gap-3 mt-2 mb-1">
              <span className="flex-1 h-px bg-[#E5E7EB]" />
              <span className="text-[12px] text-[#6B7280]">
                Or Sign in with
              </span>
              <span className="flex-1 h-px bg-[#E5E7EB]" />
            </div>

            {/* Social buttons row */}
            <div className="flex items-center justify-between gap-3 mt-1">
              <Button
                variant="outline"
                size="default"
                radius="xl"
                width="164px"
                height="36px"
                leftIcon={<img src={GoogleLogo} alt="Google logo" className="w-4 h-4 block" />}
                className="whitespace-nowrap pt-[10px]"
              >
                <span className="leading-none">Google</span>
              </Button>
              <Button
                variant="outline"
                size="default"
                radius="xl"
                width="164px"
                height="36px"
                leftIcon={<img src={AppleIcon} alt="Apple" className="w-4 h-4" />}
              >
                Apple
              </Button>
              <Button
                variant="outline"
                size="default"
                radius="xl"
                width="164px"
                height="36px"
                leftIcon={<img src={FaceBookIcon} alt="Facebook" className="w-4 h-4" />}
              >
                Facebook
              </Button>
            </div>

            {/* Already have account */}
            <p className="mt-2 text-center text-[12px] text-[#6B7280]">
              Already have an account?{" "}
              <button
                type="button"
                onClick={onNext} // signup -> login (next step)
                className="text-[#4443E4] font-medium hover:underline"
              >
                Sign in
              </button>
            </p>
          </div>
        </section>
      </main>

      {/* Bottom footer (same height & left padding as header) */}
      <Footer />
    </div>
  );
}

