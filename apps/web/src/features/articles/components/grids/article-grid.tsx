import type {Article} from "@news/types";

import {ArticleCard} from "../cards/article-card";

interface ArticleGridProps {
  articles: Article[];
}

export function ArticleGrid({articles}: ArticleGridProps) {
  return (
    <section className=" grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}{" "}
    </section>
  );
}
