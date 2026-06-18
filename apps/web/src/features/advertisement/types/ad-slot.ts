export type AdSlotId =
  | "homepage-top"
  | "homepage-inline"
  | "article-inline-1"
  | "article-inline-2"
  | "sidebar-top";

export interface AdvertisementBlock {
  type: "advertisement";
  slot: AdSlotId;
}