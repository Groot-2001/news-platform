import Link from "next/link";

import { Container } from "@/components/layout";

import { SITE_CONFIG } from "@news/config";
import type { Category } from "@news/types";

interface Props {
  categories: Category[];
}

export function SiteFooter({
  categories,
}: Props) {
  return (
    <footer className="mt-16 border-t">
      <Container>
        <div className="py-8">
          <h2 className="mb-4 text-xl font-bold">
            {SITE_CONFIG.name}
          </h2>

          <nav className="mb-6 flex flex-wrap gap-4">
            {categories.map((item) => (
              <Link
                key={item.id}
                href={`/categories/${item.slug}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()}{" "}
            {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}