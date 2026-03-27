import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { BreadcrumbJsonLd, JsonLd } from "@/components/seo/JsonLd";
import { generatePageMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";

// Placeholder posts — will be replaced with MDX
const posts: Record<string, {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  dateISO: string;
}> = {
  "palm-beach-market-q1-2026": {
    title: "Palm Beach County Market Update: Q1 2026",
    excerpt: "Population growth, wealth migration, and commercial real estate trends across Palm Beach County heading into 2026.",
    content: `
      <p>The Palm Beach County commercial real estate market continues to demonstrate exceptional momentum heading into 2026. Driven by sustained wealth migration, business relocations, and infrastructure investment, the fundamentals across Palm Beach County's commercial property sectors remain compelling.</p>

      <h2>Economic Growth Continues to Accelerate</h2>
      <p>Financial services firms, family offices, and corporate relocations from the Northeast continue to drive high-wage job creation across the region. The Brightline high-speed rail connection has further enhanced Palm Beach County's appeal as a business destination, connecting it seamlessly to Miami and Fort Lauderdale.</p>

      <h2>Commercial Real Estate Performance</h2>
      <p>Industrial vacancy remains below 5% across the market, with asking rents climbing 8% year-over-year. Retail occupancy in well-located neighborhood and community centers has strengthened, supported by population growth and rising household incomes. Office demand has stabilized with particular strength in Class A and flex/creative space.</p>

      <h2>Outlook</h2>
      <p>Rising Tide CRE remains bullish on Palm Beach County's commercial real estate trajectory. The combination of wealth migration, population influx, infrastructure investment, and constrained supply creates a favorable environment for operators who understand these markets at the ground level.</p>
    `,
    category: "Market Update",
    author: "Rising Tide CRE",
    date: "March 2026",
    dateISO: "2026-03-01",
  },
  "why-vertical-integration-matters": {
    title: "Why Vertical Integration Matters in CRE",
    excerpt: "How combining property management, acquisitions, and leasing under one roof creates an information advantage.",
    content: `
      <p>In commercial real estate, most firms specialize. Management companies manage. Brokerage firms broker. Investment shops invest. At Rising Tide CRE, we believe this siloed approach leaves value on the table.</p>

      <h2>The Information Advantage</h2>
      <p>When you manage a property, you know every tenant, every lease term, every maintenance issue, and every dollar of operating expense. That operational intelligence is invaluable when underwriting an acquisition. You're not guessing at operating costs — you know them. You're not assuming tenant credit quality — you've managed those relationships.</p>

      <h2>Better Outcomes for Everyone</h2>
      <p>Our integrated model creates better outcomes for every stakeholder. Tenants benefit from responsive, professional management. Investors benefit from operations-informed underwriting. And our team benefits from exposure across every discipline — building careers that would take decades at a traditional firm.</p>

      <h2>The Compounding Effect</h2>
      <p>Each service line makes the others stronger. Management insights improve acquisitions. Acquisition activity creates management opportunities. Leasing relationships inform both. Over time, this creates a compounding information advantage that simply cannot be replicated by firms operating in a single lane.</p>
    `,
    category: "Thought Leadership",
    author: "Rising Tide CRE",
    date: "February 2026",
    dateISO: "2026-02-15",
  },
  "life-at-rising-tide": {
    title: "Life at Rising Tide: Building a Career in CRE",
    excerpt: "What it's like to work at a vertically integrated CRE firm in South Florida's Palm Beach County.",
    content: `
      <p>When I joined Rising Tide CRE, I expected a focused role in operations. What I found was something different — an environment where every team member gets exposure to the full spectrum of commercial real estate, from underwriting potential acquisitions to managing tenant relationships to supporting leasing efforts.</p>

      <h2>Cross-Functional by Design</h2>
      <p>In a typical week, I might review property financial statements in the morning, join an acquisition walkthrough in the afternoon, and coordinate a lease negotiation the next day. This isn't because we're understaffed — it's by design. Rising Tide's vertically integrated model means that understanding the full picture isn't optional; it's the job.</p>

      <h2>The Palm Beach County Advantage</h2>
      <p>Working in CRE in Palm Beach County has a unique energy. The influx of wealth, businesses, and talent relocating to the area creates a dynamic market with constant opportunity. The connection between the economic engine driving this region and the properties we manage is tangible and exciting.</p>

      <h2>Growing with the Company</h2>
      <p>What sets Rising Tide apart as an employer is the commitment to developing well-rounded CRE professionals. The mentorship, the cross-functional exposure, and the opportunity to work on meaningful projects early in your career — it's the kind of professional development that accelerates growth in ways a larger, more siloed firm simply cannot.</p>
    `,
    category: "Team Spotlight",
    author: "Jonathan Sorenson",
    date: "January 2026",
    dateISO: "2026-01-20",
  },
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];
  if (!post) return {};
  return generatePageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/insights/${params.slug}`,
    type: "article",
    publishedTime: post.dateISO,
    author: post.author,
    keywords: [post.category, "Rising Tide CRE", "Palm Beach County CRE"],
  });
}

export default function InsightPostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];
  if (!post) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Insights", href: "/insights" },
          { name: post.title, href: `/insights/${params.slug}` },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          author: { "@type": "Person", name: post.author },
          publisher: {
            "@type": "Organization",
            name: SITE_CONFIG.name,
            logo: { "@type": "ImageObject", url: `${SITE_CONFIG.url}/logos/RT_Icon 1000x1000.png` },
          },
          datePublished: post.dateISO,
          mainEntityOfPage: `${SITE_CONFIG.url}/insights/${params.slug}`,
        }}
      />

      <article>
        {/* Header */}
        <section className="pt-28 pb-16 bg-slate-dark">
          <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-cream/60 hover:text-gold text-sm mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Insights
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-gold/20 text-gold text-xs font-medium rounded-full">
                <Tag className="w-3 h-3" />
                {post.category}
              </span>
            </div>

            <h1 className="text-display-sm md:text-display-md font-display text-cream leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 mt-6 text-cream/60 text-sm">
              <span className="inline-flex items-center gap-1.5">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-white">
          <div className="container-narrow mx-auto">
            <div
              className="prose prose-lg max-w-none text-charcoal-light leading-relaxed
                prose-headings:text-slate-dark prose-headings:font-display prose-headings:mt-12 prose-headings:mb-4
                prose-p:mb-6
                prose-a:text-gold prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Author Card */}
            <div className="mt-16 pt-8 border-t border-charcoal/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="font-semibold text-slate-dark">{post.author}</p>
                  <p className="text-sm text-charcoal-light">Rising Tide CRE</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
