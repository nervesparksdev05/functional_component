export default function ApllloTable() {
  const data = [
    {
      sr: 1,
      websiteLink: "www.apollo.io",
      title: "Apollo.io - Outbound, Inbound & Automation",
      description:
        "Accelerate B2B sales with Apollo.io—an AI sales platform for prospecting, lead gen, and deal execution. Close more deals, faster, with smart data.",
    },
  ];

  return (
    <div className=" rounded-[2px]">
      {/* 1px black border on the table */}
      <table className="w-full border border-black">
        <thead>
          <tr className="bg-[#4443E4]/10">
            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700 w-[65px]">
              Sr.
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700 w-48">
              Website link
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700 w-56">
              Title
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left text-sm font-semibold text-gray-700">
              Description
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.sr} className="bg-white">
              <td className="border border-gray-300 px-4 py-3 text-[12px] text-[#2F3542] align-top w-[65px]">
                {item.sr}
              </td>
              <td className="border border-gray-300 px-4 py-3 text-[12px] text-[#2F3542] align-top">
                {item.websiteLink}
              </td>
              <td className="border border-gray-300 px-4 py-3 text-[12px] text-[#2F3542] align-top">
                {item.title}
              </td>
              <td className="border border-gray-300 px-4 py-3 text-[12px] text-[#2F3542] align-top leading-relaxed">
                {item.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
