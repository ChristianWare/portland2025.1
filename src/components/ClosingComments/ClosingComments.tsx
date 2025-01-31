"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./ClosingComments.module.css";

const text = [
  "Thank you for taking the time to review my portfolio website.",
  "Feel free to reach out to me with any questions you have.",
  "I look forward to speaking with you soon.",
];

const ClosingComments = () => {
  return (
    <section className={styles.container}>
      <div className={styles.sectionScroll} id='about'></div>
      <LayoutWrapper>
        <div className={styles.top}>
          <div className={styles.box}>
            <div className={styles.headingContainer}>
              {text.map((phrase, index) => (
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

// Animated Line Component
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

export default ClosingComments;
