import styles from "./ContactHero.module.css";
import LayoutWrapper from "../LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
import FinalCTA from "../FinalCTA/FinalCTA";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";

export default function ContactHero() {
  return (
    <section className={styles.container}>
      <motion.section
        variants={fadeIn("", 0.3)}
        initial='hidden'
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className={styles.container}
      >
        <div className={styles.container}>
          <LayoutWrapper>
            <div className={styles.content}>
              <SectionHeading
                title='Contact'
                color='black'
                dotColor='blackDot'
              />
              <h2 className={styles.heading}>
                <span className={styles.heading2}>Let&apos;s Kick Off</span>
                <br />
                a conversation <br />
              </h2>
              <p className={styles.copy}>
                My portfolio demonstrates a broad range of my abilities. Each of
                my projects are thoughtfully crafted to combine{" "}
                <span className={styles.span}> innovative </span>
                design with <span className={styles.span}> seamless </span>{" "}
                functionality.
              </p>
              <span className={styles.drag}></span>
            </div>
            <FinalCTA />
          </LayoutWrapper>
        </div>
      </motion.section>
    </section>
  );
}
