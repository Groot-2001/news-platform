
import { HomePage } from "@/features/home/components/home-page";
import { getHomepageData } from "@/features/home/services/home-queries";
import {
  getWPPosts,
} from "@news/api-client/src/wordpress/client/wordpress-client";

import {mapWPPostToArticle} from "@news/api-client/src/wordpress/mappers/wordpress-article.mapper"

export default async function Page() {
  const homepageData = await getHomepageData();
  const posts = await getWPPosts();
  const article = mapWPPostToArticle(posts[0]);

console.log(article);

console.log(posts[0])
  return (
    <main>
        <HomePage latest={homepageData.latest} trending={homepageData.trending} technology={ homepageData.technology} politics={ homepageData.politics} business={ homepageData.business}/>
    </main>
  );
}
