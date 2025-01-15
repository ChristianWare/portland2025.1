"use client";

import LayoutWrapper from "../LayoutWrapper";
import Cog from "../Scenes/Cog/Cog";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./ProjectHero.module.css";

export default function ProjectHero() {
  return (
    <section className={styles.container}>
      <section className={styles.container}>
        <LayoutWrapper>
          <div className={styles.content}>
            <SectionHeading
              title='Web Developer'
              color='black'
              dotColor='blackDot'
            />
            <h1 className={styles.heading}>
              Project Page. <br />
              <span className={styles.heading2}>All my projects</span>.
            </h1>
            <p className={styles.copy}>
              Functional is a lightweight app for small teams to streamline
              <span className={styles.span}> timesheets,</span> time off and
              track
              <span className={styles.span}> employee wellbeing,</span> all
              inside the team chat.
            </p>
            <div className={styles.box}>
              <div className={styles.sceneContainer}>
                <Cog
                  useViewportScale={false}
                  fixedScale={[1, 1, 1]}
                />
              </div>
            </div>
          </div>
        </LayoutWrapper>
      </section>
    </section>
  );
}
