// src/interface/ExistingDocumentsTable.jsx
import PdfIcon from "../../assets/pdf-icon.svg";
import TextIcon from "../../assets/text-icon.svg";

export default function ExistingDocumentsTable({ documents = [] }) {
  return (
    <div className="w-full flex justify-center">
      <div
        className="
          w-[1038px] h-[327px]
          rounded-[8px]
          border border-[#E5E7EB]
          bg-white
          shadow-sm
        "
      >
        {/* Header title */}
        <div className="px-6 py-4 border-b border-[#E5E7EB]">
          <h2 className="text-[16px] font-semibold text-[#111827]">
            Existing Documents
          </h2>
        </div>

        <table className="w-full text-left">
          <thead className="text-[12px] font-medium text-[#6B7280]">
            <tr>
              <th className="px-6 py-3">File name</th>
              <th className="px-6 py-3">File size</th>
              <th className="px-6 py-3">Date uploaded</th>
              <th className="px-6 py-3">Uploaded by</th>
              <th className="px-6 py-3 w-10" />
            </tr>
          </thead>

          <tbody className="text-[14px] text-[#111827]">
            {documents.map((doc, index) => {
              const isPdf =
                doc.type === "pdf" ||
                doc.name?.toLowerCase().endsWith(".pdf");

              const isTxt =
                doc.type === "txt" ||
                doc.name?.toLowerCase().endsWith(".txt");

              const iconSrc = isPdf ? PdfIcon : TextIcon;

              const rowBg =
                index % 2 === 0 ? "bg-[#4443E4]/5" : "bg-white"; // alternate rows

              return (
                <tr key={doc.id ?? index} className={rowBg}>
                  {/* File name + icon */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={iconSrc}
                        alt={isPdf ? "PDF file" : "Text file"}
                        className="w-9 h-9 shrink-0"
                      />
                      <span className="text-[14px] text-[#111827]">
                        {doc.name}
                      </span>
                    </div>
                  </td>

                  {/* File size */}
                  <td className="px-6 py-4 text-[14px] text-[#4B5563]">
                    {doc.size}
                  </td>

                  {/* Date uploaded */}
                  <td className="px-6 py-4 text-[14px] text-[#4B5563]">
                    {doc.dateUploaded}
                  </td>

                  {/* Uploaded by */}
                  <td className="px-6 py-4 text-[14px] text-[#4B5563]">
                    {doc.uploadedBy}
                  </td>

                  {/* Actions (3 dots) */}
                  <td className="px-6 py-4 text-right align-middle">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center w-6 h-6 rounded-full hover:bg-[#E5E7EB]"
                    >
                      <span className="text-[#6B7280] text-[18px] leading-none">
                        ···
                      </span>
                    </button>
                  </td>
                </tr>
              );
            })}

            {documents.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="px-6 py-10 text-center text-[14px] text-[#6B7280]"
                >
                  No documents found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
