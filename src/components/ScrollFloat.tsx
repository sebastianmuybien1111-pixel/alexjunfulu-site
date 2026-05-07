"use client";

import { useEffect, useRef, useState } from "react";

type ScrollFloatProps = {
  children: string;
  className?: string;
};

export default function ScrollFloat({
  children,
  className = "",
}: ScrollFloatProps) {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const words = children.split(" ");

  return (
    <h2 ref={ref} className={className}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0px)" : "translateY(32px)",
            filter: visible ? "blur(0px)" : "blur(8px)",
            transition: "opacity 700ms ease, transform 700ms ease, filter 700ms ease",
            transitionDelay: `${index * 45}ms`,
          }}
        >
          {word}
          {index < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </h2>
  );
}