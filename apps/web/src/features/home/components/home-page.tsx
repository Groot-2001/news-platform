import type {Article} from "@news/types";

import {HomeHero} from "./home-hero";
import {LatestNews} from "./sections/latest-news";

import {AdSlot} from "@/features/advertisement/components/ad-slot";

import {Container, Section} from "@/components/layout";
import { CategorySection } from "./sections/category-section";
import { TrendingArticles } from "./sections/trending-articles";

interface HomePageProps {
  latest: Article[];
  trending: Article[];
  technology: Article[];
  politics: Article[];
  business: Article[];
}

export function HomePage({
  latest,
  trending,
  technology,
  politics,
  business,
}: HomePageProps) {
  if (!latest?.length) {
    return null;
  }

  const [heroArticle, ...latestArticles] = latest;

  return (
    <Container>
      <Section>
        <HomeHero article={heroArticle} />
      </Section>

      <Section>
        <AdSlot slotId="homepage-top" />
      </Section>

      <Section>
        <TrendingArticles articles={trending} />
      </Section>

      <Section>
        <LatestNews articles={latestArticles} />
      </Section>

      <Section>
        <AdSlot slotId="homepage-inline" />
      </Section>

      <Section>
        <CategorySection
          title="Technology"
          slug="technology"
          articles={technology}
          featured={true}
        />
      </Section>

      <Section>
        <CategorySection
          title="Politics"
          slug="politics"
          articles={politics}
        />
      </Section>

      <Section>
        <AdSlot slotId="homepage-inline" />
      </Section>

      <Section>
        <CategorySection
          title="Business"
          slug="business"
          articles={business}
        />
      </Section>
    </Container>
  );
}
