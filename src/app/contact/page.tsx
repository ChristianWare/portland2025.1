import BlogSection from "@/components/BlogSection/BlogSection";
import ContactHero from "@/components/ContactHero/ContactHero";
import Faqs from "@/components/Faqs/Faqs";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import { homePageFaqs } from "../../../lib/data";

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <Faqs mapData={homePageFaqs} />
      <BlogSection />
      <FinalCTA />
    </main>
  );
}
