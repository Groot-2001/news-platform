import type { AdSlotId } from "../types/ad-slot";

export const SLOT_DIMENSIONS: Record<AdSlotId,{ minHeight: number;}> = {
    "homepage-top": {
        minHeight: 250,
    },

    "homepage-inline": {
        minHeight: 250,
    },

    "article-inline-1": {
        minHeight: 250,
    },

    "article-inline-2": {
        minHeight: 250,
    },

    "sidebar-top": {
        minHeight: 600,
    },
};