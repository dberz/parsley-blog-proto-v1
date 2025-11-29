"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border border-gray-200 rounded-lg bg-white hover:shadow-sm transition-shadow">
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-[#F5F5F0] transition-colors"
            >
              <span className="font-semibold text-[#0F4C3A] pr-4">{item.question}</span>
              <span className="text-[#0F4C3A] text-2xl font-light flex-shrink-0">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-5 text-gray-700 leading-relaxed">{item.answer}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}

