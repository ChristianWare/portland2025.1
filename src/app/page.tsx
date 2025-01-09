import AboutSection from "@/components/AboutSection/AboutSection";
import Hero from "@/components/Hero/Hero";
import Nav from "@/components/Nav/Nav";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import SkillsSection from "@/components/SkillsSection/SkillsSection";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
    </main>
  );
}
