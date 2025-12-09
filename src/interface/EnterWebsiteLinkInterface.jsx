// src/interface/EnterWebsiteLinkInterface.jsx
export default function EnterWebsiteLinkInterface() {
  return (
    <div className="w-full flex flex-col">
      {/* Label */}
      <label
        className="
          text-[18px] leading-[20px]
          text-[#171A1F]
          mb-1 font-semibold
        "
      >
        Enter Website Link
      </label>

      {/* Input box */}
      <input
        type="url"
        placeholder="www.example.in Or https://example.in/"
        className="
          w-[833px] h-[35px]
          rounded-[10px]
          border border-[#D3D8E3]
          bg-white
          px-3
          text-[14px] text-[#171A1F]
          placeholder:text-[#9CA3AF]
          outline-none
        "
      />
    </div>
  );
}
