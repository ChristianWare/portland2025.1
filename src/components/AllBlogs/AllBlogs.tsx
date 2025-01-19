import { client } from "@/sanity/lib/client";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./AllBlogs.module.css";
import { Post } from "../../../@types";
import BlogCard2 from "../BlogCard2/BlogCard2";

export const revalidate = 10;
async function getPosts() {
  const query = `
  *[_type == 'post'] | order(_createdAt desc) 
  `;
  return await client.fetch(query);
}

export default async function AllBlogs() {
  const posts: Post[] = await getPosts();

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          {posts.map((post: Post) => (
            <BlogCard2 key={post._id} post={post} />
          ))}
        </div>
      </LayoutWrapper>
    </section>
  );
}
