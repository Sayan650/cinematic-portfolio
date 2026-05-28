"use client";

import { motion } from "framer-motion";

const statements = [
  "Atmosphere matters more than decoration.",
  "Every pixel should feel intentional.",
  "Good motion is invisible.",
  "Code is poetry in motion.",
];

export default function Philosophy() {
  return (
    <section id="process" className="relative py-64 bg-mist-black px-8 md:px-20">
      <div className="flex flex-col gap-64">
        {statements.map((statement, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center"
          >
            <h2 className="text-4xl md:text-7xl lg:text-9xl font-display uppercase tracking-tighter text-kimono-white leading-tight max-w-5xl">
              {statement}
            </h2>
            <div className="mt-12 w-px h-32 bg-gradient-to-b from-muted-gray/20 to-transparent" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
