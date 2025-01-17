import Image from "next/image";
import LayoutWrapper from "../LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./Drafting.module.css";
import { urlFor } from "@/sanity/lib/image";
import { FullProject } from "../../../@types";

interface DraftingProps {
  project: FullProject;
}

export default function Drafting({ project }: DraftingProps) {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <SectionHeading title='Step 2' color='black' dotColor='blackDot' />
            <h3 className={styles.headingii}>Drafting the Homepage </h3>
            <p className={styles.copy}>
              With the foundational elements in place, I proceeded to design an
              initial draft of the homepage. The final design of the homepage is
              displayed on the right.
              <br />
              <br />
            </p>
            <div className={styles.copySection}>
              <p>
                <strong className={styles.strong}>Client Collaboration </strong>
              </p>
              <p className={styles.copy}>
                Sent the draft to Netfolie for approval.
              </p>
            </div>
            <div className={styles.copySection}>
              <p>
                <strong className={styles.strong}>
                  Feedback Implementation{" "}
                </strong>
              </p>
              <p className={styles.copy}>
                Incorporated minor adjustments based on the client&apos;s input.
              </p>
            </div>
            <div className={styles.copySection}>
              <p>
                <strong className={styles.strong}>Finalization</strong>
              </p>
              <p className={styles.copy}>
                Achieved a design that met my vision and brand identity.
              </p>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.imgContainer}>
              {project.imagehome && (
                <div className={styles.imgContainer}>
                  <Image
                    src={urlFor(project.imagehome).url()}
                    alt={project.name}
                    title={project.name}
                    fill
                    className={styles.img}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
