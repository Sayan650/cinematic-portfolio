"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import BackgroundCode from "./BackgroundCode";

const uiDesigns = [
  {
    title: "E-commerce App",
    category: "Mobile Design",
    year: "2024",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop",
    layout: "wide",
    tech: "Figma, Prototyping, User Research",
    desc: "A modern e-commerce mobile application design with intuitive user flow, featuring product discovery, seamless checkout, and user account management."
  },
  {
    title: "SaaS Landing Page",
    category: "Web Design",
    year: "2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    layout: "portrait",
    tech: "Figma, Design System, Animation",
    desc: "A comprehensive Landing design for a SaaS platform with stunnig animation. Clean and professional interface."
  },
  {
    title: "Food Delivery App",
    category: "Mobile Design",
    year: "2023",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop",
    layout: "standard",
    tech: "Figma, User Journey, User Research",
    desc: "Mobile app design for food delivery service with location-based restaurant discovery, real-time order tracking, and payment integration."
  },
  {
    title: "Athena Wallet App",
    category: "App Design",
    year: "2023",
    image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=1969&auto=format&fit=crop",
    layout: "portrait",
    tech: "Figma, Security UX, Accessibility",
    desc: "Secure and user-friendly web3 application with account management, portfolio management, and investment planning tools powered by AI."
  },
  {
    title: "Nostalgic Kolkata",
    category: "Web Design",
    year: "2023",
    image: "https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=1974&auto=format&fit=crop",
    layout: "wide",
    tech: "Figma, Social UX, Content Strategy",
    desc: "A nostalgic representation of my home city with eligent design and creativity."
  }
];

function DesignCard({ design, index }: { design: typeof uiDesigns[0]; index: number }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={containerRef}
      className={`relative mb-40 flex flex-col ${isEven ? "md:items-start" : "md:items-end"}`}
    >
      <div className={`relative overflow-hidden group rounded-sm ${
        design.layout === "wide" ? "w-full md:w-3/4 aspect-video" : 
        design.layout === "portrait" ? "w-full md:w-1/2 aspect-[3/4]" : 
        "w-full md:w-2/3 aspect-[4/3]"
      }`}>
        <motion.img
          style={{ scale }}
          src={design.image}
          alt={design.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-mist-black/20 group-hover:bg-transparent transition-colors duration-700" />
        
        {/* Hover Grain Intensification Placeholder */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-700 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
      </div>

      <motion.div 
        style={{ y }}
        className={`mt-8 md:-mt-12 z-10 px-4 md:px-0 ${isEven ? "md:ml-12" : "md:mr-12 text-right"}`}
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-muted-gray mb-2 block">
          {design.year} / {design.category}
        </span>
        <h3 className="text-4xl md:text-7xl font-display uppercase tracking-tighter text-kimono-white group-hover:text-muted-lime transition-colors duration-500">
          {design.title}
        </h3>
        <p className={`mt-4 text-sm text-muted-gray max-w-md ${isEven ? '' : 'ml-auto'}`}>
          {design.desc}
        </p>
        <p className={`mt-2 text-[10px] uppercase tracking-widest text-muted-lime font-medium ${isEven ? '' : 'ml-auto'}`}>
          {design.tech}
        </p>
        <button className="mt-6 text-[10px] uppercase tracking-[0.3em] font-medium border-b border-kimono-white/20 pb-1 hover:border-muted-lime hover:text-muted-lime transition-all duration-500">
          View Design
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function UIDesigns() {
  return (
    <section id="ui-ux" className="relative py-32 px-8 md:px-20 overflow-hidden bg-mist-black">
      <BackgroundCode index={3} align="center" position="absolute inset-0 z-0" />
      <div className="relative z-10 mb-32 max-w-3xl">
        <h2 className="text-xs uppercase tracking-[0.6em] text-muted-gray mb-8">Interface & Experience</h2>
        <h3 className="text-2xl md:text-4xl font-serif italic text-warm-neutral leading-relaxed">
          A collection of my UI/UX design work, showcasing user-centered design thinking and modern interface solutions across various platforms.
        </h3>
        <div className="h-[1px] w-full bg-kimono-white/10 mt-16" />
      </div>

      <div className="flex flex-col">
        {uiDesigns.map((design, i) => (
          <DesignCard key={design.title} design={design} index={i} />
        ))}
      </div>
      
      <div className="mt-20 flex justify-center">
        <button className="group text-sm font-serif italic text-warm-neutral flex flex-col items-center gap-4">
          <span>See all designs</span>
          <div className="w-px h-20 bg-gradient-to-b from-muted-lime to-transparent group-hover:h-32 transition-all duration-700" />
        </button>
      </div>
    </section>
  );
}
