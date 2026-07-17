"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-8 py-10 flex justify-between items-start pointer-events-none">
      <Link 
        href="/" 
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="text-xs uppercase tracking-[0.3em] font-medium pointer-events-auto hover:text-muted-lime transition-colors duration-500"
      >
        Sayan / Portfolio
      </Link>
      
      <div className="flex flex-col items-end gap-4 pointer-events-auto">
        {navLinks.map((link, i) => (
          <Link
            key={link.name}
            href={link.href}
            className="group relative text-[10px] uppercase tracking-[0.25em] font-medium text-kimono-white/60 hover:text-kimono-white transition-colors duration-500"
          >
            <motion.span
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {link.name}
            </motion.span>
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-muted-lime group-hover:w-full transition-all duration-500 ease-out" />
          </Link>
        ))}
      </div>
    </nav>
  );
}
