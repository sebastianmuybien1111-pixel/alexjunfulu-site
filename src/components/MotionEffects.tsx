"use client";

import { useEffect } from "react";

const revealSelector = [
  ".section-heading",
  ".agenda-item",
  ".method-strip > div",
  ".project-card",
  ".institution-block",
  ".experience-block",
  ".engagement-list article",
  ".updates-list a",
  ".contact-band__inner > *",
  ".page-header > *",
  ".page-section",
  ".research-detail__header > *",
  ".research-detail__section",
  ".archive-card",
  ".cv-section",
  ".contact-grid > *",
  ".research-statement__inner > *",
  ".agenda-v2__clusters article",
  ".research-map",
  ".current-research-v2__header > *",
  ".current-research-v2__body > *",
  ".research-timeline li",
  ".profile-band__grid > *",
  ".engagement-v2__list article",
  ".contact-v2__inner > *",
  ".experience-ledger article",
  ".research-experience-index li",
  ".engagement-stats > div",
  ".featured-conference__grid > *",
  ".leadership-card",
  ".dais-ledger article",
  ".honours-grid article",
  ".delegate-ledger article",
  ".organisation-timeline article",
  ".conference-archive details",
].join(",");

export default function MotionEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    root.classList.add("motion-ready");
    elements.forEach((element, index) => {
      element.dataset.reveal = "";
      element.style.setProperty("--reveal-delay", `${(index % 3) * 70}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      root.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
