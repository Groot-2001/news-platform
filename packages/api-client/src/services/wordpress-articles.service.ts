import type {
    Article,
    PaginatedResponse,
    PaginationOptions,
} from "@news/types";

import type {
    ArticlesService,
} from "./articles.service";

import {
    getWPPosts,
    getWPPostBySlug,
    getWPPostsByTag,
    getWPPostsByAuthor,
    searchWPPosts,
} from "../wordpress/client/wordpress-client";

import {
    mapWPPostToArticle,
} from "../wordpress/mappers/wordpress-article.mapper";

import {
    getWPPostsByCategory,
} from "../wordpress/client/wordpress-client";

export class WordPressArticlesService
    implements ArticlesService {
    async getArticlesByAuthor(
        authorId: string,
        options: PaginationOptions
    ): Promise<
        PaginatedResponse<Article>
    > {

        const posts =
            await getWPPostsByAuthor(
                authorId
            );

        const articles =
            posts.map(
                mapWPPostToArticle
            );

        const {
            page,
            limit,
        } = options;

        const start =
            (page - 1) * limit;

        const end =
            start + limit;

        return {
            data:
                articles.slice(start, end),

            total:
                articles.length,

            page,

            limit,

            totalPages:
                Math.ceil(
                    articles.length /
                    limit
                ),
        };
    }

    async getArticles(
        options: PaginationOptions
    ): Promise<
        PaginatedResponse<Article>
    > {
        const posts =
            await getWPPosts();

        const articles =
            posts.map(
                mapWPPostToArticle
            );

        const {
            page,
            limit,
        } = options;

        const start =
            (page - 1) * limit;

        const end =
            start + limit;

        return {
            data:
                articles.slice(
                    start,
                    end
                ),

            total:
                articles.length,

            page,

            limit,

            totalPages:
                Math.ceil(
                    articles.length /
                    limit
                ),
        };
    }

    async getArticleBySlug(
        slug: string
    ): Promise<Article | null> {
        const post =
            await getWPPostBySlug(
                slug
            );

        if (!post) {
            return null;
        }

        return mapWPPostToArticle(
            post
        );
    }

    async getArticlesByCategory(
        categorySlug: string,
        options: PaginationOptions
    ): Promise<
        PaginatedResponse<Article>
    > {
        const posts =
            await getWPPostsByCategory(
                categorySlug
            );

        const articles =
            posts.map(
                mapWPPostToArticle
            );

        const {
            page,
            limit,
        } = options;

        const start =
            (page - 1) * limit;

        const end =
            start + limit;

        return {
            data:
                articles.slice(
                    start,
                    end
                ),

            total:
                articles.length,

            page,

            limit,

            totalPages:
                Math.ceil(
                    articles.length /
                    limit
                ),
        };
    }

    async searchArticles(
        query: string,
        options: PaginationOptions
    ): Promise<PaginatedResponse<Article>> {

        const posts =
            await searchWPPosts(query);

        const articles =
            posts.map(
                mapWPPostToArticle
            );

        const { page, limit } = options;

        const start =
            (page - 1) * limit;

        const end =
            start + limit;

        return {
            data:
                articles.slice(start, end),

            total:
                articles.length,

            page,

            limit,

            totalPages:
                Math.ceil(
                    articles.length / limit
                ),
        };
    }

    async getRelatedArticles(
        articleId: string,
        categorySlug: string,
        limit = 3
    ): Promise<Article[]> {

        const posts =
            await getWPPosts();

        const articles =
            posts.map(
                mapWPPostToArticle
            );

        return articles
            .filter(
                article =>
                    article.id !== articleId &&
                    article.category.slug === categorySlug
            )
            .slice(0, limit);
    }

    async getArticlesByTag(
        tagSlug: string,
        options: PaginationOptions
    ): Promise<
        PaginatedResponse<Article>
    > {

        const posts =
            await getWPPostsByTag(
                tagSlug
            );

        const articles =
            posts.map(
                mapWPPostToArticle
            );

        const {
            page,
            limit,
        } = options;

        const start =
            (page - 1) * limit;

        const end =
            start + limit;

        return {
            data:
                articles.slice(start, end),

            total:
                articles.length,

            page,

            limit,

            totalPages:
                Math.ceil(
                    articles.length /
                    limit
                ),
        };
    }
}