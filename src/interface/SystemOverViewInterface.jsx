export default function SystemOverviewInterface() {
  return (
    <div className="w-full flex justify-center py-6">
      <section
        className="
          w-[1038px] h-[214px]
          rounded-[6px]
          border border-[#4443E4]
          bg-[#4443E4]
          px-10 pt-6 pb-8
          text-white
          flex flex-col
        "
        style={{
          fontFamily:
            '"IBM Plex Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        {/* Title */}
        <h2 className="text-[30px] leading-[32px] font-semibold tracking-[-0.06em] mb-8">
          System Overview
        </h2>

        {/* Stats row */}
        <div className="flex flex-1 items-end justify-between pr-4">
          {/* Total Documents */}
          <div className="flex flex-col gap-2">
            <span className="text-[18px] leading-[24px] font-normal tracking-[-0.02em]">
              Total Documents
            </span>
            <span className="text-[36px] leading-[48px] font-bold tracking-[-0.06em]">
              N/A
            </span>
          </div>

          {/* Total Chunks */}
          <div className="flex flex-col gap-2">
            <span className="text-[18px] leading-[24px] font-normal tracking-[-0.02em]">
              Total Chunks (in ChromaDB)
            </span>
            <span className="text-[36px] leading-[48px] font-bold">
              187
            </span>
          </div>

          {/* LLM Model */}
          <div className="flex flex-col gap-2 items-start">
            <span className="text-[18px] leading-[24px] font-normal tracking-[-0.02em]">
              LLM Model
            </span>
            <span className="text-[36px] leading-[48px] font-bold tracking-[-0.06em]">
              gpt-3.5-turbo
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
