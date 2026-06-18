import {Container, Section} from "@/components/layout";

import {SearchForm} from "@/features/search/components/search-form";

import {SearchResults} from "@/features/search/components/search-results";

import {SearchEmptyState} from "@/features/search/components/search-empty-state";

import {searchArticles} from "@/features/search/services/search-queries";
import { Pagination } from "@/components/pagination/pagination";

interface SearchPageProps {
  searchParams: Promise<{
    q?: string;
    page?: string;
  }>;
}

export default async function SearchPage({
  searchParams,
}: SearchPageProps) {
  const params = await searchParams;
  const query = params.q?.trim() ?? "";
  const rawPage = Number( params.page ?? "1");
  const page = Number.isNaN(rawPage)? 1 : Math.max(1, rawPage);
  const result = query ? await searchArticles( query, page, 10): null;

  return (
    <Container>
      <Section>
        <h1 className="mb-6 text-3xl font-bold">Search</h1>

        <SearchForm initialQuery={query} />
      </Section>

      {query && (
        <Section>
          {result?.data.length ? (
            <>
            <SearchResults articles={result.data} />
            <Pagination currentPage={result.page} totalPages={result.totalPages} createPageUrl={(page) =>`/search?q=${encodeURIComponent(query)}&page=${page}`}/>
            </>
          ) : (
            <SearchEmptyState query={query} />
          )}
        </Section>
      )}
    </Container>
  );
}
