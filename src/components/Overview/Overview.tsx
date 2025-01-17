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
          <div className={styles.top}>
            <h2 className={styles.heading}>Overview</h2>
            <div>{project.overview}</div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
