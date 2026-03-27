"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Maximize } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { PLACEHOLDER_PROPERTIES } from "@/lib/constants";

export function FeaturedProperties() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide mx-auto">
        <SectionHeader
          tagline="Portfolio"
          title="Featured Properties"
          subtitle="A selection of commercial assets under our management and investment umbrella."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PLACEHOLDER_PROPERTIES.map((property, i) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={`/portfolio/${property.id}`}
                className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-charcoal/5"
              >
                {/* Image placeholder */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-slate/80 to-slate-light overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Maximize className="w-8 h-8 text-cream/30 mx-auto mb-2" />
                      <span className="text-cream/40 text-sm">Property Photo</span>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gold/90 text-slate-dark text-xs font-semibold rounded-full">
                      {property.type}
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
                  <p className="mt-3 text-sm font-medium text-charcoal">
                    {property.metric}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center px-6 py-3 text-sm font-semibold text-gold hover:text-gold-dark border-2 border-gold/30 hover:border-gold rounded-md transition-all"
          >
            View Full Portfolio &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
