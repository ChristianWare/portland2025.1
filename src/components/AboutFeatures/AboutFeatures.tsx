import styles from "./AboutFeatures.module.css";
import Analytics from "../../../public/icons/analytics.svg";
import Git from "../../../public/icons/git.svg";
import Performance from "../../../public/icons/performance.svg";
import Cloud from "../../../public/icons/cloud.svg";
import Testing from "../../../public/icons/testing.svg";
import Accessibility from "../../../public/icons/accessibility.svg";
import Container from "../../../public/icons/container.svg";
import SEO from "../../../public/icons/seo.svg";
import WebDev from "../../../public/icons/webDev.svg";
import WebDesign from "../../../public/icons/webDesign.svg";
import LayoutWrapper from "../LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
import WorkSection from "../WorkSection/WorkSection";

const data = [
  {
    icon: "",
    title: "",
  },
  {
    icon: "",
    title: "",
  },
  {
    icon: "",
    title: "",
  },
  {
    icon: <WebDesign className={styles.icon} />,
    title: "Web Design",
  },
  {
    icon: "",
    title: "",
  },
  {
    icon: "",
    title: "",
  },
  {
    icon: <WebDev className={styles.icon} />,
    title: "Web Development",
  },
  {
    icon: <SEO className={styles.icon} />,
    title: "SEO",
  },
  {
    icon: "",
    title: "",
  },
  {
    icon: <Container className={styles.icon} />,
    title: "DevOps & CI/CD",
  },
  {
    icon: <Accessibility className={styles.icon} />,
    title: "Accessibility",
  },

  {
    icon: <Testing className={styles.icon} />,
    title: "Testing",
  },

  {
    icon: <Cloud className={styles.icon} />,
    title: "Cloud & Hosting",
    description:
      "We use CDN's, or content delivery networks, to speed up the delivery of web content by bringing it closer to where users are.",
  },

  {
    icon: <Performance className={styles.icon} />,
    title: "Performance Optimization",
    description:
      "There are no limits to how many edits you can request. If you ever want to make any changes you can call us any time.",
  },
  {
    icon: <Git className={styles.icon} />,
    title: "Version Control & Collaboration",
    description:
      "If you ever need to reach out to us for any reason, call us! We're here and ready to help.",
  },
  {
    icon: <Analytics className={styles.icon} />,
    title: "Analytics",
    description:
      "A listing on Google appears when potential customers are searching for your business name or a service you offer. We set this up for you.",
  },
];

export default function AboutFeatures() {
  return (
    <section className={styles.container} id='features'>
      <LayoutWrapper>
        <div className={styles.top}>
          <SectionHeading
            title='My Skillset'
            color='black'
            dotColor='blackDot'
          />
          <h2 className={styles.heading}>
            My websites <br />
            <span className={styles.span}>& everything around them</span>
          </h2>
          <p className={styles.copy}>
            Building a website is only the beginning. It&apos;s important to
            understand the essential elements that make them thrive. My
            expertise spans the entire web development ecosystem, combining
            design, functionality, and optimization to create seamless digital
            experiences.
          </p>
        </div>
        <div className={styles.dataContainer}>
          {data.map((x, index) => (
            <div key={index} className={styles.content}>
              <div className={styles.left}>
                <div className={styles.iconContainer}>{x.icon}</div>
              </div>
              <div className={styles.right}>
                <h3 className={styles.title}>{x.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <WorkSection />
      </LayoutWrapper>
    </section>
  );
}
