import styles from "./BlogCard.module.css";
import Image from "next/image";
import SectionHeading from "../SectionHeading/SectionHeading";
import { Post } from "../../../@types";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

interface BlogPreviewCardProps {
  post: Post;
}

export default function BlogCard({ post }: BlogPreviewCardProps) {
  return (
    <article className={styles.cardContainer}>
      <div className={styles.left}>
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
      <div className={styles.right}>
        <div className={styles.sectionHeadingContainer}>
          <SectionHeading title='Featured' color='white' dotColor='whiteDot' />
        </div>
        <Link href={`/blog/${post.slug.current}`} className={styles.title}>
          {post.title}
        </Link>
        <p className={styles.desc}>{post.description}</p>
        <div className={styles.small}>
          {new Date(post._createdAt).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}{" "}
        </div>
      </div>
    </article>
  );
}
