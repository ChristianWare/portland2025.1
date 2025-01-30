/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import styles from "./ProjectCard.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";

interface ProjectCardProps {
  src: any;
  name: string;
  description: string;
  link: string;
}

export default function ProjectCard({
  src,
  name,
  description,
  link,
}: ProjectCardProps) {
  return (
    <motion.article
      variants={fadeIn("up", 0.3)}
      initial='hidden'
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className={styles.card}
    >
      <div className={styles.cardTop}>
        <div className={styles.imgContainer}>
          <Image
            src={src}
            alt={name}
            title={name}
            fill
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.cardBottom}>
        <h4 className={styles.title}>{name}</h4>
        <div className={styles.descBox}>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.linksBox}>
          <div>
            <Link
              href={link}
              className={styles.link1}
              target='_blank'
              rel='noopener noreferrer'
            >
              Live Site
            </Link>
          </div>
          <div className={styles.link2}>Github Code</div>
        </div>
        {/* <div className={styles.btnContainer}>
          <Button
            text='More Details'
            btnType='primary'
            href={`/projects/${project.slug}`}
          />
        </div> */}
      </div>
    </motion.article>
  );
}
