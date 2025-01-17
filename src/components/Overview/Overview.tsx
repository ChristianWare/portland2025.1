import LayoutWrapper from "../LayoutWrapper";
import styles from "./Overview.module.css";
import { FullProject } from "../../../@types";

interface OverviewProps {
  project: FullProject;
}

export default function Overview({ project }: OverviewProps) {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <h2 className={styles.heading}>Overview</h2>
          <p className={styles.copy}>{project.overview}</p>
        </div>
      </LayoutWrapper>
    </section>
  );
}
