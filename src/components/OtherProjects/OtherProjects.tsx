// import styles from "./OtherProjects.module.css";

// import { SimplifiedProject } from "../../../@types";
// import ProjectCard from "../ProjectCard/ProjectCard";
// import { client } from "@/sanity/lib/client";

// export const revalidate = 10;
// async function getProjects() {
//   const query = `
// *[_type == "project"] | order(_createdAt desc) {
//   _id,
//   name,
//   description,
//   "slug": slug.current,
//   "previewimage": previewimage.asset->url
//   }  
//     `;
//   return await client.fetch(query);
// }

// export default async function OtherProjects() {
//   const projects: SimplifiedProject[] = await getProjects();

//   return (
//     <div className={styles.container}>
//       <div className={styles.content}>
//         <div className={styles.bottom}>
//           {projects.map((project) => (
//             <ProjectCard key={project._id} project={project} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
