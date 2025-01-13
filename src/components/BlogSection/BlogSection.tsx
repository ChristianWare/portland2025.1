import BlogCard from "../BlogCard/BlogCard";
import BlogCard2 from "../BlogCard2/BlogCard2";
import Button from "../Button/Button";
import styles from "./BlogSection.module.css";

const BlogSection = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>My Journal</h2>
      <div className={styles.content}>
        <div className={styles.bottom}>
          <div className={styles.bTop}>
            <BlogCard />
          </div>
          <div className={styles.bBottom}>
            <BlogCard2 />
            <BlogCard2 />
            <BlogCard2 />
          </div>
        </div>
      </div>
      <div className={styles.btnContainer}>
        <Button text='See All Blogs' btnType='purple' href='/' />
      </div>
    </section>
  );
};

export default BlogSection;
