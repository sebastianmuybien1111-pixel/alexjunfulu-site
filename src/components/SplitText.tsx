"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as GSAPSplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, GSAPSplitText);

type SplitType = "chars" | "words" | "lines" | "words, chars";
type SplitTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

type SplitTextInstance = {
  chars?: HTMLElement[];
  words?: HTMLElement[];
  lines?: HTMLElement[];
  revert: () => void;
};

type SplitTextConstructor = new (
  element: HTMLElement,
  vars: Record<string, unknown>,
) => SplitTextInstance;

export type SplitTextProps = {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string | ((t: number) => number);
  splitType?: SplitType;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  tag?: SplitTag;
  textAlign?: React.CSSProperties["textAlign"];
  clip?: boolean;
  onLetterAnimationComplete?: () => void;
};

const SplitTextCtor = GSAPSplitText as unknown as SplitTextConstructor;

const getScrollStart = (threshold: number, rootMargin: string) => {
  const startPct = (1 - threshold) * 100;
  const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
  const marginValue = marginMatch ? Number.parseFloat(marginMatch[1]) : 0;
  const marginUnit = marginMatch?.[2] ?? "px";

  if (marginValue === 0) {
    return `top ${startPct}%`;
  }

  const operator = marginValue < 0 ? "-=" : "+=";

  return `top ${startPct}%${operator}${Math.abs(marginValue)}${marginUnit}`;
};

export default function SplitText({
  text,
  className = "",
  delay = 42,
  duration = 1.05,
  ease = "power3.out",
  splitType = "words, chars",
  from = { opacity: 0, y: 34, rotateX: -16, filter: "blur(8px)" },
  to = { opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" },
  threshold = 0.14,
  rootMargin = "-80px",
  tag = "p",
  textAlign = "inherit",
  clip = true,
  onLetterAnimationComplete,
}: SplitTextProps) {
  const ref = useRef<HTMLElement | null>(null);
  const animationCompletedRef = useRef(false);
  const onCompleteRef = useRef(onLetterAnimationComplete);
  const [fontsLoaded, setFontsLoaded] = useState(() => {
    if (typeof document === "undefined") {
      return false;
    }

    return !("fonts" in document) || document.fonts.status === "loaded";
  });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    onCompleteRef.current = onLetterAnimationComplete;
  }, [onLetterAnimationComplete]);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    if (!("fonts" in document) || document.fonts.status === "loaded") {
      return;
    }

    document.fonts.ready.then(() => setFontsLoaded(true));
  }, [fontsLoaded]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };
    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateScreenSize = () => {
      setIsSmallScreen(mediaQuery.matches);
    };
    updateScreenSize();
    mediaQuery.addEventListener("change", updateScreenSize);

    return () => {
      mediaQuery.removeEventListener("change", updateScreenSize);
    };
  }, []);

  useEffect(() => {
    const element = ref.current;

    if (!element || !text || !fontsLoaded || prefersReducedMotion || isSmallScreen) {
      return;
    }

    if (animationCompletedRef.current) {
      return;
    }

    const start = getScrollStart(threshold, rootMargin);
    let splitInstance: SplitTextInstance | undefined;

    const context = gsap.context(() => {
      splitInstance = new SplitTextCtor(element, {
        type: splitType,
        smartWrap: true,
        autoSplit: splitType === "lines",
        linesClass: "split-line",
        wordsClass: "split-word",
        charsClass: "split-char",
        reduceWhiteSpace: false,
        onSplit: (self: SplitTextInstance) => {
          const targets =
            splitType.includes("chars") && self.chars?.length
              ? self.chars
              : splitType.includes("words") && self.words?.length
                ? self.words
                : splitType.includes("lines") && self.lines?.length
                  ? self.lines
                  : self.chars ?? self.words ?? self.lines ?? [element];

          return gsap.fromTo(
            targets,
            { ...from },
            {
              ...to,
              duration,
              ease,
              stagger: delay / 1000,
              scrollTrigger: {
                trigger: element,
                start,
                once: true,
                fastScrollEnd: true,
                anticipatePin: 0.4,
              },
              onComplete: () => {
                animationCompletedRef.current = true;
                onCompleteRef.current?.();
              },
              willChange: "transform, opacity, filter",
              force3D: true,
            },
          );
        },
      });
    }, element);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });

      splitInstance?.revert();
      context.revert();
    };
  }, [
    delay,
    duration,
    ease,
    fontsLoaded,
    from,
    prefersReducedMotion,
    rootMargin,
    splitType,
    text,
    threshold,
    to,
    isSmallScreen,
  ]);

  return React.createElement(
    tag,
    {
      ref,
      className: `split-parent inline-block ${
        clip ? "overflow-hidden" : "overflow-visible"
      } whitespace-normal ${className}`,
      style: {
        textAlign,
        transformStyle: "preserve-3d",
        wordWrap: "break-word",
        willChange: isSmallScreen ? "auto" : "transform, opacity",
      },
    },
    text,
  );
}
