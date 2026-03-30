export const SITE_CONFIG = {
  name: "Rising Tide CRE",
  tagline: "Real Assets. Real Operations. Real Results.",
  description:
    "Rising Tide CRE is a vertically integrated commercial real estate firm operating across property management, acquisitions, and leasing in South Florida's Palm Beach County.",
  url: "https://risingtidecre.com",
  ogImage: "/api/og",
  phone: "",
  email: "",
  address: {
    street: "",
    city: "West Palm Beach",
    state: "FL",
    zip: "",
    full: "Palm Beach County, FL",
  },
  social: {
    linkedin: "https://linkedin.com/company/rising-tide-cre",
  },
} as const;

export const NAV_ITEMS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Market", href: "/market" },
  { label: "Careers", href: "/careers" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICE_PILLARS = [
  {
    slug: "property-management",
    title: "Management",
    shortDescription: "Full-service property management with institutional-grade reporting and tenant relations.",
    icon: "Building2",
  },
  {
    slug: "acquisitions",
    title: "Acquisitions",
    shortDescription: "Strategic acquisitions across retail, industrial, flex, office, and multifamily assets.",
    icon: "TrendingUp",
  },
  {
    slug: "leasing",
    title: "Leasing",
    shortDescription: "Expert tenant and landlord representation with deep Palm Beach County market knowledge.",
    icon: "Key",
  },
] as const;

export const METRICS = [
  { value: 300, suffix: "M+", prefix: "$", label: "Transactions" },
  { value: 2.5, suffix: "M+ SF", prefix: "", label: "Managed (Career)", decimals: 1 },
  { value: 75, suffix: "K SF", prefix: "", label: "Under Direct Management" },
  { value: 15, suffix: "+", prefix: "", label: "Years Experience" },
] as const;

export const TEAM_MEMBERS = [
  {
    name: "Jonathan Sorenson",
    title: "",
    email: "jsorenson@risingtidecre.com",
    image: "/team/jonathan-sorenson.jpg",
    linkedin: "",
    bio: "",
  },
  {
    name: "Nicholas West",
    title: "",
    email: "nwest@risingtidecre.com",
    image: "/team/nicholas-west.jpg",
    linkedin: "",
    bio: "",
  },
] as const;

export const PROPERTY_TYPES = [
  "Retail",
  "Industrial",
  "Flex",
  "Office",
  "Multifamily",
] as const;

export const PLACEHOLDER_PROPERTIES = [
  {
    id: "1",
    name: "50th Celestial Center",
    type: "Retail" as const,
    location: "Palm Beach Gardens, FL",
    sf: 45000,
    status: "active" as const,
    image: "/properties/placeholder-1.jpg",
    metric: "45,000 SF Retail Center",
  },
  {
    id: "2",
    name: "Jupiter Industrial Park",
    type: "Industrial" as const,
    location: "Jupiter, FL",
    sf: 120000,
    status: "active" as const,
    image: "/properties/placeholder-2.jpg",
    metric: "120,000 SF Industrial",
  },
  {
    id: "3",
    name: "Royal Palm Professional Plaza",
    type: "Office" as const,
    location: "West Palm Beach, FL",
    sf: 28000,
    status: "active" as const,
    image: "/properties/placeholder-3.jpg",
    metric: "28,000 SF Office",
  },
];
