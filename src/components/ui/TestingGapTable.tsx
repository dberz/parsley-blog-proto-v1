interface TestingGapTableProps {
  conditionName: string;
  standardTests: string[];
  parsleyTests: string[];
}

export function TestingGapTable({
  conditionName,
  standardTests,
  parsleyTests,
}: TestingGapTableProps) {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold text-[#0F4C3A] mb-6">
        Why Standard Tests Miss {conditionName}
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-[#0F4C3A]">
                Standard Labs
              </th>
              <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-[#0F4C3A] bg-[#E8F5E9]">
                Parsley Precision Labs
              </th>
            </tr>
          </thead>
          <tbody>
            {standardTests.map((standardTest, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-6 py-4 text-gray-700">
                  {standardTest}
                </td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700 bg-[#F1F8F4]">
                  {parsleyTests[index] || parsleyTests[0]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}



