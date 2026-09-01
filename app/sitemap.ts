import type { MetadataRoute } from "next";
import { projects } from "./data/projects";
import { serviceSlugs } from "./data/services";

const siteUrl = "https://www.kerteszmatyas.hu";
const lastModified = new Date("2026-09-01");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projects.map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.8,
      images: [`${siteUrl}${project.image}`],
    })),
    ...serviceSlugs.map((slug) => ({
      url: `${siteUrl}/services/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
