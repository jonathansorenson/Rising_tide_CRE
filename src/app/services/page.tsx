import { Hero } from "@/components/sections/Hero";
import { PillarsStrip } from "@/components/sections/PillarsStrip";
import { CTABanner } from "@/components/sections/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { generatePageMetadata, PAGE_SEO } from "@/lib/seo";

export const metadata = generatePageMetadata(PAGE_SEO.services);

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ]}
      />

      <Hero
        tagline="What We Do"
        title="Integrated CRE Services"
        subtitle="Our three service pillars — Management, Acquisitions, and Leasing — operate as one platform. The result: better outcomes for tenants, investors, and partners."
        compact
      />

      <PillarsStrip />

      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-display-sm font-display text-slate-dark mb-6">
            Why Integration Matters
          </h2>
          <div className="text-charcoal-light text-lg leading-relaxed space-y-4 max-w-3xl mx-auto">
            <p>
              Most CRE firms specialize in one discipline. Rising Tide CRE
              operates across all three — and that&apos;s by design. Our
              management team&apos;s operational insights directly inform
              acquisition underwriting. Our leasing relationships strengthen
              property performance. And our investment thesis guides where and
              how we deploy management resources.
            </p>
            <p>
              This integrated model isn&apos;t just a business strategy — it&apos;s
              an information advantage. When you know your assets from the
              inside out, every decision is better informed.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Let's Work Together"
        subtitle="Whether you need property management, are exploring investment opportunities, or are looking for commercial space — Rising Tide CRE can help."
        primaryCTA={{ label: "Contact Us", href: "/contact" }}
        secondaryCTA={{ label: "View Portfolio", href: "/portfolio" }}
      />
    </>
  );
}
