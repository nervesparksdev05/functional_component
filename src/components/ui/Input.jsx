import { forwardRef } from "react";
import { cn } from "../../lib/utils";

const Input = forwardRef(
  (
    {
      label,
      required,
      error,
      className = "",
      labelClassName = "",
      containerClassName = "",
      variant = "default", // "default" | "rounded" | "slack"
      ...props
    },
    ref
  ) => {
    const baseInputStyles = {
      default: "w-full h-[44px] rounded-[26px] border border-[#D3D8E3] px-5 text-[14px] leading-[22px] text-[#171A1F] placeholder:text-[#9CA3AF] outline-none",
      rounded: "w-full h-[35px] rounded-[10px] border border-[#D3D8E3] bg-white px-3 text-[14px] text-[#171A1F] placeholder:text-[#9CA3AF] outline-none",
      slack: "w-full h-[40px] rounded-[6px] bg-[#F5F6FA] border border-transparent px-3 text-[14px] text-[#111827] placeholder:text-[#9CA3AF] outline-none focus:border-[#4443E4]",
    };

    const baseLabelStyles = {
      default: "mb-1 text-[13px] leading-[20px] text-[#424856]",
      rounded: "text-[18px] leading-[20px] text-[#171A1F] mb-1 font-medium",
      slack: "block text-[13px] leading-[18px] text-[#4B5563] mb-1",
    };

    return (
      <div className={cn("flex flex-col", containerClassName)}>
        {label && (
          <label className={cn(baseLabelStyles[variant] || baseLabelStyles.default, labelClassName)}>
            {label}
            {required && <span className="text-[#EF4444] ml-1">*</span>}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            baseInputStyles[variant] || baseInputStyles.default,
            error && "border-[#EF4444]",
            className
          )}
          {...props}
        />
        {error && <span className="mt-1 text-[12px] text-[#EF4444]">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };

