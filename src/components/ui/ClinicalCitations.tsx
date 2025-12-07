"use client";

import { FAQAccordion } from "./FAQAccordion";

interface Citation {
  id: number;
  text: string;
}

interface ClinicalCitationsProps {
  citations: Citation[];
}

export function ClinicalCitations({ citations }: ClinicalCitationsProps) {
  const citationItems = [
    {
      question: "Medical Sources & Citations",
      answer: (
        <div className="space-y-3">
          {citations.map((citation) => (
            <div key={citation.id} className="text-sm text-gray-700 leading-relaxed">
              <span className="font-semibold text-[#0F4C3A]">{citation.id}.</span>{" "}
              {citation.text}
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <FAQAccordion items={citationItems} defaultOpen={false} />
    </div>
  );
}

