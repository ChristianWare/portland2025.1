import Image from "next/image";
import styles from "./OtherProjects.module.css";
import Chuxly from "../../../public/images/chuxly.jpg";
import Honey from "../../../public/images/honey.png";
import Taco from "../../../public/images/taco.webp";
import Button from "../Button/Button";
// import Link from "next/link";

const data = [
  {
    id: 1,
    src: Chuxly,
    title: "Chuxly",
    desc: "Chuxly is an e-commerce website offering wireless, portable, and home theater speakers, along with headphones, components, and accessories. ",
  },
  {
    id: 2,
    src: Honey,
    title: "Honey",
    desc: "Chuxly is an e-commerce website offering wireless, portable, and home theater speakers, along with headphones, components, and accessories. ",
  },
  {
    id: 3,
    src: Taco,
    title: "Taco",
    desc: "Chuxly is an e-commerce website offering wireless, portable, and home theater speakers, along with headphones, components, and accessories. ",
  },
];

const OtherProjects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <h3 className={styles.heading}>Other Projects</h3>
        </div>
        <div className={styles.bottom}>
          {data.map((x) => (
            <div key={x.id} className={styles.card}>
              <div className={styles.imgContainer}>
                <Image
                  src={x.src}
                  alt={x.title}
                  title={x.title}
                  fill
                  className={styles.img}
                />
              </div>
              <h3 className={styles.title}>{x.title}</h3>
              <p className={styles.description}>{x.desc}</p>
              <div className={styles.linksBox}>
                <div className={styles.link1}>Live Site</div>
                <div className={styles.link2}>Github Code</div>
              </div>
              <div className={styles.btnContainer}>
                <Button text='More Details' btnType='primary' href='/' />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default OtherProjects;
