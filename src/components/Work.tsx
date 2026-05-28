"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import BackgroundCode from "./BackgroundCode";

const projects = [
  {
    title: "Deployment Platform",
    category: "Vercel-like Cloud Infra",
    year: "2024",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
    layout: "wide",
    tech: "Next.js, AWS, Redis, Docker, Node.js",
    desc: "A one-click deployment platform inspired by Vercel that imports Git repositories, builds applications, deploys them to cloud infrastructure, and serves them globally."
  },
  {
    title: "WebRTC Comms",
    category: "Real-Time Platform",
    year: "2024",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop",
    layout: "portrait",
    tech: "React, WebRTC, Socket.io, Node.js",
    desc: "A real-time communication platform supporting video calls, voice chat, messaging, and screen sharing with scalable signaling infrastructure."
  },
  {
    title: "AI Resume SaaS",
    category: "AI Platform",
    year: "2024",
    image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=2070&auto=format&fit=crop",
    layout: "standard",
    tech: "Next.js, AI APIs, Tailwind CSS, TypeScript",
    desc: "An AI-powered resume and portfolio generation platform that helps users create personalized professional profiles with modern UI workflows."
  },
  {
    title: "Website Builder",
    category: "No-Code SaaS",
    year: "2024",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop",
    layout: "wide",
    tech: "React, TypeScript, Framer Motion",
    desc: "A drag-and-drop website builder for no-code users inspired by Wix and Framer. Includes editable components, dynamic layouts, and publishing workflows."
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
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
        project.layout === "wide" ? "w-full md:w-3/4 aspect-video" : 
        project.layout === "portrait" ? "w-full md:w-1/2 aspect-[3/4]" : 
        "w-full md:w-2/3 aspect-[4/3]"
      }`}>
        <motion.img
          style={{ scale }}
          src={project.image}
          alt={project.title}
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
          {project.year} / {project.category}
        </span>
        <h3 className="text-4xl md:text-7xl font-display uppercase tracking-tighter text-kimono-white group-hover:text-muted-lime transition-colors duration-500">
          {project.title}
        </h3>
        <p className={`mt-4 text-sm text-muted-gray max-w-md ${isEven ? '' : 'ml-auto'}`}>
          {project.desc}
        </p>
        <p className={`mt-2 text-[10px] uppercase tracking-widest text-muted-lime font-medium ${isEven ? '' : 'ml-auto'}`}>
          {project.tech}
        </p>
        <button className="mt-6 text-[10px] uppercase tracking-[0.3em] font-medium border-b border-kimono-white/20 pb-1 hover:border-muted-lime hover:text-muted-lime transition-all duration-500">
          View Project
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function Work() {
  return (
    <section id="work" className="relative py-32 px-8 md:px-20 overflow-hidden">
      <BackgroundCode index={2} align="center" position="absolute inset-0 z-0" />
      <div className="relative z-10 mb-32">
        <h2 className="text-xs uppercase tracking-[0.6em] text-muted-gray mb-8">Selected Scenographies</h2>
        <div className="h-[1px] w-full bg-kimono-white/10" />
      </div>

      <div className="flex flex-col">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
      
      <div className="mt-20 flex justify-center">
        <button className="group text-sm font-serif italic text-warm-neutral flex flex-col items-center gap-4">
          <span>See all archives</span>
          <div className="w-px h-20 bg-gradient-to-b from-muted-lime to-transparent group-hover:h-32 transition-all duration-700" />
        </button>
      </div>
    </section>
  );
}
