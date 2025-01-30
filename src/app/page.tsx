"use client";

import AboutSection from "@/components/AboutSection/AboutSection";
// import Faqs from "@/components/Faqs/Faqs";
import Hero from "@/components/Hero/Hero";
import SkillsSection from "@/components/SkillsSection/SkillsSection";
// import { homePageFaqs } from "../../lib/data";
// import FinalCTA from "@/components/FinalCTA/FinalCTA";
import { ReactLenis } from "@studio-freight/react-lenis";
import AboutHero from "@/components/AboutHero/AboutHero";
import AboutFeatures from "@/components/AboutFeatures/AboutFeatures";
import Tools from "@/components/Tools/Tools";
import Process from "@/components/Process/Process";
import ContactHero from "@/components/ContactHero/ContactHero";
import ClosingComments from "@/components/ClosingComments/ClosingComments";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
// import ProjectHero from "@/components/ProjectHero/ProjectHero";

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
        {/* <Faqs mapData={homePageFaqs} /> */}
        <ClosingComments />
        <ContactHero />
        {/* <FinalCTA /> */}
      </main>
    </ReactLenis>
  );
}
