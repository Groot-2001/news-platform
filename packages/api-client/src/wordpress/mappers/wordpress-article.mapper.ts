import type { Article } from "@news/types";

import type { WPPost } from "../types/wp-post";

function stripHtml(
    html: string
): string {
    return html.replace(
        /<[^>]*>/g,
        ""
    ).trim();
}

export function mapWPPostToArticle(
    wpPost: WPPost
): Article {
    const author =
        wpPost._embedded?.author?.[0];

    const categories =
        wpPost._embedded?.["wp:term"]?.[0] ??
        [];

    const tags =
        wpPost._embedded?.["wp:term"]?.[1] ??
        [];

    const coverImage =
        wpPost._embedded?.[
            "wp:featuredmedia"
        ]?.[0]?.source_url ??
        "/placeholder.jpg";

    return {
        id: String(wpPost.id),

        title:
            wpPost.title.rendered,

        slug:
            wpPost.slug,

        excerpt: stripHtml(
            wpPost.excerpt.rendered
        ),

        coverImage,

        publishedAt:
            wpPost.date,

        author: {
            id: String(
                author?.id ?? 0
            ),

            name:
                author?.name ??
                "Unknown Author",

            slug:
                author?.slug ??
                "",

            bio:
                author?.description ??
                "",

            avatar:
                author?.avatar_urls?.["96"] ??
                "",
        },

        category: {
            id: String(
                categories[0]?.id ?? 0
            ),

            name:
                categories[0]?.name ??
                "Uncategorized",

            slug:
                categories[0]?.slug ??
                "uncategorized",
        },

        tags: tags.map(tag => ({
            id: String(tag.id),
            name: tag.name,
            slug: tag.slug,
        })),

        contentBlocks: [
            {
                type: "paragraph",
                content:
                    wpPost.content.rendered,
            },
        ],
    };
}