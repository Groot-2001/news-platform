import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({items}: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="
        mb-6
        flex
        flex-wrap
        items-center
        gap-2
        text-sm
        text-muted-foreground
      "
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div
            key={`${item.label}-${index}`}
            className="flex items-center gap-2"
          >
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="hover:underline"
              >
                {item.label}
              </Link>
            ) : (
              <span>{item.label}</span>
            )}

            {!isLast && <span>/</span>}
          </div>
        );
      })}
    </nav>
  );
}
