// "use client";

import styles from "./ProjectsSection.module.css";
import LayoutWrapper from "../LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
import Button from "../Button/Button";
import OtherProjects from "../OtherProjects/OtherProjects";
// import { SimplifiedProject } from "../../../@types";
// import Scene from "../Scene/Scene";

const ProjectsSection = () => {
  return (
    <section className={styles.container} id='projects'>
      <LayoutWrapper>
        {/* <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.sectionHeadingContainer}>
              <SectionHeading
                title='Projects'
                color='black'
                dotColor='blackDot'
              />
            </div>
            <h2 className={styles.heading}>
              {" "}
              <span>Featured</span>
              Project
            </h2>
            <p className={styles.copy}>chrisware.dev - Portfolio website</p>
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottomLeft}>
              <div className={styles.box}>
                <div className={styles.sceneContainer}>
                  <Scene useViewportScale={false} fixedScale={[3, 3, 3]} />
                </div>
              </div>
            </div>
            <div className={styles.bottomRight}>
              {data.map((x) => (
                <div key={x.id} className={styles.section}>
                  <h3 className={styles.title}>{x.title}</h3>
                  <p className={styles.description}>{x.description}</p>
                </div>
              ))}
              <div className={styles.btnContainer}>
                <div className={styles.btnContainer}>
                  <Button text='More Details' btnType='primary' href='/' />
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className={styles.top}>
          <div className={styles.sectionHeadingContainer}>
            <SectionHeading title='My Work' color='black' dotColor='blackDot' />
          </div>
          <h2 className={styles.heading}>
            {" "}
            <span>Featured</span>
            Projects
          </h2>
          {/* <p className={styles.copy}>chrisware.dev - Portfolio website</p> */}
        </div>
        {/* <OtherProjects /> */}
        <div className={styles.btnContainerii}>
          <Button text='All Projects' btnType='purple' href='/' />
        </div>
      </LayoutWrapper>
    </section>
  );
};

export default ProjectsSection;
