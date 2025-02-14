import LayoutWrapper from "../LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
import styles from "./SectionHero.module.css";

interface Props {
  sectionHeaing: string;
  heading: string;
  heading2: string;
  copy: string;
  direction?: string;
}

export default function SectionHero({
  sectionHeaing,
  heading,
  heading2,
  copy,
  direction = "",
}: Props) {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={`${styles.content} ${styles[direction]}`}>
          <SectionHeading
            title={sectionHeaing}
            color='white'
            dotColor='whiteDot'
          />
          <h1 className={`${styles.heading} ${styles[direction]}`}>
            {heading}
            <br />
            <span className={styles.heading2}>{heading2}</span>
          </h1>
          <p className={`${styles.copy} ${styles[direction]}`}>{copy}</p>
        </div>
      </LayoutWrapper>
    </section>
  );
}
