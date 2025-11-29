import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

export function Card({ children, title, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6 ${className}`}
    >
      {title && (
        <h3 className="text-xl font-semibold text-[#0F4C3A] mb-4">{title}</h3>
      )}
      {children}
    </div>
  );
}

