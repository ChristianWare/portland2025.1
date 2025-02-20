"use client";

import styles from "./HeroDetails.module.css";
import SectionHeading from "../SectionHeading/SectionHeading";
import SurpriseButton from "../SurpriseButton/SurpriseButton";
import Cog from "../Scenes/Cog/Cog";
import TextCursorProximity from "../TextCursorProximity/TextCursorProximity";
import { useRef } from "react";

export default function HeroDetails() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className={styles.container} ref={containerRef}>
      <div className={styles.content}>
        <div className={styles.box}>
          <div className={styles.sceneContainer}>
            <Cog useViewportScale={false} fixedScale={[1.5, 1.5, 1.5]} />
          </div>
        </div>
        <SectionHeading title='portfolio' color='white' dotColor='whiteDot' />
        <TextCursorProximity
          label='Hello World'
          className={styles.heading}
          styles={{
            transform: {
              from: "scale(1)",
              to: "scale(1.4)",
            },
            color: { from: "#ffffff", to: "#ff87c1" },
          }}
          falloff='gaussian'
          radius={100}
          containerRef={containerRef}
        />
        <h1 className={styles.heading2}>My name is Christian</h1>
        <p className={styles.copy}>
          Phoenix, AZ based developer with a strong interest in ecommerce
          websites, UI design and full stack web applications.
        </p>
        <div className={styles.btnContainer}>
          <SurpriseButton text='Surprise!' />
        </div>
      </div>
    </section>
  );
}
