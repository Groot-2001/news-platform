import {notFound} from "next/navigation";
import {
  getArticleBySlug,
  getRelatedArticles,
} from "@/features/articles/services/article-queries";
import {ArticleContent} from "@/features/articles/components/content/article-content";
import type {Metadata} from "next";
import {RelatedArticles} from "@/features/articles/components/related/related-articles";
import {Breadcrumbs} from "@/components/navigation/breadcrumbs";
import {createMetadata} from "@/features/seo/metadata";
import {ArticleJsonLd} from "@/features/seo/components/article-json-ld";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata(
  props: Props
): Promise<Metadata> {
  const {slug} = await props.params;

  const article = await getArticleBySlug(slug);

  if (!article) {
    return {};
  }

  return createMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/articles/${article.slug}`,
    image: article.coverImage,
  });
}

export default async function Page({params}: Props) {
  const {slug} = await params;

  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = await getRelatedArticles(
    article.id,
    article.category.slug
  );

  return (
    <main className="mx-auto max-w-3xl p-4">
      <ArticleJsonLd
        title={article.title}
        description={article.excerpt}
        url={`/articles/${article.slug}`}
        image={article.coverImage}
        publishedAt={article.publishedAt}
        authorName={article.author.name}
      />
      <Breadcrumbs
        items={[
          {label: "Home", href: "/"},
          {
            label: article.category.name,
            href: `/categories/${article.category.slug}`,
          },
          {label: article.title},
        ]}
      />
      <h1 className="mb-4 mt-2 text-4xl font-bold">
        {article.title}
      </h1>

      <p className="mb-8">{article.excerpt}</p>

      <ArticleContent article={article} />
      <RelatedArticles articles={relatedArticles} />
    </main>
  );
}
