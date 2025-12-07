interface RootCauseDiagramProps {
  caption?: string;
}

export function RootCauseDiagram({
  caption = "We treat the roots (inflammation), not just the leaves (symptoms).",
}: RootCauseDiagramProps) {
  return (
    <figure className="float-right ml-8 mb-6 max-w-xs w-full md:w-auto">
      <div className="bg-[#F5F5F0] border-2 border-[#0F4C3A]/30 rounded-lg p-6 min-h-[300px] flex flex-col items-center justify-center">
        <div className="text-center mb-4">
          {/* Tree visualization */}
          <div className="mb-4">
            <svg
              className="w-48 h-48 mx-auto"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Roots */}
              <path
                d="M 100 180 L 80 200 M 100 180 L 120 200 M 100 180 L 100 200"
                stroke="#0F4C3A"
                strokeWidth="3"
                strokeLinecap="round"
              />
              {/* Trunk */}
              <rect x="95" y="120" width="10" height="60" fill="#0F4C3A" />
              {/* Branches */}
              <path
                d="M 100 120 L 60 80 M 100 120 L 140 80 M 100 100 L 70 60 M 100 100 L 130 60"
                stroke="#0F4C3A"
                strokeWidth="3"
                strokeLinecap="round"
              />
              {/* Leaves/Symptoms */}
              <circle cx="60" cy="80" r="15" fill="#E8F5E9" stroke="#0F4C3A" strokeWidth="2" />
              <circle cx="140" cy="80" r="15" fill="#E8F5E9" stroke="#0F4C3A" strokeWidth="2" />
              <circle cx="70" cy="60" r="12" fill="#E8F5E9" stroke="#0F4C3A" strokeWidth="2" />
              <circle cx="130" cy="60" r="12" fill="#E8F5E9" stroke="#0F4C3A" strokeWidth="2" />
              {/* Root labels */}
              <text x="50" y="195" className="text-xs fill-[#0F4C3A] font-semibold">
                Inflammation
              </text>
              <text x="100" y="195" className="text-xs fill-[#0F4C3A] font-semibold">
                Root Cause
              </text>
              <text x="130" y="195" className="text-xs fill-[#0F4C3A] font-semibold">
                Toxins
              </text>
              {/* Symptom labels */}
              <text x="30" y="85" className="text-xs fill-gray-600">Fatigue</text>
              <text x="155" y="85" className="text-xs fill-gray-600">Brain Fog</text>
            </svg>
          </div>
          <div className="text-sm font-semibold text-[#0F4C3A] mb-2">
            [DIAGRAM: The Root Cause Tree]
          </div>
        </div>
      </div>
      {caption && (
        <figcaption className="mt-3 text-xs text-gray-600 text-center italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

