import AboutSection from "@/components/AboutSection/AboutSection";
import Faqs from "@/components/Faqs/Faqs";
import Hero from "@/components/Hero/Hero";
import Nav from "@/components/Nav/Nav";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import SkillsSection from "@/components/SkillsSection/SkillsSection";
import { homePageFaqs } from "../../lib/data";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import BlogSection from "@/components/BlogSection/BlogSection";

export default function Home() {
  return (
    <main>
      <Nav />
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