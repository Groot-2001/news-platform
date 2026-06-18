import { SITE_CONFIG } from "@news/config";

export function getCanonicalUrl(
    path: string
) {
    return `${SITE_CONFIG.url}${path}`;
}