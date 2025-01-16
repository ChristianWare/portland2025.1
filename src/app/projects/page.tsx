import FinalCTA from "@/components/FinalCTA/FinalCTA";
import Nav from "@/components/Nav/Nav";
import ProjectHero from "@/components/ProjectHero/ProjectHero";
import { client } from "@/sanity/lib/client";
import OtherProjects from "@/components/OtherProjects/OtherProjects";
import { SimplifiedProject } from "../../../@types";

// export const revalidate = 60;

async function getProjects() {
  const query = `
 *[_type == "project"] | order(_createdAt desc) {
  _id,
  name,
  description,
  "slug": slug.current,
  "previewimage": previewimage.asset->url
  }
    
  `;
  const data = await client.fetch(query);
  return data;
}

export const revalidate = 10;

export default async function ProjectPage() {
  const projectsData = await getProjects();

  const transformedData = projectsData.map((proj: SimplifiedProject) => ({
    id: proj._id,
    slug: proj.slug,
    previewimage: proj.previewimage,
    name: proj.name,
    description: proj.description,
  }));

  console.log(transformedData);

  return (
    <main>
      <Nav />
      <ProjectHero />
      <OtherProjects data={transformedData} />
      <FinalCTA />
    </main>
  );
}
