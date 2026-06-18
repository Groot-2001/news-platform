import {
    getCategoryArticles,
    getHomepageArticles,
    getTrendingArticles,
  } from "@/features/articles/services/article-queries";
  
  export async function getHomepageData() {
    try {
      const latest =
        await getHomepageArticles();
  
      const trending =
        await getTrendingArticles(5);
  
      const technology =
        await getCategoryArticles(
          "technology",
          1,
          4
        );
  
      const politics =
        await getCategoryArticles(
          "politics",
          1,
          4
        );
  
      const business =
        await getCategoryArticles(
          "business",
          1,
          4
        );
  
      return {
        latest: latest.data,
        trending,
        technology: technology.data,
        politics: politics.data,
        business: business.data,
      };
    } catch (error) {
      console.error(
        "Failed to load homepage data",
        error
      );
  
      return {
        latest: [],
        trending: [],
        technology: [],
        politics: [],
        business: [],
      };
    }
  }