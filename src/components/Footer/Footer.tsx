import Link from "next/link";
import styles from "./Footer.module.css";
import Instagram from "../../../public/icons/instagram.svg";
import LinkedIn from "../../../public/icons/linkedin.svg";
import Github from "../../../public/icons/github.svg";
import Email from "../../../public/icons/email.svg";
import Logo from "../Logo/Logo";

const navItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Projects",
    href: "/projects",
  },
  {
    text: "Blog",
    href: "/blog",
  },
  {
    text: "Contact",
    href: "/contact",
  },
];

const Footer = () => {
  return (
    <div className={styles.parent}>
      {/* <LayoutWrapper> */}
      <footer className={styles.container}>
        <div className={styles.brandInfoMobile}>
          <div className={styles.logoBox}>
            <Logo />
            <p className={styles.copy}>
              Explore our fairway treasures, refine your swing, and dive deep
              into the world of golf – where passion meets precision.
            </p>
            <br />
            <div className={styles.socials}>
              <div className={styles.socialContainer}>
                <Instagram width={15} height={15} className={styles.icon} />
              </div>
              <div className={styles.socialContainer}>
                <LinkedIn width={15} height={15} className={styles.icon} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.top}>
          <div className={styles.brandInfo}>
            <div className={styles.logoBox}>
              <Logo size='large' iconSize='iconLarge' />
              <p className={styles.copy}>
                Highly skilled web developer with extensive experience in
                building scalable, high-quality user interfaces using Next.js,
                React, JavaScript, and modern front-end frameworks.
              </p>
              <br />
              <div className={styles.socials}>
                <div className={styles.socialContainer}>
                  <Github width={20} height={20} className={styles.icon} />
                </div>
                <div className={styles.socialContainer}>
                  <LinkedIn width={15} height={15} className={styles.icon} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.links}>
            <div className={styles.heading}>Links</div>
            {navItems.map((x, index) => (
              <div key={index}>
                <Link href={x.href} className={styles.link}>
                  {x.text}
                </Link>
              </div>
            ))}
          </div>
          <div className={styles.contactInfo}>
            <div className={styles.heading}>CONTACT INFO</div>
            <div className={styles.box}>
              <Email width={20} height={20} className={styles.iconii} />
              chris.ware.dev@gmail.com
            </div>
            <div className={styles.box}>
              <LinkedIn width={20} height={20} className={styles.iconii} />
              linkedin.com/in/christian-ware/
            </div>
            <div className={styles.box}>
              <Github width={20} height={20} className={styles.iconii} />
              github.com/ChristianWare
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.logoii}>Chris Ware &#169; 2025</div>
          <ul className={styles.disclosures}>
            <li className={styles.disc}>Designed & Developed by Chris Ware</li>
          </ul>
        </div>
      </footer>
      {/* </LayoutWrapper> */}
    </div>
  );
};
export default Footer;
