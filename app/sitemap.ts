import type { MetadataRoute } from "next";

const baseUrl = "https://nanacha.jp";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/menu", "/shop", "/seasonal", "/about"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/seasonal" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
