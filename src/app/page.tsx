
import { client } from "@/sanity/lib/client";
import AboutSection from "@/components/AboutSection/AboutSection";
import Faqs from "@/components/Faqs/Faqs";
import Hero from "@/components/Hero/Hero";
import Nav from "@/components/Nav/Nav";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import SkillsSection from "@/components/SkillsSection/SkillsSection";
import { homePageFaqs } from "../../lib/data";
import FinalCTA from "@/components/FinalCTA/FinalCTA";
import { Post } from "../../@types";


async function getPosts() {
  const query = `
  *[_type == 'post'] | order(_createdAt desc)
  `;
  return await client.fetch(query);
}

export default async function Home() {
const posts: Post[] = await getPosts(); 
  console.log(posts);

  return (
    <main>
      <Nav />
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <Faqs mapData={homePageFaqs} />
      <FinalCTA />
    </main>
  );
}
