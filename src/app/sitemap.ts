import { MetadataRoute } from "next";
import { providers } from "@/data/providers";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://fns50322.com.au";

  // Core pages
  const coreRoutes = [
    { route: "", priority: 1, changeFrequency: "daily" as const },
    { route: "/compare", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/quiz", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/pricing", priority: 0.8, changeFrequency: "weekly" as const },
    { route: "/licensing", priority: 0.8, changeFrequency: "weekly" as const },
    { route: "/compliance", priority: 0.8, changeFrequency: "weekly" as const },
    { route: "/modules", priority: 0.8, changeFrequency: "weekly" as const },
    { route: "/faq", priority: 0.7, changeFrequency: "weekly" as const },
    { route: "/blog", priority: 0.7, changeFrequency: "daily" as const },
    { route: "/methodology", priority: 0.6, changeFrequency: "monthly" as const },
    { route: "/about", priority: 0.5, changeFrequency: "monthly" as const },
    { route: "/contact", priority: 0.5, changeFrequency: "monthly" as const },
  ];

  // State pages
  const stateRoutes = ["nsw", "vic", "qld", "wa", "sa", "tas", "nt", "act"].map(
    (state) => ({
      route: `/${state}`,
      priority: 0.7,
      changeFrequency: "weekly" as const,
    })
  );

  // Provider pages
  const providerRoutes = providers.map((provider) => ({
    route: `/providers/${provider.slug}`,
    priority: 0.8,
    changeFrequency: "weekly" as const,
  }));

  // Blog post pages
  const blogRoutes = blogPosts.map((post) => ({
    route: `/blog/${post.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  const allRoutes = [...coreRoutes, ...stateRoutes, ...providerRoutes, ...blogRoutes];

  return allRoutes.map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
