"use client";

import styles from "./Hero.module.css";
import LayoutWrapper from "../LayoutWrapper";
// import dynamic from "next/dynamic";

import SectionHeading from "../SectionHeading/SectionHeading";
import SurpriseButton from "../SurpriseButton/SurpriseButton";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";


// const Cog = dynamic(() => import("../Scenes/Cog/Cog"), {
//   ssr: false,
// });

export default function Hero() {
  return (
      <motion.div
        variants={fadeIn("", 0.3)}
        initial='hidden'
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className={styles.parent}
      >
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
              <span className={styles.span}> timesheets,</span> time off and
              track
              <span className={styles.span}> employee wellbeing,</span> all
              inside the team chat.
            </p>
            <div className={styles.btnContainer}>
              <SurpriseButton />
            </div>
            {/* <div className={styles.box}>
              <div className={styles.sceneContainer}>
                <Cog useViewportScale={false} fixedScale={[1.2, 1.2, 1.2]} />
              </div>
            </div> */}
          </LayoutWrapper>
        </div>
    </section>
      </motion.div>
  );
}
