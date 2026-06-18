import type { Category }
    from "@news/types";

import type { WPCategory }
    from "../types/wp-category";

export function mapWPCategoryToCategory(
    category: WPCategory
): Category {
    return {
        id: String(category.id),
        name: category.name,
        slug: category.slug,
    };
}