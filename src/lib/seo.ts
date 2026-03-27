import { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

type PageSEO = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  keywords?: readonly string[] | string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
};

export function generatePageMetadata({
  title,
  description,
  path,
  ogImage,
  keywords,
  type = "website",
  publishedTime,
  modifiedTime,
  author,
}: PageSEO): Metadata {
  const fullTitle = path === "/" ? `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}` : `${title} | ${SITE_CONFIG.name}`;
  const url = `${SITE_CONFIG.url}${path}`;
  const image = ogImage || `${SITE_CONFIG.url}/api/og?title=${encodeURIComponent(title)}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords ? [...keywords].join(", ") : undefined,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_CONFIG.name,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: "en_US",
      type: type === "article" ? "article" : "website",
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(author && { authors: [author] }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export const PAGE_SEO = {
  home: {
    title: "Rising Tide CRE",
    description:
      "Rising Tide CRE is a vertically integrated commercial real estate firm specializing in property management, acquisitions, and leasing across Florida's Space Coast and select growth markets.",
    path: "/",
    keywords: [
      "Rising Tide CRE",
      "Space Coast commercial real estate",
      "vertically integrated CRE",
      "Florida CRE firm",
      "Brevard County real estate",
    ],
  },
  about: {
    title: "About Rising Tide CRE",
    description:
      "Learn about Rising Tide CRE's vertically integrated approach to commercial real estate — our story, leadership team, and commitment to operational excellence across Florida's Space Coast.",
    path: "/about",
    keywords: [
      "Rising Tide CRE team",
      "commercial real estate company Florida",
      "Space Coast CRE leadership",
    ],
  },
  services: {
    title: "Our Services",
    description:
      "Rising Tide CRE delivers full-service property management, strategic acquisitions, and expert leasing — an integrated model that creates better outcomes for tenants, investors, and partners.",
    path: "/services",
    keywords: [
      "CRE property management",
      "commercial real estate acquisitions",
      "commercial leasing Florida",
    ],
  },
  "property-management": {
    title: "Property Management",
    description:
      "Institutional-grade property management services across Brevard County and the Space Coast — tenant relations, maintenance, financial reporting, and technology-driven operations.",
    path: "/services/property-management",
    keywords: [
      "Brevard County property management",
      "Space Coast CRE management",
      "commercial property management Florida",
    ],
  },
  acquisitions: {
    title: "Acquisitions",
    description:
      "Strategic commercial real estate acquisitions across retail, industrial, flex, office, and multifamily in Florida's fastest-growing markets. Management-first underwriting for smarter deals.",
    path: "/services/acquisitions",
    keywords: [
      "Florida CRE acquisitions",
      "Space Coast investment properties",
      "commercial real estate investment Brevard",
    ],
  },
  leasing: {
    title: "Leasing",
    description:
      "Expert commercial leasing services on Florida's Space Coast — tenant representation, landlord representation, and deep market knowledge across Brevard County and surrounding markets.",
    path: "/services/leasing",
    keywords: [
      "commercial leasing Space Coast",
      "Brevard County office space",
      "retail space Melbourne FL",
      "industrial lease Brevard",
    ],
  },
  portfolio: {
    title: "Portfolio",
    description:
      "Explore Rising Tide CRE's portfolio of managed and acquired commercial properties across Florida's Space Coast — retail, industrial, office, flex, and multifamily assets.",
    path: "/portfolio",
    keywords: [
      "commercial properties Space Coast",
      "Rising Tide portfolio",
      "managed properties Brevard County",
    ],
  },
  market: {
    title: "Space Coast Market",
    description:
      "Florida's Space Coast is one of the fastest-growing markets in the U.S. — driven by aerospace, defense, and technology employers. Explore our market thesis and economic data.",
    path: "/market",
    keywords: [
      "Space Coast real estate market",
      "Brevard County economic growth",
      "SpaceX real estate impact",
      "Cape Canaveral development",
    ],
  },
  careers: {
    title: "Careers",
    description:
      "Join Rising Tide CRE and build a career across every facet of commercial real estate. From underwriting to leasing to management — our integrated model means unmatched career exposure.",
    path: "/careers",
    keywords: [
      "CRE careers Florida",
      "commercial real estate jobs Space Coast",
      "property management careers Brevard",
    ],
  },
  contact: {
    title: "Contact Us",
    description:
      "Get in touch with Rising Tide CRE for leasing inquiries, property management services, investment opportunities, or career information. Serving Florida's Space Coast and beyond.",
    path: "/contact",
    keywords: [
      "contact Rising Tide CRE",
      "Space Coast CRE contact",
      "commercial real estate inquiry Florida",
    ],
  },
  insights: {
    title: "Insights",
    description:
      "Market updates, deal spotlights, team features, and thought leadership from Rising Tide CRE — your source for Space Coast commercial real estate intelligence.",
    path: "/insights",
    keywords: [
      "Space Coast CRE market updates",
      "commercial real estate insights Florida",
      "Brevard County market report",
    ],
  },
} as const;
