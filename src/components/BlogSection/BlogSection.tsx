import styles from "./BlogSection.module.css";
import BlogCard from "../BlogCard/BlogCard";
// import BlogCard2 from "../BlogCard2/BlogCard2";
import Button from "../Button/Button";
import SectionHeading2 from "../SectionHeading2/SectionHeading2";
import { client } from "@/sanity/lib/client";
import { Post } from "../../../@types";
import LayoutWrapper from "../LayoutWrapper";
import BlogCard2 from "../BlogCard2/BlogCard2";

export const revalidate = 10;
async function getPosts() {
  const query = `
  *[_type == 'post'] | order(_createdAt desc) [0..3] 
  `;
  return await client.fetch(query);
}

export default async function BlogSection() {
  const posts: Post[] = await getPosts();

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <SectionHeading2 title='My Journal' />
        <div className={styles.content}>
          <div className={styles.bottom}>
            <div className={styles.bTop}>
              {posts.slice(0, 1).map((post: Post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
            <div className={styles.bBottom}>
              {posts.map((post: Post) => (
                <BlogCard2 key={post._id} post={post} />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.btnContainer}>
          <Button text='See All Blogs' btnType='purple' href='/' />
        </div>
      </LayoutWrapper>
    </section>
  );
}
