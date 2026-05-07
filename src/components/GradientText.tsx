'use client';

import { ReactNode, useEffect, useRef } from 'react';
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from 'framer-motion';

type GradientTextProps = {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  direction?: 'horizontal' | 'vertical' | 'diagonal';
};

export default function GradientText({
  children,
  className = '',
  colors = ['#F1E6D8', '#D9B8A7', '#AA2B3A'],
  animationSpeed = 6,
  direction = 'diagonal',
}: GradientTextProps) {
  const progress = useMotionValue(0);
  const elapsedRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);

  const duration = animationSpeed * 1000;

  useAnimationFrame((time) => {
    if (lastTimeRef.current === null) {
      lastTimeRef.current = time;
      return;
    }

    const delta = time - lastTimeRef.current;
    lastTimeRef.current = time;
    elapsedRef.current += delta;

    progress.set((elapsedRef.current / duration) * 100);
  });

  useEffect(() => {
    elapsedRef.current = 0;
    progress.set(0);
  }, [animationSpeed, progress]);

  const backgroundPosition = useTransform(progress, (p) => {
    if (direction === 'vertical') return `50% ${p}%`;
    return `${p}% 50%`;
  });

  const gradientAngle =
    direction === 'vertical'
      ? 'to bottom'
      : direction === 'diagonal'
      ? 'to bottom right'
      : 'to right';

  const gradientColors = [...colors, colors[0]].join(', ');

  return (
    <motion.span
      className={className}
      style={{
        display: 'inline-block',
        backgroundImage: `linear-gradient(${gradientAngle}, ${gradientColors})`,
        backgroundSize: '300% 300%',
        backgroundRepeat: 'repeat',
        backgroundPosition,
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'transparent',
      }}
    >
      {children}
    </motion.span>
  );
}