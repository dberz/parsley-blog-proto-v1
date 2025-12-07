"use client";

import { useState, ReactNode } from "react";

interface FAQItem {
  question: string;
  answer: string | ReactNode;
}

interface FAQAccordionProps {
  items: FAQItem[];
  defaultOpen?: boolean;
}

export function FAQAccordion({ items, defaultOpen = false }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen ? 0 : null);

  return (
    <div className="space-y-2">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="relative">
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full text-left py-2 text-[#0F4C3A] hover:text-[#1a6b52] transition-colors flex items-center gap-2 group"
            >
              <span className="text-sm font-medium">{item.question}</span>
              <span className="text-[#0F4C3A] text-lg font-light flex-shrink-0 group-hover:text-[#1a6b52]">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {/* Always render content for SEO - visible when open, hidden but in DOM when closed */}
            <div
              className={`mt-3 text-gray-700 leading-relaxed ${
                isOpen ? "block" : "hidden"
              }`}
            >
              {item.answer}
            </div>
            {/* SEO: Always render content in DOM but visually hidden when closed - ensures search engines can index it */}
            <div
              className={`mt-3 text-gray-700 leading-relaxed absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0 ${
                isOpen ? "hidden" : ""
              }`}
              aria-hidden="true"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}

