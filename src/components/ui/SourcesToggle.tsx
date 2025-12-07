"use client";

import { FAQAccordion } from "./FAQAccordion";

interface Source {
  id: number;
  citation: string;
}

interface SourcesToggleProps {
  sources: Source[];
}

export function SourcesToggle({ sources }: SourcesToggleProps) {
  const citationItems = [
    {
      question: "Scientific References",
      answer: (
        <div className="space-y-3">
          {sources.map((source) => (
            <div key={source.id} className="text-sm text-gray-700 leading-relaxed">
              <span className="font-semibold text-[#0F4C3A]">{source.id}.</span>{" "}
              <span dangerouslySetInnerHTML={{ __html: source.citation }} />
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="mt-8">
      <FAQAccordion items={citationItems} defaultOpen={false} />
    </div>
  );
}



