interface Props {
  title: string;
  description: string;
  url: string;
  image?: string;
  publishedAt: string;
  authorName: string;
}

export function ArticleJsonLd({
  title,
  description,
  url,
  image,
  publishedAt,
  authorName,
}: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",

    headline: title,

    description,

    datePublished: publishedAt,

    author: {
      "@type": "Person",
      name: authorName,
    },

    image: image ? [image] : undefined,

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}
