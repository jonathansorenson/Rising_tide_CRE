"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, TrendingUp, Key } from "lucide-react";
import { SERVICE_PILLARS } from "@/lib/constants";

const iconMap = {
  Building2,
  TrendingUp,
  Key,
} as const;

export function PillarsStrip() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-wide mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-gold font-medium tracking-wider uppercase text-sm mb-3">
            Our Integrated Model
          </p>
          <h2 className="text-display-sm md:text-display-md font-display text-slate-dark">
            Three Pillars. One Platform.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICE_PILLARS.map((pillar, i) => {
            const Icon = iconMap[pillar.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={pillar.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <Link
                  href={`/services/${pillar.slug}`}
                  className="group block bg-white rounded-xl p-8 lg:p-10 shadow-sm hover:shadow-lg transition-all duration-300 border border-charcoal/5 hover:border-gold/30 h-full"
                >
                  <div className="w-14 h-14 bg-gold/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                    <Icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-dark mb-3 group-hover:text-gold transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-charcoal-light leading-relaxed">
                    {pillar.shortDescription}
                  </p>
                  <span className="inline-flex items-center mt-6 text-sm font-medium text-gold group-hover:translate-x-1 transition-transform">
                    Learn More &rarr;
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
