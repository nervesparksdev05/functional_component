// Container2.jsx
export default function Container2() {
  const tabs = ["Dashboard", "Playbook", "Agent", "Help"];
  const activeTab = "Agent";

  return (
    <div className="w-full flex justify-center py-4">
      {/* Outer box */}
      <div
        className="
          w-[299px] h-[40px]
          rounded-[4px]
          flex items-center justify-between
          px-2
        "
      >
        {tabs.map((tab) => {
          const isActive = tab === activeTab;
          return (
            <div
              key={tab}
              className={`
                flex items-center justify-center
                w-[89px] h-[24px]
                rounded-[5px]
                px-[10px] py-[3px]
                text-[14px] leading-[18px]
                cursor-pointer
                ${
                  isActive
                    ? "bg-[#4443E4] text-white"
                    : "bg-transparent text-[#2F3542]"
                }
              `}
            >
              {tab}
            </div>
          );
        })}
      </div>
    </div>
  );
}
