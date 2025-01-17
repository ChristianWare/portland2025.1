import AboutHero from "@/components/AboutHero/AboutHero";
import styles from "./AboutPageStyles.module.css";
import AboutFeatures from "@/components/AboutFeatures/AboutFeatures";
import BlogSection from "@/components/BlogSection/BlogSection";
import Tools from "@/components/Tools/Tools";
import Offer from "@/components/Offer/Offer";
// import AboutInterests from "@/components/AboutInterests/AboutInterests";

export default function AboutPage() {
  return (
    <main className={styles.container}>
      <AboutHero />
      <AboutFeatures />
      <Offer />
      <Tools />
      {/* <AboutInterests /> */}
      <BlogSection />
    </main>
  );
}
