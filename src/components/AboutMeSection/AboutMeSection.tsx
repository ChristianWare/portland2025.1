import styles from "./AboutMeSection.module.css";
import AboutHero from "../AboutHero/AboutHero";
import SectionHero from "../SectionHero/SectionHero";
import AboutMeSection3d from "../AboutMeSection3d/AboutMeSection3d";
import Process from "../Process/Process";

export default function AboutMeSection() {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <SectionHero
          sectionHeaing='About Me'
          heading="I'm a web developer based in"
          heading2='Phoenix, AZ'
          copy='I am a Highly skilled web developer with extensive experience inbuilding scalable, high-quality user interfaces using Next.js, React, JavaScript, and modern front-end frameworks.'
        />
        <AboutHero />
        <Process />
      </div>
      <div className={styles.right}>
        <AboutMeSection3d />
      </div>
    </section>
  );
}
