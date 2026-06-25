"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import BackgroundCode from "./BackgroundCode";

const uiDesigns = [
  {
    title: "E-commerce App",
    category: "Mobile Design",
    year: "2024",
    image: "/E-Commerce.png",
    layout: "wide",
    tech: "Figma, Prototyping, User Research",
    desc: "A modern e-commerce mobile application design with intuitive user flow, featuring product discovery, seamless checkout, and user account management.",
    link: "https://www.figma.com/design/zLWOPpZ1qdOaXoJ07YC64F/EY?node-id=98-822&t=ruWKOcFSmZDgd3ie-1"
  },
  {
    title: "SaaS Landing Page",
    category: "Web Design",
    year: "2024",
    image: "/SAAS.png",
    layout: "wide",
    tech: "Figma, Design System, Animation",
    desc: "A comprehensive Landing design for a SaaS platform with stunnig animation. Clean and professional interface.",
    link: "https://www.figma.com/design/LJ6MnONFkfEYiwj0dFTbug/Saas-Application---Cypress-landing-page-design.--Community-?node-id=0-1&t=ruWKOcFSmZDgd3ie-1"
  },
  {
    title: "Food Delivery App",
    category: "Mobile Design",
    year: "2023",
    image: "/JhatPot.png",
    layout: "standard",
    tech: "Figma, User Journey, User Research",
    desc: "Mobile app design for food delivery service with location-based restaurant discovery, real-time order tracking, and payment integration.",
    link: "https://www.figma.com/design/RM01wHnDxksc8cUS8RaZeX/grocery-app?node-id=22-6&t=ruWKOcFSmZDgd3ie-1"
  },
  {
    title: "Athena Wallet App",
    category: "App Design",
    year: "2023",
    image: "/Athena Wallet.png",
    layout: "standard",
    tech: "Figma, Security UX, Accessibility",
    desc: "Secure and user-friendly web3 application with account management, portfolio management, and investment planning tools powered by AI.",
    link: "https://www.figma.com/design/CokTLWsz6apm1sNoHAkkl6/Athena-wallet?node-id=113-303&t=ruWKOcFSmZDgd3ie-1"
  },
  {
    title: "Nostalgic Kolkata",
    category: "Web Design",
    year: "2023",
    image: "Kolkata.png",
    layout: "wide",
    tech: "Figma, Social UX, Content Strategy",
    desc: "A nostalgic representation of my home city with eligent design and creativity.",
    link: "https://www.figma.com/design/Si7Nyv7Q124KBKKP6E7fN9/Kolkata?node-id=1-67&t=ruWKOcFSmZDgd3ie-1"
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
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-mist-black/20 group-hover:bg-transparent transition-colors duration-700" />
        
        {/* Bottom Gradient for Text Readability */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-mist-black via-mist-black/50 to-transparent pointer-events-none" />
        
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
        {design.link && design.link !== "#" ? (
          <a href={design.link} target="_blank" rel="noreferrer" className="inline-block mt-6 text-[10px] uppercase tracking-[0.3em] font-medium border-b border-kimono-white/20 pb-1 hover:border-muted-lime hover:text-muted-lime transition-all duration-500">
            View Design
          </a>
        ) : (
          <button className="mt-6 text-[10px] uppercase tracking-[0.3em] font-medium border-b border-kimono-white/20 pb-1 hover:border-muted-lime hover:text-muted-lime transition-all duration-500 cursor-not-allowed opacity-50">
            Coming Soon
          </button>
        )}
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
