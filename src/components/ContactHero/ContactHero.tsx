import styles from "./ContactHero.module.css";
import LayoutWrapper from "../LayoutWrapper";

import SectionHeading from "../SectionHeading/SectionHeading";
import FinalCTA from "../FinalCTA/FinalCTA";

export default function ContactHero() {
  return (
    <section className={styles.container}>
      <section className={styles.container}>
        <LayoutWrapper>
          <div className={styles.content}>
            <SectionHeading title='Contact' color='black' dotColor='blackDot' />
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
      </section>
    </section>
  );
}
