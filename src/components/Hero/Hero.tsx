"use client";

import styles from "./Hero.module.css";
import LayoutWrapper from "../LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";

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
                Hello World, <br />
                My name is Chris
              </h1>
              <p className={styles.copy}>
                I build immersive
                <span className={styles.span}> immersive,</span> and
                <span className={styles.span}> interactive</span> websites that
                leave lasting impressions. Based in
                <span className={styles.span}> Phoenix, AZ.</span>
              </p>
              <div className={styles.btnContainer}>
                {/* <SurpriseButton /> */}
              </div>
            </div>
            <div className={styles.right}>{/* <LogosAnimation /> */}</div>
          </div>
        </LayoutWrapper>
      </motion.section>
    </div>
  );
}
