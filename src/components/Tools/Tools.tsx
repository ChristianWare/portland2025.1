import LayoutWrapper from "../LayoutWrapper";
import styles from "./Tools.module.css";
import SEO from "../../../public/icons/seo.svg";

const data = [
  {
    id: 1,
    heading: "One package with everything you need",
    description:
      "With Owner, you get all the tools you need to grow from day one. Our happiest and most successful customers switched to Owner from another solution. They were paying less, but weren’t getting the online sales growth they were looking for.",
    icon: <SEO width={40} height={40} className={styles.icon} />,
    gridArea: "one",
  },
  {
    id: 2,
    heading: "Month to month pricing",
    description:
      "Our pricing is month to month. We don’t believe in locking you into long-term contracts. We believe in earning your business every month.",
    icon: <SEO width={40} height={40} className={styles.icon} />,
    gridArea: "two",
  },
  {
    id: 3,
    heading: "No upgrades or upsells",
    description:
      "There’s no upgrades or upsells. We give you everything you need to grow online.",
    icon: <SEO width={40} height={40} className={styles.icon} />,
    gridArea: "three",
  },
  {
    id: 4,
    heading: "24/7 USA support",
    description:
      "Work with a world-class team. You'll have 24/7, USA-based support.",
    icon: <SEO width={40} height={40} className={styles.icon} />,
    gridArea: "four",
  },
];

export default function Tools() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.top}>
          <h2 className={styles.heading}>
            Join thousands of restaurants switching to Owner
          </h2>
          <p className={styles.copy}>
            Here’s why restaurants choose Owner to grow faster online
          </p>
        </div>
        <div className={styles.bottom}>
          {data.map((x) => (
            <div key={x.id} className={`${styles.card} ${styles[x.gridArea]}`}>
              <div className={styles.cardTop}>
                <h3 className={styles.title}>{x.heading}</h3>
                <div className={styles.iconContainer}>{x.icon}</div>
              </div>
              <div className={styles.cardBottom}>
                <p className={styles.desc}>{x.description}</p>
              </div>
            </div>
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
}
