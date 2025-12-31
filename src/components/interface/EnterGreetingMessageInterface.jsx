// src/interface/EnterGreetingMessageInterface.jsx
export default function EnterGreetingMessageInterface() {
  return (
    <div className="w-full flex flex-col">
      {/* Label */}
      <label
        className="
          text-[16px] 
          font-medium
          leading-[20px] 
          text-[#171A1F]
          mb-2
        "
      >
        Enter Greeting Message
      </label>

      {/* Textarea Box */}
      <textarea
        placeholder="Enter Message..."
        className="
          w-[811px]
          h-[84px]
          border
          border-[#D1D5DB]
          rounded-[6px]
          outline-none
          text-[16px]
          font-normal
          text-[#171A1F]
          px-3
          py-2
          resize-none
          placeholder:text-[#9CA3AF]
        "
      />
    </div>
  );
}
