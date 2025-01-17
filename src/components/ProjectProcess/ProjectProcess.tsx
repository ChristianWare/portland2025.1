import styles from "./ProjectProcess.module.css";
import Image from "next/image";
import LayoutWrapper from "../LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
import SectionHeading2 from "../SectionHeading2/SectionHeading2";
import { FullProject } from "../../../@types";
import { urlFor } from "@/sanity/lib/image";

interface ProjectProcessProps {
  project: FullProject;
}

export default function ProjectProcess({ project }: ProjectProcessProps) {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <SectionHeading2 title='Process' color='white' />
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <SectionHeading title='Step 1' color='white' dotColor='whiteDot' />
            <h3 className={styles.headingii}>
              Setting Up the Working Environment
            </h3>
            <p className={styles.copy}>
              To stay as organized and consistent in the design process as
              possible, I began by preparing the working environment seting up
              my global style sheet. On the right, you can see a summary board
              showcasing all the variables that were set.
              <br />
              <br />
              This approach allowed me to:
            </p>
            <div className={styles.copySection}>
              <p>
                <strong className={styles.strong}>
                  Establish Project Variables
                </strong>
              </p>
              <p className={styles.copy}>
                Defined colors, typography styles (H1, H2, H3, etc.), spacing
                etc...
              </p>
            </div>
            <div className={styles.copySection}>
              <p>
                <strong className={styles.strong}>Streamline Workflow </strong>
              </p>
              <p className={styles.copy}>
                Facilitated efficient updates and adjustments throughout the
                project.
              </p>
            </div>
            <div className={styles.copySection}>
              <p>
                <strong className={styles.strong}>Mainptain Consistency</strong>
              </p>
              <p className={styles.copy}>
                Ensured that all design elements adhered to the brand
                guidelines.
              </p>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.imgContainer}>
              {project.imagedesign && (
                <div className={styles.imgContainer}>
                  <Image
                    src={urlFor(project.imagedesign).url()}
                    alt={project.name}
                    title={project.name}
                    fill
                    className={styles.img}
                  />
                </div>
              )}{" "}
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}

// imagedesign;
