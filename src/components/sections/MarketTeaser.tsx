"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Rocket, Users, TrendingUp, Building } from "lucide-react";

const marketHighlights = [
  {
    icon: Rocket,
    title: "Aerospace Hub",
    description: "Home to SpaceX, Blue Origin, L3Harris, and Northrop Grumman",
  },
  {
    icon: Users,
    title: "Population Growth",
    description: "One of the fastest-growing metro areas in the United States",
  },
  {
    icon: TrendingUp,
    title: "Job Growth",
    description: "High-wage STEM employment driving housing and commercial demand",
  },
  {
    icon: Building,
    title: "Development Pipeline",
    description: "Significant new construction and redevelopment activity",
  },
];

export function MarketTeaser() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-wide mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gold font-medium tracking-wider uppercase text-sm mb-3">
              Market Thesis
            </p>
            <h2 className="text-display-sm md:text-display-md font-display text-slate-dark mb-6">
              Florida&apos;s Space Coast
            </h2>
            <p className="text-charcoal-light text-lg leading-relaxed mb-8">
              The Space Coast is experiencing a generational growth cycle driven
              by aerospace, defense, and technology employers. Rising Tide CRE
              is strategically positioned to capitalize on this momentum across
              every property type and service line.
            </p>
            <Link
              href="/market"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold bg-gold hover:bg-gold-dark text-slate-dark rounded-md transition-all hover:shadow-lg hover:shadow-gold/20"
            >
              Explore Our Market Thesis &rarr;
            </Link>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {marketHighlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-charcoal/5"
              >
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-semibold text-slate-dark mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-charcoal-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
