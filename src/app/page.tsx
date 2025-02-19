"use client";

import styles from "./page.module.css";
import { ReactLenis } from "@studio-freight/react-lenis";
import ProjectSection3d from "@/components/ProjectSection3d/ProjectSection3d";
import HeroDetails from "@/components/HeroDetails/HeroDetails";
// import AboutSection from "@/components/AboutSection/AboutSection";
// import SkillsSection from "@/components/SkillsSection/SkillsSection";
// import AboutHero from "@/components/AboutHero/AboutHero";
import Process from "@/components/Process/Process";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import Tools from "@/components/Tools/Tools";
import ContactHero from "@/components/ContactHero/ContactHero";
import ClosingComments from "@/components/ClosingComments/ClosingComments";
import AboutFeatures from "@/components/AboutFeatures/AboutFeatures";

export default function Home() {
  return (
    <ReactLenis root>
      <main className={styles.main}>
        <div className={styles.left}>
          <ProjectSection3d />
        </div>
        <div className={styles.right}>
          <HeroDetails />
          <ProjectsSection />
          {/* <AboutSection /> */}
          <AboutFeatures />
          {/* <SkillsSection /> */}
          {/* <AboutHero /> */}
          <Process />
          <Tools />
          <ClosingComments />
          <ContactHero />
        </div>
      </main>
    </ReactLenis>
  );
}
