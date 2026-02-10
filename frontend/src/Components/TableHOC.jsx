import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
function TableHOC(heading) {
  return function HOC({columns, data, containerClassName}) {
    const table = useReactTable({
      columns,
      data,
      getCoreRowModel: getCoreRowModel(),
    });
  return (
      <div className={containerClassName || "p-4"}>
        {/* Use the config from the outer scope (closure) */}
        <h2 className="text-xl font-bold mb-4">{heading}</h2>

        <table className="min-w-full border">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="border p-2 bg-gray-100">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="border p-2">
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
}

export default TableHOC;
