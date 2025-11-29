import Link from "next/link";

interface ChipProps {
  label: string;
  href?: string;
  onClick?: () => void;
}

export function Chip({ label, href, onClick }: ChipProps) {
  const baseClasses =
    "inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border border-gray-200 bg-white text-gray-700 hover:bg-[#F5F5F0] hover:border-[#0F4C3A] hover:text-[#0F4C3A] transition-all duration-200";

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {label}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} className={baseClasses}>
        {label}
      </button>
    );
  }

  return <span className={baseClasses}>{label}</span>;
}

