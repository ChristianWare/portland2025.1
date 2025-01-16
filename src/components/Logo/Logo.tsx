import styles from "./Logo.module.css";
import Terminal from "../../../public/icons/terminal.svg";
import Link from "next/link";

interface Props {
  size?: string;
  iconSize?: string;
}

const Logo = ({ size = "", iconSize = "" }: Props) => {
  return (
    <Link href='/' className={`${styles.logo} ${styles[size]}`}>
      <Terminal className={`${styles.icon} ${styles[iconSize]}`} /> Chris Ware
    </Link>
  );
};
export default Logo;
