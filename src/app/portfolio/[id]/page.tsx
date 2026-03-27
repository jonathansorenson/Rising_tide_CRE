import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin, Building2, Ruler } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { PLACEHOLDER_PROPERTIES } from "@/lib/constants";
import { generatePageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return PLACEHOLDER_PROPERTIES.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const property = PLACEHOLDER_PROPERTIES.find((p) => p.id === params.id);
  if (!property) return {};
  return generatePageMetadata({
    title: property.name,
    description: `${property.name} — ${property.metric} in ${property.location}. Managed by Rising Tide CRE.`,
    path: `/portfolio/${params.id}`,
    keywords: [property.name, property.type, property.location, "Rising Tide CRE"],
  });
}

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const property = PLACEHOLDER_PROPERTIES.find((p) => p.id === params.id);
  if (!property) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Portfolio", href: "/portfolio" },
          { name: property.name, href: `/portfolio/${params.id}` },
        ]}
      />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-slate-dark">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-cream/60 hover:text-gold text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image placeholder */}
            <div className="aspect-[4/3] bg-gradient-to-br from-slate-light/50 to-slate rounded-xl flex items-center justify-center">
              <span className="text-cream/30 text-lg">Property Photo Gallery</span>
            </div>

            <div>
              <span className="inline-block px-3 py-1 bg-gold/20 text-gold text-xs font-semibold rounded-full mb-4">
                {property.type}
              </span>
              <h1 className="text-display-sm md:text-display-md font-display text-cream">
                {property.name}
              </h1>

              <div className="flex items-center gap-2 mt-4 text-cream/60">
                <MapPin className="w-5 h-5 text-gold" />
                <span className="text-lg">{property.location}</span>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white/5 rounded-lg p-4 border border-cream/5">
                  <Building2 className="w-5 h-5 text-gold mb-2" />
                  <p className="text-sm text-cream/50">Property Type</p>
                  <p className="text-lg font-semibold text-cream">{property.type}</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-cream/5">
                  <Ruler className="w-5 h-5 text-gold mb-2" />
                  <p className="text-sm text-cream/50">Total Area</p>
                  <p className="text-lg font-semibold text-cream">
                    {property.sf.toLocaleString()} SF
                  </p>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-gold hover:bg-gold-dark text-slate-dark font-semibold rounded-md transition-colors"
                >
                  Inquire About This Property
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto">
          <h2 className="text-display-sm font-display text-slate-dark mb-6">
            About This Property
          </h2>
          <p className="text-charcoal-light text-lg leading-relaxed">
            {property.name} is a {property.sf.toLocaleString()} square foot{" "}
            {property.type.toLowerCase()} property located in {property.location},
            managed by Rising Tide CRE. This property benefits from our
            full-service management approach, including proactive tenant
            relations, preventive maintenance, and institutional-grade financial
            reporting.
          </p>

          <div className="mt-12 p-8 bg-cream rounded-xl text-center">
            <h3 className="text-xl font-semibold text-slate-dark mb-2">
              Map & Location
            </h3>
            <p className="text-charcoal-light">
              Interactive Mapbox map will be integrated here showing the
              property location and surrounding area amenities.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
