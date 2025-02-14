"use client";

import { useRef } from "react";
import styles from "./SurpriseButton.module.css";
import confetti from "canvas-confetti";

interface Props {
  text: string;
}

export default function SurpriseButton({ text }: Props) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const shootRealisticConfetti = (origin: { x: number; y: number }) => {
    const count = 200;
    const defaults = {
      origin: origin,
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

  const handleSubmit = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;

      shootRealisticConfetti({ x, y });
    }

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
        ref={buttonRef}
        className={`${styles.container} ${styles.btn}`}
        onClick={handleSubmit}
      >
        {text}
      </button>
      <audio ref={audioRef} src='/sounds/cash.mp3' />
    </>
  );
}
