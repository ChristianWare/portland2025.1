"use client";

import styles from "./Hero.module.css";
import LayoutWrapper from "../LayoutWrapper";
// import dynamic from "next/dynamic";
import Scene from "../Scene/Scene";

import SectionHeading from "../SectionHeading/SectionHeading";
import SurpriseButton from "../SurpriseButton/SurpriseButton";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";

// const Cog = dynamic(() => import("../Scenes/Cog/Cog"), {
//   ssr: false,
// });

export default function Hero() {
  return (
    <div className={styles.parent}>
      <motion.section
        variants={fadeIn("", 0.3)}
        initial='hidden'
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className={styles.container}
      >
        <LayoutWrapper>
          <div className={styles.content}>
            <div className={styles.left}>
              <div className={styles.sectionHeadingContainer}>
                <SectionHeading
                  title='Chris Ware'
                  color='black'
                  dotColor='blackDot'
                />
              </div>
              <h1 className={styles.heading}>
                Web developer <br />
                based in
                <span className={styles.heading2}> Phoenix, Arizona</span>.
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
            </div>
            <div className={styles.right}>
              <div className={styles.sceneContianer}>
                <Scene useViewportScale={false} fixedScale={[3.5, 3.5, 3.5]} />
              </div>
              {/* <p className={styles.drag}> • drag •</p> */}
            </div>{" "}
          </div>
        </LayoutWrapper>
      </motion.section>
    </div>
  );
}
