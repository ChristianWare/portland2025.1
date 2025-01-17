import AboutSection from "@/components/AboutSection/AboutSection";
import Faqs from "@/components/Faqs/Faqs";
import Hero from "@/components/Hero/Hero";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import SkillsSection from "@/components/SkillsSection/SkillsSection";
import { homePageFaqs } from "../../lib/data";
import BlogSection from "@/components/BlogSection/BlogSection";
import FinalCTA from "@/components/FinalCTA/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <Faqs mapData={homePageFaqs} />
      <BlogSection />
      <FinalCTA />
    </main>
  );
}
