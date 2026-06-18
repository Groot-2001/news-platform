import Image from "next/image";
import Link from "next/link";
import type {Article} from "@news/types";
import {
  getArticleUrl,
  getCategoryUrl,
  presentPublishedDate,
} from "../../presenters/article.presenter";
import { getAuthorUrl } from "@/features/authors/presenters/author.presenter";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({article}: ArticleCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-border bg-card text-card-foreground transition-all hover:shadow-lg">
      {" "}
      <Link
        href={getArticleUrl(article.slug)}
        className="block"
      >
        <div className="relative aspect-video">
          {" "}
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            sizes="
            (max-width: 768px) 100vw,
            (max-width: 1024px) 50vw,
            33vw
          "
            className="object-cover"
            unoptimized
          />{" "}
        </div>
      </Link>
      <div className="p-4">
        <p className="mb-2 text-sm font-medium text-muted-foreground">
          <Link
            href={getCategoryUrl(article.category.slug)}
          >
            {article.category.name}
          </Link>
        </p>

        <h2 className="mb-2 text-xl font-bold">
          <Link
            href={getArticleUrl(article.slug)}
            className="transition-colors hover:text-blue-600"
          >
            {article.title}
          </Link>
        </h2>

        <p className="mb-4 text-sm text-muted-foreground">
          {article.excerpt}
        </p>

        <div className="text-sm text-muted-foreground">
          <Link href={getAuthorUrl(article.author.id)} className="hover:underline">
            {article.author.name}
          </Link>

          {" • "}

          {presentPublishedDate(article.publishedAt)}
        </div>
      </div>
    </article>
  );
}
