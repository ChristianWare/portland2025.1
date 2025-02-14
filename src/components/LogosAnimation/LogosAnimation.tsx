import styles from "./LogosAnimation.module.css";
import { JSX, useState, useEffect } from "react";
import NextJS from "../../../public/icons/next.svg";
import NextAuth from "../../../public/icons/nextAuth.svg";
import Node from "../../../public/icons/node.svg";
import Stripe from "../../../public/icons/stripe.svg";
import Vercel from "../../../public/icons/vercel.svg";
import GoogleAnalytics from "../../../public/icons/googleAnalytics.svg";
import ReactIcon from "../../../public/icons/react.svg";
import HTML from "../../../public/icons/html.svg";
import CSS from "../../../public/icons/css.svg";
import Javascript from "../../../public/icons/javascriptii.svg";
import MongoDB from "../../../public/icons/mongodb.svg";
import Prisma from "../../../public/icons/prisma.svg";
import Typescript from "../../../public/icons/typescriptii.svg";
import Strapi from "../../../public/icons/strapi.svg";
import Sanity from "../../../public/icons/sanity.svg";
import Contentful from "../../../public/icons/contentful.svg";
import Docker from "../../../public/icons/docker.svg";
import WordPress from "../../../public/icons/wordpress.svg";
import Three from "../../../public/icons/threejs.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../../../animation/variants";
import LayoutWrapper from "../LayoutWrapper";

const data = [
  {
    icon: <NextJS className={styles.icon} />,
    icon2: <NextJS className={styles.icon2} />,
    name: "Next Js",
  },
  {
    icon: <ReactIcon className={styles.icon} />,
    icon2: <ReactIcon className={styles.icon2} />,
    name: "React",
  },
  {
    icon: <HTML className={styles.icon} />,
    icon2: <HTML className={styles.icon2} />,
    name: "HTML",
  },
  {
    icon: <CSS className={styles.icon} />,
    icon2: <CSS className={styles.icon2} />,
    name: "CSS",
  },
  {
    icon: <Javascript className={styles.icon} />,
    icon2: <Javascript className={styles.icon2} />,
    name: "Javascript",
  },
  {
    icon: <MongoDB className={styles.icon} />,
    icon2: <MongoDB className={styles.icon2} />,
    name: "Mongo DB",
  },
  {
    icon: <Prisma className={styles.icon} />,
    icon2: <Prisma className={styles.icon2} />,
    name: "Prisma",
  },
  {
    icon: <Typescript className={styles.icon} />,
    icon2: <Typescript className={styles.icon2} />,
    name: "Typescript",
  },
  {
    icon: <Vercel className={styles.icon} />,
    icon2: <Vercel className={styles.icon2} />,
    name: "Vercel",
  },
  {
    icon: <NextAuth className={styles.icon} />,
    icon2: <NextAuth className={styles.icon2} />,
    name: "Next Auth",
  },
  {
    icon: <Node className={styles.icon} />,
    icon2: <Node className={styles.icon2} />,
    name: "Node",
  },
  {
    icon: <GoogleAnalytics className={styles.icon} />,
    icon2: <GoogleAnalytics className={styles.icon2} />,
    name: "Google Analytics",
  },
  {
    icon: <Stripe className={styles.icon} />,
    icon2: <Stripe className={styles.icon2} />,
    name: "Stripe",
  },
  {
    icon: <Strapi className={styles.icon} />,
    icon2: <Strapi className={styles.icon2} />,
    name: "Strapi",
  },
  {
    icon: <Sanity className={styles.icon} />,
    icon2: <Sanity className={styles.icon2} />,
    name: "Sanity",
  },
  {
    icon: <Contentful className={styles.icon} />,
    icon2: <Contentful className={styles.icon2} />,
    name: "Contentful",
  },
  {
    icon: <Docker className={styles.icon} />,
    icon2: <Docker className={styles.icon2} />,
    name: "Docker",
  },
  {
    icon: <WordPress className={styles.icon} />,
    icon2: <WordPress className={styles.icon2} />,
    name: "Word Press",
  },
  {
    icon: <Three className={styles.icon} />,
    icon2: <Three className={styles.icon2} />,
    name: "Three.js",
  },
] as const;

export default function LogosAnimation() {
  const [activeIcon, setActiveIcon] = useState<JSX.Element | null>(null);
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIconIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 100);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleHover = (icon: JSX.Element | null) => {
    setIsPaused(!!icon);
    setActiveIcon(icon);
  };

  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial='hidden'
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className={styles.right}
            onMouseEnter={() => handleHover(data[currentIconIndex].icon)}
            onMouseLeave={() => handleHover(null)}
          >
            <motion.div key={currentIconIndex} className={styles.iconWrapper}>
              {isPaused && activeIcon
                ? activeIcon
                : data[currentIconIndex].icon}
            </motion.div>
          </motion.div>
        </div>
      </LayoutWrapper>
    </div>
  );
}
