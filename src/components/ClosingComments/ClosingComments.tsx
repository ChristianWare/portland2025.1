import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import LayoutWrapper from "../LayoutWrapper";
import styles from "./ClosingComments.module.css";

export default function ClosingComments() {
  const [lettersRef, setLettersRef] = useArrayRef();
  const triggerRef = useRef(null);

  function useArrayRef(): [
    React.MutableRefObject<HTMLSpanElement[]>,
    (ref: HTMLSpanElement) => void,
  ] {
    const lettersRef = useRef<HTMLSpanElement[]>([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  }

  gsap.registerPlugin(ScrollTrigger);

  const text =
    "Thank you for taking the time to review my portfolio website. I lookforward to speaking with you soon. Feel free to reach out to me with any questions you have.";

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: 0.9,
        start: "top center",
        end: "bottom center",
        markers: false,
      },
    });

    lettersRef.current.forEach((letter, index) => {
      tl.to(
        letter,
        {
          color: "#5f46df",
          duration: 0.2,
        },
        index * 0.015
      );
    });

    return () => {
      tl.scrollTrigger?.kill();
    };
  }, [lettersRef]);

  return (
    <section className={styles.container} ref={triggerRef}>
      <LayoutWrapper>
        <div className={styles.content}>
          <h2 className={styles.heading}>
            {text.split("").map((letter, index) => (
              <span
                key={index}
                className={styles.revealText}
                ref={setLettersRef}
              >
                {letter}
              </span>
            ))}
          </h2>
        </div>
      </LayoutWrapper>
    </section>
  );
}
