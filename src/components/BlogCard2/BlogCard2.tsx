import styles from "./BlogCard2.module.css";
import Image from "next/image";
import Honey from "../../../public/images/honey.png";
import SectionHeading from "../SectionHeading/SectionHeading";

const BlogCard2 = () => {
  return (
    <article className={styles.cardContainer}>
      <div className={styles.left}>
        {/* <div className={styles.imgContainer}>
          <Image
            src={Honey}
            alt='image'
            title='image'
            fill
            className={styles.img}
          />
        </div> */}
      </div>
      <div className={styles.right}>
        <div className={styles.sectionHeadingContainer}>
          <SectionHeading title='Featured' color='black' dotColor='blackDot' />
        </div>
        <div className={styles.titleImageContainer}>
          <h3 className={styles.title}>
            How to Create a Restaurant Website That Grows Your Online Orders
          </h3>
          <div className={styles.imgContainer}>
            <Image
              src={Honey}
              alt='image'
              title='image'
              fill
              className={styles.img}
            />
          </div>
        </div>
        <p className={styles.desc}>
          Discover easy ways to build a website that attracts more customers to
          your restaurant.
        </p>
        <div className={styles.small}>15 Minute Read</div>
      </div>
    </article>
  );
};
export default BlogCard2;
