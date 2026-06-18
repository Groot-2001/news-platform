export type ArticleSortBy =
| "latest"
| "oldest"
| "popular";

export interface ArticleFilters {
sortBy?: ArticleSortBy;
}
