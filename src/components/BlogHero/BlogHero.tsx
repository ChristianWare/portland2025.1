import LayoutWrapper from "../LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./BlogHero.module.css";

export default function BlogHero() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <SectionHeading title='Blog' color='black' dotColor='blackDot' />
            <h1 className={styles.heading}>
              Insights from me,
              <br />
              <span className={styles.heading2}>Chris Ware</span>.
            </h1>
          </div>
          <div className={styles.right}>Filter container here....</div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
