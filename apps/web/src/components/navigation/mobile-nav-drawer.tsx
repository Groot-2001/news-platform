import Link from "next/link";
import { Category } from "@news/types";


interface MobileNavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  categories: Category[];
}

export function MobileNavDrawer({
  isOpen,
  onClose,
  categories
}: MobileNavDrawerProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        bg-background
      "
    >
      <div className="flex justify-end p-4">
        <button onClick={onClose} aria-label="Close Menu">
          ✕
        </button>
      </div>

      <nav className="flex flex-col gap-6 p-6">
        {categories.map((item) => (
          <Link
            key={item.id}
            href={`/categories/${item.slug}`}
            onClick={onClose}
            className="text-lg font-medium"
          >
            {item.name}
          </Link>
        ))}

        <Link
          href="/search"
          onClick={onClose}
          className="text-lg font-medium"
        >
          Search
        </Link>
      </nav>
    </div>
  );
}
