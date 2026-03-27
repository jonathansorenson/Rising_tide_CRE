"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/sections/Hero";
import { CTABanner } from "@/components/sections/CTABanner";
import { SectionHeader } from "@/components/sections/SectionHeader";
import {
  Rocket,
  Plane,
  Shield,
  Cpu,
  Users,
  TrendingUp,
  Building,
  Download,
} from "lucide-react";

const employers = [
  { name: "SpaceX", icon: Rocket, description: "Launch operations, Starlink manufacturing" },
  { name: "Blue Origin", icon: Rocket, description: "New Glenn rocket production facility" },
  { name: "L3Harris Technologies", icon: Shield, description: "Defense electronics & communications HQ" },
  { name: "Northrop Grumman", icon: Plane, description: "Aerospace systems & defense" },
  { name: "Lockheed Martin", icon: Shield, description: "Space systems & missile defense" },
  { name: "Leonardo DRS", icon: Cpu, description: "Advanced defense electronics" },
];

const marketStats = [
  { label: "Population Growth (2020-2025)", value: "+12.3%", icon: Users },
  { label: "Job Growth Rate", value: "+4.2% YoY", icon: TrendingUp },
  { label: "CRE Investment Volume", value: "$1.8B+", icon: Building },
  { label: "Average Wage Growth", value: "+6.1% YoY", icon: TrendingUp },
];

const growthDrivers = [
  {
    title: "Aerospace & Defense Expansion",
    content:
      "SpaceX's Starlink manufacturing, Blue Origin's New Glenn facility, and continued defense modernization are driving thousands of high-wage jobs to the Space Coast. These employers create downstream demand for housing, retail, and commercial services.",
  },
  {
    title: "Population & Migration Influx",
    content:
      "Brevard County is one of the fastest-growing metro areas in the U.S., benefiting from Florida's tax advantages, quality of life, and remote-work migration patterns that accelerated post-2020.",
  },
  {
    title: "Infrastructure Investment",
    content:
      "Significant public and private infrastructure investment — including port expansion, road improvements, and educational facilities — is creating a virtuous cycle of growth that supports commercial real estate demand across all property types.",
  },
  {
    title: "Limited Supply, Growing Demand",
    content:
      "New commercial construction has not kept pace with demand growth, creating favorable supply-demand dynamics for existing properties and strategic development opportunities.",
  },
];

export default function MarketPage() {
  return (
    <>
      <Hero
        tagline="Market Thesis"
        title="Florida's Space Coast"
        subtitle="A generational growth cycle driven by aerospace, defense, and technology — creating exceptional commercial real estate opportunity."
        compact
      />

      {/* Market Stats */}
      <section className="py-16 bg-cream">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {marketStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-charcoal/5 text-center"
              >
                <stat.icon className="w-6 h-6 text-gold mx-auto mb-3" />
                <p className="text-2xl md:text-3xl font-bold text-slate-dark">
                  {stat.value}
                </p>
                <p className="text-sm text-charcoal-light mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Drivers */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <SectionHeader
            tagline="Growth Thesis"
            title="Why the Space Coast"
            subtitle="Multiple converging growth drivers are creating a once-in-a-generation commercial real estate opportunity."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {growthDrivers.map((driver, i) => (
              <motion.div
                key={driver.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-cream-light rounded-xl p-8 border border-charcoal/5"
              >
                <h3 className="text-lg font-semibold text-slate-dark mb-3">
                  {driver.title}
                </h3>
                <p className="text-charcoal-light leading-relaxed">
                  {driver.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Employers */}
      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto">
          <SectionHeader
            tagline="Economic Engine"
            title="Major Employers"
            subtitle="The Space Coast's commercial real estate demand is anchored by world-class aerospace, defense, and technology employers."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {employers.map((employer, i) => (
              <motion.div
                key={employer.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-charcoal/5 flex items-start gap-4"
              >
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <employer.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-dark">{employer.name}</h3>
                  <p className="text-sm text-charcoal-light mt-1">
                    {employer.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="section-padding bg-slate-dark">
        <div className="container-wide mx-auto text-center">
          <SectionHeader
            tagline="Geography"
            title="Space Coast Market Area"
            subtitle="Melbourne, Palm Bay, Cocoa Beach, Titusville, and surrounding communities in Brevard County, Florida."
            dark
          />
          <div className="bg-white/5 rounded-xl aspect-[2/1] flex items-center justify-center border border-cream/10">
            <p className="text-cream/40 text-lg">
              Interactive Mapbox map will be integrated here
            </p>
          </div>
        </div>
      </section>

      {/* Download */}
      <section className="py-16 bg-white">
        <div className="container-narrow mx-auto text-center px-4">
          <Download className="w-10 h-10 text-gold mx-auto mb-4" />
          <h2 className="text-2xl font-display font-semibold text-slate-dark mb-3">
            Space Coast Market Report
          </h2>
          <p className="text-charcoal-light mb-6">
            Download our comprehensive market report with detailed economic
            data, demographic trends, and commercial real estate analysis.
          </p>
          <button className="px-6 py-3 bg-gold hover:bg-gold-dark text-slate-dark font-semibold rounded-md transition-colors">
            Download Market Report (PDF)
          </button>
        </div>
      </section>

      <CTABanner
        title="Invest in the Space Coast"
        subtitle="Rising Tide CRE is actively acquiring and managing commercial properties across Florida's fastest-growing market."
        primaryCTA={{ label: "Explore Opportunities", href: "/contact" }}
        secondaryCTA={{ label: "View Portfolio", href: "/portfolio" }}
      />
    </>
  );
}
