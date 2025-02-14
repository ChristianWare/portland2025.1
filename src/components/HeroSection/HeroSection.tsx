import styles from "./HeroSection.module.css";
import AboutSection from "../AboutSection/AboutSection";
import HeroDetails from "../HeroDetails/HeroDetails";
import ProjectHero from "../ProjectHero/ProjectHero";

export default function HeroSection() {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <ProjectHero />
      </div>
      <div className={styles.right}>
        <HeroDetails />
        <AboutSection />
      </div>
    </section>
  );
}
