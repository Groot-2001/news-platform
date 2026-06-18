import {notFound} from "next/navigation";
import {ArticleGrid} from "@/features/articles/components/grids/article-grid";
import {getAuthorArticles} from "@/features/articles/services/article-queries";
import {Pagination} from "@/components/pagination/pagination";
import type {Metadata} from "next";
import {ArchivePage} from "@/features/articles/components/archive-page";
import {createMetadata} from "@/features/seo/metadata";

interface AuthorPageProps {
  params: Promise<{
    id: string;
  }>;

  searchParams: Promise<{
    page?: string;
  }>;
}

export default async function AuthorPage({
  params,
  searchParams,
}: AuthorPageProps) {
  const {id} = await params;
  const search = await searchParams;
  const rawPage = Number(search.page ?? "1");
  const page = Number.isNaN(rawPage)
    ? 1
    : Math.max(1, rawPage);

  const result = await getAuthorArticles(id, page, 10);

  if (!result.data.length) {
    notFound();
  }

  const author = result.data[0].author;

  return (
    <main className="mx-auto max-w-7xl p-4">
      <ArchivePage
        title={author.name}
        description={author.bio}
        breadcrumbs={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Authors",
          },
          {
            label: author.name,
          },
        ]}
      >
        <ArticleGrid articles={result.data} />

        <Pagination
          currentPage={result.page}
          totalPages={result.totalPages}
          createPageUrl={(page) =>
            `/authors/${id}?page=${page}`
          }
        />
      </ArchivePage>
    </main>
  );
}

export async function generateMetadata({
  params,
}: AuthorPageProps): Promise<Metadata> {
  const {id} = await params;

  const result = await getAuthorArticles(id, 1, 1);

  if (!result.data.length) {
    return {};
  }

  const author = result.data[0].author;

  return createMetadata({
    title: author.name,
    description:
      author.bio ?? `Articles written by ${author.name}`,
    path: `/authors/${id}`,
  });
}
