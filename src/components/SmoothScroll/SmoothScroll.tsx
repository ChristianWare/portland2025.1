/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
"use client";

import { ReactNode, useEffect, useRef } from "react";

const SmoothScroll = ({ children }: { children: ReactNode }) => {
  const scrollingContainerRef = useRef<HTMLDivElement>(null);
  const targetScrollY = useRef(0);
  const currentScrollY = useRef(0);
  const animationFrameId = useRef<number | null>(null);
  const isScrolling = useRef(false);

  // 🫸 MAIN CONTROL PARAMETERS (ADJUST THESE)
  const baseParams = {
    ease: 0.1, // Smoothness (0.05-0.2) ↗️ Higher = faster snap
    wheelDelta: 25, // Pixels per wheel tick ↗️ Higher = longer scroll
    touchDelta: 1.8, // Touch drag multiplier ↘️ Lower = less scroll
    momentum: 10, // Fling momentum ↘️ Lower = less inertia
    keyboardDelta: 80, // Pixels per key press ↗️ Higher = longer scroll
  };

  const animate = () => {
    const diff = targetScrollY.current - currentScrollY.current;
    currentScrollY.current += diff * baseParams.ease;

    if (scrollingContainerRef.current) {
      scrollingContainerRef.current.style.transform = `translate3d(0, -${currentScrollY.current}px, 0)`;
    }

    if (Math.abs(diff) > 0.5) {
      animationFrameId.current = requestAnimationFrame(animate);
    } else {
      isScrolling.current = false;
    }
  };

  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    if (!isScrolling.current) {
      isScrolling.current = true;
      animationFrameId.current = requestAnimationFrame(animate);
    }

    const container = scrollingContainerRef.current;
    if (!container) return;

    const maxScroll = container.scrollHeight - window.innerHeight;
    targetScrollY.current = Math.min(
      Math.max(
        targetScrollY.current +
          (e.deltaY > 0 ? baseParams.wheelDelta : -baseParams.wheelDelta),
        0
      ),
      maxScroll
    );
  };

  const handleTouchStart = (e: TouchEvent) => {
    const touch = e.touches[0];
    const startY = touch.pageY;
    let previousY = startY;
    let deltaY = 0;

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      deltaY = touch.pageY - previousY;
      previousY = touch.pageY;

      targetScrollY.current = Math.min(
        Math.max(targetScrollY.current - deltaY * baseParams.touchDelta, 0),
        scrollingContainerRef.current?.scrollHeight! - window.innerHeight
      );

      if (!isScrolling.current) {
        isScrolling.current = true;
        animationFrameId.current = requestAnimationFrame(animate);
      }
    };

    const handleTouchEnd = () => {
      targetScrollY.current = Math.min(
        Math.max(targetScrollY.current - deltaY * baseParams.momentum, 0),
        scrollingContainerRef.current?.scrollHeight! - window.innerHeight
      );

      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };

    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const direction = e.key === "ArrowDown" ? 1 : -1;

      targetScrollY.current = Math.min(
        Math.max(
          targetScrollY.current + baseParams.keyboardDelta * direction,
          0
        ),
        scrollingContainerRef.current?.scrollHeight! - window.innerHeight
      );

      if (!isScrolling.current) {
        isScrolling.current = true;
        animationFrameId.current = requestAnimationFrame(animate);
      }
    }
  };

  useEffect(() => {
    currentScrollY.current = window.scrollY;
    targetScrollY.current = window.scrollY;

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("keydown", handleKeyDown);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <div
      ref={scrollingContainerRef}
      style={{
        willChange: "transform",
        position: "fixed",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
};

export default SmoothScroll;
