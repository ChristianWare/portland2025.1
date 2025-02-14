import SectionHeading from "../SectionHeading/SectionHeading";
import SurpriseButton from "../SurpriseButton/SurpriseButton";
import styles from "./HeroDetails.module.css";
import Cog from "../Scenes/Cog/Cog";

export default function HeroDetails() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.box}>
          <div className={styles.sceneContainer}>
            <Cog useViewportScale={false} fixedScale={[1.5, 1.5, 1.5]} />
          </div>
        </div>
        <SectionHeading title='portfolio' color='white' dotColor='whiteDot' />
        <h1 className={styles.heading}>
          Hello World
          <br />
          <span className={styles.heading2}>My name is Christian</span>
        </h1>
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
