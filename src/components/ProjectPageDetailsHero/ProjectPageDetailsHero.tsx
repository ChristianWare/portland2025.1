import styles from "./ProjectPageDetailsHero.module.css";
import { FullProject } from "../../../@types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import LayoutWrapper from "../LayoutWrapper";
import Button from "../Button/Button";

interface ProjectPageDetailsHeroProps {
  project: FullProject;
}

export default function ProjectPageDetailsHero({
  project,
}: ProjectPageDetailsHeroProps) {
  return (
    <section className={styles.container}>
      <div className={styles.contentParent}>
        <LayoutWrapper>
          <div className={styles.content}>
            <h1 className={styles.heading}>{project.name}</h1>
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
            <div>
              <h2 className={styles.headingii}>
                Category: <br />
              </h2>
              <p className={styles.copy}>E-commerce</p>
            </div>
            <div>
              <h2 className={styles.headingii}>
                Year: <br />
              </h2>
              <p className={styles.copy}>2024</p>
            </div>
            <div className={styles.descBox}>
              <h2 className={styles.headingii}>Description:</h2>
              <p className={styles.description}>{project.description}</p>
            </div>
            <div className={styles.btnContainer}>
              <Button
                text='Live Site'
                btnType='primary'
                href='/'
                target='_blank'
              />
            </div>
            {/* <div className={styles.right}>
            <div className={styles.rightContent}>
              <div className={styles.mobileImage}>
                {project.previewimage && (
                  <div className={styles.imgContainerMobile}>
                    <Image
                      src={urlFor(project.previewimage).url()}
                      alt={project.name}
                      title={project.name}
                      fill
                      className={styles.imgMobile}
                    />
                  </div>
                )}
              </div>
              <div>
                <h2 className={styles.headingii}>
                  Category: <br />
                </h2>
                <p className={styles.copy}>E-commerce</p>
              </div>
              <div>
                <h2 className={styles.headingii}>
                  Year: <br />
                </h2>
                <p className={styles.copy}>2024</p>
              </div>
              <div className={styles.descBox}>
                <h2 className={styles.headingii}>Description:</h2>
                <p className={styles.description}>{project.description}</p>
              </div>
              <div>
                <h2 className={styles.headingii}>Github:</h2>
                <p className={styles.copy}>github.com/project</p>
              </div>

              <div>
                <h2 className={styles.headingii}>Technical stack:</h2>
                <ul className={styles.tagsList}>
                  {project.tags && <PortableText value={project.tags} />}
                </ul>
              </div>
              <div className={styles.btnContainer}>
                <Button
                  text='Live Site'
                  btnType='primary'
                  href='/'
                  target='_blank'
                />
              </div>
            </div>
          </div> */}
          </div>
        </LayoutWrapper>
      </div>
    </section>
  );
}
