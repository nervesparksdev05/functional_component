export default function ContainerInterface() {
  const questions = [
    "What are the key features?",
    "How does pricing work?",
    "What integrations available?",
    "How long implementation take?",
  ];

  const renderChip = (q) => (
    <div
      key={q}
      className="
        inline-flex
        bg-gradient-to-r from-[#C9EBFF] via-[#D8D9FF] to-[#FBD1E6]
        rounded-full
        p-[1px]
      "
    >
      <button
        type="button"
        className="
          inline-flex items-center justify-center
          h-[30px]
          px-[18px]
          rounded-full
          bg-white
          text-[14px] leading-[20px]
          text-[#111827]
          whitespace-nowrap
          cursor-pointer
        "
      >
        {q}
      </button>
    </div>
  );

  return (
    <div className="w-full flex justify-center py-4">
      <div
        className="
          w-[448px] h-[70px]
          flex flex-col
          gap-y-2
        "
      >
        {/* Row 1 */}
        <div className="flex gap-x-2">
          {renderChip(questions[0])}
          {renderChip(questions[1])}
        </div>

        {/* Row 2 */}
        <div className="flex gap-x-2">
          {renderChip(questions[2])}
          {renderChip(questions[3])}
        </div>
      </div>
    </div>
  );
}
