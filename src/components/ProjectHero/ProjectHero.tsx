"use client";

import styles from "./ProjectHero.module.css";
import LayoutWrapper from "../LayoutWrapper";
import Torrus from "../Scenes/Torrus/Torrus";

export default function ProjectHero() {
  return (
    <section className={styles.container}>
      <section className={styles.container}>
        <LayoutWrapper>
          <div className={styles.content}>
            <div className={styles.box}>
              <div className={styles.sceneContainer}>
                <Torrus useViewportScale={false} fixedScale={[2.5, 2.5, 2.5]} />
              </div>
            </div>
          </div>
        </LayoutWrapper>
      </section>
    </section>
  );
}
