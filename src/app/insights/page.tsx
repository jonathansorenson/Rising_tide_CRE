import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import { CTABanner } from "@/components/sections/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { generatePageMetadata, PAGE_SEO } from "@/lib/seo";
import { Calendar, User, ArrowRight, Tag, Clock } from "lucide-react";
import { getAllInsights, calculateReadingTime } from "@/lib/mdx/loader";
import { CATEGORY_CONFIG } from "@/lib/mdx/config";

export const metadata = generatePageMetadata(PAGE_SEO.insights);

// Legacy hardcoded posts (kept until migrated to MDX)
const legacyPosts = [
  {
    slug: "palm-beach-market-q1-2026",
    title: "Palm Beach County Market Update: Q1 2026",
    excerpt:
      "Population growth, wealth migration, and commercial real estate trends across Palm Beach County heading into 2026.",
    category: "Market Update",
    author: "Rising Tide CRE",
    date: "March 2026",
    readTime: "5 min read",
    image: null,
  },
  {
    slug: "why-vertical-integration-matters",
    title: "Why Vertical Integration Matters in CRE",
    excerpt:
      "How combining property management, acquisitions, and leasing under one roof creates an information advantage and better outcomes for all stakeholders.",
    category: "Thought Leadership",
    author: "Nicholas White",
    date: "February 2026",
    readTime: "7 min read",
    image: null,
  },
  {
    slug: "life-at-rising-tide",
    title: "Life at Rising Tide: Building a Career in CRE",
    excerpt:
      "What it's like to work at a vertically integrated CRE firm — from underwriting deals to managing tenant relationships across Palm Beach County.",
    category: "Team Spotlight",
    author: "Jonathan Sorenson",
    date: "January 2026",
    readTime: "4 min read",
    image: null,
  },
];

export default function InsightsPage() {
  // Load MDX posts
  const mdxPosts = getAllInsights().map((post) => ({
    slug: post.slug,
    title: post.frontmatter.title,
    excerpt: post.frontmatter.description,
    category: CATEGORY_CONFIG[post.frontmatter.category]?.label || post.frontmatter.category,
    author: post.frontmatter.author,
    date: new Date(post.frontmatter.date).toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    }),
    readTime: `${post.frontmatter.readingTime || calculateReadingTime(post.content)} min read`,
    image: post.frontmatter.image,
    imageAlt: post.frontmatter.imageAlt,
  }));

  // Combine MDX + legacy (MDX first since they're newer)
  const allPosts = [...mdxPosts, ...legacyPosts];

  // Build category list from both sources
  const mdxCategories = mdxPosts.map((p) => p.category);
  const legacyCategories = legacyPosts.map((p) => p.category);
  const uniqueCategories = ["All"].concat(Array.from(new Set(mdxCategories.concat(legacyCategories))));

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Insights", href: "/insights" },
        ]}
      />

      <Hero
        tagline="Insights"
        title="Market Intelligence & Thought Leadership"
        subtitle="Market updates, deal spotlights, and perspectives from the Rising Tide CRE team."
        compact
      />

      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {uniqueCategories.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all cursor-pointer ${
                  cat === "All"
                    ? "bg-gold text-slate-dark"
                    : "bg-cream text-charcoal hover:bg-cream-dark"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post) => (
              <article
                key={post.slug}
                className="group bg-white rounded-xl overflow-hidden shadow-sm border border-charcoal/5 hover:shadow-lg hover:border-gold/30 transition-all"
              >
                {/* Image */}
                <div className="aspect-[16/9] bg-gradient-to-br from-slate/70 to-slate-light relative overflow-hidden">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <span className="text-cream/30 text-sm">Article Image</span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-gold/10 text-gold text-xs font-medium rounded-full">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-charcoal-light">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-semibold text-slate-dark group-hover:text-gold transition-colors line-clamp-2">
                    <Link href={`/insights/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="mt-2 text-sm text-charcoal-light leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-charcoal/5">
                    <div className="flex items-center gap-3 text-xs text-charcoal-light">
                      <span className="inline-flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                    </div>
                    <Link
                      href={`/insights/${post.slug}`}
                      className="text-gold text-sm font-medium inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Stay Informed"
        subtitle="Get Palm Beach County market updates, deal insights, and thought leadership delivered to your inbox."
        primaryCTA={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
