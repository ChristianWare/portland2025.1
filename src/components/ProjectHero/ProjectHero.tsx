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
              title='Portfolio'
              color='black'
              dotColor='blackDot'
            />
            <h1 className={styles.heading}>
              Projects that
              <br />
              <span className={styles.heading2}>speak for themselves</span>.
            </h1>
            <p className={styles.copy}>
              My portfolio demonstrates a broad range of my abilities. Each of
              my projects are thoughtfully crafted to combine{" "}
              <span className={styles.span}> innovative </span>
              design with <span className={styles.span}> seamless </span>{" "}
              functionality.
              {/* functionality, ensuring a memorable user experience. Every detail
              is <span className={styles.span}> meticulously </span>
              executed to bring ideas to life in the most{" "}
              <span className={styles.span}> impactful </span> way. */}
            </p>
            <div className={styles.box}>
              <div className={styles.sceneContainer}>
                <Cog useViewportScale={false} fixedScale={[1.2, 1.2, 1.2]} />
              </div>
            </div>
          </div>
        </LayoutWrapper>
      </section>
    </section>
  );
}
