import {Article} from "@news/types";
import { ArticleGrid } from "../grids/article-grid";

interface RelatedArticlesProps {
  articles: Article[];
}

export function RelatedArticles({
  articles,
}: RelatedArticlesProps) {
  return (
    <section>
      <h2>Related Articles</h2>

      <ArticleGrid articles={articles} />
    </section>
  );
}
