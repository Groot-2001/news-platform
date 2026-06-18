import type { Article } from "@news/types";

export interface ContentStream {
  title: string;
  articles: Article[];
}