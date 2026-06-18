import type { WPUser } from "./wp-user";
import type { WPCategory } from "./wp-category";
import type { WPTag } from "./wp-tag";

export interface WPPost {
    id: number;

    slug: string;

    date: string;

    title: {
        rendered: string;
    };

    excerpt: {
        rendered: string;
    };

    content: {
        rendered: string;
    };

    _embedded?: {
        author?: WPUser[];

        ["wp:featuredmedia"]?: {
            source_url: string;
        }[];

        ["wp:term"]?: [
            WPCategory[],
            WPTag[]
        ];
    };
    modified: string;
}