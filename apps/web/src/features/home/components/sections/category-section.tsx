import Link from "next/link";

import type {Article} from "@news/types";

import {ArticleGrid} from "@/features/articles/components/grids/article-grid";
import {getCategoryUrl} from "@/features/articles/presenters/article.presenter";
import {FeaturedArticleCard} from "@/features/articles/components/cards/featured-article-card";

interface CategorySectionProps {
  title: string;
  slug: string;
  articles: Article[];
  featured?: boolean;
}


export function CategorySection({
  title,
  slug,
  articles,
  featured = false,
}: CategorySectionProps) {
  if (!articles.length) {
    return null;
  }
  
  const header = (
    <div className="mb-6 flex items-center justify-between">
      <h2 className="text-2xl font-bold">
        {title}
      </h2>
  
      <Link
        href={getCategoryUrl(slug)}
        className="text-sm font-medium"
        >
        View all →
      </Link>
    </div>
  );
  
  if (featured) {
    const [featuredArticle, ...secondary] = articles;
    return (
      <section>
        {header}
        <FeaturedArticleCard article={featuredArticle} />

        {secondary.length > 0 && (
          <div className="mt-6">
            <ArticleGrid articles={secondary} />
          </div>
        )}
      </section>
    );
  }else{
    return (
      <section>
        {header}
        <ArticleGrid articles={articles} />
      </section>
    );
  }
}
