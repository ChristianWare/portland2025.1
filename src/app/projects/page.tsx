import FinalCTA from "@/components/FinalCTA/FinalCTA";
import Nav from "@/components/Nav/Nav";
import ProjectHero from "@/components/ProjectHero/ProjectHero";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import { client } from "@/sanity/lib/client";
import { SimplifiedProject } from "../../../@types";

export const revalidate = 60;
async function getProjects() {
  const query = `
  *[_type == 'project'] | order(_createdAt desc)
  `;
  return await client.fetch(query);
}

export default async function ProjectPage() {
  const projects: SimplifiedProject[] = await getProjects();
  console.log(projects);

  return (
    <main>
      <Nav />
      <ProjectHero />
      <ProjectsSection />
      <FinalCTA />
    </main>
  );
}
