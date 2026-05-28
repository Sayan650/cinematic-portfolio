"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import BackgroundCode from "./BackgroundCode";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    setLoading(true);
    // Note: Replace these with your actual EmailJS credentials
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
      .then(() => {
        setSuccess(true);
        formRef.current?.reset();
        setTimeout(() => setSuccess(false), 5000);
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <BackgroundCode index={0} align="left" position="absolute inset-0 z-0" />
      {/* Background: Cinematic Tech Network */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
          alt="Global Tech Network"
          className="w-full h-full object-cover grayscale brightness-50"
        />
        <div className="absolute inset-0 bg-mist-black/40 backdrop-blur-[2px]" />
      </div>

      {/* Contact Panel */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-2xl mx-4 p-8 md:p-16 bg-mist-black/40 backdrop-blur-xl border border-kimono-white/10 rounded-sm"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-muted-lime font-bold mb-4 block">
          Get in Touch
        </span>
        <h2 className="text-4xl md:text-5xl font-serif italic text-warm-neutral mb-12">
          Let&apos;s build something immersive, scalable, and unforgettable.
        </h2>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-muted-gray">Name</label>
              <input 
                type="text" 
                name="user_name"
                required
                className="w-full bg-transparent border-b border-kimono-white/10 py-2 focus:border-muted-lime outline-none transition-colors duration-500"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-muted-gray">Email</label>
              <input 
                type="email" 
                name="user_email"
                required
                className="w-full bg-transparent border-b border-kimono-white/10 py-2 focus:border-muted-lime outline-none transition-colors duration-500"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] uppercase tracking-widest text-muted-gray">Message</label>
            <textarea 
              name="message"
              rows={4}
              required
              className="w-full bg-transparent border-b border-kimono-white/10 py-2 focus:border-muted-lime outline-none transition-colors duration-500 resize-none"
            />
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-4 mt-8 bg-kimono-white text-mist-black text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-muted-lime transition-all duration-500 rounded-sm disabled:opacity-50"
          >
            {loading ? "Sending..." : success ? "Message Sent" : "Send Message"}
          </button>
        </form>

        <div className="mt-16 pt-8 border-t border-kimono-white/10 flex flex-wrap gap-8 justify-between">
          <div className="flex gap-6">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-[10px] uppercase tracking-widest text-muted-gray hover:text-kimono-white transition-colors">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-[10px] uppercase tracking-widest text-muted-gray hover:text-kimono-white transition-colors">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-[10px] uppercase tracking-widest text-muted-gray hover:text-kimono-white transition-colors">Twitter/X</a>
            <a href="mailto:hello@example.com" className="text-[10px] uppercase tracking-widest text-muted-gray hover:text-kimono-white transition-colors">Email</a>
          </div>
          <p className="text-[10px] uppercase tracking-widest text-muted-gray">
            © 2026 Sayan Portfolio. All Rights Reserved.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
