import LayoutWrapper from "../LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./FinalCTA.module.css";

const FinalCTA = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.sectionheadingContainer}>
            <SectionHeading
              title='thank you'
              color='purple'
              dotColor='purpleDot'
            />
          </div>
          <h2 className={styles.heading}>
            Thank you for taking the time to review my portfolio website. I look
            forward to speaking with you soon. Feel free to reach out to me with
            any questions you have.
          </h2>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default FinalCTA;
