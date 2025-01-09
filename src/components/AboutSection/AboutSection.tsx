import LayoutWrapper from "../LayoutWrapper";
import styles from "./AboutSection.module.css";
import Terminal from "../../../public/icons/terminal.svg";

const AboutSection = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <span className={styles.span}>About Me</span>
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={styles.heading}>
              I am skilled in both front-end and back-end development.
            </h2>
            {/* <p className={styles.copy}>
              I have the ability to create comprehensive web applications from
              start to finish. My tools of choice are Next.js/React.
            </p> */}
          </div>
          <div className={styles.right}>
            <div className={styles.rightSideTop}>
              <h3 className={styles.headingii}>
                What I bring to the table....
              </h3>
            </div>
            <div className={styles.middle}>
              <div className={styles.middleLeft}>
                <Terminal className={styles.icon} />
              </div>
              <div className={styles.middleRight}>
                <p className={styles.copyii}>
                  Because of my background in design, and finance, I understand
                  the aesthetic and business side to any project. While websites
                  have to make good impressions on their visitors, they should
                  also motivate them to action. This is what I aim to accomplish
                  in all of my projects.
                </p>
              </div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.b1}>hey</div>
              <div className={styles.b2}>hey</div>
              <div className={styles.b3}>hey</div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default AboutSection;
