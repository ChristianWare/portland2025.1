import styles from "./BlogCard2.module.css";
import Image from "next/image";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Post } from "../../../@types";
import { urlFor } from "@/sanity/lib/image";

interface BlogPreviewCardProps {
  post: Post;
}

export default function BlogCard2({ post }: BlogPreviewCardProps) {
  return (
    <article className={styles.cardContainer}>
      <div className={styles.left}></div>
      <div className={styles.right}>
        <div className={styles.sectionHeadingContainer}>
          <SectionHeading
            title='Category here'
            color='black'
            dotColor='blackDot'
          />
        </div>
        <div className={styles.titleImageContainer}>
          <h3 className={styles.title}>{post.title}</h3>
          <div className={styles.imgContainer}>
            <Image
              src={urlFor(post.image).url()}
              alt={post.title}
              title={post.title}
              fill
              className={styles.img}
            />
          </div>
        </div>
        <p className={styles.desc}>{post.description}</p>
        <div className={styles.small}>
          {new Date(post._createdAt).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}{" "}
        </div>{" "}
      </div>
    </article>
  );
}
