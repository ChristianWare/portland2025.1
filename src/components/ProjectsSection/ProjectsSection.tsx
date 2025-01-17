// "use client";

import styles from "./ProjectsSection.module.css";
import LayoutWrapper from "../LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
import Button from "../Button/Button";
import OtherProjects from "../OtherProjects/OtherProjects";




export default  function ProjectsSection() {

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
        <OtherProjects/>
        <div className={styles.btnContainerii}>
          <Button text='All Projects' btnType='purple' href='/' />
        </div>
      </LayoutWrapper>
    </section>
  );
}
