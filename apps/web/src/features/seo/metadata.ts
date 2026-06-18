import type { Metadata }
    from "next";

import {
    getCanonicalUrl,
} from "./urls";
import { SITE_CONFIG } from "@news/config";

interface CreateMetadataOptions {
    title: string;
    description: string;
    path: string;
    image?: string;
}

export function createMetadata({
    title,
    description,
    path,
    image
}: CreateMetadataOptions): Metadata {
    const canonical =
        getCanonicalUrl(path);

    return {
        title,
        description,

        alternates: {
            canonical,
        },

        openGraph: {
            title,
            description,
            url: canonical,
            siteName: SITE_CONFIG.name,
            locale: "en_US",
            type: "website",
            images: image
                ? [
                    {
                        url: image,
                        width: 1200,
                        height: 630,
                    },
                ]
                : undefined,
        },

        twitter: {
            card:
                "summary_large_image",
            title,
            description,
            images: image
                ? [image]
                : undefined,
        },
    };
}