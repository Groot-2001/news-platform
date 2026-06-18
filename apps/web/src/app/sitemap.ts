import type { MetadataRoute }
  from "next";

  import {
    getWPPosts,
    getWPCategories,
    getWPTags,
    getWPAuthors,
  } from "@news/api-client";

  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

export default async function sitemap():
  Promise<MetadataRoute.Sitemap> {

  const [
    posts,
    categories,
    tags,
    authors,
  ] = await Promise.all([
    getWPPosts(),
    getWPCategories(),
    getWPTags(),
    getWPAuthors(),
  ]);

  return [
    {
      url: SITE_URL,
      lastModified:
        new Date(),
    },

    ...categories
      .filter(
        category =>
          category.count > 0
      )
      .map(category => ({
        url:
          `${SITE_URL}/categories/${category.slug}`,

        lastModified:
          new Date(),
      })),

    ...tags
      .filter(
        tag =>
          tag.id > 0
      )
      .map(tag => ({
        url:
          `${SITE_URL}/tags/${tag.slug}`,

        lastModified:
          new Date(),
      })),

    ...authors.map(author => ({
      url:
        `${SITE_URL}/authors/${author.id}`,

      lastModified:
        new Date(),
    })),

    ...posts.map(post => ({
      url:
        `${SITE_URL}/articles/${post.slug}`,

      lastModified:
        new Date(
          post.modified
        ),
    })),
  ];
}