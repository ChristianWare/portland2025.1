import LayoutWrapper from "../LayoutWrapper";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            Attendance done right. <br /> Wellbeing done better.
          </h1>
          <p className={styles.copy}>
            Functional is a lightweight app for small teams to streamline
            <span className={styles.span}> timesheets,</span> time off and track
            <span className={styles.span}> employee wellbeing,</span> all inside
            the team chat.
          </p>
        </div>
      </LayoutWrapper>
    </section>
  );
}
