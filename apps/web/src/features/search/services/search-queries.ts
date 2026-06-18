import { createArticlesService } from "@news/api-client";

export async function searchArticles(
    query: string,
    page = 1,
    limit = 10
) {
    const service =
        createArticlesService();

    return service.searchArticles(
        query,
        {
            page,
            limit,
        }
    );
}