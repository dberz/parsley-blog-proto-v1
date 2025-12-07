interface DataGridProps {
  columns: {
    header: string;
    items: string[];
  }[];
}

export function DataGrid({ columns }: DataGridProps) {
  return (
    <div className="overflow-x-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="min-w-0">
            <h3 className="font-semibold text-[#0F4C3A] mb-3 text-lg border-b border-gray-200 pb-2">
              {column.header}
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm leading-relaxed">
              {column.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}



