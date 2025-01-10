import styles from "./ContactSection.module.css";
import LayoutWrapper from "../LayoutWrapper";
import Image from "next/image";
import ChrisWare from "../../../public/images/author.png";
import ContactForm from "../ContactForm/ContactForm";
import TopNav from "../TopNav/TopNav";
import Link from "next/link";

const ContactSection = () => {
  return (
    <section className={styles.container}>
      
      <div className={styles.content}>
        <div className={styles.top}>
            <h2 className={styles.heading}>
              Thank you for taking the time to review my portfolio website. I
              look forward to speaking with you soon. Feel free to reach out to
              me with any questions you have.
            </h2>
        </div>

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
                  <Image
                    src={ChrisWare}
                    alt='Christian Ware'
                    title='Christian Ware'
                    width={275}
                    height={275}
                    className={styles.img}
                  />
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
