"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  tagline?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
};

export function SectionHeader({
  tagline,
  title,
  subtitle,
  align = "center",
  dark = false,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        align === "center" && "max-w-2xl mx-auto"
      )}
    >
      {tagline && (
        <p className="text-gold font-medium tracking-wider uppercase text-sm mb-3">
          {tagline}
        </p>
      )}
      <h2
        className={cn(
          "text-display-sm md:text-display-md font-display",
          dark ? "text-cream" : "text-slate-dark"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            dark ? "text-cream/70" : "text-charcoal-light"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
