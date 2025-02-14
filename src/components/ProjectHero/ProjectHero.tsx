"use client";

import styles from "./ProjectHero.module.css";
import LayoutWrapper from "../LayoutWrapper";
import Cog from "../Scenes/Cog/Cog";

export default function ProjectHero() {
  return (
    <section className={styles.container}>
      <section className={styles.container}>
        <LayoutWrapper>
          <div className={styles.content}>
            <div className={styles.box}>
              <div className={styles.sceneContainer}>
                <Cog useViewportScale={false} fixedScale={[1.2, 1.2, 1.2]} />
              </div>
            </div>
          </div>
        </LayoutWrapper>
      </section>
    </section>
  );
}
