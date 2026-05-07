"use client";

import React, { useEffect, useState } from "react";
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
  blurAmount = 2,
  borderColor = "#AA2B3A",
  glowColor = "rgba(170,43,58,0.45)",
  animationDuration = 0.7,
  pauseBetweenAnimations = 1.4,
}: TrueFocusProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
    }, (animationDuration + pauseBetweenAnimations) * 1000);

    return () => window.clearInterval(interval);
  }, [phrases.length, animationDuration, pauseBetweenAnimations]);

  return (
    <div className="focus-container">
      {phrases.map((phrase, index) => {
        const isActive = index === currentIndex;

        return (
          <motion.span
            key={phrase}
            className="focus-word"
            animate={{
              opacity: isActive ? 1 : 0.28,
              filter: isActive ? "blur(0px)" : `blur(${blurAmount}px)`,
            }}
            transition={{
              duration: animationDuration,
              ease: "easeInOut",
            }}
          >
            {phrase}

            {isActive && (
              <span
                className="focus-frame"
                style={
                  {
                    "--border-color": borderColor,
                    "--glow-color": glowColor,
                  } as React.CSSProperties
                }
              >
                <span className="corner top-left" />
                <span className="corner top-right" />
                <span className="corner bottom-left" />
                <span className="corner bottom-right" />
              </span>
            )}
          </motion.span>
        );
      })}
    </div>
  );
}