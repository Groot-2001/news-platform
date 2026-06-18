import { MockArticlesService } from "../services/mock-articles.service";
import type { ArticlesService } from "../services/articles.service";
import { WordPressArticlesService } from "../services/wordpress-articles.service";

export function createArticlesService(): ArticlesService {
  const provider = process.env.NEWS_API_PROVIDER;

  switch (provider) {
  case "wordpress":
  return new WordPressArticlesService();

  case "mock":
  default:
  return new MockArticlesService();
  }
}