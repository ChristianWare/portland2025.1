import AboutHero from "@/components/AboutHero/AboutHero";
import styles from "./AboutPageStyles.module.css";
import Nav from "@/components/Nav/Nav";
import AboutFeatures from "@/components/AboutFeatures/AboutFeatures";
import BlogSection from "@/components/BlogSection/BlogSection";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import Tools from "@/components/Tools/Tools";
// import AboutInterests from "@/components/AboutInterests/AboutInterests";

export default function AboutPage() {
  return (
    <main className={styles.container}>
      <Nav />
      <AboutHero />
      <AboutFeatures />
      <Tools />
      {/* <AboutInterests /> */}
      <BlogSection />
      <FinalCTA />
    </main>
  );
}
