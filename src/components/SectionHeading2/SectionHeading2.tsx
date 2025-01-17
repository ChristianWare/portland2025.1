import styles from "./SectionHeading2.module.css";

interface Props {
  title: string;
  color?: string;
}

const SectionHeading2 = ({ title, color = "" }: Props) => {
  return <h2 className={`${styles.heading} ${styles[color]}`}>{title}</h2>;
};
export default SectionHeading2;
