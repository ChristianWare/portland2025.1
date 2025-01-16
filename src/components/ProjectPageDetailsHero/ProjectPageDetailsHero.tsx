import styles from "./ProjectPageDetailsHero.module.css";
import { FullProject } from "../../../@types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import LayoutWrapper from "../LayoutWrapper";

interface ProjectPageDetailsHeroProps {
  project: FullProject;
}

export default function ProjectPageDetailsHero({
  project,
}: ProjectPageDetailsHeroProps) {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1>{project.name}</h1>
            <div className={styles.leftBottom}>
              <p>{project.description}</p>
            </div>
          </div>
          <div className={styles.right}>
            {project.image && (
              <div className={styles.imgContainer}>
                <Image
                  src={urlFor(project.image).url()}
                  alt={project.name}
                  title={project.name}
                  fill
                  className={styles.img}
                />
              </div>
            )}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
