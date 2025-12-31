// src/interface/ExistingDocumentsTable.jsx
import PdfIcon from "../../assets/pdf-icon.svg";
import TextIcon from "../../assets/text-icon.svg";
import Table from "../Table.jsx";

export default function ExistingDocumentsTable({ documents = [] }) {
  const columns = [
    { key: "fileName", label: "File name" },
    { key: "fileSize", label: "File size" },
    { key: "dateUploaded", label: "Date uploaded" },
    { key: "uploadedBy", label: "Uploaded by" },
    { key: "actions", label: "", width: "40px", align: "right" },
  ];

  // Map documents to match column keys
  const data = documents.map((doc) => ({
    id: doc.id,
    fileName: doc.name,
    fileSize: doc.size,
    dateUploaded: doc.dateUploaded,
    uploadedBy: doc.uploadedBy,
    type: doc.type,
  }));

  return (
    <div className="w-full flex justify-center">
      <Table
        columns={columns}
        data={data}
        variant="twin-color"
        title="Existing Documents"
        maxWidth="1038px"
        rowBgColor1="bg-[#4443E4]/5"
        rowBgColor2="bg-white"
        className="h-[327px]"
        renderCell={(column, row, value, rowIndex) => {
          if (column.key === "fileName") {
            const isPdf =
              row.type === "pdf" ||
              row.fileName?.toLowerCase().endsWith(".pdf");
            const isTxt =
              row.type === "txt" ||
              row.fileName?.toLowerCase().endsWith(".txt");
            const iconSrc = isPdf ? PdfIcon : TextIcon;

            return (
              <div className="flex items-center gap-3">
                <img
                  src={iconSrc}
                  alt={isPdf ? "PDF file" : "Text file"}
                  className="w-9 h-9 shrink-0"
                />
                <span className="text-[14px] text-[#111827]">{value}</span>
              </div>
            );
          }

          if (column.key === "actions") {
            return (
              <button
                type="button"
                className="inline-flex items-center justify-center w-6 h-6 rounded-full hover:bg-[#E5E7EB]"
              >
                <span className="text-[#6B7280] text-[18px] leading-none">
                  ···
                </span>
              </button>
            );
          }

          if (column.key === "fileSize" || column.key === "dateUploaded" || column.key === "uploadedBy") {
            return <span className="text-[14px] text-[#4B5563]">{value}</span>;
          }

          return <span>{value}</span>;
        }}
      />
    </div>
  );
}
