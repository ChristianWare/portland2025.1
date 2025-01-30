"use client";

import AboutHero from "@/components/AboutHero/AboutHero";
import styles from "./AboutPageStyles.module.css";
import AboutFeatures from "@/components/AboutFeatures/AboutFeatures";
import BlogSection from "@/components/BlogSection/BlogSection";
import Tools from "@/components/Tools/Tools";
import Offer from "@/components/Offer/Offer";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import { ReactLenis } from "@studio-freight/react-lenis";

// import AboutInterests from "@/components/AboutInterests/AboutInterests";

export default function AboutPage() {
  return (
    <ReactLenis root>
      <main className={styles.container}>
        <AboutHero />
        <AboutFeatures />
        <Offer />
        <Tools />
        {/* <AboutInterests /> */}
        <BlogSection />
        <FinalCTA />
      </main>
    </ReactLenis>
  );
}
