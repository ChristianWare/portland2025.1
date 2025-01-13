import styles from "./SectionHeading2.module.css";

interface Props {
  title: string;
}

const SectionHeading2 = ({ title }: Props) => {
  return <h2 className={styles.heading}>{title}</h2>;
};
export default SectionHeading2;
