"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/sections/Hero";
import { CTABanner } from "@/components/sections/CTABanner";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { TEAM_MEMBERS } from "@/lib/constants";
import { User } from "lucide-react";

const timeline = [
  { year: "2010", title: "Founded", description: "Rising Tide established with a focus on Space Coast commercial real estate." },
  { year: "2014", title: "Management Launch", description: "Expanded into full-service property management operations." },
  { year: "2017", title: "First Major Acquisition", description: "Completed first institutional-scale acquisition on Florida's Space Coast." },
  { year: "2020", title: "Vertical Integration", description: "Unified management, acquisitions, and leasing under one platform." },
  { year: "2023", title: "CRElytic Platform", description: "Launched proprietary analytics technology for data-driven decision making." },
  { year: "2025", title: "Market Expansion", description: "Expanded operations across select Florida growth markets." },
];

const values = [
  { title: "Operational Excellence", description: "We manage every asset as if we own it — because we often do. Our management-first approach means better tenant experiences and stronger property performance." },
  { title: "Integrated Thinking", description: "Our three service lines don't operate in silos. Management insights inform acquisitions. Leasing intelligence shapes investment strategy. The integrated model creates compounding value." },
  { title: "Market Conviction", description: "We are deeply committed to Florida's Space Coast and the high-growth markets where aerospace, defense, and technology are reshaping commercial real estate demand." },
  { title: "Team Development", description: "We invest in our people with cross-functional exposure, mentorship, and opportunities to grow across every facet of commercial real estate." },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        tagline="About Us"
        title="Built to Operate. Driven to Grow."
        subtitle="Rising Tide CRE is a vertically integrated commercial real estate firm — managing, acquiring, and leasing properties across Florida's fastest-growing markets."
        compact
      />

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto">
          <SectionHeader
            tagline="Our Story"
            title="From Operator to Integrated Platform"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none text-charcoal-light leading-relaxed space-y-6"
          >
            <p>
              Rising Tide CRE was founded on a simple conviction: the best
              commercial real estate decisions are made by teams that understand
              properties from the inside out. What began as a focused investment
              platform has evolved into a vertically integrated firm that
              manages, acquires, and leases commercial properties across
              Florida&apos;s Space Coast and select growth markets.
            </p>
            <p>
              Our management-first approach means we know our assets at the
              operational level — tenant relationships, maintenance cycles,
              market positioning, and financial performance. That operational
              intelligence drives smarter acquisitions and stronger leasing
              outcomes. It&apos;s not just a business model; it&apos;s an
              information advantage.
            </p>
            <p>
              Today, Rising Tide CRE operates across retail, industrial, flex,
              office, and multifamily property types with a portfolio that
              reflects both our market thesis and our commitment to hands-on
              management. Our team brings over 15 years of combined experience
              and a technology-forward approach that sets us apart in a
              relationship-driven industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto">
          <SectionHeader
            tagline="Leadership"
            title="Our Team"
            subtitle="Experienced operators, investors, and market specialists building the next generation of CRE."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-charcoal/5"
              >
                {/* Headshot placeholder */}
                <div className="aspect-[3/4] bg-gradient-to-br from-slate/80 to-slate-light flex items-center justify-center">
                  <User className="w-16 h-16 text-cream/20" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-dark">
                    {member.name}
                  </h3>
                  <p className="text-gold text-sm font-medium mt-1">
                    {member.title}
                  </p>
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 text-sm text-charcoal-light hover:text-gold transition-colors"
                    >
                      LinkedIn &rarr;
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-narrow mx-auto">
          <SectionHeader
            tagline="Milestones"
            title="Our Journey"
          />

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gold/20 -translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className={`relative flex items-start gap-8 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-gold rounded-full border-4 border-white shadow-sm z-10" />

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <span className="text-gold font-bold text-lg">{item.year}</span>
                    <h3 className="text-lg font-semibold text-slate-dark mt-1">
                      {item.title}
                    </h3>
                    <p className="text-charcoal-light mt-1">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-cream">
        <div className="container-wide mx-auto">
          <SectionHeader
            tagline="Our Values"
            title="What Drives Us"
            subtitle="The principles that guide every decision, deal, and relationship at Rising Tide CRE."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-sm border border-charcoal/5"
              >
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-3 h-3 bg-gold rounded-full" />
                </div>
                <h3 className="text-lg font-semibold text-slate-dark mb-3">
                  {value.title}
                </h3>
                <p className="text-charcoal-light leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Want to Be Part of the Team?"
        subtitle="We're building something special at Rising Tide CRE. If you're passionate about commercial real estate, we want to hear from you."
        primaryCTA={{ label: "View Open Positions", href: "/careers" }}
        secondaryCTA={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
