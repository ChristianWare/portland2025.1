import ContentPadding from "../ContentPadding/ContentPadding";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <ContentPadding>
          <h3>Footer</h3>
        </ContentPadding>
      </div>
    </footer>
  );
};
export default Footer;
