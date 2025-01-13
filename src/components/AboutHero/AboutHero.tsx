import LayoutWrapper from "../LayoutWrapper";
import Scene2 from "../Scene2/Scene2";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./AboutHero.module.css";

export default function AboutHero() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <SectionHeading
            title='Web Developer'
            color='black'
            dotColor='blackDot'
          />
          <h1 className={styles.heading}>
            About me. <br />
            <span className={styles.heading2}>All about Christian</span>.
          </h1>
          <p className={styles.copy}>
            Functional is a lightweight app for small teams to streamline
            <span className={styles.span}> timesheets,</span> time off and track
            <span className={styles.span}> employee wellbeing,</span> all inside
            the team chat.
          </p>
          <div className={styles.box}>
            <div className={styles.sceneContainer}>
              <Scene2
                useViewportScale={false}
                fixedScale={[.7, .7, .7]}
              />
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
