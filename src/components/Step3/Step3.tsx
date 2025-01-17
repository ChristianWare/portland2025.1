import LayoutWrapper from "../LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./Step3.module.css";

export default function Step3() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <SectionHeading title='Step 3' color='black' dotColor='blackDot' />
            <h3 className={styles.headingii}>Designing the Remaining Pages</h3>
            <p className={styles.copy}>
              Building on the approved homepage design, I moved forward with the
              other pages. You can view the complete project overview here.
            </p>
          </div>
          <div className={styles.right}>
            <div className={styles.copySection}>
              <p>
                <strong className={styles.strong}>
                  Placeholder Text Usage{" "}
                </strong>
              </p>
              <p className={styles.copy}>
                Since some content was incomplete, I used lorem ipsum text where
                necessary, as requested by Netfolie.{" "}
              </p>
            </div>
            <div className={styles.copySection}>
              <p>
                <strong className={styles.strong}>
                  Consistent Design Language{" "}
                </strong>
              </p>
              <p className={styles.copy}>
                Applied the established design variables to ensure a cohesive
                look and feel across all pages.{" "}
              </p>
            </div>
            <div className={styles.copySection}>
              <p>
                <strong className={styles.strong}>
                  Preparation for Content Integration
                </strong>
              </p>
              <p className={styles.copy}>
                Structured the layouts to accommodate future content seamlessly.{" "}
              </p>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
