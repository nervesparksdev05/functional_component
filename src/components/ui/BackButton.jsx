import { Button } from "./button.jsx";
import BlueArrowIcon from "../../assets/blue-arrow.svg";

export default function BackButton({ onClick, className = "", children = "Back to Dashboard" }) {
  return (
    <div className={`w-full max-w-[1030px] mt-3 mb-4 flex justify-start ${className}`}>
      <Button
        type="button"
        variant="ghost"
        size="default"
        radius="default"
        leftIcon={<img src={BlueArrowIcon} alt="Back" className="w-6 h-6" />}
        className={`text-[21px] text-[#4443E4] font-normal ${className}`}
        onClick={onClick}
      >
        {children}
      </Button>
    </div>
  );
}

