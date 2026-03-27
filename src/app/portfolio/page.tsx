"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Hero } from "@/components/sections/Hero";
import { CTABanner } from "@/components/sections/CTABanner";
import { PLACEHOLDER_PROPERTIES, PROPERTY_TYPES } from "@/lib/constants";
import { MapPin, Maximize } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PortfolioPage() {
  const [filter, setFilter] = useState<string>("All");

  const filtered =
    filter === "All"
      ? PLACEHOLDER_PROPERTIES
      : PLACEHOLDER_PROPERTIES.filter((p) => p.type === filter);

  return (
    <>
      <Hero
        tagline="Our Portfolio"
        title="Commercial Assets Under Management"
        subtitle="Explore our portfolio of managed and acquired commercial properties across South Florida's Palm Beach County."
        compact
      />

      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-2 mb-10">
            {["All", ...PROPERTY_TYPES].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-full transition-all",
                  filter === type
                    ? "bg-gold text-slate-dark"
                    : "bg-cream text-charcoal hover:bg-cream-dark"
                )}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filtered.map((property, i) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                layout
              >
                <Link
                  href={`/portfolio/${property.id}`}
                  className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-charcoal/5"
                >
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-slate/80 to-slate-light overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <Maximize className="w-8 h-8 text-cream/30 mx-auto mb-2" />
                        <span className="text-cream/40 text-sm">Property Photo</span>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 bg-gold/90 text-slate-dark text-xs font-semibold rounded-full">
                        {property.type}
                      </span>
                      <span className="px-3 py-1 bg-sage/90 text-white text-xs font-semibold rounded-full capitalize">
                        {property.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-slate-dark group-hover:text-gold transition-colors">
                      {property.name}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-2 text-charcoal-light text-sm">
                      <MapPin className="w-4 h-4 text-gold/60" />
                      {property.location}
                    </div>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-charcoal/5">
                      <span className="text-sm font-medium text-charcoal">
                        {property.sf.toLocaleString()} SF
                      </span>
                      <span className="text-sm font-medium text-gold">
                        View Details &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-charcoal-light">
              No properties found for the selected filter.
            </div>
          )}
        </div>
      </section>

      <CTABanner
        title="Interested in Our Properties?"
        subtitle="Whether you're looking for commercial space or exploring investment opportunities, our team can help."
        primaryCTA={{ label: "Contact Leasing", href: "/contact" }}
        secondaryCTA={{ label: "View Services", href: "/services" }}
      />
    </>
  );
}
