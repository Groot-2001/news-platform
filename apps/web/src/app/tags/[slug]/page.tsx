import {notFound} from "next/navigation";
import type {Metadata} from "next";

import {ArticleGrid} from "@/features/articles/components/grids/article-grid";
import {getTagArticles} from "@/features/articles/services/article-queries";
import {Pagination} from "@/components/pagination/pagination";
import {Breadcrumbs} from "@/components/navigation/breadcrumbs";
import {ArchivePage} from "@/features/articles/components/archive-page";
import {createMetadata} from "@/features/seo/metadata";

interface TagPageProps {
  params: Promise<{
    slug: string;
  }>;

  searchParams: Promise<{
    page?: string;
  }>;
}

export async function generateMetadata({
  params,
}: TagPageProps): Promise<Metadata> {
  const {slug} = await params;

  return createMetadata({
    title: `#${slug}`,
    description: `Articles tagged with ${slug}`,
    path: `/tags/${slug}`,
  });
}

export default async function TagPage({
  params,
  searchParams,
}: TagPageProps) {
  const {slug} = await params;

  const search = await searchParams;

  const rawPage = Number(search.page ?? "1");

  const page = Number.isNaN(rawPage)
    ? 1
    : Math.max(1, rawPage);

  const result = await getTagArticles(slug, page, 10);

  if (!result.data.length) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl p-4">
      <ArchivePage
        title={`#${slug}`}
        breadcrumbs={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Tags",
          },
          {
            label: slug,
          },
        ]}
      >
        <ArticleGrid articles={result.data} />

        <Pagination
          currentPage={result.page}
          totalPages={result.totalPages}
          createPageUrl={(page) =>
            `/tags/${slug}?page=${page}`
          }
        />
      </ArchivePage>
    </main>
  );
}
