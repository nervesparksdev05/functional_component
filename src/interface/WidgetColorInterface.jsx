import { useState, useRef } from "react";

export default function WidgetColorInterface() {
  const [color, setColor] = useState("#F3A822");
  const colorInputRef = useRef(null);

  const handleCustomizeClick = () => {
    if (colorInputRef.current) {
      colorInputRef.current.click();
    }
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className="w-full flex justify-center py-4">
      <div className="w-[490px] h-[100px] flex flex-col">
        {/* Label */}
        <div className="ml-[18px] mb-2">
          <span className="text-[15px] leading-[20px] font-medium text-[#171A1F]">
            Widget Color
          </span>
        </div>

        {/* Color circle + button row */}
        <div className="relative flex items-center gap-4 ml-[14px]">
          {/* Color circle */}
          <div
            className="w-[67px] h-[62px] rounded-[100px]"
            style={{ backgroundColor: color }}
          />

          {/* Customize Color button */}
          <button
            type="button"
            onClick={handleCustomizeClick}
            className="
              inline-flex items-center justify-center
              w-[155px] h-[36px]
              rounded-[6px]
              bg-[#4443E4]
              text-white
              text-[14px] leading-[22px] font-normal
              cursor-pointer
            "
          >
            Customize Color
          </button>

          {/* Invisible native color input placed right of the button */}
          <input
            ref={colorInputRef}
            type="color"
            value={color}
            onChange={handleColorChange}
            
            className="
              absolute
              left-[250px]  
              top-[-2px]
              w-[155px] h-[36px]
              opacity-0
              cursor-pointer
            "
          />
        </div>
      </div>
    </div>
  );
}
