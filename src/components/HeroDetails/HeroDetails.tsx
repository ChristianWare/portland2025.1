"use client";

import styles from "./HeroDetails.module.css";
import SectionHeading from "../SectionHeading/SectionHeading";
import SurpriseButton from "../SurpriseButton/SurpriseButton";
import Cog from "../Scenes/Cog/Cog";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";

export default function HeroDetails() {
  return (
    <section className={styles.container}>
      <motion.div
        variants={fadeIn("", 0.3)}
        initial='hidden'
        whileInView={"show"}
        viewport={{ once: true, amount: 0.3 }}
        className={styles.content}
      >
        <div className={styles.box}>
          <div className={styles.sceneContainer}>
            <Cog useViewportScale={false} fixedScale={[1.5, 1.5, 1.5]} />
          </div>
        </div>
        <SectionHeading title='portfolio' color='white' dotColor='whiteDot' />
        <h1 className={styles.heading}>
          Hello World
          <br />
          <span className={styles.heading2}>My name is Christian</span>
        </h1>
        <p className={styles.copy}>
          Phoenix, AZ based developer with a strong interest in ecommerce
          websites, UI design and full stack web applications.
        </p>
        <div className={styles.btnContainer}>
          <SurpriseButton text='Surprise!' />
        </div>
      </motion.div>
    </section>
  );
}
