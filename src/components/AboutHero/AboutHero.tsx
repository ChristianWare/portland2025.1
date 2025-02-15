import styles from "./AboutHero.module.css";
import LayoutWrapper from "../LayoutWrapper";
// import Scene from "../Scene/Scene";
import SectionHeading from "../SectionHeading/SectionHeading";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";

export default function AboutHero() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <motion.div
          variants={fadeIn("", 0.3)}
          initial='hidden'
          whileInView={"show"}
          viewport={{ once: true, amount: 0.3 }}
          className={styles.parent}
        >
          <div className={styles.content}>
            <div className={styles.left}>
              <div className={styles.top}>
                <SectionHeading
                  title='More Details'
                  color='white'
                  dotColor='whiteDot'
                />
              </div>
              <div className={styles.copyContainer}>
                <div></div>
                <p className={styles.copy}>
                  I have extensive knowledge of{" "}
                  <span className={styles.span}>
                    HTML, CSS, JavaScript, React, and Next JS.
                  </span>{" "}
                  I specialize in building web apps with Next JS and React. My
                  <span className={styles.span}>
                    background in design and finance
                  </span>{" "}
                  enables me to understand both the aesthetic and business
                  aspects of any project. I am committed to delivering
                  high-quality, SEO-friendly, and client-focused web
                  experiences.
                  <br />
                  <br />I have experience designing, coding, and deploying a
                  variety of websites, from{" "}
                  <span className={styles.span}>Landing Pages</span> to fully
                  functional{" "}
                  <span className={styles.span}>E-commerce Stores.</span> My
                  personal website, chrisware.dev, reflects my attention to
                  detail in making sure each app is aesthetically pleasing and
                  semantically structured.
                </p>
              </div>
            </div>
            {/* <div className={styles.sceneContianer}>
              <Scene useViewportScale={false} fixedScale={[2, 2, 2]} />{" "}
            </div> */}
          </div>
        </motion.div>
      </LayoutWrapper>
    </section>
  );
}
