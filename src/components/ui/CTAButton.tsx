import Link from "next/link";
import { ReactNode } from "react";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}

export function CTAButton({
  href,
  children,
  variant = "primary",
}: CTAButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 text-base";
  
  const variantClasses = {
    primary:
      "bg-[#0F4C3A] text-white hover:bg-[#1a6b52] focus:outline-none focus:ring-2 focus:ring-[#0F4C3A] focus:ring-offset-2 shadow-sm hover:shadow-md",
    secondary:
      "border-2 border-[#0F4C3A] text-[#0F4C3A] bg-white hover:bg-[#F5F5F0] focus:outline-none focus:ring-2 focus:ring-[#0F4C3A] focus:ring-offset-2",
    ghost:
      "text-[#0F4C3A] hover:text-[#1a6b52] hover:bg-[#F5F5F0] focus:outline-none focus:ring-2 focus:ring-[#0F4C3A] focus:ring-offset-2",
  };

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {children}
    </Link>
  );
}

