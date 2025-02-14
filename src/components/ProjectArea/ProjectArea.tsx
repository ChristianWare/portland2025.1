import ProjectSection3d from "../ProjectSection3d/ProjectSection3d";
import ProjectsSection from "../ProjectsSection/ProjectsSection";
import SectionHero from "../SectionHero/SectionHero";
import styles from "./ProjectArea.module.css";

export default function ProjectArea() {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <ProjectSection3d />
      </div>
      <div className={styles.right}>
        <SectionHero
          sectionHeaing='Showcase'
          heading='Featured'
          heading2='Projects'
          copy='I am a Highly skilled web developer with extensive experience inbuilding scalable, high-quality user interfaces using Next.js, React, JavaScript, and modern front-end frameworks.'
        />
        <ProjectsSection />
      </div>
    </section>
  );
}
