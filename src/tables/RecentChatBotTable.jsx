import React from 'react';
import { MoreVertical } from 'lucide-react';

export default function RecentChatBotTable() {
  const chatBots = [
    {
      id: 1,
      websiteName: 'Apollo.io',
      websiteUrl: 'www.apollo.io',
      uploadedFile: 'Tech requirements.pdf',
      botCreated: 'Jan 4, 2025',
    },
    {
      id: 2,
      websiteName: 'Apollo.io',
      websiteUrl: 'www.apollo.io',
      uploadedFile: 'Tech requirements.pdf',
      botCreated: 'Jan 4, 2025',
    },
    {
      id: 3,
      websiteName: 'Apollo.io',
      websiteUrl: 'www.apollo.io',
      uploadedFile: 'Tech requirements.pdf',
      botCreated: 'Jan 2, 2025',
    },
  ];

  return (
    <div className="w-[1030px] h-[327px] bg-white rounded-lg border border-gray-300 p-7 flex flex-col">
      {/* Header */}
      <h2 className="text-lg font-semibold text-gray-900 mb-8">Recent Chat Bots</h2>

      {/* Table */}
      <div className="flex-1">
        <table className="w-full">
          {/* Table Header */}
          <thead>
            <tr className="text-left">
              <th className="text-xs font-medium text-gray-500 tracking-wide pb-3">Website Name</th>
              <th className="text-xs font-medium text-gray-500 tracking-wide pb-3">Website URL</th>
              <th className="text-xs font-medium text-gray-500 tracking-wide pb-3">Uploaded file</th>
              <th className="text-xs font-medium text-gray-500 tracking-wide pb-3">Bot Created</th>
              <th className="w-10 pb-3"></th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {chatBots.map((bot, index) => (
              <tr
                key={bot.id}
                className={index !== chatBots.length - 1 ? 'border-b border-gray-200' : ''}
              >
                <td className="py-6 text-sm text-gray-900 font-semibold">{bot.websiteName}</td>
                <td className="py-6 text-sm text-gray-500">{bot.websiteUrl}</td>
                <td className="py-6 text-sm text-gray-500">{bot.uploadedFile}</td>
                <td className="py-6 text-sm text-gray-500">{bot.botCreated}</td>
                <td className="py-6 text-center">
                  <button className="text-gray-400 hover:text-gray-600 p-1">
                     
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