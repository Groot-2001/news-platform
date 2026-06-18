import { AdSlotId } from "./advertisement";
import type { Author } from "./author";
import type { Category } from "./category";
import type { Tag } from "./tag";

export type ContentBlock =
  | ParagraphBlock
  | HeadingBlock
  | ImageBlock
  | QuoteBlock
  | AdvertisementBlock;

export interface ParagraphBlock {
  type: "paragraph";
  content: string;
}

export interface HeadingBlock {
  type: "heading";
  level: 1 | 2 | 3 | 4 | 5 | 6;
  content: string;
}

export interface ImageBlock {
  type: "image";
  src: string;
  alt: string;
  caption?: string;
}

export interface QuoteBlock {
  type: "quote";
  content: string;
  author?: string;
}

export interface AdvertisementBlock {
  type: "advertisement";
  slot: AdSlotId;
}
  

export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;

  publishedAt: string;
  updatedAt?: string;

  author: Author;
  category: Category;
  tags: Tag[];

  contentBlocks: ContentBlock[];
}