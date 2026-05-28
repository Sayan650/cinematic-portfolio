"use client";

import { motion } from "framer-motion";

export const bgCodes = [
`const init = async () => {
  await system.connect();
  system.deploy({ 
    scalable: true,
    robust: true 
  });
};
init();`,
`interface Architecture {
  frontend: "React" | "Next.js";
  backend: "Node.js" | "Rust";
  database: "PostgreSQL";
}
// Designed for scale`,
`function optimizeUI() {
  const t0 = performance.now();
  renderTree();
  return performance.now() - t0;
}
// Client-side optimization`,
`<Component 
  architecture="clean"
  state="managed"
  performance="optimal"
/>`
];

export default function BackgroundCode({ 
  index = 0, 
  align = "center", 
  position = "absolute inset-0" 
}: { 
  index?: number, 
  align?: "left" | "center" | "right", 
  position?: string 
}) {
  const code = bgCodes[index % bgCodes.length];

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(4px)" }}
      whileInView={{ opacity: 0.3, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay: 0.4 }}
      className={`pointer-events-none select-none opacity-[0.02] flex items-center overflow-hidden z-0 ${
        align === "left" ? "justify-start text-left" : 
        align === "right" ? "justify-end text-right" : 
        "justify-center text-center"
      } ${position}`}
    >
      <pre className="font-mono text-xs md:text-sm text-kimono-white whitespace-pre-wrap leading-relaxed max-w-full">
        {code}
      </pre>
    </motion.div>
  );
}
