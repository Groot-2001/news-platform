import { createArticlesService }
    from "@news/api-client";

const articlesService = createArticlesService();

export async function getHomepageArticles() {
    return articlesService.getArticles({ page: 1, limit: 10, });
}

export async function getArticleBySlug(slug: string) {
    return articlesService.getArticleBySlug(slug);
}

export async function getCategoryArticles(categorySlug: string, page = 1, limit = 10) {
    return articlesService.getArticlesByCategory(categorySlug, { page, limit });
}

export async function getRelatedArticles(articleId: string, categorySlug: string, limit = 3) {
    return articlesService.getRelatedArticles(articleId, categorySlug, limit);
}

export async function getTrendingArticles( limit = 5 ) {
    const result = await articlesService.getArticles({ page: 1, limit});
    return result.data;
}

export async function getAuthorArticles(
    authorId: string,
    page = 1,
    limit = 10
  ) {
  
    return articlesService.getArticlesByAuthor(
      authorId,
      {
        page,
        limit,
      }
    );
  }

  export async function getTagArticles(
    tagSlug: string,
    page = 1,
    limit = 10
  ) {
  
    return articlesService.getArticlesByTag(
      tagSlug,
      {
        page,
        limit,
      }
    );
  }