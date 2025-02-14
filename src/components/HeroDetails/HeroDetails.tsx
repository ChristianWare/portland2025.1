import SectionHeading from "../SectionHeading/SectionHeading";
import SurpriseButton from "../SurpriseButton/SurpriseButton";
import styles from "./HeroDetails.module.css";

export default function HeroDetails() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <SectionHeading title='portfolio' color='white' dotColor='whiteDot' />
        <h1 className={styles.heading}>
          Hello World
          <br />
          <span className={styles.heading2}>My name is Christian</span>
        </h1>
        <p className={styles.copy}>
          My portfolio demonstrates a broad range of my abilities. Each of my
          projects are thoughtfully crafted to combine{" "}
          <span className={styles.span}> innovative </span>
          design with <span className={styles.span}> seamless </span>{" "}
          functionality.
        </p>
        <div className={styles.btnContainer}>
          <SurpriseButton />
        </div>
      </div>
    </section>
  );
}
