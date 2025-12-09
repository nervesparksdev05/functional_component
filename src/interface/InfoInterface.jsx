export default function InfoInterface() {
  return (
    <div className="w-full flex justify-center py-4">
      <div
        className="
          w-[339px] h-[439px]
          border border-[#D1D5DB]  
          rounded-md
          bg-white
          overflow-hidden
        "
      >
        <Row label="Domain name" value="Lorem ipsum" />
        <Row
          label="Domain URL"
          value="www.example.com"
          valueClass="text-[#111827] font-semibold"
        />
        <Row label="Uploaded file" value="Example.pdf" />
        <Row
          label="Goals"
          value="Lorem ipsum, Lorem ipsum, Lorem ipsum"
          multiline
        />
        <Row label="Widget position" value="Lorem ipsum" />
        <Row label="Widget color code" value="#FFFFFF" />
        <Row label="DNS Verification" value="Successful" />
      </div>
    </div>
  );
}



function Row({ label, value, valueClass = "font-semibold", multiline }) {
  return (
    <div
      className="
        flex items-center
        px-4
        h-[63px]
        even:bg-[#F8F9FB]
        text-[13px]
      "
    >
      <div className="flex-1 text-[#111827]">{label}</div>
      <div
        className={`flex-1 text-right text-[#111827] ${
          multiline ? "leading-[18px]" : ""
        } ${valueClass}`}
      >
        {value}
      </div>
    </div>
  );
}
