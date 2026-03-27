"use client";

import { motion } from "framer-motion";
import { Cpu, BarChart3, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "AI-Powered Analytics",
    description: "Proprietary underwriting and market analysis tools built on institutional-grade data.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Reporting",
    description: "Live dashboards for property performance, tenant health, and portfolio metrics.",
  },
  {
    icon: Shield,
    title: "Operational Intelligence",
    description: "Management-first insights that drive smarter acquisitions and leasing decisions.",
  },
  {
    icon: Zap,
    title: "Speed to Execution",
    description: "Technology-enabled workflows that compress deal timelines and reduce friction.",
  },
];

export function TechnologyCallout() {
  return (
    <section className="section-padding bg-slate-dark relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-sage/3 rounded-full blur-3xl" />
      </div>

      <div className="relative container-wide mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-gold font-medium tracking-wider uppercase text-sm mb-3">
            Technology
          </p>
          <h2 className="text-display-sm md:text-display-md font-display text-cream mb-4">
            Powered by CRElytic
          </h2>
          <p className="text-lg text-cream/70 max-w-2xl mx-auto">
            Our proprietary analytics platform gives Rising Tide CRE an
            information advantage — turning operational data into investment
            intelligence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-cream/5 hover:border-gold/20 transition-colors"
            >
              <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-semibold text-cream mb-2">{feature.title}</h3>
              <p className="text-sm text-cream/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
