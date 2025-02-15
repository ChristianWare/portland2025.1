"use client";

import styles from "./ProjectsSection.module.css";
import LayoutWrapper from "../LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
import Chuxly from "../../../public/images/chuxly.jpg";
import Honey from "../../../public/images/honey.png";
import Nier from "../../../public/images/nier.png";
import Taco from "../../../public/images/taco.webp";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

const data = [
  {
    id: 1,
    name: "Chuxly",
    year: 2024,
    framework: "Next.js",
    src: Chuxly,
    link: "https://www.chuxly.com/",
    github: "https://github.com/ChristianWare/claro15",
    description:
      "Chuxly is an e-commerce website offering wireless, portable, and home theater speakers, along with headphones, components, and accessories.",
  },
  {
    id: 3,
    name: "Golden Drips",
    year: 2024,
    framework: "Next.js",
    src: Honey,
    link: "https://www.goldendrips.com/",
    github: "https://github.com/ChristianWare/honey",
    description:
      "Golden Drips is an e-commerce website dedicated to selling high-quality honey products across Arizona. The platform supports state-wide delivery with an easy-to-navigate user interface.",
  },
  {
    id: 4,
    name: "Taco Bell",
    year: 2024,
    framework: "Next.js with Sanity.io",
    src: Taco,
    link: "https://www.newtacobell.com/",
    github: "https://github.com/ChristianWare/Tacobell-ii",
    description:
      "Taco Bell's redesigned website integrates a seamless user experience with a robust CMS powered by Sanity.io, showcasing the full menu and promotional offers in a visually engaging way.",
  },
  {
    id: 5,
    name: "Nier Transportation",
    year: 2024,
    framework: "Next.js",
    src: Nier,
    link: "https://www.niertransportation.com",
    github: "https://github.com/ChristianWare/Nier-Transport-Redesign",
    description:
      "Nier Transportation's website highlights a luxury black car service with features that make booking and navigation effortless for clients seeking reliable and premium transportation services.",
  },
];

export default function ProjectsSection() {
  const rotationAngle = useRef(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;
      lastScrollY.current = currentScrollY;

      rotationAngle.current += delta * 0.15;

      const imgContainers = document.querySelectorAll(
        `.${styles.imgContainer}`
      );
      imgContainers.forEach((container) => {
        (container as HTMLElement).style.transform =
          `rotate(${rotationAngle.current}deg)`;
      });
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className={styles.container} id='projects'>
      <LayoutWrapper>
        <div className={styles.top}>
          <div className={styles.sectionHeadingContainer}>
            <SectionHeading title='My Work' color='black' dotColor='blackDot' />
          </div>
          <h2 className={styles.heading}>
            Featured <span>projects</span>
          </h2>
        </div>
        <div className={styles.bottom}>
          {data.map((project, index) => (
            <motion.div
              variants={fadeIn(index % 2 !== 0 ? "up" : "left", 0.3)}
              initial='hidden'
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              key={index}
              className={styles.cardContainer}
            >
              <div className={styles.cardTop}>
                <div className={styles.imgContainer}>
                  <Image
                    src={project.src}
                    alt={project.name}
                    title={project.name}
                    fill
                    className={styles.img}
                  />
                </div>
              </div>
              <h4 className={styles.title}>{project.name}</h4>
              <div className={styles.descBox}>
                <p className={styles.description}>{project.description}</p>
              </div>
              <div className={styles.linksBox}>
                <div>
                  <Link
                    href={project.link}
                    className={styles.link1}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Live Site
                  </Link>
                </div>
                <div className={styles.link2}>Github Code</div>
              </div>
            </motion.div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
}
