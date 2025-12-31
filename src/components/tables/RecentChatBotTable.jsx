// src/Tables/RecentChatBotTable.jsx
import { MoreVertical } from "lucide-react";
import Table from "../Table.jsx";

export default function RecentChatBotTable() {
  const chatBots = [
    {
      id: 1,
      websiteName: "Apollo.io",
      websiteUrl: "www.apollo.io",
      uploadedFile: "Tech requirements.pdf",
      botCreated: "Jan 4, 2025",
    },
    {
      id: 2,
      websiteName: "Apollo.io",
      websiteUrl: "www.apollo.io",
      uploadedFile: "Tech requirements.pdf",
      botCreated: "Jan 4, 2025",
    },
    {
      id: 3,
      websiteName: "Apollo.io",
      websiteUrl: "www.apollo.io",
      uploadedFile: "Tech requirements.pdf",
      botCreated: "Jan 2, 2025",
    },
  ];

  const columns = [
    { key: "websiteName", label: "Website Name" },
    { key: "websiteUrl", label: "Website URL" },
    { key: "uploadedFile", label: "Uploaded file" },
    { key: "botCreated", label: "Bot Created" },
    { key: "actions", label: "", width: "40px", align: "center" },
  ];

  return (
    <div className="w-[1030px]">
      <Table
        columns={columns}
        data={chatBots}
        variant="twin-color"
        title="Recent Chat Bots"
        maxWidth="1030px"
        className="px-7 pt-5 pb-4"
        rowBgColor1="bg-white"
        rowBgColor2="bg-white"
        renderCell={(column, row, value, rowIndex) => {
          if (column.key === "actions") {
            return (
              <button className="text-gray-400 hover:text-gray-600 p-1">
                <MoreVertical size={16} />
              </button>
            );
          }
          if (column.key === "websiteName") {
            return <span className="font-semibold">{value}</span>;
          }
          return <span className="text-gray-500">{value}</span>;
        }}
      />
    </div>
  );
}
