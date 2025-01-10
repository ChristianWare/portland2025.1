import Link from "next/link";
import styles from "./Footer.module.css";

const data = [
  {
    id: 1,
    heading: "Home",
    href: "/#home",
  },
  {
    id: 6,
    heading: "About",
    href: "#about",
  },
  {
    id: 11,
    heading: "Projects",
    href: "#projects",
  },
  {
    id: 16,
    heading: "FAQ",
    href: "#faq",
  },
];

const Footer = () => {
  return (
    <footer className={styles.container}>
      {/* <ContentPadding> */}
        <div className={styles.content}>
          <div className={styles.right}>
            <div className={styles.middleDesktop}>
              {data.map((f, index) => (
                <Link key={index} href={f.href} className={styles.heading}>
                  {f.heading}
                </Link>
              ))}
            </div>
            <div className={styles.lb2}></div>
          </div>
          <div className={styles.bottomDesktop}>
            <div className={styles.bottomLeft}>
              <p className={styles.copy}>
                &copy; 2025 Chris Ware - All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      {/* </ContentPadding> */}
    </footer>
  );
};
export default Footer;
