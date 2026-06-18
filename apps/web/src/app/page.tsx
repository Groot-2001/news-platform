import { HomePage } from "@/features/home/components/home-page";
import { getHomepageData } from "@/features/home/services/home-queries";

export default async function Page() {
  const homepageData =
    await getHomepageData();

  return (
    <main>
      <HomePage
        latest={homepageData.latest}
        trending={homepageData.trending}
        technology={homepageData.technology}
        politics={homepageData.politics}
        business={homepageData.business}
      />
    </main>
  );
}