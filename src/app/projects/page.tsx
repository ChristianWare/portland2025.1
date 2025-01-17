import ProjectHero from "@/components/ProjectHero/ProjectHero";
import OtherProjects from "@/components/OtherProjects/OtherProjects";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import LayoutWrapper from "@/components/LayoutWrapper";

export default function ProjectPage() {
  return (
    <main>
      <ProjectHero />
      <br />
      <br />
      <br />
      <br />
      <br />
      <LayoutWrapper>
        <OtherProjects />
      </LayoutWrapper>
      <FinalCTA />
    </main>
  );
}
