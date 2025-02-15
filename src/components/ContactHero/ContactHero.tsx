import styles from "./ContactHero.module.css";
import LayoutWrapper from "../LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
import FinalCTA from "../FinalCTA/FinalCTA";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";
import ContactForm from "../ContactForm/ContactForm";

export default function ContactHero() {
  return (
    <section className={styles.container}>
      <motion.section
        variants={fadeIn("", 0.3)}
        initial='hidden'
        whileInView={"show"}
        viewport={{ once: true, amount: 0.3 }}
        className={styles.container}
      >
        <div className={styles.container}>
          <LayoutWrapper>
            <div className={styles.content}>
              <SectionHeading
                title='Contact'
                color='white'
                dotColor='whiteDot'
              />
              <h2 className={styles.heading}>
                Let&apos;s start a <br />
                <span className={styles.heading2}> conversation</span>
                <br />
              </h2>
              {/* <p className={styles.copy}>
                My portfolio demonstrates a broad range of my abilities. Each of
                my projects are thoughtfully crafted to combine{" "}
                <span className={styles.span}> innovative </span>
                design with <span className={styles.span}> seamless </span>{" "}
                functionality.
              </p> */}
              <ContactForm />
              <div className={styles.footerContainer}>
                <FinalCTA />
              </div>
            </div>
          </LayoutWrapper>
        </div>
      </motion.section>
    </section>
  );
}
