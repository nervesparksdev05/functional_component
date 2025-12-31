import { forwardRef } from "react";
import { cn } from "../../lib/utils";

const buttonVariants = {
  variant: {
    default: "bg-[#4443E4] text-white hover:bg-[#3a3adb] border border-transparent",
    success: "bg-[#1BC469] text-white hover:bg-[#16a85a] border border-transparent",
    destructive: "bg-[#F73F49] text-white hover:bg-[#e62e38] border border-transparent",
    outline: "bg-white text-[#171A1F] border border-[#171A1F] hover:bg-[#F9FAFB]",
    muted: "bg-[#4443E40D] text-[#2F3542] border border-[#0000001A] hover:bg-[#4443E41A]",
    ghost: "bg-transparent text-[#4443E4] border border-transparent hover:bg-[#F3F4F6]",
  },
  size: {
    xs: "h-[30px] px-[30px] text-[10px] font-medium leading-[1] tracking-tight",
    sm: "h-[30px] px-[30px] text-[12px] font-medium leading-none",
    default: "h-[36px] px-4 text-[14px] font-normal leading-[22px]",
    md: "h-[40px] px-4 text-[14px] font-medium leading-[22px]",
    lg: "h-[45px] px-6 text-[18px] font-normal leading-[28px]",
    xl: "h-[52px] px-8 text-[18px] font-normal leading-7",
    "2xl": "h-10 px-[30px] text-[13px] font-medium",
  },
  radius: {
    none: "rounded-none",
    sm: "rounded-[4px]",
    default: "rounded-[6px]",
    md: "rounded-[8px]",
    lg: "rounded-[15px]",
    xl: "rounded-[18px]",
    "2xl": "rounded-[26px]",
    full: "rounded-[50px]",
  },
};

const Button = forwardRef(
  (
    {
      className,
      variant = "default",
      size = "default",
      radius = "default",
      children,
      disabled,
      loading,
      leftIcon,
      rightIcon,
      fullWidth,
      width,
      height,
      onClick,
      type = "button",
      ...props
    },
    ref
  ) => {
    const baseStyles = "inline-flex items-center justify-center cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4443E4] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
    
    const sizeStyles = buttonVariants.size[size] || "";
    const variantStyles = buttonVariants.variant[variant] || buttonVariants.variant.default;
    const radiusStyles = buttonVariants.radius[radius] || buttonVariants.radius.default;
    
    const customStyles = {
      width: width ? (typeof width === "number" ? `${width}px` : width) : undefined,
      height: height ? (typeof height === "number" ? `${height}px` : height) : undefined,
    };

    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled || loading}
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles,
          sizeStyles,
          radiusStyles,
          fullWidth && "w-full",
          loading && "opacity-70 cursor-wait",
          className
        )}
        style={customStyles}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {leftIcon && (
          <span className={cn("inline-flex items-center justify-center", size === "xs" || size === "sm" ? "w-[14px] h-[14px] mr-[2px]" : "mr-2")}>
            {leftIcon}
          </span>
        )}
        {children}
        {rightIcon && (
          <span className="ml-2 inline-flex items-center justify-center">
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };

