'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import './TrueFocus.css';

const TrueFocus = ({
  phrases = [
    'INTERNATIONAL RELATIONS',
    'GLOBAL GOVERNANCE',
    'GEOPOLITICS',
  ],
  manualMode = false,
  blurAmount = 3,
  borderColor = '#AA2B3A',
  glowColor = 'rgba(170,43,58,0.35)',
  animationDuration = 1.2,
  pauseBetweenAnimations = 1.2,
}) => {
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
    if (!manualMode) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
      }, (animationDuration + pauseBetweenAnimations) * 1000);

      return () => clearInterval(interval);
    }
  }, [
    manualMode,
    animationDuration,
    pauseBetweenAnimations,
    phrases.length,
  ]);

  useEffect(() => {
    if (!phraseRefs.current[currentIndex] || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect =
      phraseRefs.current[currentIndex].getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height,
    });
  }, [currentIndex]);

  return (
    <div className="focus-container" ref={containerRef}>
      {phrases.map((phrase, index) => {
        const isActive = index === currentIndex;

        return (
          <span
            key={index}
            ref={(el: HTMLSpanElement | null) => {
                phraseRefs.current[index] = el;
              }}
            className="focus-word"
            style={
                {
                  filter: isActive
                    ? 'blur(0px)'
                    : `blur(${blurAmount}px)`,
                  '--border-color': borderColor,
                  '--glow-color': glowColor,
                  transition: `all ${animationDuration}s ease-in-out`,
                } as React.CSSProperties
              }
          >
            {phrase}
          </span>
        );
      })}

      <motion.div
        className="focus-frame"
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: 1,
        }}
        transition={{
          duration: animationDuration,
          ease: 'easeInOut',
        }}
        style={
            {
              '--border-color': borderColor,
              '--glow-color': glowColor,
            } as React.CSSProperties
          }
      >
        <span className="corner top-left"></span>
        <span className="corner top-right"></span>
        <span className="corner bottom-left"></span>
        <span className="corner bottom-right"></span>
      </motion.div>
    </div>
  );
};

export default TrueFocus;