"use client";

import AboutSection from "@/components/AboutSection/AboutSection";
import Hero from "@/components/Hero/Hero";
import SkillsSection from "@/components/SkillsSection/SkillsSection";
import { ReactLenis } from "@studio-freight/react-lenis";
import AboutHero from "@/components/AboutHero/AboutHero";
import AboutFeatures from "@/components/AboutFeatures/AboutFeatures";
import Tools from "@/components/Tools/Tools";
import Process from "@/components/Process/Process";
import ContactHero from "@/components/ContactHero/ContactHero";
// import ClosingComments from "@/components/ClosingComments/ClosingComments";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";

export default function Home() {
  return (
    <ReactLenis root>
      <main>
        <Hero />
        <AboutSection />
        <AboutHero />
        <ProjectsSection />
        <AboutFeatures />
        <Tools />
        <SkillsSection />
        <Process />
        <ContactHero />
      </main>
    </ReactLenis>
  );
}
