// import { client } from "@/sanity/lib/client";
// import { FullProject } from "../../../../@types";
// import ProjectPageDetailsHero from "@/components/ProjectPageDetailsHero/ProjectPageDetailsHero";
// import Overview from "@/components/Overview/Overview";
// import ProjectProcess from "@/components/ProjectProcess/ProjectProcess";
// import Drafting from "@/components/Drafting/Drafting";
// import Step3 from "@/components/Step3/Step3";
// import FinalCTA from "@/components/FinalCTA/FinalCTA";
// import ImageCollection from "@/components/ImageCollection/ImageCollection";
// import Conclusion from "@/components/Conclusion/Conclusion";
// import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";

// async function getData(slug: string): Promise<FullProject | null> {
//   const query = `*[_type == "project" && slug.current == $slug][0] {
//     _id,
//     name,
//     description,
//     overview,
//     slug,
//     image,
//     image1,
//     image2,
//     image3,
//     image4,
//     image5,
//     image6,
//     imagedesign,
//     previewimage,
//     imagehome,
//     conclusion,
//     outcome,
//     keytakeaways,
//     tags,
//     content,
//   }`;

//   const data = await client.fetch(query, { slug });
//   return data ?? null;
// }

// export const revalidate = 10;

// export default async function ProjectDetailsPage({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   const { slug } = params;

//   const project = await getData(slug);

//   if (!project) {
//     return <div>Project not found</div>;
//   }

//   return (
//     <main>
//       <ProjectPageDetailsHero project={project} />
//       <Overview project={project} />
//       <ProjectProcess project={project} />
//       <Drafting project={project} />
//       <Step3 />
//       <ImageCollection project={project} />
//       <Conclusion project={project} />
//       <ProjectsSection />
//       <FinalCTA />
//     </main>
//   );
// }
