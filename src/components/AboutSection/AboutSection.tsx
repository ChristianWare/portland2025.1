import LayoutWrapper from "../LayoutWrapper";
import styles from "./AboutSection.module.css";
// import Terminal from "../../../public/icons/terminal.svg";
import Button from "../Button/Button";
import Process from "../Process/Process";
import SectionHeading from "../SectionHeading/SectionHeading";
import Scene2 from "../Scene2/Scene2";

const AboutSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.sectionScroll} id='about'></div>
      <LayoutWrapper>
        <div className={styles.top}>
          <div></div>
          <div className={styles.box}>
            <SectionHeading
              title='About Me'
              color='white'
              dotColor='whiteDot'
            />
            <h2 className={styles.heading}>
              I am skilled in both front-end and back-end development. I have
              the ability to create comprehensive web applications from start to
              finish. My tools of choice are Next.js/React.
            </h2>
          </div>
          <div></div>
        </div>
        <div className={styles.content}>
          <div className={styles.sceneContianer}>
            <Scene2 useViewportScale={false} fixedScale={[1, 1, 1]} />{" "}
          </div>
        </div>
        <div className={styles.processContainer}>
          <Process />
        </div>
        <div className={styles.btnContainer}>
          <Button text='Learn More About Me' btnType='purple' href='/' />
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default AboutSection;
