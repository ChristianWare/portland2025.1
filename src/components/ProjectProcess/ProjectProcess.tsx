import LayoutWrapper from "../LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
import SectionHeading2 from "../SectionHeading2/SectionHeading2";
import styles from "./ProjectProcess.module.css";

export default function ProjectProcess() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <SectionHeading2 title='Process' color='white' />
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <SectionHeading title='Step 1' color='white' dotColor='blackDot' />
          </div>

          <div className={styles.right}></div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
