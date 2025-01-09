"use client";

import Button from "../Button/Button";
import ContentPadding from "../ContentPadding/ContentPadding";
// import dynamic from "next/dynamic";

import Scene from "../Scene/Scene";
import styles from "./Hero.module.css";

// const Scene = dynamic(() => import("../Scene/Scene"), {
//   ssr: false,
// });

export default function Hero() {
  return (
    <section className={styles.container}>
      {/* <div className={styles.sceneContainer}>
        <Scene />
      </div> */}
      <ContentPadding>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            Hello World. <br /> My name is Christian.
          </h1>
          <p className={styles.copy}>
            Functional is a lightweight app for small teams to streamline
            <span className={styles.span}> timesheets,</span> time off and track
            <span className={styles.span}> employee wellbeing,</span> all inside
            the team chat.
          </p>
          <div className={styles.btnContainer}>
            <Button text='Projects' btnType='primary' href='/' />
          </div>
          <div className={styles.box}>
            <div className={styles.sceneContainer}>
              <Scene />
            </div>
          </div>
        </div>
      </ContentPadding>
    </section>
  );
}
