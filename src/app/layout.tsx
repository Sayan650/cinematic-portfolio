import type { Metadata } from "next";
import { Oswald, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Atmosphere from "@/components/Atmosphere";
import Navigation from "@/components/Navigation";
import CustomCursor from "@/components/CustomCursor";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Cinematic Portfolio | Creative Developer & Designer",
  description: "A deeply cinematic, atmospheric, editorial-grade portfolio showcasing the intersection of code, motion, and atmosphere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="bg-mist-black text-kimono-white font-body selection:bg-muted-lime selection:text-mist-black">
        <SmoothScroll>
          <CustomCursor />
          <Atmosphere />
          <Navigation />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
