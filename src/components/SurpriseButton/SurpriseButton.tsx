"use client";

import { useRef } from "react";
import styles from "./SurpriseButton.module.css";
import confetti from "canvas-confetti";

export default function SurpriseButton() {
  const shootRealisticConfetti = () => {
    const count = 200;
    const defaults = {
      origin: { x: 0.5, y: 0.5 },
    };

    function fire(particleRatio: number, opts: confetti.Options | undefined) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleSubmit = () => {
    shootRealisticConfetti();

    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current
        .play()
        .catch((e) => console.error("audio play failed:", e));
    }
  };

  return (
    <>
      <button
        className={`${styles.container} ${styles.btn}`}
        onClick={() => handleSubmit()}
      >
        Surprise !
      </button>
      <audio ref={audioRef} src='/sounds/cash.mp3' />
    </>
  );
}
