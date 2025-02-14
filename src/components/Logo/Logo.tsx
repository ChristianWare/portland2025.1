import styles from "./Logo.module.css";
import Link from "next/link";

interface Props {
  size?: string;
}

const Logo = ({ size = "", }: Props) => {
  return (
    <Link href='/' className={`${styles.logo} ${styles[size]}`}>
      <span>
        {" "}
        <p>¯\_(ツ)_/¯</p>
      </span>{" "}
      {/* Chris Ware */}
    </Link>
  );
};
export default Logo;
