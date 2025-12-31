// src/interface/SmallSystemviewInterface.jsx
export default function SmallSystemviewInterface({ onClick }) {
  return (
    <section
      onClick={onClick}
      className="
        w-[425px] h-[173px]
        rounded-[6px]
        border border-[#4443E4]
        bg-[#4443E4]
        text-white
        px-6 pt-5 pb-4
        flex flex-col
        cursor-pointer
      "
    >
      {/* Title */}
      <h2 className="text-[30px] leading-[24px] font-semibold tracking-[-0.04em] mb-4">
        System Overview
      </h2>

      {/* Bullet points like in the design */}
      <ul className="list-disc list-inside space-y-2 text-[22px] leading-[30px]">
        <li>Total Documents: N/A</li>
        <li>LLM Model: gpt-3.5-turbo</li>
      </ul>
    </section>
  );
}
