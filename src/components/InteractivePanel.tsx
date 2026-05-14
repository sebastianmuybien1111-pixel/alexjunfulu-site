"use client";

import type { CSSProperties, PointerEvent, ReactNode } from "react";
import { useRef } from "react";

type InteractivePanelProps = {
  children: ReactNode;
  className?: string;
};

export default function InteractivePanel({
  children,
  className = "",
}: InteractivePanelProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const panel = ref.current;

    if (!panel) return;

    const rect = panel.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -5;
    const rotateY = ((x / rect.width) - 0.5) * 5;

    panel.style.setProperty("--panel-x", `${x}px`);
    panel.style.setProperty("--panel-y", `${y}px`);
    panel.style.setProperty("--panel-rotate-x", `${rotateX}deg`);
    panel.style.setProperty("--panel-rotate-y", `${rotateY}deg`);
  };

  const handlePointerLeave = () => {
    const panel = ref.current;

    if (!panel) return;

    panel.style.setProperty("--panel-rotate-x", "0deg");
    panel.style.setProperty("--panel-rotate-y", "0deg");
  };

  return (
    <div
      ref={ref}
      className={`interactive-panel ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={
        {
          "--panel-x": "50%",
          "--panel-y": "50%",
          "--panel-rotate-x": "0deg",
          "--panel-rotate-y": "0deg",
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
