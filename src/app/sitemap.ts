import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://fns50322.com.au";

  const routes = [
    "",
    "/compare",
    "/pricing",
    "/quiz",
    "/faq",
    "/blog",
    "/guides",
    "/modules",
    "/about",
    "/contact",
    "/methodology",
    "/nsw",
    "/vic",
    "/qld",
    "/wa",
    "/sa",
    "/tas",
    "/nt",
    "/act",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : route === "/compare" ? 0.9 : 0.8,
  }));
}
