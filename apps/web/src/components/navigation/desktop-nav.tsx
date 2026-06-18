import Link from "next/link";;
import { Category } from "@news/types";

interface Props {
  categories: Category[];
}

export function DesktopNav({
  categories,
}: Props) {
  return (
    <nav className="hidden md:flex gap-6">
      {categories.map(
        category => (
          <Link
            key={category.id}
            href={`/categories/${category.slug}`}
          >
            {category.name}
          </Link>
        )
      )}
    </nav>
  );
}
