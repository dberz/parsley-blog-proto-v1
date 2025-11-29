import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-12 ${className}`}>
      {title && (
        <h2 className="text-3xl font-bold text-[#0F4C3A] mb-8">{title}</h2>
      )}
      {children}
    </section>
  );
}

