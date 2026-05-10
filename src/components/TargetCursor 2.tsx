"use client";

import { useEffect, useRef } from "react";
import "./TargetCursor.css";

type Props = {
  spinDuration?: number;
  hoverDuration?: number;
  hideDefaultCursor?: boolean;
};

export default function TargetCursor({
  spinDuration = 3.5,
  hoverDuration = 0.3,
}: Props) {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) return;

    const targets = document.querySelectorAll(".cursor-target");

    const handleMouseEnter = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();

      cursor.style.opacity = "1";
      cursor.style.width = `${rect.width + 20}px`;
      cursor.style.height = `${rect.height + 20}px`;
      cursor.style.transform = `translate(${rect.left - 10}px, ${rect.top - 10}px)`;
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = "0";
    };

    targets.forEach((target) => {
      target.addEventListener("mouseenter", handleMouseEnter);
      target.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      targets.forEach((target) => {
        target.removeEventListener("mouseenter", handleMouseEnter);
        target.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="target-cursor-wrapper"
      style={{
        transition: `all ${hoverDuration}s ease`,
      }}
    >
      <div
        className="target-corner top-left"
        style={{ animationDuration: `${spinDuration}s` }}
      />
      <div
        className="target-corner top-right"
        style={{ animationDuration: `${spinDuration}s` }}
      />
      <div
        className="target-corner bottom-left"
        style={{ animationDuration: `${spinDuration}s` }}
      />
      <div
        className="target-corner bottom-right"
        style={{ animationDuration: `${spinDuration}s` }}
      />
    </div>
  );
}