"use client";

import { motion } from "framer-motion";
import BackgroundCode from "./BackgroundCode";

const experience = [
  {
    year: "2026",
    company: "EY GDS",
    role: "Software Engineer",
    desc: "Developing scalable enterprise software solutions and modern web applications with a focus on performance and robust architecture.",
  },
  {
    year: "2025",
    company: "Independent",
    role: "Full Stack Developer",
    desc: "Designed and developed complete products independently — from UI/UX and frontend systems to backend APIs, deployment, and cloud infrastructure.",
  },
  {
    year: "2022",
    company: "Freelance",
    role: "Product Developer",
    desc: "Built scalable web applications and modern user experiences for clients with focus on performance, interaction, and clean design systems.",
  },
  {
    year: "2023",
    company: "Internship",
    role: "Frontend Engineer Intern",
    desc: "Worked on responsive frontend systems, component architecture, and UI optimization using React and modern JavaScript frameworks.",
  },
];

export default function Experience() {
  return (
    <section className="relative py-32 px-8 md:px-20 bg-mist-black">
      <div className="mb-32 max-w-2xl">
        <h2 className="text-xs uppercase tracking-[0.6em] text-muted-gray mb-8">Career Timeline</h2>
        <h3 className="text-4xl md:text-5xl font-serif italic text-warm-neutral">
          A journey through light and shadow.
        </h3>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-muted-lime/40 via-kimono-white/10 to-transparent md:-translate-x-1/2" />

        <div className="flex flex-col gap-32">
          {experience.map((item, i) => (
            <div 
              key={item.year}
              className={`relative flex flex-col md:flex-row items-start md:items-center justify-between w-full ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Node */}
              <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-muted-lime rounded-full md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(212,248,122,0.8)]" />

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className={`w-full md:w-[45%] pl-8 md:pl-0 ${i % 2 === 0 ? "md:text-left" : "md:text-right"}`}
              >
                <div className="flex flex-col">
                  <span className="text-6xl md:text-8xl font-display uppercase tracking-tighter text-kimono-white/5 mb-2 leading-none">
                    {item.year}
                  </span>
                  <div className={`-mt-8 md:-mt-12 ${i % 2 === 0 ? "" : "flex flex-col items-end"}`}>
                    <h4 className="text-2xl md:text-3xl font-serif text-warm-neutral mb-1">{item.company}</h4>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-muted-lime font-bold mb-4">{item.role}</p>
                    <p className="text-muted-gray leading-relaxed max-w-sm">{item.desc}</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Empty Space Fill */}
              <div className="hidden md:block w-[45%]">
                <BackgroundCode 
                  index={i} 
                  align={i % 2 === 0 ? "right" : "left"} 
                  position="relative w-full h-full" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
