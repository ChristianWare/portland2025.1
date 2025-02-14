"use client";

// import styles from "./page.module.css";
// import AboutSection from "@/components/AboutSection/AboutSection";
// import Hero from "@/components/Hero/Hero";
// import AboutHero from "@/components/AboutHero/AboutHero";
// import Process from "@/components/Process/Process";
// import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
// import ProjectHero from "@/components/ProjectHero/ProjectHero";
// import Tools from "@/components/Tools/Tools";
// import SkillsSection from "@/components/SkillsSection/SkillsSection";
// import AboutFeatures from "@/components/AboutFeatures/AboutFeatures";
// import ContactHero from "@/components/ContactHero/ContactHero";
import { ReactLenis } from "@studio-freight/react-lenis";
import HeroSection from "@/components/HeroSection/HeroSection";

export default function Home() {
  return (
    <ReactLenis root>
      <main>
        <HeroSection />
        {/* <ProjectHero />
        <Hero />
        <ProjectHero />
        <AboutHero />
        <Process />
        <Tools />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <AboutFeatures />
        <ContactHero /> */}
      </main>
    </ReactLenis>
  );
}
