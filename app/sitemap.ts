import type { MetadataRoute } from "next";
import { projects } from "./data/projects";
import { serviceSlugs } from "./data/services";

const siteUrl = "https://www.kerteszmatyas.hu";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projects.map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.8,
      images: [`${siteUrl}${project.image}`],
    })),
    ...serviceSlugs.map((slug) => ({
      url: `${siteUrl}/services/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
