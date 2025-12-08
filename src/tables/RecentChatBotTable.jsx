// src/Tables/RecentChatBotTable.jsx
import React from "react";
import { MoreVertical } from "lucide-react";

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

  return (
    <div className="w-[1030px] bg-white rounded-[10px] border border-[#E5E7EB] px-7 pt-5 pb-4 flex flex-col shadow-sm">
      {/* Header */}
      <h2 className="text-[14px] font-semibold text-[#111827] mb-4">
        Recent Chat Bots
      </h2>

      {/* Table */}
      <div>
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th className="text-[11px] font-medium text-gray-500 tracking-wide pb-3">
                Website Name
              </th>
              <th className="text-[11px] font-medium text-gray-500 tracking-wide pb-3">
                Website URL
              </th>
              <th className="text-[11px] font-medium text-gray-500 tracking-wide pb-3">
                Uploaded file
              </th>
              <th className="text-[11px] font-medium text-gray-500 tracking-wide pb-3">
                Bot Created
              </th>
              <th className="w-10 pb-3" />
            </tr>
          </thead>

          <tbody>
            {chatBots.map((bot, index) => (
              <tr
                key={bot.id}
                className={
                  index !== chatBots.length - 1
                    ? "border-b border-gray-200"
                    : ""
                }
              >
                <td className="py-3 text-[13px] text-gray-900 font-semibold">
                  {bot.websiteName}
                </td>
                <td className="py-3 text-[13px] text-gray-500">
                  {bot.websiteUrl}
                </td>
                <td className="py-3 text-[13px] text-gray-500">
                  {bot.uploadedFile}
                </td>
                <td className="py-3 text-[13px] text-gray-500">
                  {bot.botCreated}
                </td>
                <td className="py-3 text-center">
                  <button className="text-gray-400 hover:text-gray-600 p-1">
                    <MoreVertical size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
