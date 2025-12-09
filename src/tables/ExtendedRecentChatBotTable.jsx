// src/Tables/ExtendedRecentChatBotTable.jsx
import React from "react";
import { Search, MoreVertical } from "lucide-react";

export default function ExtendedRecentChatBotTable() {
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
    {
      id: 4,
      websiteName: "Apollo.io",
      websiteUrl: "www.apollo.io",
      uploadedFile: "Tech requirements.pdf",
      botCreated: "Jan 4, 2025",
    },
    {
      id: 5,
      websiteName: "Apollo.io",
      websiteUrl: "www.apollo.io",
      uploadedFile: "Tech requirements.pdf",
      botCreated: "Jan 2, 2025",
    },
    
  ];

  return (
    <div className="w-full max-w-[1030px] rounded-[10px] border border-[#E5E7EB] bg-white shadow-sm overflow-hidden">
      {/* Top header row with title + search */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E7EB]">
        <h2 className="text-[15px] font-semibold text-[#111827]">
          Recent Chat Bots
        </h2>

        <div className="w-[260px] h-[40px] flex items-center rounded-[8px] border border-[#E5E7EB] bg-[#F9FAFB] px-3">
          <Search className="w-4 h-4 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="flex-1 bg-transparent text-[13px] text-[#111827] placeholder:text-[#9CA3AF] outline-none"
          />
        </div>
      </div>

      {/* Table body */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th className="text-[11px] font-medium text-gray-500 tracking-wide pt-4 pb-3 px-6">
                Website Name
              </th>
              <th className="text-[11px] font-medium text-gray-500 tracking-wide pt-4 pb-3 px-6">
                Website URL
              </th>
              <th className="text-[11px] font-medium text-gray-500 tracking-wide pt-4 pb-3 px-6">
                Uploaded file
              </th>
              <th className="text-[11px] font-medium text-gray-500 tracking-wide pt-4 pb-3 px-6">
                Bot Created
              </th>
              <th className="w-10 pt-4 pb-3 pr-6" />
            </tr>
          </thead>

          <tbody>
            {chatBots.map((bot, index) => (
              <tr
                key={bot.id}
                className={`
                  ${index % 2 === 0 ? "bg-[#F9FAFF]" : "bg-white"}
                  border-t border-[#EEF0F4]
                `}
              >
                <td className="py-4 px-6 text-[13px] text-gray-900 font-semibold align-middle">
                  {bot.websiteName}
                </td>
                <td className="py-4 px-6 text-[13px] text-gray-500 align-middle">
                  {bot.websiteUrl}
                </td>
                <td className="py-4 px-6 text-[13px] text-gray-500 align-middle">
                  {bot.uploadedFile}
                </td>
                <td className="py-4 px-6 text-[13px] text-gray-500 align-middle">
                  {bot.botCreated}
                </td>
                <td className="py-4 pr-6 text-center align-middle">
                  <button className="text-gray-400 hover:text-gray-600 p-1">
                    <MoreVertical size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination footer */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-[#E5E7EB] text-[12px] text-[#6B7280]">
        <span>Page 1 of 10</span>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="h-[32px] px-4 rounded-[8px] border border-[#D1D5DB] text-[13px] text-[#374151] bg-white hover:bg-[#F3F4F6]"
          >
            Previous
          </button>
          <button
            type="button"
            className="h-[32px] px-4 rounded-[8px] border border-[#D1D5DB] text-[13px] text-[#374151] bg-white hover:bg-[#F3F4F6]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
