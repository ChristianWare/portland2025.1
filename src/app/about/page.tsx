"use client";

import AboutHero from "@/components/AboutHero/AboutHero";
import styles from "./AboutPageStyles.module.css";
import Nav from "@/components/Nav/Nav";

export default function AboutPage() {
  return (
    <main className={styles.container}>
      <Nav />
      <AboutHero />
    </main>
  );
}
