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
      "Rising Tide CRE is a vertically integrated commercial real estate firm specializing in property management, acquisitions, and leasing across South Florida's Palm Beach County.",
    path: "/",
    keywords: [
      "Rising Tide CRE",
      "Palm Beach County commercial real estate",
      "vertically integrated CRE",
      "South Florida CRE firm",
      "Palm Beach County real estate",
    ],
  },
  about: {
    title: "About Rising Tide CRE",
    description:
      "Learn about Rising Tide CRE's vertically integrated approach to commercial real estate — our story, leadership team, and commitment to operational excellence across South Florida's Palm Beach County.",
    path: "/about",
    keywords: [
      "Rising Tide CRE team",
      "commercial real estate company Florida",
      "Palm Beach County CRE leadership",
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
      "commercial leasing South Florida",
    ],
  },
  "property-management": {
    title: "Property Management",
    description:
      "Institutional-grade property management services across Palm Beach County — tenant relations, maintenance, financial reporting, and technology-driven operations.",
    path: "/services/property-management",
    keywords: [
      "Palm Beach County property management",
      "South Florida CRE management",
      "commercial property management Florida",
    ],
  },
  acquisitions: {
    title: "Acquisitions",
    description:
      "Strategic commercial real estate acquisitions across retail, industrial, flex, office, and multifamily in South Florida's fastest-growing markets. Management-first underwriting for smarter deals.",
    path: "/services/acquisitions",
    keywords: [
      "South Florida CRE acquisitions",
      "Palm Beach County investment properties",
      "commercial real estate investment Palm Beach",
    ],
  },
  leasing: {
    title: "Leasing",
    description:
      "Expert commercial leasing services in South Florida — tenant representation, landlord representation, and deep market knowledge across Palm Beach County and surrounding markets.",
    path: "/services/leasing",
    keywords: [
      "commercial leasing Palm Beach County",
      "Palm Beach County office space",
      "retail space West Palm Beach FL",
      "industrial lease Palm Beach",
    ],
  },
  portfolio: {
    title: "Portfolio",
    description:
      "Explore Rising Tide CRE's portfolio of managed and acquired commercial properties across South Florida's Palm Beach County — retail, industrial, office, flex, and multifamily assets.",
    path: "/portfolio",
    keywords: [
      "commercial properties Palm Beach County",
      "Rising Tide portfolio",
      "managed properties Palm Beach County",
    ],
  },
  market: {
    title: "Palm Beach County Market",
    description:
      "Palm Beach County is one of the fastest-growing markets in South Florida — driven by wealth migration, business relocation, and infrastructure investment. Explore our market thesis and economic data.",
    path: "/market",
    keywords: [
      "Palm Beach County real estate market",
      "South Florida economic growth",
      "West Palm Beach development",
      "Palm Beach County commercial real estate",
    ],
  },
  careers: {
    title: "Careers",
    description:
      "Join Rising Tide CRE and build a career across every facet of commercial real estate. From underwriting to leasing to management — our integrated model means unmatched career exposure.",
    path: "/careers",
    keywords: [
      "CRE careers Florida",
      "commercial real estate jobs South Florida",
      "property management careers Palm Beach",
    ],
  },
  contact: {
    title: "Contact Us",
    description:
      "Get in touch with Rising Tide CRE for leasing inquiries, property management services, investment opportunities, or career information. Serving South Florida's Palm Beach County.",
    path: "/contact",
    keywords: [
      "contact Rising Tide CRE",
      "Palm Beach County CRE contact",
      "commercial real estate inquiry Florida",
    ],
  },
  insights: {
    title: "Insights",
    description:
      "Market updates, deal spotlights, team features, and thought leadership from Rising Tide CRE — your source for South Florida commercial real estate intelligence.",
    path: "/insights",
    keywords: [
      "Palm Beach County CRE market updates",
      "commercial real estate insights South Florida",
      "Palm Beach County market report",
    ],
  },
  privacy: {
    title: "Privacy Policy",
    description:
      "Rising Tide CRE's privacy policy — how we collect, use, and protect your information when you use our website and services.",
    path: "/privacy",
  },
  terms: {
    title: "Terms of Use",
    description:
      "Terms and conditions for using the Rising Tide CRE website, including disclaimers, intellectual property, and limitation of liability.",
    path: "/terms",
  },
} as const;
