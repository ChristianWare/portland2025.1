import LayoutWrapper from "../LayoutWrapper";
import Scene2 from "../Scene2/Scene2";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <SectionHeading
              title='About Me'
              color='black'
              dotColor='blackDot'
            />
            <h1 className={styles.heading}>
              I build digital gems
              <br />
              <span className={styles.heading2}>for brilliance</span>.
            </h1>
            <p className={styles.copy}>
              Functional is a lightweight app for small teams to streamline
              <span className={styles.span}> timesheets,</span> time off and
              track
              <span className={styles.span}> employee wellbeing,</span> all
              inside the team chat.
            </p>
          </div>
          <div className={styles.right}>
            <div className={styles.sceneContianer}>
              <Scene2 useViewportScale={false} fixedScale={[1.6, 1.6, 1]} />{" "}
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
