import Link from "next/link";
import type {Article} from "@news/types";
import {getArticleUrl} from "@/features/articles/presenters/article.presenter";

interface TrendingArticlesProps {
  articles: Article[];
}

export function TrendingArticles({
  articles,
}: TrendingArticlesProps) {
  if (!articles.length) {
    return null;
  }

  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold">Trending</h2>

      <ol className="space-y-4">
        {articles.map((article, index) => (
          <li
            key={article.id}
            className=" flex gap-4 border-b border-border pb-4"
          >
            <span className=" text-xl font-bold text-muted-foreground">
              {index + 1}
            </span>

            <Link
              href={getArticleUrl(article.slug)}
              className=" font-medium hover:underline"
            >
              {article.title}
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
