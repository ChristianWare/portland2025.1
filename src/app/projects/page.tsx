import FinalCTA from "@/components/FinalCTA/FinalCTA";
import Nav from "@/components/Nav/Nav";
import ProjectHero from "@/components/ProjectHero/ProjectHero";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";

export default function ProjectPage() {
  return (
    <main>
      <Nav />
      <ProjectHero />
      <ProjectsSection />
      <FinalCTA />
    </main>
  );
}
