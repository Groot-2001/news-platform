import type {Article} from "@news/types";

import {ArticleGrid} from "@/features/articles/components/grids/article-grid";

interface LatestNewsProps {
  articles: Article[];
}

export function LatestNews({articles}: LatestNewsProps) {
  return (
    <section>
      <h2>Latest News</h2>

      <ArticleGrid articles={articles} />
    </section>
  );
}
