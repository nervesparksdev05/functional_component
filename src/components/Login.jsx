// src/components/Login.jsx
import { Button } from "./ui/button";
import { Input } from "./ui";
import { ArrowRight } from "lucide-react";
import GoogleLogo from "../assets/logo-google.svg";
import AppleIcon from "../assets/apple.svg";
import FaceBookIcon from "../assets/facebook-icon.svg";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

export default function Login({ onNext, onPrevious }) {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      {/* Top logo bar - not logged in */}
      <Navbar isLoggedIn={false} />

      {/* Center content (slightly compact to match signup and avoid scroll) */}
      <main className="flex-1 flex items-center justify-center">
        <section className="flex flex-col items-center">
          {/* Title */}
          <h1 className="text-[30px] leading-[36px] font-bold text-[#171A1F] mb-1">
            Welcome back
          </h1>
          <p className="text-[13px] leading-[18px] text-[#9CA3AF] mb-4 text-center">
            Enter your details to get sign in to your account.
          </p>

          {/* Form area */}
          <div className="w-[515px] flex flex-col gap-3">
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

            {/* Forgot password */}
            <div className="mt-1">
              <button
                type="button"
                className="text-[12px] text-[#424856] hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            {/* Next button – goes to Home1 via onNext from DashBoard2 */}
            <div className="mt-2 w-full flex justify-end">
              <Button
                onClick={onNext}
                variant="default"
                size="default"
                radius="2xl"
                width="100%"
              >
                Login
              </Button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 mt-3 mb-1">
              <span className="flex-1 h-px bg-[#E5E7EB]" />
              <span className="text-[12px] text-[#6B7280]">
                Or Sign in with
              </span>
              <span className="flex-1 h-px bg-[#E5E7EB]" />
            </div>

            {/* Social buttons */}
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

            {/* Bottom link */}
            <p className="mt-3 text-center text-[12px] text-[#6B7280]">
              Don&apos;t have an account?{" "}
              <button
                type="button"
                onClick={onPrevious} // back to signup
                className="text-[#4443E4] font-medium hover:underline"
              >
                Register Now
              </button>
            </p>
          </div>
        </section>
      </main>

      {/* Bottom footer */}
      <Footer />
    </div>
  );
}

