"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "research", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // 初始化
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/#about", id: "about" },
    { name: "Research", href: "/#research", id: "research" },
    { name: "Projects", href: "/#projects", id: "projects" },
    { name: "CV", href: "/cv", id: "cv" },
    { name: "Contact", href: "/#contact", id: "contact" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#F1E6D8]/10 bg-[#28314E]/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/#home"
          className="font-display text-2xl font-semibold tracking-[-0.03em] text-[#F1E6D8]"
        >
          Alex Junfu Lu
        </Link>

        <div className="hidden items-center gap-8 text-sm text-[#F1E6D8]/70 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`transition hover:text-[#AA2B3A] ${
                activeSection === link.id ? "text-[#AA2B3A] font-medium" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}