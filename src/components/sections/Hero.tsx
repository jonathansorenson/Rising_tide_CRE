"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type HeroProps = {
  tagline?: string;
  title: string;
  subtitle?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  backgroundImage?: string;
  overlay?: boolean;
  compact?: boolean;
};

export function Hero({
  tagline,
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  overlay = true,
  compact = false,
}: HeroProps) {
  return (
    <section
      className={`relative flex items-center ${compact ? "min-h-[50vh]" : "min-h-screen"}`}
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }
          : undefined
      }
    >
      {/* Gradient overlay */}
      {overlay && (
        <div className="absolute inset-0 slate-gradient opacity-90" />
      )}
      {!backgroundImage && !overlay && (
        <div className="absolute inset-0 slate-gradient" />
      )}

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-sage/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container-wide mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {tagline && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-gold font-medium tracking-wider uppercase text-sm mb-4"
            >
              {tagline}
            </motion.p>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-display-lg md:text-display-xl text-cream leading-tight"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg md:text-xl text-cream/70 max-w-2xl leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}

          {(primaryCTA || secondaryCTA) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              {primaryCTA && (
                <Link
                  href={primaryCTA.href}
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold bg-gold hover:bg-gold-dark text-slate-dark rounded-md transition-all hover:shadow-lg hover:shadow-gold/20"
                >
                  {primaryCTA.label}
                </Link>
              )}
              {secondaryCTA && (
                <Link
                  href={secondaryCTA.href}
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold border-2 border-cream/30 text-cream hover:border-gold hover:text-gold rounded-md transition-all"
                >
                  {secondaryCTA.label}
                </Link>
              )}
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 gold-gradient opacity-60" />
    </section>
  );
}
