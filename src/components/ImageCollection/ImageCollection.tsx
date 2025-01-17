import Image from "next/image";
import { FullProject } from "../../../@types";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./ImageCollection.module.css";
import { urlFor } from "@/sanity/lib/image";
import SectionHeading2 from "../SectionHeading2/SectionHeading2";

interface ImageCollectionProps {
  project: FullProject;
}

export default function ImageCollection({ project }: ImageCollectionProps) {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <SectionHeading2 title='Other Pages' />
        <div className={styles.content}>
          <div className={styles.imgContainer}>
            {project.image1 && (
              <div className={styles.imgContainer}>
                <Image
                  src={urlFor(project.image1).url()}
                  alt={project.name}
                  title={project.name}
                  fill
                  className={styles.img}
                />
              </div>
            )}
          </div>
          <div className={styles.imgContainer}>
            {project.image2 && (
              <div className={styles.imgContainer}>
                <Image
                  src={urlFor(project.image2).url()}
                  alt={project.name}
                  title={project.name}
                  fill
                  className={styles.img}
                />
              </div>
            )}
          </div>
          <div className={styles.imgContainer}>
            {project.image3 && (
              <div className={styles.imgContainer}>
                <Image
                  src={urlFor(project.image3).url()}
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
