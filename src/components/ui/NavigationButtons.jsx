import { Button } from "./button.jsx";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function NavigationButtons({
  onPrevious,
  onNext,
  previousLabel = "Previous",
  nextLabel = "Next",
  className = "",
  previousDisabled = false,
  nextDisabled = false,
}) {
  return (
    <div className={`w-full max-w-[1030px] mt-auto mb-3 flex justify-between ${className}`}>
      <Button
        onClick={onPrevious}
        variant="outline"
        size="default"
        radius="md"
        width="112px"
        leftIcon={<ArrowLeft size={16} className="text-[#374151]" />}
        className="text-[13px] font-medium text-[#374151] hover:bg-[#F3F4F6]"
        disabled={previousDisabled}
      >
        {previousLabel}
      </Button>
      <Button
        onClick={onNext}
        variant="default"
        size="default"
        radius="md"
        width="87px"
        rightIcon={<ArrowRight size={16} className="text-white" />}
        disabled={nextDisabled}
      >
        {nextLabel}
      </Button>
    </div>
  );
}

