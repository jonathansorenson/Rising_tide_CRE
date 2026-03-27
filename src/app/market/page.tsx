"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/sections/Hero";
import { CTABanner } from "@/components/sections/CTABanner";
import { SectionHeader } from "@/components/sections/SectionHeader";
import {
  Building2,
  Landmark,
  HeartPulse,
  Cpu,
  Users,
  TrendingUp,
  Building,
  Download,
} from "lucide-react";

const employers = [
  { name: "NextEra Energy", icon: Building2, description: "Fortune 200 energy company HQ" },
  { name: "FPL Group", icon: Building2, description: "Florida's largest electric utility" },
  { name: "Scripps Research", icon: HeartPulse, description: "World-class biomedical research institute" },
  { name: "Max Planck Institute", icon: HeartPulse, description: "Neuroscience research campus" },
  { name: "Financial Services Hub", icon: Landmark, description: "Major banks, hedge funds, and family offices" },
  { name: "Tech & Innovation", icon: Cpu, description: "Growing technology and startup ecosystem" },
];

const marketStats = [
  { label: "Population Growth (2020-2025)", value: "+9.8%", icon: Users },
  { label: "Median Household Income", value: "$75K+", icon: TrendingUp },
  { label: "CRE Investment Volume", value: "$2.4B+", icon: Building },
  { label: "Average Wage Growth", value: "+5.7% YoY", icon: TrendingUp },
];

const growthDrivers = [
  {
    title: "Wealth & Business Migration",
    content:
      "Palm Beach County continues to attract high-net-worth individuals, family offices, and corporate relocations from the Northeast and Midwest. This migration is driving demand across all commercial property types — from Class A office to luxury retail and multifamily.",
  },
  {
    title: "Population & Demographic Growth",
    content:
      "Palm Beach County is one of the fastest-growing counties in South Florida, benefiting from Florida's tax advantages, quality of life, and remote-work migration patterns that accelerated post-2020.",
  },
  {
    title: "Infrastructure Investment",
    content:
      "Significant public and private infrastructure investment — including Brightline high-speed rail, port expansion, and educational facilities — is creating a virtuous cycle of growth that supports commercial real estate demand across all property types.",
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
        title="Palm Beach County"
        subtitle="A generational growth cycle driven by wealth migration, business relocation, and infrastructure investment — creating exceptional commercial real estate opportunity."
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
            title="Why Palm Beach County"
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
            title="Major Employers & Institutions"
            subtitle="Palm Beach County's commercial real estate demand is anchored by Fortune 500 companies, world-class research institutions, and a thriving financial services sector."
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
            title="Palm Beach County Market Area"
            subtitle="West Palm Beach, Palm Beach Gardens, Jupiter, Boca Raton, Delray Beach, and surrounding communities in Palm Beach County, Florida."
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
            Palm Beach County Market Report
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
        title="Invest in Palm Beach County"
        subtitle="Rising Tide CRE is actively acquiring and managing commercial properties across South Florida's fastest-growing market."
        primaryCTA={{ label: "Explore Opportunities", href: "/contact" }}
        secondaryCTA={{ label: "View Portfolio", href: "/portfolio" }}
      />
    </>
  );
}
