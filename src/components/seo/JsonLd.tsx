import { SITE_CONFIG } from "@/lib/constants";

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export function JsonLd({ data }: JsonLdProps) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
        logo: `${SITE_CONFIG.url}/logos/RT_Primary 2000x600.png`,
        description: SITE_CONFIG.description,
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE_CONFIG.address.city,
          addressRegion: SITE_CONFIG.address.state,
          addressCountry: "US",
        },
        sameAs: [SITE_CONFIG.social.linkedin].filter(Boolean),
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: SITE_CONFIG.email,
          areaServed: "US",
          availableLanguage: "English",
        },
      }}
    />
  );
}

export function LocalBusinessJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
        image: `${SITE_CONFIG.url}/logos/RT_Primary 2000x600.png`,
        description: SITE_CONFIG.description,
        address: {
          "@type": "PostalAddress",
          addressLocality: SITE_CONFIG.address.city,
          addressRegion: SITE_CONFIG.address.state,
          addressCountry: "US",
        },
        areaServed: [
          {
            "@type": "GeoCircle",
            geoMidpoint: {
              "@type": "GeoCoordinates",
              latitude: 28.0836,
              longitude: -80.6081,
            },
            geoRadius: "50000",
          },
        ],
        serviceArea: {
          "@type": "AdministrativeArea",
          name: "Space Coast, Florida",
        },
      }}
    />
  );
}

export function WebSiteJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
      }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: `${SITE_CONFIG.url}${item.href}`,
        })),
      }}
    />
  );
}

export function JobPostingJsonLd({
  title,
  description,
  datePosted,
  location,
}: {
  title: string;
  description: string;
  datePosted: string;
  location?: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "JobPosting",
        title,
        description,
        datePosted,
        hiringOrganization: {
          "@type": "Organization",
          name: SITE_CONFIG.name,
          sameAs: SITE_CONFIG.url,
        },
        jobLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: location || SITE_CONFIG.address.city,
            addressRegion: SITE_CONFIG.address.state,
            addressCountry: "US",
          },
        },
      }}
    />
  );
}
