import styles from "./ContactSection.module.css";
import LayoutWrapper from "../LayoutWrapper";
import ContactForm from "../ContactForm/ContactForm";
import TopNav from "../TopNav/TopNav";
import Link from "next/link";

const ContactSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        

        <LayoutWrapper>
          <div className={styles.bottom}>
            <div className={styles.bottomLeft}>
              <h3 className={styles.sectionHeading}>Location</h3>
              <address className={styles.addressBoxLocation}>
                <span className={styles.address}>Located in: Phoenix, AZ</span>
                <span className={styles.address}>
                  Originally From: New York City
                </span>
              </address>
            </div>
            <div className={styles.bottomRight}>
              <h3 className={styles.sectionHeadingii}>Get in touch</h3>
              <div className={styles.brGrid}>
                <div className={styles.br1}>
                  <div className={styles.contactBox}>
                    <Link
                      href='mailto:chris.ware.dev@gmail.com'
                      className={styles.address}
                    >
                      chris.ware.dev@gmail.com
                    </Link>
                    <Link
                      href='https://github.com/ChristianWare'
                      target='_blank'
                      className={styles.address}
                    >
                      github.com/ChristianWare
                    </Link>
                    <Link
                      href='https://www.linkedin.com/in/christian-ware/'
                      target='_blank'
                      className={styles.address}
                    >
                      linkedin.com/in/christian-ware
                    </Link>
                    <Link href='tel:+6236326780' className={styles.address}>
                      623-335-4992
                    </Link>
                  </div>
                  <TopNav />
                </div>
                <div className={styles.br2}>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </LayoutWrapper>
      </div>
    </section>
  );
};
export default ContactSection;
