import LayoutWrapper from "../LayoutWrapper";
import styles from "./Overview.module.css";

export default function Overview() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <h2 className={styles.heading}>Overview Here</h2>
        </div>
      </LayoutWrapper>
    </section>
  );
}
