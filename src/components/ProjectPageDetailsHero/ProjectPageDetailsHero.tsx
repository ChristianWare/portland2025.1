import styles from "./ProjectPageDetailsHero.module.css";
import { FullProject } from "../../../@types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import LayoutWrapper from "../LayoutWrapper";
import { PortableText } from "next-sanity";

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
            <div className={styles.leftTop}>
              <h1 className={styles.heading}>
                Project name: <br />
                <span className={styles.heading2}>{project.name}</span>
              </h1>
              <div>
                <h2 className={styles.headingii}>
                  Category: <br />
                </h2>
                <p className={styles.copy}>E-commerce</p>
              </div>
              <div>
                <h2 className={styles.headingii}>
                  Year: <br />
                  {/* <span className={styles.heading2ii}></span> */}
                </h2>
                <p className={styles.copy}>2024</p>
              </div>
              <div>
                <h2 className={styles.headingii}>Description:</h2>
                <p className={styles.description}>{project.description}</p>
              </div>
              <div>
                <h2 className={styles.headingii}>Github:</h2>
                <p className={styles.copy}>github.com/project</p>
              </div>
              <div>
                <h2 className={styles.headingii}>Live site:</h2>
                <p className={styles.copy}>livesite.com</p>
              </div>
              <div>
                <h2 className={styles.headingii}>Technical stack:</h2>
                <ul className={styles.tagsList}>
                  {project.tags && <PortableText value={project.tags} />}
                </ul>
              </div>
            </div>
            {/* <div className={styles.leftBottom}></div> */}
          </div>
          <div className={styles.right}>
            {project.previewimage && (
              <div className={styles.imgContainer}>
                <Image
                  src={urlFor(project.previewimage).url()}
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
