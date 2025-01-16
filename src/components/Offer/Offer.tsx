import styles from "./Offer.module.css";
import Terminal from "../../../public/icons/terminal.svg";
import LayoutWrapper from "../LayoutWrapper";

export default function Offer() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}></div>
          <div className={styles.right}>
            <div className={styles.rightSideTop}>
              <h3 className={styles.headingii}>
                What I bring to the table....
              </h3>
            </div>
            <div className={styles.middle}>
              <div className={styles.middleLeft}>
                <Terminal className={styles.icon} />
              </div>
              <div className={styles.middleRight}>
                <p className={styles.copyii}>
                  Because of my background in design, and finance, I understand
                  the aesthetic and business side to any project. While websites
                  have to make good impressions on their visitors, they should
                  also motivate them to action. This is what I aim to accomplish
                  in all of my projects.
                </p>
              </div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.b1}>
                <h4 className={styles.headingiii}>Years Coding:</h4>
                <p className={styles.copyiii}>10 +</p>
              </div>
              <div className={styles.b2}>
                <h4 className={styles.headingiii}>Github Repo&apos;s:</h4>
                <p className={styles.copyiii}>≥ 140</p>
              </div>
              <div className={styles.b3}>
                <h4 className={styles.headingiii}>Favorite Movie:</h4>
                <p className={styles.copyiii}>Inception</p>
              </div>
            </div>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
