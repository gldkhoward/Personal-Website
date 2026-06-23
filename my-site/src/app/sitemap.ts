import type { MetadataRoute } from "next";

const baseUrl = "https://lukehoward.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/portfolio", "/about"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
