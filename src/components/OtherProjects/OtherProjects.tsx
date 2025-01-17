import Image from "next/image";
import styles from "./OtherProjects.module.css";
import Button from "../Button/Button";
import LayoutWrapper from "../LayoutWrapper";
import { SimplifiedProject } from "../../../@types";

interface Props {
  data: SimplifiedProject[];
}

const OtherProjects = ({ data }: Props) => {
  return (
    <div className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.bottom}>
            {data.map((x) => (
              <div key={x._id} className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.imgContainer}>
                    <Image
                      src={x.previewimage}
                      alt={x.name}
                      title={x.name}
                      fill
                      className={styles.img}
                    />
                  </div>
                </div>
                <div className={styles.cardBottom}>
                  <h4 className={styles.title}>{x.name}</h4>
                  <div className={styles.descBox}>
                    <p className={styles.description}>{x.description}</p>
                  </div>
                  <div className={styles.linksBox}>
                    <div className={styles.link1}>Live Site</div>
                    <div className={styles.link2}>Github Code</div>
                  </div>
                  <div className={styles.btnContainer}>
                    <Button
                      text='More Details'
                      btnType='primary'
                      href={`/projects/${x.slug}`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </LayoutWrapper>
    </div>
  );
};
export default OtherProjects;
