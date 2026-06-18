import type { Article, PaginatedResponse, PaginationOptions, } from "@news/types";

export interface ArticlesService {
    getArticles(
        options: PaginationOptions
    ): Promise<PaginatedResponse<Article>>;

    getArticleBySlug(
        slug: string
    ): Promise<Article | null>;

    getArticlesByCategory(
        categorySlug: string,
        options: PaginationOptions
    ): Promise<PaginatedResponse<Article>>;

    searchArticles(
        query: string,
        options: PaginationOptions
    ): Promise<PaginatedResponse<Article>>;

    getRelatedArticles(
        articleId: string,
        categorySlug: string,
        limit: number
    ): Promise<Article[]>;

    getArticlesByAuthor(
        authorId: string,
        options: PaginationOptions
    ): Promise<PaginatedResponse<Article>>;

    getArticlesByTag(
        tagSlug: string,
        options: PaginationOptions
      ): Promise<PaginatedResponse<Article>>;
}

