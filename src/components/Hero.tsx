"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";
import BackgroundCode from "./BackgroundCode";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  const moveX = useTransform(springX, [0, 1], ["-2%", "2%"]);
  const moveY = useTransform(springY, [0, 1], ["-2%", "2%"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX / innerWidth);
      mouseY.set(clientY / innerHeight);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleImg = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden">
      {/* Background Layer: Misty Landscape */}
      <motion.div 
        style={{ y: yBg, scale: scaleImg }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <BackgroundCode index={0} align="center" position="absolute inset-0 z-10" />
        <motion.img
          style={{ x: moveX, y: moveY }}
          src="https://images.unsplash.com/photo-1607799279861-4dddf8b60ddb?q=80&w=2070&auto=format&fit=crop"
          alt="Developer Code Screen"
          className="w-full h-full scale-125 object-cover"
        />
      </motion.div>
...

      {/* Midground Layer: Massive Typography */}
      <motion.div 
        style={{ y: yText, opacity: opacityText }}
        className="absolute inset-0 z-10 flex flex-col justify-center items-center pointer-events-none"
      >
        <h1 className="text-[15vw] font-display uppercase leading-[0.8] tracking-tighter text-kimono-white/90 mix-blend-overlay">
          SAYAN
        </h1>
        <h1 className="text-[15vw] font-display uppercase leading-[0.8] tracking-tighter text-kimono-white/20 -mt-[4vw] outline-text">
          SAYAN
        </h1>
      </motion.div>

      {/* Foreground Layer: Poetic Statement & CTA */}
      <div className="absolute top-0 left-0 right-0 h-[100svh] z-20 flex flex-col justify-end p-8 md:p-20 pb-24 md:pb-32">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <p className="font-serif text-3xl md:text-5xl italic leading-tight text-warm-neutral">
            Dynamic Web Experiences with Motion, Systems & Scalable Products
          </p>
          <p className="mt-6 text-xs md:text-sm uppercase tracking-[0.3em] text-muted-gray leading-relaxed">
            I build immersive digital products with modern frontend systems, real-time infrastructure, cinematic UI, and scalable backend architecture.
          </p>
          
          <div className="mt-12 flex flex-wrap gap-4 md:gap-6">
            <a 
              href="#work"
              className="px-8 py-3 bg-muted-lime text-mist-black text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-kimono-white transition-colors duration-500 rounded-full flex items-center justify-center"
            >
              Explore Work
            </a>
            <a 
              href="#contact"
              className="px-8 py-3 border border-kimono-white/20 text-kimono-white text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-kimono-white hover:text-mist-black transition-all duration-500 rounded-full backdrop-blur-sm flex items-center justify-center"
            >
              Contact
            </a>
            <a 
              href="/files/Sayan_Resume.pdf" 
              download
              className="px-8 py-3 border border-kimono-white/20 text-kimono-white text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-kimono-white hover:text-mist-black transition-all duration-500 rounded-full backdrop-blur-sm flex items-center justify-center"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>

      {/* Atmospheric Fog Overlay */}
      <div className="absolute inset-0 z-30 pointer-events-none bg-gradient-to-t from-mist-black via-transparent to-transparent opacity-60" />
      
      <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 1px rgba(250, 250, 250, 0.3);
          color: transparent;
        }
      `}</style>
    </section>
  );
}
