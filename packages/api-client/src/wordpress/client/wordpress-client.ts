import { WPCategory } from "../types/wp-category";
import type { WPPost }
    from "../types/wp-post";
import { WPTag } from "../types/wp-tag";
import { WPAuthor } from "../types/wp-author";

const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL!;

async function fetchFromWordPress<T>(
    path: string
): Promise<T> {
    const response =
        await fetch(
            `${WORDPRESS_API_URL}${path}`,
            {
                next: {
                    revalidate: 60,
                },
            }
        );

    if (!response.ok) {
        throw new Error(
            `WordPress API Error: ${response.status}`
        );
    }

    return response.json() as Promise<T>;
}

export async function getWPPosts() {
    return fetchFromWordPress<
        WPPost[]
    >(
        "/posts?_embed"
    );
}

export async function getWPPostBySlug(
    slug: string
) {
    const posts =
        await fetchFromWordPress<
            WPPost[]
        >(
            `/posts?slug=${slug}&_embed`
        );

    return posts[0] ?? null;
}

export async function getWPPostsByCategory(
    categorySlug: string
) {
    const categories =
        await fetchFromWordPress<any[]>(
            `/categories?slug=${categorySlug}`
        );

    const category =
        categories[0];

    if (!category) {
        return [];
    }

    return fetchFromWordPress<WPPost[]>(
        `/posts?categories=${category.id}&_embed`
    );
}

export async function getAllWPPosts() {
    return getWPPosts();
}

export async function getWPPostsByTag(
    tagSlug: string
) {
    const tags =
        await fetchFromWordPress<any[]>(
            `/tags?slug=${tagSlug}`
        );

    const tag = tags[0];

    if (!tag) {
        return [];
    }

    return fetchFromWordPress<WPPost[]>(
        `/posts?tags=${tag.id}&_embed`
    );
}

export async function getWPPostsByAuthor(
    authorId: string
) {
    return fetchFromWordPress<WPPost[]>(
        `/posts?author=${authorId}&_embed`
    );
}

export async function searchWPPosts(
    query: string
) {
    return fetchFromWordPress<WPPost[]>(
        `/posts?search=${encodeURIComponent(query)}&_embed`
    );
}


export async function getWPCategories() {
    return fetchFromWordPress<
        WPCategory[]
    >(
        "/categories"
    );
}

export async function getWPTags() {
    return fetchFromWordPress<WPTag[]>(
        "/tags"
    );
}

export async function getWPAuthors() {
    return fetchFromWordPress<WPAuthor[]>(
        "/users"
    );
}
