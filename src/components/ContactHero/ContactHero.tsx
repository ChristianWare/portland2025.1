import LayoutWrapper from "../LayoutWrapper";

import Envelope from "../Scenes/Envelope/Envelope";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./ContactHero.module.css";

export default function ContactHero() {
  return (
    <section className={styles.container}>
      <section className={styles.container}>
        <LayoutWrapper>
          <div className={styles.content}>
            <SectionHeading title='Contact' color='black' dotColor='blackDot' />
            <h1 className={styles.heading}>
              <span className={styles.heading2}>Let&apos;s Kick Off</span>
              <br />
              a conversation <br />
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
                <Envelope useViewportScale={false} fixedScale={[1, 1, 1]} />
              </div>
            </div>
          </div>
        </LayoutWrapper>
      </section>
    </section>
  );
}
