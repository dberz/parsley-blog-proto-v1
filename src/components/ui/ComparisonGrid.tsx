interface ComparisonGridProps {
  conventional: string[];
  parsley: string[];
}

export function ComparisonGrid({ conventional, parsley }: ComparisonGridProps) {
  return (
    <div className="overflow-x-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Conventional Approach Column */}
        <div className="min-w-0">
          <h3 className="font-semibold text-gray-700 mb-4 text-lg border-b border-gray-300 pb-2">
            Conventional Approach
          </h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-sm leading-relaxed">
            {conventional.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Parsley Root-Cause Approach Column */}
        <div className="min-w-0 bg-[#E8F5E9]/30 rounded-lg p-4 border border-[#0F4C3A]/20">
          <h3 className="font-semibold text-[#0F4C3A] mb-4 text-lg border-b border-[#0F4C3A]/30 pb-2">
            The Parsley Root-Cause Approach
          </h3>
          <ul className="list-disc list-inside space-y-3 text-gray-800 text-sm leading-relaxed">
            {parsley.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}



