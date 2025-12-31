// src/components/tables/ExtendedExistingDocumentsTable.jsx
import { MoreVertical } from "lucide-react";
import PdfIcon from "../../assets/pdf-icon.svg";
import TextIcon from "../../assets/text-icon.svg";
import Table from "../Table.jsx";

export default function ExtendedExistingDocumentsTable() {
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

  const columns = [
    { key: "fileName", label: "File name" },
    { key: "fileSize", label: "File size" },
    { key: "dateUploaded", label: "Date uploaded" },
    { key: "uploadedBy", label: "Uploaded by" },
    { key: "actions", label: "", width: "40px", align: "center" },
  ];

  return (
    <Table
      columns={columns}
      data={documents}
      variant="twin-color"
      title="Existing Documents"
      showSearch={true}
      showPagination={true}
      maxWidth="1030px"
      renderCell={(column, row, value) => {
        if (column.key === "fileName") {
          const ext = row.fileName.toLowerCase();
          const isPdf = ext.endsWith(".pdf");
          const isTxt = ext.endsWith(".txt");
          const iconSrc = isPdf ? PdfIcon : isTxt ? TextIcon : PdfIcon;

          return (
            <div className="flex items-center gap-3">
              <img
                src={iconSrc}
                alt={
                  isPdf ? "PDF file" : isTxt ? "Text file" : "Document file"
                }
                className="w-9 h-9 shrink-0"
              />
              <span className="font-semibold">{value}</span>
            </div>
          );
        }

        if (column.key === "actions") {
          return (
            <button
              type="button"
              className="text-gray-400 hover:text-gray-600 p-1"
            >
              <MoreVertical size={16} />
            </button>
          );
        }

        if (
          column.key === "fileSize" ||
          column.key === "dateUploaded" ||
          column.key === "uploadedBy"
        ) {
          return <span className="text-gray-500">{value}</span>;
        }

        return <span>{value}</span>;
      }}
    />
  );
}
