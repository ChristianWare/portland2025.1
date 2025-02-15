"use client";

import styles from "./WorkSection.module.css";
import Button from "../Button/Button";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";

const WorkSection = () => {
  const data = [
    {
      title: "Freelance Developer",
      company: "(Self)",
    },
    {
      title: "Contract Web Developer",
      company: "(Kurt Nobel International)",
    },
    {
      title: "Contract Software Engineer",
      company: "(Joyus App)",
    },

    {
      title: "Software Engineer",
      company: "(Mentorworks)",
    },
    {
      title: "Contract Frontend Developer",
      company: "(Fandem)",
    },
  ];

  return (
    <section className={styles.container} id='resume'>
      <div className={styles.content}>
        <div className={styles.top}>
          <span className={styles.sectionTitle}>Relevant Experience</span>
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <p className={styles.copy}>
              Here is a brief summary of the places I have worked. Click here to
              download my resume.
            </p>
            {/* <Link
              href='/Chris_Ware_Resume_2025.pdf'
              target='_blank'
              download={true}
              className={styles.resumeContainer}
            >
              Download Resume <Arrow className={styles.icon} />
            </Link> */}
            <div className={styles.btnContainer}>
              <Button text='Download Resume' btnType='primary' href='/' />
            </div>
          </div>
          <div className={styles.right}>
            <ul className={styles.list}>
              {data.map((x, index) => (
                <li key={index} className={styles.name}>
                  <motion.div
                    variants={fadeIn("", 0.3)}
                    initial='hidden'
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    {x.title} - {x.company}
                  </motion.div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WorkSection;
