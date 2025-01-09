import BlogCard from "../BlogCard/BlogCard";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./BlogSection.module.css";

const BlogSection = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <h2 className={styles.heading}>My Journal</h2>
          <div className={styles.bottom}>
            <BlogCard />
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default BlogSection;
