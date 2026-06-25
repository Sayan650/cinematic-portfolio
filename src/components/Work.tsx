"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import BackgroundCode from "./BackgroundCode";

const projects = [
    {
      id: 1,
      title: "DevXStark",
      description:
        "A no-code, AI-driven platform that streamlines Starknet onboarding for both end users and developers, reducing initial setup friction by automating contract scaffolding and deployment.",
      tech: ["Next.Js", "Node.js", "PostgreSQL", "Cairo"],
      image: "/robot.png",
      github: "https://github.com/Sayan650/DevXStark.git",
      live: "https://devfolio.co/projects/devxstark-9421",
      featured: true,
      hackathonWinner: true,
      hackathonName: "EthIndia",
      layout: "wide",
    },
    {
      id: 2,
      title: "Boardlify",
      description:
        "A collaborative online whiteboarding platform (like Miro) using Next.js and TypeScript, delivering server-side rendering (SSR) and static-site generation (SSG) for fast initial loads.",
      tech: ["Vue.js", "Express", "Socket.io", "MongoDB"],
      image: "/Boardlify.png",
      github: "https://github.com/Sayan650/boardlify.git",
      live: "https://boardlify.vercel.app/",
      featured: false,
      layout: "wide",
    },
    {
      id: 3,
      title: "AI-Powered Skin Disease Detection",
      description:
        "Developed a deep learning–based mobile application that analyzes skin lesion images to identify potential dermatological conditions. Built using React Native, Node.js, TensorFlow/PyTorch, and ResNet50, the system provides AI-powered predictions with confidence scores to support early disease screening.",
      tech: ["React Native", "Node.js", "TensorFlow", "PyTorch", "ResNet50", "MongoDB", "OpenCV", "NumPy"],
      image: "/AIDetection.png",
      github: "https://github.com/Sayan650/AIDetection.git",
      live: "https://ai-detection.vercel.app/",
      featured: false,
      layout: "standard",
    },
    {
      id: 4,
      title: "Video and Voice Chat Application",
      description:
        " •WebRTC + Socket.io based project which connects users realtime through a voice or video call or through realtime chat. • Used WebRTC for video and voice streaming. • Also have screen sharing feature on video call.",
      tech: ["Vue.js", "Express", "Socket.io", "MongoDB"],
      image: "/robot.png",
      github: "https://github.com/Sayan650/MERN-voice-chat.git",
      live: "https://mern-voice-chat.vercel.app/",
      featured: false,
      layout: "wide",
    },
    {
      id: 5,
      title: "DRepo",
      description:
        "A version control system in web3.The code is saved in distributed storage IPFS",
      tech: ["React.js", "Express", "Socket.io", "MongoDB"],
      image: "/robot.png",
      github: "https://github.com/Sayan650/DRepo_TDoC.git",
      live: "#",
      featured: false,
      layout: "portrait",
    },
  ];

function ProjectCard({ project, index }: { project: typeof projects[0] | any; index: number }) {
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
          {project.hackathonWinner ? `🏆 ${project.hackathonName} Winner` : (project.featured ? "Featured Project" : "Project")}
        </span>
        <h3 className="text-4xl md:text-7xl font-display uppercase tracking-tighter text-kimono-white group-hover:text-muted-lime transition-colors duration-500">
          {project.title}
        </h3>
        <p className={`mt-4 text-sm text-muted-gray max-w-md whitespace-pre-wrap ${isEven ? '' : 'ml-auto'}`}>
          {project.description}
        </p>
        <p className={`mt-2 text-[10px] uppercase tracking-widest text-muted-lime font-medium ${isEven ? '' : 'ml-auto'}`}>
          {project.tech.join(" • ")}
        </p>
        <div className={`mt-6 flex gap-6 ${isEven ? '' : 'justify-end'}`}>
          {project.live && project.live !== "#" ? (
            <a href={project.live} target="_blank" rel="noreferrer" className="text-[10px] uppercase tracking-[0.3em] font-medium border-b border-kimono-white/20 pb-1 hover:border-muted-lime hover:text-muted-lime transition-all duration-500">
              Live Demo
            </a>
          ) : null}
          {project.github && project.github !== "#" ? (
            <a href={project.github} target="_blank" rel="noreferrer" className="text-[10px] uppercase tracking-[0.3em] font-medium border-b border-kimono-white/20 pb-1 hover:border-muted-lime hover:text-muted-lime transition-all duration-500">
              GitHub
            </a>
          ) : null}
          {(project.live === "#" || !project.live) && (project.github === "#" || !project.github) && (
            <button className="text-[10px] uppercase tracking-[0.3em] font-medium border-b border-kimono-white/20 pb-1 hover:border-muted-lime hover:text-muted-lime transition-all duration-500 cursor-not-allowed opacity-50">
              Coming Soon
            </button>
          )}
        </div>
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
        <a 
          href="https://github.com/Sayan650?tab=repositories" 
          target="_blank" 
          rel="noreferrer"
          className="group text-sm font-serif italic text-warm-neutral flex flex-col items-center gap-4"
        >
          <span>See all archives</span>
          <div className="w-px h-20 bg-gradient-to-b from-muted-lime to-transparent group-hover:h-32 transition-all duration-700" />
        </a>
      </div>
    </section>
  );
}
