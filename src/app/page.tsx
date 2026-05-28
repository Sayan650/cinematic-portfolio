import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import UIDesigns from "@/components/UIDesigns";
import Experience from "@/components/Experience";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative bg-mist-black">
      <Hero />
      <About />
      <Work />
      <UIDesigns />
      <Experience />
      <Philosophy />
      <Contact />
    </main>
  );
}
