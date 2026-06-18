import { AdSlot } from "@/features/advertisement/components/ad-slot";
import type {
  ContentBlock,
  ParagraphBlock,
  HeadingBlock,
  QuoteBlock,
} from "@news/types";

interface Props {
  block: ContentBlock;
}

export function ContentBlockRenderer({block}: Props) {
  switch (block.type) {
    case "paragraph":
      return (
        <div
        className="
        prose
        prose-neutral
        max-w-none
      "
          dangerouslySetInnerHTML={{
            __html: block.content,
          }}
        />
      );;

    case "heading":
      return <h2
      className="
        text-2xl
        font-bold
        text-foreground
      "
    >
      {block.content}
    </h2>;

    case "quote":
      return <blockquote
      className="
        border-l-4
        border-border
        pl-4
        italic
        text-muted-foreground
        mb-2
      "
    >
      {block.content}
    </blockquote>;

      case "advertisement":
        return (
          <AdSlot slotId={block.slot}/>
        );

    default:
      return null;
  }
}
