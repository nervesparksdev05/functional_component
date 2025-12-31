import { Search } from "lucide-react";

/**
 * Reusable Table Component
 * 
 * @param {Object} props
 * @param {Array} props.columns - Array of column definitions: { key, label, width?, align?, className? }
 * @param {Array} props.data - Array of row data objects
 * @param {Function} props.renderCell - Optional function to render custom cell content: (column, row, value, rowIndex) => ReactNode
 * @param {string} props.variant - "bordered" | "twin-color" (default: "twin-color")
 * @param {string} props.title - Optional table title
 * @param {boolean} props.showSearch - Show search bar (default: false)
 * @param {boolean} props.showPagination - Show pagination (default: false)
 * @param {string} props.searchPlaceholder - Search placeholder text
 * @param {Function} props.onSearch - Search handler: (value) => void
 * @param {string} props.headerBgColor - Header background color class (default: "bg-[#4443E4]/10")
 * @param {string} props.rowBgColor1 - First row color for twin-color (default: "bg-[#F9FAFF]")
 * @param {string} props.rowBgColor2 - Second row color for twin-color (default: "bg-white")
 * @param {string} props.className - Additional wrapper className
 * @param {string} props.maxWidth - Max width of table container (default: "1030px")
 * @param {string} props.wrapperClassName - Additional className for outer wrapper
 */
export default function Table({
  columns = [],
  data = [],
  renderCell,
  variant = "twin-color", // "bordered" | "twin-color"
  title,
  showSearch = false,
  showPagination = false,
  searchPlaceholder = "Search",
  onSearch,
  headerBgColor = "bg-[#4443E4]/10",
  rowBgColor1 = "bg-[#F9FAFF]",
  rowBgColor2 = "bg-white",
  className = "",
  maxWidth = "1030px",
  wrapperClassName = "",
}) {
  const isBordered = variant === "bordered";
  const isTwinColor = variant === "twin-color";

  // Default cell renderer
  const defaultRenderCell = (column, row, value) => {
    return <span>{value ?? ""}</span>;
  };

  const cellRenderer = renderCell || defaultRenderCell;

  return (
    <div className={`w-full ${wrapperClassName}`} style={{ maxWidth }}>
      <div
        className={`
          ${isBordered ? "rounded-[2px]" : "rounded-[10px]"}
          ${isBordered ? "border border-black" : "border border-[#E5E7EB]"}
          bg-white
          ${isBordered ? "" : "shadow-sm"}
          ${className}
        `}
      >
        {/* Header with title and search */}
        {(title || showSearch) && (
          <div
            className={`
              flex items-center justify-between
              ${isBordered ? "px-4 py-2" : "px-6 py-4"}
              ${isBordered ? "" : "border-b border-[#E5E7EB]"}
            `}
          >
            {title && (
              <h2
                className={`
                  ${isBordered ? "text-[18px]" : "text-[15px]"}
                  font-semibold
                  ${isBordered ? "text-[#171A1F]" : "text-[#111827]"}
                `}
              >
                {title}
              </h2>
            )}

            {showSearch && (
              <div
                className={`
                  w-[260px] h-[40px]
                  flex items-center
                  rounded-[8px]
                  border border-[#E5E7EB]
                  bg-[#F9FAFB]
                  px-3
                `}
              >
                <Search className="w-4 h-4 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder={searchPlaceholder}
                  onChange={(e) => onSearch?.(e.target.value)}
                  className="flex-1 bg-transparent text-[13px] text-[#111827] placeholder:text-[#9CA3AF] outline-none"
                />
              </div>
            )}
          </div>
        )}

        {/* Table */}
        <div className={isBordered ? "" : "overflow-x-auto"}>
          <table
            className={`
              w-full
              ${isBordered ? "border border-black" : ""}
            `}
          >
            <thead>
              <tr>
                {columns.map((column) => (
                  <th
                    key={column.key}
                    className={`
                      ${isBordered ? "border border-gray-300" : ""}
                      ${isBordered ? "px-4 py-2" : "pt-4 pb-3 px-6"}
                      text-left
                      ${isBordered ? "text-sm" : "text-[11px]"}
                      ${isBordered ? "font-semibold" : "font-medium"}
                      ${isBordered ? "text-gray-700" : "text-gray-500"}
                      ${isBordered ? "" : "tracking-wide"}
                      ${headerBgColor}
                      ${column.width ? `w-[${column.width}]` : ""}
                      ${column.className || ""}
                    `}
                  >
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {data.map((row, rowIndex) => {
                const rowBg =
                  isBordered
                    ? "bg-white"
                    : isTwinColor
                    ? rowIndex % 2 === 0
                      ? rowBgColor1
                      : rowBgColor2
                    : "bg-white";

                const isLastRow = rowIndex === data.length - 1;
                return (
                  <tr
                    key={row.id || rowIndex}
                    className={`
                      ${rowBg}
                      ${isBordered ? "border border-gray-300" : isLastRow ? "" : "border-b border-gray-200"}
                    `}
                  >
                    {columns.map((column) => {
                      const value = row[column.key];
                      return (
                        <td
                          key={column.key}
                          className={`
                            ${isBordered ? "border border-gray-300" : ""}
                            ${isBordered ? "px-4 py-3" : "py-4 px-6"}
                            ${isBordered ? "text-[12px]" : "text-[13px]"}
                            ${isBordered ? "text-[#2F3542]" : "text-gray-900"}
                            ${isBordered ? "align-top" : "align-middle"}
                            ${column.align === "center" ? "text-center" : ""}
                            ${column.align === "right" ? "text-right" : ""}
                            ${column.className || ""}
                          `}
                        >
                          {cellRenderer(column, row, value, rowIndex)}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}

              {data.length === 0 && (
                <tr>
                  <td
                    colSpan={columns.length}
                    className={`
                      ${isBordered ? "px-4 py-10" : "px-6 py-10"}
                      text-center
                      text-[14px]
                      text-[#6B7280]
                    `}
                  >
                    No data found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {showPagination && (
          <div
            className={`
              flex items-center justify-between
              ${isBordered ? "px-4 py-3" : "px-6 py-4"}
              border-t border-[#E5E7EB]
              ${isBordered ? "text-sm" : "text-[12px]"}
              ${isBordered ? "text-gray-600" : "text-[#6B7280]"}
            `}
          >
            <span>Page 1 of 10</span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                className={`
                  ${isBordered ? "px-4 py-2" : "h-[32px] px-4"}
                  ${isBordered ? "rounded-lg" : "rounded-[8px]"}
                  border border-[#D1D5DB]
                  ${isBordered ? "text-sm" : "text-[13px]"}
                  text-[#374151]
                  bg-white
                  hover:bg-[#F3F4F6]
                `}
              >
                Previous
              </button>
              <button
                type="button"
                className={`
                  ${isBordered ? "px-4 py-2" : "h-[32px] px-4"}
                  ${isBordered ? "rounded-lg" : "rounded-[8px]"}
                  border border-[#D1D5DB]
                  ${isBordered ? "text-sm" : "text-[13px]"}
                  text-[#374151]
                  bg-white
                  hover:bg-[#F3F4F6]
                `}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

