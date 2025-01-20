"use client";

import styles from "./Hero.module.css";
import LayoutWrapper from "../LayoutWrapper";
// import dynamic from "next/dynamic";

import SectionHeading from "../SectionHeading/SectionHeading";
import SurpriseButton from "../SurpriseButton/SurpriseButton";
// import Scene from "../Scene/Scene";

// const Scene = dynamic(() => import("../Scene/Scene"), {
//   ssr: false,
// });

export default function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <LayoutWrapper>
          <div className={styles.sectionHeadingContainer}>
            <SectionHeading
              title='Web Developer'
              color='black'
              dotColor='blackDot'
            />
          </div>
          <h1 className={styles.heading}>
            Hello World. <br />
            <span className={styles.heading2}>My name is Christian</span>.
          </h1>
          <p className={styles.copy}>
            Functional is a lightweight app for small teams to streamline
            <span className={styles.span}> timesheets,</span> time off and track
            <span className={styles.span}> employee wellbeing,</span> all inside
            the team chat.
          </p>
          <div className={styles.btnContainer}>
            <SurpriseButton />
          </div>
          <div className={styles.box}>
            {/* <div className={styles.sceneContainer}>
              
              <Scene useViewportScale={false} fixedScale={[2.5, 2.5, 2.5]} />
            </div> */}
          </div>
        </LayoutWrapper>
      </div>
    </section>
  );
}
