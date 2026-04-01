import { MetadataRoute } from "next";
import { SITE_CONFIG, PLACEHOLDER_PROPERTIES, SERVICE_PILLARS } from "@/lib/constants";
import { getAllInsights } from "@/lib/mdx/loader";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/portfolio`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${baseUrl}/market`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/careers`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/insights`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.8 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const servicePages = SERVICE_PILLARS.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const propertyPages = PLACEHOLDER_PROPERTIES.map((property) => ({
    url: `${baseUrl}/portfolio/${property.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Dynamic MDX insight posts
  const mdxInsights = getAllInsights().map((post) => ({
    url: `${baseUrl}/insights/${post.slug}`,
    lastModified: post.frontmatter.lastModified
      ? new Date(post.frontmatter.lastModified)
      : new Date(post.frontmatter.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Legacy hardcoded blog slugs
  const legacySlugs = [
    "palm-beach-market-q1-2026",
    "why-vertical-integration-matters",
    "life-at-rising-tide",
  ];

  // Filter out legacy slugs that now have MDX versions
  const mdxSlugs = new Set(mdxInsights.map((p) => p.url.split("/").pop()));
  const legacyPages = legacySlugs
    .filter((slug) => !mdxSlugs.has(slug))
    .map((slug) => ({
      url: `${baseUrl}/insights/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

  return [...staticPages, ...servicePages, ...propertyPages, ...mdxInsights, ...legacyPages];
}
