import type { Article, PaginatedResponse, PaginationOptions } from "@news/types";
import type { ArticlesService } from "./articles.service";
import { articles } from "../data/articles";


export class MockArticlesService implements ArticlesService {
  async getArticles(options: PaginationOptions): Promise<PaginatedResponse<Article>> {
    try {
      const { page, limit } = options;
      const start = (page - 1) * limit;
      const end = start + limit;
      const data = articles.slice(start, end);
      return {
        data,
        total: articles.length,
        page,
        limit,
        totalPages: Math.ceil(articles.length / limit)
      };
    } catch (error) {
      throw new Error("Not implemented");
    }
  }

  async getArticleBySlug(slug: string): Promise<Article | null> {
    try {
      return (articles.find(article => article.slug === slug) ?? null);
    } catch (error) {
      throw new Error("Not implemented");
    }
  }

  async getArticlesByCategory(
    categorySlug: string,
    options: PaginationOptions
  ): Promise<PaginatedResponse<Article>> {
    const { page, limit } = options;

    const filteredArticles = articles.filter(
      (article) =>
        article.category.slug === categorySlug
    );

    const start = (page - 1) * limit;
    const end = start + limit;

    const data = filteredArticles.slice(
      start,
      end
    );

    return {
      data,
      total: filteredArticles.length,
      page,
      limit,
      totalPages: Math.ceil(
        filteredArticles.length / limit
      ),
    };
  }

  async searchArticles(
    query: string,
    options: PaginationOptions
  ): Promise<PaginatedResponse<Article>> {
    const { page, limit } = options;

    const normalizedQuery =
      query.trim().toLowerCase();

    const filteredArticles = articles.filter(
      article =>
        article.title
          .toLowerCase()
          .includes(normalizedQuery) ||
        article.excerpt
          .toLowerCase()
          .includes(normalizedQuery)
    );

    const start = (page - 1) * limit;
    const end = start + limit;

    const data = filteredArticles.slice(
      start,
      end
    );

    return {
      data,
      total: filteredArticles.length,
      page,
      limit,
      totalPages: Math.ceil(
        filteredArticles.length / limit
      ),
    };
  }

  async getRelatedArticles(
    articleId: string,
    categorySlug: string,
    limit = 3
  ): Promise<Article[]> {
    return articles
      .filter(
        article =>
          article.id !== articleId &&
          article.category.slug === categorySlug
      )
      .slice(0, limit);
  }

  async getArticlesByAuthor(
    authorId: string,
    options: PaginationOptions
  ): Promise<PaginatedResponse<Article>> {
    const { page, limit } = options;
  
    const filteredArticles =
      articles.filter(
        article =>
          article.author.id === authorId
      );
  
    const start =
      (page - 1) * limit;
  
    const end =
      start + limit;
  
    return {
      data: filteredArticles.slice(
        start,
        end
      ),
      total: filteredArticles.length,
      page,
      limit,
      totalPages: Math.ceil(
        filteredArticles.length / limit
      ),
    };
  }

  async getArticlesByTag(
    tagSlug: string,
    options: PaginationOptions
  ): Promise<PaginatedResponse<Article>> {
    const { page, limit } = options;
  
    const filteredArticles = articles.filter(
      article =>
        article.tags.some(
          tag => tag.slug === tagSlug
        )
    );
  
    const start = (page - 1) * limit;
    const end = start + limit;
  
    return {
      data: filteredArticles.slice(
        start,
        end
      ),
      total: filteredArticles.length,
      page,
      limit,
      totalPages: Math.ceil(
        filteredArticles.length / limit
      ),
    };
  }
}
