"use client";

import { motion } from "framer-motion";

type ServiceSection = {
  title: string;
  content: string;
};

export function ServiceDetail({ sections }: { sections: ServiceSection[] }) {
  return (
    <section className="section-padding bg-white">
      <div className="container-narrow mx-auto">
        <div className="space-y-16">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 md:gap-12"
            >
              <div>
                <h3 className="text-xl font-semibold text-slate-dark sticky top-24">
                  {section.title}
                </h3>
              </div>
              <p className="text-charcoal-light text-lg leading-relaxed">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
