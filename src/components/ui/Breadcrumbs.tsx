import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={index} className="flex items-center">
            {item.href && !isLast ? (
              <Link href={item.href} className="hover:text-[#0F4C3A] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "text-[#0F4C3A] font-semibold" : ""}>
                {item.label}
              </span>
            )}
            {!isLast && <span className="mx-2 text-gray-400">/</span>}
          </span>
        );
      })}
    </nav>
  );
}

