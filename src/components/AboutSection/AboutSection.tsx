"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./AboutSection.module.css";
// import Button from "../Button/Button";
// import Process from "../Process/Process";
// import SectionHeading from "../SectionHeading/SectionHeading";

// Split your text into individual lines/phrases
const aboutPhrases = [
  "I am skilled in both front-end and back-end development.",
  "I have the ability to create comprehensive web applications.",
  "From start to finish, my tools of choice are Next.js/React.",
];

const AboutSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.sectionScroll} id='about'></div>
      <LayoutWrapper>
        <div className={styles.top}>
          <div className={styles.box}>
            <div className={styles.headingContainer}>
              {aboutPhrases.map((phrase, index) => (
                <AnimatedLine key={index}>{phrase}</AnimatedLine>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.content}></div>
      </LayoutWrapper>
    </section>
  );
};

const AnimatedLine = ({ children }: { children: React.ReactNode }) => {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        {
          opacity: 0,
          left: "-200px",
        },
        {
          opacity: 1,
          left: "0",
          ease: "power3.out",
          scrollTrigger: {
            trigger: lineRef.current,
            scrub: true,
            start: "top bottom-=100px",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <h2 ref={lineRef} className={styles.animatedLine}>
      {children}
    </h2>
  );
};

export default AboutSection;
