import BlogCard from "../BlogCard/BlogCard";
import BlogCard2 from "../BlogCard2/BlogCard2";
import Button from "../Button/Button";
// import LayoutWrapper from "../LayoutWrapper";
import styles from "./BlogSection.module.css";

const BlogSection = () => {
  return (
    <section className={styles.container}>
      {/* <LayoutWrapper> */}
      <div className={styles.content}>
        <h2 className={styles.heading}>My Journal</h2>
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
        <Button text='See All Blogs' btnType='primary' href='/' />
      </div>
      {/* </LayoutWrapper> */}
    </section>
  );
};
export default BlogSection;
