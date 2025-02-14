import HeroDetails from "../HeroDetails/HeroDetails";
import ProjectHero from "../ProjectHero/ProjectHero";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <ProjectHero />
      </div>
      <div className={styles.right}>
        <HeroDetails />
      </div>
    </section>
  );
}
