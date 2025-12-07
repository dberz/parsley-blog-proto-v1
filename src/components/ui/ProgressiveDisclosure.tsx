"use client";

import { useState } from "react";

interface ProgressiveDisclosureProps {
  preview: React.ReactNode;
  fullContent: React.ReactNode;
  previewLabel?: string;
  expandLabel?: string;
  collapseLabel?: string;
}

export function ProgressiveDisclosure({
  preview,
  fullContent,
  previewLabel = "View full list",
  expandLabel = "Read more",
  collapseLabel = "Show less",
}: ProgressiveDisclosureProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <div className={isExpanded ? "hidden" : ""}>{preview}</div>
      <div className={isExpanded ? "" : "hidden"}>{fullContent}</div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 text-[#0F4C3A] font-medium hover:underline flex items-center gap-2"
      >
        {isExpanded ? (
          <>
            <span>{collapseLabel}</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </>
        ) : (
          <>
            <span>{expandLabel}</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </>
        )}
      </button>
    </div>
  );
}



