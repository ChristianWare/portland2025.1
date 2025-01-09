import LayoutWrapper from "../LayoutWrapper";
import styles from "./AboutSection.module.css";
import Terminal from "../../../public/icons/terminal.svg";
import Button from "../Button/Button";
import Process from "../Process/Process";
import SectionHeading from "../SectionHeading/SectionHeading";

const AboutSection = () => {
  return (
    <section className={styles.container} id='about'>
      <LayoutWrapper>
        <div className={styles.top}>
          <SectionHeading
            title='About Me'
            color='purple'
            dotColor='purpleDot'
          />
          <h2 className={styles.heading}>
            I am skilled in both front-end and back-end development. I have the
            ability to create comprehensive web applications from start to
            finish. My tools of choice are Next.js/React.
          </h2>
        </div>
        <div className={styles.content}>
          <div className={styles.left}></div>
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
              <div className={styles.b1}>
                <h4 className={styles.headingiii}>Years Coding:</h4>
                <p className={styles.copyiii}>10 +</p>
              </div>
              <div className={styles.b2}>
                <h4 className={styles.headingiii}>Github Repo&apos;s:</h4>
                <p className={styles.copyiii}>≥ 140</p>
              </div>
              <div className={styles.b3}>
                <h4 className={styles.headingiii}>Favorite Movie:</h4>
                <p className={styles.copyiii}>Inception</p>
              </div>
            </div>
          </div>
        </div>
        <Process />
        <div className={styles.btnContainer}>
          <Button text='Learn More About Me' btnType='purple' href='/' />
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default AboutSection;
