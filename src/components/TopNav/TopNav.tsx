import styles from "./TopNav.module.css";
import Link from "next/link";
import LinkedIn from "../../../public/icons/linkedin.svg";
import Mail from "../../../public/icons/mail.svg";
import Github from "../../../public/icons/github.svg";
// import Logo from "../Logo/Logo";

const TopNav = () => {
  return (
    <div className={`${styles.header} topNav`} id='home'>
      {" "}
      {/* Added class topNav */}
      <div className={styles.content}>
        <div className={styles.logoContainer}>{/* <Logo /> */}</div>
        <div className={styles.leftBottom}>
          <Link
            href='https://www.linkedin.com/in/christian-ware/'
            target='_blank'
            aria-label='LinkedIn'
            className={styles.detail}
          >
            <LinkedIn className={styles.icon} />
          </Link>
          <Link
            href='mailto:chris.ware.dev@gmail.com'
            target='_blank'
            aria-label='Facebook'
            className={styles.detail}
          >
            <Mail className={styles.icon} />
          </Link>
          <Link
            href='https://github.com/ChristianWare'
            target='_blank'
            aria-label='Instagram'
            className={styles.detail}
          >
            <Github className={styles.icon} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
