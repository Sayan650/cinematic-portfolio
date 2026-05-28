"use client";

import { motion } from "framer-motion";
import BackgroundCode from "./BackgroundCode";

export default function About() {
  return (
    <section id="about" className="relative min-h-screen py-32 px-8 md:px-20 flex flex-col md:grid md:grid-cols-2 gap-20 items-center overflow-hidden">
      <BackgroundCode index={1} align="right" position="absolute inset-0 z-0" />
      {/* Left: Cinematic Portrait / Environment */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative aspect-[4/5] w-full overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-1000"
      >
        <img
          src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop"
          alt="Developer Workstation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-mist-black/60 to-transparent" />
      </motion.div>

      {/* Right: Editorial Content */}
      <div className="flex flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-muted-lime font-bold mb-4 block">
            The Engineer
          </span>
          <h2 className="text-4xl md:text-5xl font-serif italic text-warm-neutral leading-tight">
            Full Stack Developer / Product Engineer
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="space-y-6 text-muted-gray text-lg md:text-xl font-light leading-relaxed max-w-lg"
        >
          <p>
            I build immersive digital products with modern frontend systems, real-time infrastructure, cinematic UI, and scalable backend architecture.
          </p>
          <p className="text-sm md:text-base">
            <span className="text-kimono-white font-medium italic mx-1">Tech Stack:</span> 
            React.js, Next.js, TypeScript, Node.js, Express.js, MongoDB, PostgreSQL, Tailwind CSS, Framer Motion, GSAP, Supabase, Firebase, Redis, AWS, Docker, WebRTC, Socket.io, Rust, Solana/Web3.
          </p>
          <p className="text-sm md:text-base">
            <span className="text-kimono-white font-medium italic mx-1">Services:</span> 
            Full Stack Development, Frontend Engineering, SaaS Development, AI-Powered Applications, Real-Time Systems, UI/UX Development, Motion & Interaction Design.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="pt-6 border-t border-kimono-white/10"
        >
          <div className="flex gap-12">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted-gray mb-1">Based in</p>
              <p className="text-sm font-medium">India</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted-gray mb-1">Focus</p>
              <p className="text-sm font-medium">Scalable Web Products</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
