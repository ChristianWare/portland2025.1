import styles from "./Logo.module.css";
import Terminal from "../../../public/icons/terminal.svg";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href='/' className={styles.logo}>
      <Terminal className={styles.icon} /> Chris Ware
    </Link>
  );
};
export default Logo;
