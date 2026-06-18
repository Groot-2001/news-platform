import {
    getWPCategories,
} from "@news/api-client/src/wordpress/client/wordpress-client";

import {
    mapWPCategoryToCategory,
} from "@news/api-client";

export async function getCategories() {
    const categories =
        await getWPCategories();

    return categories
        .filter(
            category =>
                category.count > 0
        )
        .map(
            mapWPCategoryToCategory
        );
}