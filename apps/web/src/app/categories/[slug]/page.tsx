import {notFound} from "next/navigation";
import {getCategoryArticles} from "@/features/articles/services/article-queries";
import {ArticleGrid} from "@/features/articles/components/grids/article-grid";
import type {Metadata} from "next";
import {Pagination} from "@/components/pagination/pagination";
import {ArchivePage} from "@/features/articles/components/archive-page";
import {createMetadata} from "@/features/seo/metadata";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    page?: string;
  }>;
}

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const {slug} = await params;
  const search = await searchParams;

  const page = Math.max(1, Number(search.page ?? "1"));

  const result = await getCategoryArticles(slug, page, 2);

  if (result.data.length === 0) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl p-4">
      <ArchivePage
        title={slug}
        breadcrumbs={[
          {
            label: "Home",
            href: "/",
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
            `/categories/${slug}?page=${page}`
          }
        />
      </ArchivePage>
    </main>
  );
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const {slug} = await params;

  return createMetadata({
    title: `${slug} News`,
    description: `Latest ${slug} news and updates.`,
    path: `/categories/${slug}`,
  });
}
