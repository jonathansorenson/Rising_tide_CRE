import { Hero } from "@/components/sections/Hero";
import { PillarsStrip } from "@/components/sections/PillarsStrip";
import { MetricsBar } from "@/components/sections/MetricsBar";
import { FeaturedProperties } from "@/components/sections/FeaturedProperties";
import { MarketTeaser } from "@/components/sections/MarketTeaser";
import { TechnologyCallout } from "@/components/sections/TechnologyCallout";
import { CTABanner } from "@/components/sections/CTABanner";
import { OrganizationJsonLd, LocalBusinessJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";
import { generatePageMetadata, PAGE_SEO } from "@/lib/seo";

export const metadata = generatePageMetadata(PAGE_SEO.home);

export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd />
      <LocalBusinessJsonLd />
      <WebSiteJsonLd />

      <Hero
        tagline="Management  |  Acquisitions  |  Leasing"
        title="Real Assets. Real Operations. Real Results."
        subtitle="Rising Tide CRE is a vertically integrated commercial real estate firm operating across Florida's Space Coast and select growth markets."
        primaryCTA={{ label: "Explore Our Services", href: "/services" }}
        secondaryCTA={{ label: "Join Our Team", href: "/careers" }}
      />

      <PillarsStrip />

      <MetricsBar />

      <FeaturedProperties />

      <MarketTeaser />

      <TechnologyCallout />

      <CTABanner
        title="Ready to Get Started?"
        subtitle="Whether you're looking for property management, investment opportunities, commercial space, or a career in CRE — we'd love to hear from you."
        primaryCTA={{ label: "Explore Our Services", href: "/services" }}
        secondaryCTA={{ label: "Join Our Team", href: "/careers" }}
      />
    </>
  );
}
