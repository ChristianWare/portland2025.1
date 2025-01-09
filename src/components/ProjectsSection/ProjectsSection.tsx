import LayoutWrapper from "../LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./ProjectsSection.module.css";
import Button from "../Button/Button";
import OtherProjects from "../OtherProjects/OtherProjects";

const data = [
  {
    id: 1,
    title: "Tech Stack",
    description: "Next.js 15, React 19, CSS Modules, Three.js, Sanity.io ",
  },
  {
    id: 2,
    title: "Font(s)",
    description: '"Inter Tight" via Googl Fonts API',
  },
  {
    id: 3,
    title: "Color Scheme",
    description:
      "black: #1e1738, blue: #162f35, white: #ffffff, pink: #fcd2cd, purple: #bdb7d5, gray: #787a7d, lightGray: #aab9c5 ",
  },
  {
    id: 4,
    title: "Analytics",
    description: "Plausible",
  },
  {
    id: 5,
    title: "Hosting",
    description: "Vercel",
  },
];

const ProjectsSection = () => {
  return (
    <section className={styles.container} id='projects'>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.sectionHeadingContainer}>
              <SectionHeading
                title='Projects'
                color='black'
                dotColor='blackDot'
              />
            </div>
            <h2 className={styles.heading}>Featured Project</h2>
            <p className={styles.copy}>chrisware.dev - Portfolio website</p>
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottomLeft}></div>
            <div className={styles.bottomRight}>
              {data.map((x) => (
                <div key={x.id} className={styles.section}>
                  <h3 className={styles.title}>{x.title}</h3>
                  <p className={styles.description}>{x.description}</p>
                </div>
              ))}
              <div className={styles.btnContainer}>
                <div className={styles.btnContainer}>
                  <Button text='More Details' btnType='primary' href='/' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <OtherProjects />
        <div className={styles.btnContainerii}>
          <Button text='All Projects' btnType='purple' href='/' />
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default ProjectsSection;
