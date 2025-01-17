// "use client";

import styles from "./ProjectsSection.module.css";
import LayoutWrapper from "../LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
import Button from "../Button/Button";
import OtherProjects from "../OtherProjects/OtherProjects";
import { client } from "@/sanity/lib/client";
import { SimplifiedProject } from "../../../@types";

async function getProjects() {
  const query = `
 *[_type == "project"] | order(_createdAt desc)[0..1] {
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

export default async function ProjectsSection() {
  const projectsData = await getProjects();

  const transformedData = projectsData.map((proj: SimplifiedProject) => ({
    id: proj._id,
    slug: proj.slug,
    previewimage: proj.previewimage,
    name: proj.name,
    description: proj.description,
  }));

  return (
    <section className={styles.container} id='projects'>
      <LayoutWrapper>
        <div className={styles.top}>
          <div className={styles.sectionHeadingContainer}>
            <SectionHeading title='My Work' color='black' dotColor='blackDot' />
          </div>
          <h2 className={styles.heading}>
            {" "}
            <span>Featured</span>
            Projects
          </h2>
        </div>
        <OtherProjects data={transformedData} />
        <div className={styles.btnContainerii}>
          <Button text='All Projects' btnType='purple' href='/' />
        </div>
      </LayoutWrapper>
    </section>
  );
}
