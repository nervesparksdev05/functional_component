// src/tables/ExtendedExistingDocumentsTable.jsx
import { Search, MoreVertical } from "lucide-react";
import PdfIcon from "../assets/pdf-icon.svg";
import TextIcon from "../assets/text-icon.svg";

export default function ExtendedRecentChatBotTable() {
  const documents = [
    {
      id: 1,
      fileName: "Tech requirements.pdf",
      fileSize: "200 KB",
      dateUploaded: "Jan 4, 2022",
      uploadedBy: "Olivia Rhye",
    },
    {
      id: 2,
      fileName: "Dashboard screenshot.png",
      fileSize: "720 KB",
      dateUploaded: "Jan 4, 2022",
      uploadedBy: "Phoenix Baker",
    },
    {
      id: 3,
      fileName: "General information.txt",
      fileSize: "16 KB",
      dateUploaded: "Jan 2, 2022",
      uploadedBy: "Lana Steiner",
    },
    {
      id: 4,
      fileName: "Dashboard screenshot.png",
      fileSize: "720 KB",
      dateUploaded: "Jan 4, 2022",
      uploadedBy: "Phoenix Baker",
    },
  ];

  return (
    <div className="w-full max-w-[1030px] rounded-[10px] border border-[#E5E7EB] bg-white ">
      {/* Top header row with title + search */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E7EB]">
        <h2 className="text-[15px] font-semibold text-[#111827]">
          Existing Documents
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
                File name
              </th>
              <th className="text-[11px] font-medium text-gray-500 tracking-wide pt-4 pb-3 px-6">
                File size
              </th>
              <th className="text-[11px] font-medium text-gray-500 tracking-wide pt-4 pb-3 px-6">
                Date uploaded
              </th>
              <th className="text-[11px] font-medium text-gray-500 tracking-wide pt-4 pb-3 px-6">
                Uploaded by
              </th>
              <th className="w-10 pt-4 pb-3 pr-6" />
            </tr>
          </thead>

          <tbody>
            {documents.map((doc, index) => {
              const ext = doc.fileName.toLowerCase();
              const isPdf = ext.endsWith(".pdf");
              const isTxt = ext.endsWith(".txt");

              const iconSrc = isPdf ? PdfIcon : isTxt ? TextIcon : PdfIcon;

              return (
                <tr
                  key={doc.id}
                  className={`${
                    index % 2 === 0 ? "bg-[#F9FAFF]" : "bg-white"
                  } border-t border-[#EEF0F4]`}
                >
                  {/* File name + icon */}
                  <td className="py-4 px-6 text-[13px] text-gray-900 align-middle">
                    <div className="flex items-center gap-3">
                      <img
                        src={iconSrc}
                        alt={
                          isPdf
                            ? "PDF file"
                            : isTxt
                            ? "Text file"
                            : "Document file"
                        }
                        className="w-9 h-9 flex-shrink-0"
                      />
                      <span className="font-semibold">{doc.fileName}</span>
                    </div>
                  </td>

                  {/* File size */}
                  <td className="py-4 px-6 text-[13px] text-gray-500 align-middle">
                    {doc.fileSize}
                  </td>

                  {/* Date uploaded */}
                  <td className="py-4 px-6 text-[13px] text-gray-500 align-middle">
                    {doc.dateUploaded}
                  </td>

                  {/* Uploaded by */}
                  <td className="py-4 px-6 text-[13px] text-gray-500 align-middle">
                    {doc.uploadedBy}
                  </td>

                  {/* Actions (3 dots) */}
                  <td className="py-4 pr-6 text-center align-middle">
                    <button
                      type="button"
                      className="text-gray-400 hover:text-gray-600 p-1"
                    >
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              );
            })}
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
