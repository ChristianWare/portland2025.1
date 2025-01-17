import { PortableText } from "next-sanity";
import { FullProject } from "../../../@types";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./Conclusion.module.css";
import SectionHeading2 from "../SectionHeading2/SectionHeading2";

interface ConclusionProps {
  project: FullProject;
}

export default function Conclusion({ project }: ConclusionProps) {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <SectionHeading2 title='Conclusion' />
          <p className={styles.copy}>
            {project.conclusion && <PortableText value={project.conclusion} />}
          </p>
        </div>
      </LayoutWrapper>
    </section>
  );
}
