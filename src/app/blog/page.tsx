// import AllBlogs from "@/components/AllBlogs/AllBlogs";
import BlogHero from "@/components/BlogHero/BlogHero";
import Faqs from "@/components/Faqs/Faqs";
import { homePageFaqs } from "../../../lib/data";
import FinalCTA from "@/components/FinalCTA/FinalCTA";

export default function BlogPage() {
  return (
    <main>
      <BlogHero />
      {/* <AllBlogs /> */}
      <Faqs mapData={homePageFaqs} />
      <FinalCTA />
    </main>
  );
}
