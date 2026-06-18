import Image from "next/image";
import Link from "next/link";

import type {Article} from "@news/types";

import {
  getArticleUrl,
  presentPublishedDate,
} from "@/features/articles/presenters/article.presenter";
import {getAuthorUrl} from "@/features/authors/presenters/author.presenter";

interface HomeHeroProps {
  article: Article;
}

export async function HomeHero({article}: HomeHeroProps) {
  return (
    <article className="overflow-hidden rounded-xl">
      <Link href={getArticleUrl(article.slug)}>
        <div className="relative h-60 md:h-100 lg:h-125 overflow-hidden rounded-xl">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw,
            (max-width: 1280px) 80vw,
            1200px"
            className="object-cover"
            unoptimized
          />
        </div>
      </Link>

      <div className="py-5 md:py-6">
        <div className="mb-2 text-sm font-medium text-muted-foreground">
          {article.category.name}
        </div>

        <h1 className="mb-3 text-2xl font-bold md:text-4xl">
          {article.title}
        </h1>

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
