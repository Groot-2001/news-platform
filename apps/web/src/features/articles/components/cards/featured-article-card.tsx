import Image from "next/image";
import Link from "next/link";

import type {Article} from "@news/types";

import {
  getArticleUrl,
  getCategoryUrl,
  presentPublishedDate,
} from "../../presenters/article.presenter";
import {getAuthorUrl} from "@/features/authors/presenters/author.presenter";

interface FeaturedArticleCardProps {
  article: Article;
}

export function FeaturedArticleCard({
  article,
}: FeaturedArticleCardProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-border">
      <Link href={getArticleUrl(article.slug)}>
        <div className="relative h-65 md:h-90">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            sizes="
              (max-width: 768px) 100vw,
              50vw
            "
            className="object-cover"
            unoptimized
          />
        </div>
      </Link>

      <div className="p-5">
        <Link
          href={getCategoryUrl(article.category.slug)}
          className="
            mb-3
            inline-block
            text-sm
            font-medium
            text-muted-foreground
          "
        >
          {article.category.name}
        </Link>

        <h3 className="mb-3 text-2xl font-bold">
          <Link href={getArticleUrl(article.slug)}>
            {article.title}
          </Link>
        </h3>

        <p className="mb-4 text-muted-foreground">
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
