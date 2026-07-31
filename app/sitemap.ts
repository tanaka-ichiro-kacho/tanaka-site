import type { MetadataRoute } from "next";
import { articleDetails } from "@/data/articles";

export const dynamic = "force-static";

const BASE_URL = "https://tanaka-site-two.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const articleEntries: MetadataRoute.Sitemap = articleDetails.map(
    (article) => ({
      url: `${BASE_URL}/articles/${article.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    }),
  );

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/diagnosis`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...articleEntries,
  ];
}
