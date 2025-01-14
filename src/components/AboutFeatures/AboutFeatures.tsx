import styles from "./AboutFeatures.module.css";
import SEO from "../../../public/icons/seo.svg";

import LayoutWrapper from "../LayoutWrapper";
import SectionHeading from "../SectionHeading/SectionHeading";
import WorkSection from "../WorkSection/WorkSection";

const ecommerceFeatures = [
  {
    icon: "",
    title: "",
    description: "",
  },
  {
    icon: "",
    title: "",
    description: "",
  },
  {
    icon: "",
    title: "",
    description: "",
  },
  {
    icon: <SEO width={40} height={40} className={styles.icon} />,
    title: "Platform Integration",
    description:
      "We integrate with leading e-commerce platforms like Shopify, WooCommerce, and Magento, ensuring your online store has the functionality and flexibility required to succeed in a competitive market.",
  },
  {
    icon: "",
    title: "",
    description: "",
  },
  {
    icon: "",
    title: "",
    description: "",
  },
  {
    icon: <SEO width={40} height={40} className={styles.icon} />,
    title: "Custom Website Design",
    description:
      "We offer bespoke design services that reflect your brand’s identity and provide an engaging user experience.",
  },
  {
    icon: <SEO width={40} height={40} className={styles.icon} />,
    title: "Search Engine Optimization (SEO)",
    description:
      "Our websites are built with SEO best practices to ensure that your business ranks well in search engine results.",
  },
  {
    icon: "",
    title: "",
    description: "",
  },
  {
    icon: <SEO width={40} height={40} className={styles.icon} />,
    title: "E-commerce Analytics",
    description:
      "We provide comprehensive analytics and reporting to help you understand your e-commerce performance.",
  },
  {
    icon: <SEO width={40} height={40} className={styles.icon} />,
    title: "Inventory Management",
    description:
      "Our e-commerce platforms enable efficient management of multiple products.",
  },

  {
    icon: <SEO width={40} height={40} className={styles.icon} />,
    title: "Stripe Payment Gateway",
    description:
      "Integrating Stripe as your payment gateway ensures secure transactions and supports multiple payment methods.",
  },

  {
    icon: <SEO width={40} height={40} className={styles.icon} />,
    title: "Hosting",
    description:
      "We use CDN's, or content delivery networks, to speed up the delivery of web content by bringing it closer to where users are.",
  },

  {
    icon: <SEO width={40} height={40} className={styles.icon} />,
    title: "Unlimited Edits",
    description:
      "There are no limits to how many edits you can request. If you ever want to make any changes you can call us any time.",
  },
  {
    icon: <SEO width={40} height={40} className={styles.icon} />,
    title: "24/7 Support",
    description:
      "If you ever need to reach out to us for any reason, call us! We're here and ready to help.",
  },
  {
    icon: <SEO width={40} height={40} className={styles.icon} />,
    title: "Citations & Listings",
    description:
      "A listing on Google appears when potential customers are searching for your business name or a service you offer. We set this up for you.",
  },
];

export default function AboutFeatures() {
  return (
    <section className={styles.container} id='features'>
      <LayoutWrapper>
        <div className={styles.top}>
          <SectionHeading title='About Me' color='black' dotColor='blackDot' />
          <h2 className={styles.heading}>
            <span className={styles.span}>Features</span> of our <br />{" "}
            Ecommerce Websites
          </h2>
          <p className={styles.copy}>
            Packed with powerful tools and intuitive design, our e-commerce
            websites are built to enhance user experience, drive sales, and
            scale effortlessly with your business.
          </p>
        </div>
        <div className={styles.dataContainer}>
          {ecommerceFeatures.map((x, index) => (
            <div key={index} className={styles.content}>
              <div className={styles.left}>
                <div className={styles.iconContainer}>{x.icon}</div>
              </div>
              <div className={styles.right}>
                <h3 className={styles.title}>{x.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <WorkSection />
      </LayoutWrapper>
    </section>
  );
}
