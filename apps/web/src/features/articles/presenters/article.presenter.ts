import { formatDate } from "@/lib/formatters/date";

export function getArticleUrl(
    slug: string
) {
    return `/articles/${slug}`;
}


export function presentPublishedDate(
    publishedAt: string
  ) {
    return formatDate(publishedAt);
  }

export function getCategoryUrl(
    slug: string
  ) {
    return `/categories/${slug}`;
  }