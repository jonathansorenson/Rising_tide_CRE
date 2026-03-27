import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { CTABanner } from "@/components/sections/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { generatePageMetadata, PAGE_SEO } from "@/lib/seo";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";

export const metadata = generatePageMetadata(PAGE_SEO.insights);

// Placeholder blog posts — will be replaced with MDX content
const posts = [
  {
    slug: "palm-beach-market-q1-2026",
    title: "Palm Beach County Market Update: Q1 2026",
    excerpt:
      "Population growth, wealth migration, and commercial real estate trends across Palm Beach County heading into 2026.",
    category: "Market Update",
    author: "Rising Tide CRE",
    date: "March 2026",
    readTime: "5 min read",
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
  },
];

const categories = ["All", "Market Update", "Thought Leadership", "Team Spotlight", "Deal Spotlight"];

export default function InsightsPage() {
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
          {/* Category Filter (static for now) */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
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
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group bg-white rounded-xl overflow-hidden shadow-sm border border-charcoal/5 hover:shadow-lg hover:border-gold/30 transition-all"
              >
                {/* Image placeholder */}
                <div className="aspect-[16/9] bg-gradient-to-br from-slate/70 to-slate-light flex items-center justify-center">
                  <span className="text-cream/30 text-sm">Article Image</span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-gold/10 text-gold text-xs font-medium rounded-full">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                    <span className="text-xs text-charcoal-light">
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-semibold text-slate-dark group-hover:text-gold transition-colors line-clamp-2">
                    <Link href={`/insights/${post.slug}`}>
                      {post.title}
                    </Link>
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
