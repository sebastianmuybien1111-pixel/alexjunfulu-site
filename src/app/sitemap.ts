import type { MetadataRoute } from "next";
import { researchProjects } from "@/data/research";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const primaryRoutes = [
    "",
    "/about",
    "/research",
    "/engagement",
    "/cv",
    "/notes-fragments",
    "/contact",
  ];

  const primaryEntries: MetadataRoute.Sitemap = primaryRoutes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date("2026-08-12"),
    changeFrequency: path === "" || path === "/research" ? "monthly" : "yearly",
    priority: path === "" ? 1 : path === "/research" ? 0.9 : 0.7,
  }));

  const researchEntries: MetadataRoute.Sitemap = researchProjects
    .filter((project) => project.href?.startsWith("/research/"))
    .map((project) => ({
    url: `${siteConfig.url}${project.href}`,
    lastModified: new Date("2026-08-12"),
    changeFrequency: project.status === "Research Project" || project.status === "Working Paper" ? "monthly" : "yearly",
    priority: project.status === "Publication" ? 0.85 : 0.75,
  }));

  return [...primaryEntries, ...researchEntries];
}
