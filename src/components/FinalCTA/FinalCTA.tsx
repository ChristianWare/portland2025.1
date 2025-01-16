import Footer from "../Footer/Footer";
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
              color='white'
              dotColor='whiteDot'
            />
          </div>
          <h2 className={styles.heading}>
            Thank you for taking the time to review my portfolio website. I look
            forward to speaking with you soon. Feel free to reach out to me with
            any questions you have.
          </h2>
          <div className={styles.contactContainer}>
            <div className={styles.secondBox}></div>
            <div className={styles.left}>
              <div className={styles.box}>
                <h3 className={styles.headingii}>Email</h3>
                <p className={styles.copyii}>chris.ware.dev@gmail.com</p>
              </div>
              <div className={styles.box}>
                <h3 className={styles.headingii}>Phone</h3>
                <p className={styles.copyii}>623-335-4992</p>
              </div>
            </div>

            <div className={styles.right}>
              <div className={styles.box}>
                <h3 className={styles.headingii}>LinkedIn</h3>
                <p className={styles.copyii}>linkedin.com/in/christian-ware/</p>
              </div>
              <div className={styles.box}>
                <h3 className={styles.headingii}>GitHub</h3>
                <p className={styles.copyii}>623-335-4992</p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default FinalCTA;
