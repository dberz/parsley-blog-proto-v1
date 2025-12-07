"use client";

import { useEffect, useState } from "react";

interface TableOfContentsProps {
  headings: { id: string; text: string; level: number }[];
}

export function StickyTableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0% -35% 0%",
        threshold: 0,
      }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      headings.forEach((heading) => {
        const element = document.getElementById(heading.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [headings]);

  if (headings.length < 3) return null;

  return (
    <div className="hidden lg:block fixed right-4 xl:right-8 top-32 w-64 z-10">
      <div className="max-h-[calc(100vh-10rem)] overflow-y-auto">
        <h3 className="text-xs font-semibold text-gray-500 mb-4 uppercase tracking-wide">
          Table of Contents
        </h3>
        <nav className="space-y-2">
          {headings.map((heading) => {
            const isActive = activeId === heading.id;
            return (
              <a
                key={heading.id}
                href={`#${heading.id}`}
                className={`block text-sm transition-colors relative ${
                  isActive
                    ? "text-gray-900 font-bold pl-4 border-l-2 border-gray-400"
                    : "text-gray-500 hover:text-gray-700 pl-4 border-l-2 border-gray-200"
                }`}
                style={{
                  paddingLeft: `${(heading.level - 2) * 12 + 16}px`,
                }}
              >
                {heading.text}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

