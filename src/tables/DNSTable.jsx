// src/Tables/DNSTable.jsx
export default function DNSTable() {
  const rows = [
    {
      id: 1,
      websiteName: "Apollo",
      websiteLink: "www.apollo.io",
      status: "Successful",
    },
    {
      id: 2,
      websiteName: "Apollo",
      websiteLink: "www.apollo.io",
      status: "Failed",
    },
  ];

  return (
    <div className="w-full flex justify-center mt-6">
      <div className="w-[825px]">
        {/* Title */}
        <h2 className="text-[14px] font-semibold text-[#111827] mb-2">
          Verified DNS
        </h2>

        {/* Table card */}
        <div className="w-full h-[108px] rounded-[6px] border border-[#0c0b0d] overflow-hidden bg-white">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#cbcbf5]">
                <th className="text-left text-[12px] font-medium text-[#0c0b0d] px-4 py-2 border-b border-[#E5E7EB]">
                  Website Name
                </th>
                <th className="text-left text-[12px] font-medium text-[#0c0b0d] px-4 py-2 border-b border-[#E5E7EB]">
                  Website link
                </th>
                <th className="text-left text-[12px] font-medium text-[#0c0b0d] px-4 py-2 border-b border-[#E5E7EB]">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row) => (
                <tr key={row.id} className="border-t border-[#E5E7EB]">
                  <td className="px-4 py-2 text-[13px] text-[#111827]">
                    {row.websiteName}
                  </td>
                  <td className="px-4 py-2 text-[13px] text-[#4B5563]">
                    {row.websiteLink}
                  </td>
                  <td className="px-4 py-2 text-[13px] text-[#4B5563]">
                    {row.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
