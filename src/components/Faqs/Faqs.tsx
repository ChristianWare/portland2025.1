/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import styles from "./Faqs.module.css";
// import LayoutWrapper from "../LayoutWrapper";
import { FC, useState } from "react";
import Plus from "../../../public/icons/plus.svg";
import Image from "next/image";
import FAQImage from '../../../public/images/question.png'
import SectionHeading from "../SectionHeading/SectionHeading";

interface Props {
  mapData: any;
}

const Faqs: FC<Props> = ({ mapData }) => {
  const [selected, setSelected] = useState(0);

  const toggle = (i: any) => {
    setSelected(i);
  };
  return (
    <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.sectionHeadingContainer}>
              <SectionHeading
                title='Questions Commonly Asked'
                color='black'
                dotColor='blackDot'
              />
            </div>
            <h2 className={styles.heading}>You may have wondered...</h2>
          </div>
          <div className={styles.bottom}>
            <div className={styles.bLeft}>
              <div className={styles.imgContianer}>
                <Image src={FAQImage} alt='' fill className={styles.img} />
              </div>
            </div>
            <div className={styles.bRight}>
              {mapData.slice(0, 4).map((x: any, i: number) => (
                <div
                  key={x.id}
                  className={`${styles.qaContainer} ${
                    selected === i ? styles.active : ""
                  }`}
                  onClick={() => toggle(i)}
                >
                  <div className={styles.headingArrowContainer}>
                    {selected === i ? (
                      <Plus
                        className={styles.iconFlip}
                        width={35}
                        height={35}
                      />
                    ) : (
                      <Plus className={styles.icon} width={30} height={30} />
                    )}
                    <h3 className={styles.question} lang='en'>
                      {x.question}
                    </h3>
                  </div>
                  <div
                    className={
                      selected === i
                        ? styles.answerContainer + " " + styles.show
                        : styles.answerContainer
                    }
                  >
                    <div className={styles.answerbox}>
                      <div></div>
                      <p className={styles.answer} lang='en'>
                        {x.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      {/* </LayoutWrapper> */}
    </section>
  );
};
export default Faqs;
