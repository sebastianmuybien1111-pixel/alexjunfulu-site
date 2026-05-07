'use client';

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./TrueFocus.css";

type TrueFocusProps = {
  phrases?: string[];
  blurAmount?: number;
  borderColor?: string;
  glowColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
};

export default function TrueFocus({
  phrases = ["INTERNATIONAL RELATIONS", "GLOBAL GOVERNANCE", "GEOPOLITICS"],
  blurAmount = 0.1,
  borderColor = "#AA2B3A",
  glowColor = "rgba(170,43,58,0.7)",
  animationDuration = 0.85,
  pauseBetweenAnimations = 1.55,
}: TrueFocusProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const phraseRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const [focusRect, setFocusRect] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
    }, (animationDuration + pauseBetweenAnimations) * 1000);

    return () => window.clearInterval(interval);
  }, [phrases.length, animationDuration, pauseBetweenAnimations]);

  useEffect(() => {
    const updateRect = () => {
      const container = containerRef.current;
      const active = phraseRefs.current[currentIndex];

      if (!container || !active) return;

      const containerRect = container.getBoundingClientRect();
      const activeRect = active.getBoundingClientRect();

      const paddingX = 18;
const paddingY = 10;

setFocusRect({
  x: activeRect.left - containerRect.left - paddingX,
  y: activeRect.top - containerRect.top - paddingY,
  width: activeRect.width + paddingX * 2,
  height: activeRect.height + paddingY * 2,
});
    };

    updateRect();
    window.addEventListener("resize", updateRect);

    return () => window.removeEventListener("resize", updateRect);
  }, [currentIndex]);

  return (
    <div
      ref={containerRef}
      className="focus-container"
    >
      {phrases.map((phrase, index) => {
        const isActive = index === currentIndex;
  
        return (
          <motion.span
  key={phrase}
  ref={(el) => {
    phraseRefs.current[index] = el;
  }}
  className="focus-word"
  animate={{
    opacity: isActive ? 1 : 0.38,
    filter: isActive ? "blur(0px)" : "blur(1.4px)",
  }}
  transition={{
    duration: animationDuration,
    ease: [0.22, 1, 0.36, 1],
  }}
>
  {phrase}
</motion.span>
        );
      })}
  
      <motion.div
        className="focus-frame"
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
        }}
        transition={{
          duration: animationDuration,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <span className="corner top-left" />
        <span className="corner top-right" />
        <span className="corner bottom-left" />
        <span className="corner bottom-right" />
      </motion.div>
    </div>
  );
}