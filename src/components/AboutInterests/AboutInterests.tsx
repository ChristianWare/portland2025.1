import LayoutWrapper from "../LayoutWrapper";
import styles from "./AboutInterests.module.css";
import SEO from "../../../public/icons/seo.svg";

const data = [
  {
    icon: <SEO width={40} height={40} className={styles.icon} />,
    feature: "Transparent Pricing",
    desc: "No hidden fees or surprises—just straightforward pricing so you know exactly what you’re paying for.",
  },
  {
    icon: <SEO width={40} height={40} className={styles.icon} />,
    feature: "On-Time Delivery",
    desc: "We guarantee timely delivery of your e-commerce store, so you can launch and start selling without delays.",
  },
  {
    icon: <SEO width={40} height={40} className={styles.icon} />,
    feature: "Ongoing Support",
    desc: "From launch to growth, we’re here for you every step of the way, ensuring peace of mind with continuous support.",
  },
];

export default function AboutInterests() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.imgContainer}>
          {/* <Image src={Img1} alt='' title='' fill className={styles.img} /> */}
        </div>
        <div className={styles.content}>
          <div className={styles.top}>
            <h2 className={styles.topHeading}>
              Some of my{" "} <br />
              <span className={styles.span}>personal interests</span>
            </h2>
          </div>
          <div className={styles.bottom}>
            {data.map((x, index) => (
              <div key={index} className={styles.box}>
                <div className={styles.iconContainer}>{x.icon}</div>
                <h4 className={styles.feature}>{x.feature}</h4>
                <p className={styles.desc}>{x.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
