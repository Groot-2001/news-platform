import type {Article} from "@news/types";

import {ContentBlockRenderer} from "../../renderers/content-block-renderer";

interface Props {
  article: Article;
}

export function ArticleContent({article}: Props) {
  return (
    <div className="space-y-6">
      {article.contentBlocks.map((block, index) => (
        <ContentBlockRenderer key={index} block={block} />
      ))}
    </div>
  );
}
