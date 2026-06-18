import Link from "next/link";

import type {BreakingNews} from "../types/breaking-news";

interface Props {
  item: BreakingNews | null;
}

export function BreakingNewsBanner({item}: Props) {
  if (!item?.active) {
    return null;
  }

  return (
    <Link
      href={item.url}
      className="
        block
        rounded-lg
        border
        border-red-500
        px-4
        py-3
      "
    >
      <span
        className="
          mr-2
          font-bold
          text-red-500
        "
      >
        BREAKING
      </span>

      {item.title}
    </Link>
  );
}
