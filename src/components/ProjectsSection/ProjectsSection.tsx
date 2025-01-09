import LayoutWrapper from "../LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./ProjectsSection.module.css";

const ProjectsSection = () => {
  return (
    <section className={styles.container} id='projects'>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <SectionHeading title='Projects' color='black' />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default ProjectsSection;
