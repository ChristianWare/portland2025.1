"use client";

import AboutSection from "@/components/AboutSection/AboutSection";
import Faqs from "@/components/Faqs/Faqs";
import Hero from "@/components/Hero/Hero";
import SkillsSection from "@/components/SkillsSection/SkillsSection";
import { homePageFaqs } from "../../lib/data";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import { ReactLenis } from "@studio-freight/react-lenis";
import AboutHero from "@/components/AboutHero/AboutHero";
import AboutFeatures from "@/components/AboutFeatures/AboutFeatures";
import Tools from "@/components/Tools/Tools";
import Offer from "@/components/Offer/Offer";
import ProjectHero from "@/components/ProjectHero/ProjectHero";

export default function Home() {
  return (
    <ReactLenis root>
      <main>
        <Hero />
        <AboutSection />
        <AboutHero />
        <AboutFeatures />
        <SkillsSection />
        <ProjectHero />
        <Offer />
        <Tools />
        <Faqs mapData={homePageFaqs} />
        <FinalCTA />
      </main>
    </ReactLenis>
  );
}
