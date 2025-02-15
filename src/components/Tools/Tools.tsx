import LayoutWrapper from "../LayoutWrapper";
import styles from "./Tools.module.css";
import Figma from "../../../public/icons/figma.svg";
import Trello from "../../../public/icons/trello.svg";
import Github from "../../../public/icons/github.svg";
import VSCode from "../../../public/icons/visualStudio.svg";
import SectionHeading from "../SectionHeading/SectionHeading";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";

const data = [
  {
    id: 1,
    heading: "Figma: Wireframing & Prototyping",
    description:
      "I use Figma to design and prototype with precision. With it I can create wireframes and interactive designs in real time.",
    icon: <Figma width={40} height={40} className={styles.icon} />,
    gridArea: "one",
  },
  {
    id: 2,
    heading: "Trello: Collaboration & Productivity",
    description:
      "Trello helps me to organize tasks, track progress, and collaborate effectively. Trello simplifies the project management process with its intuitive board system.",
    icon: <Trello width={40} height={40} className={styles.icon} />,
    gridArea: "two",
  },
  {
    id: 3,
    heading: "Git: Version Control",
    description:
      "I can easily manage my codebase with via git. This enables me to track changes, collaborate on projects, and maintain version history of my code for any project.",
    icon: <Github width={40} height={40} className={styles.icon} />,
    gridArea: "three",
  },
  {
    id: 4,
    heading: "VSCode: Text Editors & IDE",
    description:
      "VS Code is my IDE of choice. I can write, debug, and edit code efficiently. Visual Studio Code is a powerful and extensible code editor tailored for developers.",
    icon: <VSCode width={40} height={40} className={styles.icon} />,
    gridArea: "four",
  },
];

export default function Tools() {
  return (
    <section className={styles.container}>
      <div className={styles.parent}>
        <LayoutWrapper>
          <div className={styles.top}>
            <SectionHeading title='Toolset' color='black' dotColor='blackDot' />
            <motion.h2
              variants={fadeIn("", 0.3)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className={styles.heading}
            >
              My preferred tools for building <br />
              <span className={styles.span}>exceptional websites</span>
            </motion.h2>
            <p className={styles.copy}>
              Here’s why restaurants choose Owner to grow faster online
            </p>
          </div>
          <div className={styles.bottom}>
            {data.map((x) => (
              <motion.div
                // variants={fadeIn(index % 2 !== 0 ? "left" : "right", 0.3)}
                variants={fadeIn("", 0.3)}
                initial='hidden'
                whileInView={"show"}
                viewport={{ once: true, amount: 0.3 }}
                key={x.id}
                className={`${styles.card} ${styles[x.gridArea]}`}
              >
                <div className={styles.cardTop}>
                  <h3 className={styles.title}>{x.heading}</h3>
                  <div className={styles.iconContainer}>{x.icon}</div>
                </div>
                <div className={styles.cardBottom}>
                  <p className={styles.desc}>{x.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </LayoutWrapper>
      </div>
    </section>
  );
}
