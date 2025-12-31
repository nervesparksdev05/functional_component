// src/Tables/DNSTable.jsx
import Table from "../Table.jsx";

export default function DNSTable() {
  const rows = [
    {
      id: 1,
      websiteName: "Apollo",
      websiteLink: "www.apollo.io",
      status: "Successful",
    },
  ];

  const columns = [
    { key: "websiteName", label: "Website Name" },
    { key: "websiteLink", label: "Website link" },
    { key: "status", label: "Status" },
  ];

  return (
    <div className="w-full flex justify-center mt-2">
      <div className="w-[825px]">
        <h2 className="text-[18px] font-medium text-[#171A1F] mb-2">
          Verified DNS
        </h2>
        <Table
          columns={columns}
          data={rows}
          variant="bordered"
          maxWidth="100%"
          wrapperClassName="rounded-[6px] border border-[#0c0b0d]"
          headerBgColor="bg-[#4443E4]/10"
          renderCell={(column, row, value) => {
            if (column.key === "websiteName") {
              return <span className="text-[#111827]">{value}</span>;
            }
            return <span className="text-[#4B5563]">{value}</span>;
          }}
        />
      </div>
    </div>
  );
}
