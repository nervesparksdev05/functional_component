import Table from "../Table.jsx";

export default function ApllloTable() {
  const data = [
    {
      id: 1,
      sr: 1,
      websiteLink: "www.apollo.io",
      title: "Apollo.io - Outbound, Inbound & Automation",
      description:
        "Accelerate B2B sales with Apollo.io—an AI sales platform for prospecting, lead gen, and deal execution. Close more deals, faster, with smart data.",
    },
  ];

  const columns = [
    { key: "sr", label: "Sr.", width: "65px" },
    { key: "websiteLink", label: "Website link", width: "192px" },
    { key: "title", label: "Title", width: "224px" },
    { key: "description", label: "Description" },
  ];

  return (
    <Table
      columns={columns}
      data={data}
      variant="bordered"
      maxWidth="100%"
      wrapperClassName="rounded-[2px]"
      renderCell={(column, row, value) => {
        if (column.key === "description") {
          return <span className="leading-relaxed">{value}</span>;
        }
        return <span>{value}</span>;
      }}
    />
  );
}
