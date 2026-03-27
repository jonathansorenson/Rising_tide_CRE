import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/Hero";
import { CTABanner } from "@/components/sections/CTABanner";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { generatePageMetadata, PAGE_SEO } from "@/lib/seo";
import { ServiceDetail } from "@/components/services/ServiceDetail";

const services = {
  "property-management": {
    seo: PAGE_SEO["property-management"],
    heroTagline: "Property Management",
    heroTitle: "Operational Excellence at Every Property",
    heroSubtitle:
      "Full-service property management with institutional-grade reporting, proactive tenant relations, and technology-driven operations.",
    sections: [
      {
        title: "What We Manage",
        content:
          "Rising Tide CRE manages a diverse portfolio of commercial properties across South Florida's Palm Beach County — including retail centers, industrial facilities, flex spaces, office buildings, and multifamily communities. Every property benefits from the same institutional-grade processes and hands-on attention.",
      },
      {
        title: "Tenant Relations",
        content:
          "Strong tenant relationships are the foundation of property performance. Our management team maintains direct, proactive communication with every tenant — addressing concerns quickly, managing lease obligations effectively, and fostering long-term occupancy stability.",
      },
      {
        title: "Financial Reporting",
        content:
          "Our reporting infrastructure provides property owners with real-time visibility into financial performance — from rent collections and operating expenses to capital improvement tracking and budget variance analysis. Powered by our CRElytic analytics platform.",
      },
      {
        title: "Maintenance & Operations",
        content:
          "We run a preventive maintenance program across every managed property, with vendor management, work order tracking, and capital planning that protects asset value and minimizes tenant disruption.",
      },
      {
        title: "Technology Stack",
        content:
          "Rising Tide CRE leverages proprietary analytics tools alongside industry-standard property management software to deliver real-time performance dashboards, automated reporting, and data-driven decision support for property owners.",
      },
    ],
    cta: {
      title: "Need Property Management?",
      subtitle: "Let's discuss how Rising Tide CRE can add operational value to your commercial assets.",
      primaryCTA: { label: "Contact Us", href: "/contact" },
      secondaryCTA: { label: "View Portfolio", href: "/portfolio" },
    },
  },
  acquisitions: {
    seo: PAGE_SEO.acquisitions,
    heroTagline: "Acquisitions",
    heroTitle: "Smarter Deals Through Operational Intelligence",
    heroSubtitle:
      "We don't just underwrite numbers — we underwrite operations. Our management-first approach gives us an information advantage in every acquisition.",
    sections: [
      {
        title: "Investment Thesis",
        content:
          "Rising Tide CRE targets commercial properties in high-growth South Florida markets where wealth migration, business relocation, and infrastructure investment are driving demand. We focus on assets where our operational expertise can unlock value — through better management, repositioning, or lease-up.",
      },
      {
        title: "Acquisition Criteria",
        content:
          "We evaluate retail, industrial, flex, office, and multifamily properties across Palm Beach County and select South Florida growth markets. Our sweet spot is value-add and core-plus assets where hands-on management and market knowledge create a competitive edge.",
      },
      {
        title: "Underwriting Process",
        content:
          "Every acquisition is underwritten through the lens of our management team. We stress-test assumptions against real operational data — tenant credit, maintenance capital, market rents, and occupancy trends. This management-informed underwriting reduces risk and improves deal selection.",
      },
      {
        title: "Target Property Types",
        content:
          "Our portfolio strategy spans multiple property types: neighborhood and community retail centers, industrial and flex warehousing, suburban office, and multifamily. Diversification across sectors provides resilience while our market focus provides expertise.",
      },
    ],
    cta: {
      title: "Have a Deal to Discuss?",
      subtitle: "We're always evaluating new acquisition opportunities across Palm Beach County and South Florida growth markets.",
      primaryCTA: { label: "Submit a Deal", href: "/contact" },
      secondaryCTA: { label: "Our Market Thesis", href: "/market" },
    },
  },
  leasing: {
    seo: PAGE_SEO.leasing,
    heroTagline: "Leasing",
    heroTitle: "Deep Market Knowledge. Stronger Lease Outcomes.",
    heroSubtitle:
      "Expert tenant and landlord representation across South Florida's Palm Beach County — powered by our integrated management and investment perspective.",
    sections: [
      {
        title: "Tenant Representation",
        content:
          "Whether you're a national retailer, a growing technology firm, or a local business expanding operations, Rising Tide CRE's leasing team provides strategic site selection, market analysis, and lease negotiation expertise tailored to Palm Beach County's market.",
      },
      {
        title: "Landlord Representation",
        content:
          "For property owners, we deliver aggressive leasing execution backed by market intelligence and tenant relationships developed through our management operations. Our integrated model means we know every property, every tenant, and every deal in our markets.",
      },
      {
        title: "Market Knowledge",
        content:
          "Rising Tide CRE maintains deep relationships across Palm Beach County's commercial real estate ecosystem — brokers, tenants, landlords, economic development organizations, and municipal stakeholders. Our leasing team operates with a market knowledge advantage that comes from managing properties in these same communities.",
      },
      {
        title: "Current Availabilities",
        content:
          "Browse current available spaces across our managed and third-party portfolio. Our leasing team can help match your space requirements to the right property, location, and deal structure for your business.",
      },
    ],
    cta: {
      title: "Looking for Space?",
      subtitle: "Our leasing team can help you find the right commercial space in Palm Beach County.",
      primaryCTA: { label: "View Available Spaces", href: "/portfolio" },
      secondaryCTA: { label: "Contact Leasing", href: "/contact" },
    },
  },
};

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services[params.slug as keyof typeof services];
  if (!service) return {};
  return generatePageMetadata(service.seo);
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services[params.slug as keyof typeof services];
  if (!service) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: service.heroTagline, href: `/services/${params.slug}` },
        ]}
      />

      <Hero
        tagline={service.heroTagline}
        title={service.heroTitle}
        subtitle={service.heroSubtitle}
        compact
      />

      <ServiceDetail sections={service.sections} />

      <CTABanner
        title={service.cta.title}
        subtitle={service.cta.subtitle}
        primaryCTA={service.cta.primaryCTA}
        secondaryCTA={service.cta.secondaryCTA}
      />
    </>
  );
}
