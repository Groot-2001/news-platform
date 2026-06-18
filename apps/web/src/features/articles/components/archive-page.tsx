import type {ReactNode} from "react";

import {
  BreadcrumbItem,
  Breadcrumbs,
} from "@/components/navigation/breadcrumbs";

interface ArchivePageProps {
  title: string;
  description?: string;
  breadcrumbs: BreadcrumbItem[];
  children: ReactNode;
}

export function ArchivePage({
  title,
  description,
  breadcrumbs,
  children,
}: ArchivePageProps) {
  return (
    <main className="mx-auto max-w-7xl p-4">
      <Breadcrumbs items={breadcrumbs} />

      <h1 className="mb-2 text-3xl font-bold">{title}</h1>

      {description && (
        <p className="mb-8 text-muted-foreground">
          {description}
        </p>
      )}

      {children}
    </main>
  );
}
