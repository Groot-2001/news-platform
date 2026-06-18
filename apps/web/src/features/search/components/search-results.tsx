import type {Article} from "@news/types";

import {ArticleGrid} from "@/features/articles/components/grids/article-grid";

interface SearchResultsProps {
  articles: Article[];
}

export function SearchResults({
  articles,
}: SearchResultsProps) {
  return <ArticleGrid articles={articles} />;
}
