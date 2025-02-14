import LayoutWrapper from '../LayoutWrapper';
import styles from './AboutMeSection3d.module.css'
import Arizona from "../Scene/Scene";


export default function AboutMeSection3d() {
  return (
    <section className={styles.container}>
      <section className={styles.container}>
        <LayoutWrapper>
          <div className={styles.content}>
            <div className={styles.box}>
              <div className={styles.sceneContainer}>
                <Arizona useViewportScale={false} fixedScale={[1.5, 1.5, 1.5]} />
              </div>
            </div>
          </div>
        </LayoutWrapper>
      </section>
    </section>
  );
}