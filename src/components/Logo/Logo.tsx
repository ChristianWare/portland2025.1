"use client";

import styles from "./Logo.module.css";
import Link from "next/link";
import Cog from "../../../public/icons/cogii.svg";
import { useEffect, useRef } from "react";

interface Props {
  size?: string;
}

const Logo = ({ size = "" }: Props) => {
  const cogRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (cogRef.current) {
        const rotation = window.scrollY * 0.2;
        cogRef.current.style.transform = `rotate(${rotation}deg)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Link href='/' className={`${styles.logo} ${styles[size]}`}>
      {/* ¯\_(ツ)_/¯  */}
      <Cog ref={cogRef} className={styles.icon} />
      Chris Ware
    </Link>
  );
};
export default Logo;
