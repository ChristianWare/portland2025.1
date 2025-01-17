import Image from "next/image";
import { SimplifiedProject } from "../../../@types";
import styles from "./ProjectCard.module.css";
import Button from "../Button/Button";

interface ProjectCardProps {
  project: SimplifiedProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.cardTop}>
        <div className={styles.imgContainer}>
          <Image
            src={project.previewimage}
            alt={project.name}
            title={project.name}
            fill
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.cardBottom}>
        <h4 className={styles.title}>{project.name}</h4>
        <div className={styles.descBox}>
          <p className={styles.description}>{project.description}</p>
        </div>
        <div className={styles.linksBox}>
          <div className={styles.link1}>Live Site</div>
          <div className={styles.link2}>Github Code</div>
        </div>
        <div className={styles.btnContainer}>
          <Button
            text='More Details'
            btnType='primary'
            href={`/projects/${project.slug}`}
          />
        </div>
      </div>
    </article>
  );
}
