"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { CTABanner } from "@/components/sections/CTABanner";
import { SectionHeader } from "@/components/sections/SectionHeader";
import {
  Briefcase,
  GraduationCap,
  Users,
  TrendingUp,
  MapPin,
  ArrowRight,
  Building2,
  BarChart3,
  Key,
} from "lucide-react";

const openPositions = [
  {
    title: "Property Manager",
    department: "Management",
    location: "Melbourne, FL",
    type: "Full-time",
    description:
      "Oversee day-to-day operations for a portfolio of commercial properties, including tenant relations, maintenance coordination, and financial reporting.",
  },
  {
    title: "Acquisitions Analyst",
    department: "Acquisitions",
    location: "Melbourne, FL",
    type: "Full-time",
    description:
      "Support the acquisitions team with financial modeling, market research, due diligence, and deal underwriting for commercial real estate opportunities.",
  },
  {
    title: "Leasing Associate",
    department: "Leasing",
    location: "Melbourne, FL",
    type: "Full-time",
    description:
      "Drive leasing activity across the portfolio — prospect tenants, negotiate terms, and manage the lease execution process from LOI to move-in.",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Cross-Functional Exposure",
    description: "Work across management, acquisitions, and leasing — not in a silo.",
  },
  {
    icon: GraduationCap,
    title: "Professional Development",
    description: "Licensing support, industry conferences, and mentorship from experienced operators.",
  },
  {
    icon: Users,
    title: "Small Team, Big Impact",
    description: "Direct access to leadership and the ability to shape company direction.",
  },
  {
    icon: Briefcase,
    title: "Competitive Compensation",
    description: "Market-rate salary, performance bonuses, and benefits package.",
  },
];

const careerPaths = [
  {
    icon: Building2,
    title: "Management Track",
    steps: ["Property Coordinator", "Assistant Property Manager", "Property Manager", "Director of Operations"],
  },
  {
    icon: BarChart3,
    title: "Acquisitions Track",
    steps: ["Analyst", "Senior Analyst", "Acquisitions Manager", "VP of Acquisitions"],
  },
  {
    icon: Key,
    title: "Leasing Track",
    steps: ["Leasing Associate", "Senior Associate", "Leasing Director", "VP of Leasing"],
  },
];

export default function CareersPage() {
  return (
    <>
      <Hero
        tagline="Join Our Team"
        title="Build Your Career Across Every Facet of CRE"
        subtitle="At Rising Tide, you don't specialize in a silo. You get exposure to management, acquisitions, and leasing — building the kind of well-rounded expertise that defines top CRE professionals."
        primaryCTA={{ label: "View Open Positions", href: "#positions" }}
        compact
      />

      {/* Why Rising Tide */}
      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto">
          <SectionHeader
            tagline="Why Rising Tide"
            title="A Different Kind of CRE Career"
            subtitle="Our vertically integrated model means you'll gain experience that would take a decade at a traditional firm."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-charcoal/5"
              >
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-semibold text-slate-dark mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-charcoal-light leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Paths */}
      <section className="section-padding bg-white">
        <div className="container-wide mx-auto">
          <SectionHeader
            tagline="Growth"
            title="Career Paths"
            subtitle="Clear advancement trajectories across all three service lines."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {careerPaths.map((path, i) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-cream-light rounded-xl p-8 border border-charcoal/5"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-6">
                  <path.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-slate-dark mb-4">
                  {path.title}
                </h3>
                <ol className="space-y-3">
                  {path.steps.map((step, j) => (
                    <li key={step} className="flex items-center gap-3">
                      <span className="w-6 h-6 bg-gold/20 text-gold text-xs font-bold rounded-full flex items-center justify-center flex-shrink-0">
                        {j + 1}
                      </span>
                      <span className="text-sm text-charcoal">{step}</span>
                    </li>
                  ))}
                </ol>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="section-padding bg-cream scroll-mt-24">
        <div className="container-wide mx-auto">
          <SectionHeader
            tagline="Open Positions"
            title="Current Opportunities"
            subtitle="We're growing our team and looking for talented professionals who share our passion for commercial real estate."
          />

          <div className="space-y-4">
            {openPositions.map((position, i) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-charcoal/5 hover:border-gold/30 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-dark">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                      <span className="inline-flex items-center gap-1 text-sm text-charcoal-light">
                        <Briefcase className="w-3.5 h-3.5 text-gold/60" />
                        {position.department}
                      </span>
                      <span className="inline-flex items-center gap-1 text-sm text-charcoal-light">
                        <MapPin className="w-3.5 h-3.5 text-gold/60" />
                        {position.location}
                      </span>
                      <span className="px-2.5 py-0.5 bg-sage/10 text-sage-dark text-xs font-medium rounded-full">
                        {position.type}
                      </span>
                    </div>
                    <p className="text-charcoal-light mt-3 text-sm leading-relaxed max-w-2xl">
                      {position.description}
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gold hover:bg-gold-dark text-slate-dark font-semibold rounded-md transition-colors whitespace-nowrap flex-shrink-0"
                  >
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-charcoal-light">
              Don&apos;t see a fit? We&apos;re always looking for talented people.{" "}
              <Link href="/contact" className="text-gold hover:text-gold-dark font-medium">
                Send us your resume &rarr;
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* EEO Statement */}
      <section className="py-8 bg-white">
        <div className="container-narrow mx-auto px-4 text-center">
          <p className="text-xs text-charcoal-light/60 leading-relaxed">
            Rising Tide CRE is an equal opportunity employer. We celebrate
            diversity and are committed to creating an inclusive environment for
            all employees. All qualified applicants will receive consideration
            for employment without regard to race, color, religion, sex, sexual
            orientation, gender identity, national origin, disability, or
            veteran status. Employment is at-will as defined under Florida law.
          </p>
        </div>
      </section>

      <CTABanner
        title="Ready to Make Your Move?"
        subtitle="Join a team that's building the future of commercial real estate on Florida's Space Coast."
        primaryCTA={{ label: "View Open Positions", href: "#positions" }}
        secondaryCTA={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
