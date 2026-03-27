"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type CTABannerProps = {
  title: string;
  subtitle?: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
};

export function CTABanner({ title, subtitle, primaryCTA, secondaryCTA }: CTABannerProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 slate-gradient" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      </div>

      <div className="relative container-wide mx-auto section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-display-sm md:text-display-md font-display text-cream mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-cream/70 max-w-2xl mx-auto mb-8">
              {subtitle}
            </p>
          )}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={primaryCTA.href}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold bg-gold hover:bg-gold-dark text-slate-dark rounded-md transition-all hover:shadow-lg hover:shadow-gold/20"
            >
              {primaryCTA.label}
            </Link>
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold border-2 border-cream/30 text-cream hover:border-gold hover:text-gold rounded-md transition-all"
              >
                {secondaryCTA.label}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
