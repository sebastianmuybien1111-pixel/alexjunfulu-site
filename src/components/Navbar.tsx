"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "About", href: "/#about", id: "about" },
  { name: "Research", href: "/#research", id: "research" },
  { name: "Projects", href: "/#projects", id: "projects" },
  { name: "Notes & Fragments", href: "/notes-fragments", id: "notes-fragments" },
  { name: "CV", href: "/cv", id: "cv" },
  { name: "Contact", href: "/#contact", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const routeActiveSection =
    pathname === "/"
      ? null
      : pathname.startsWith("/research")
        ? "research"
        : pathname.startsWith("/notes-fragments")
          ? "notes-fragments"
          : pathname.startsWith("/cv")
            ? "cv"
            : navLinks.find((link) => link.href === pathname)?.id ?? "";

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

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
  }, [pathname]);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#F1E6D8]/10 bg-[#28314E]/75 backdrop-blur-xl">
      <nav className="mx-auto max-w-7xl px-4 py-4 md:flex md:items-center md:justify-between md:px-6 md:py-5">
        <div className="flex items-center justify-between">
          <Link
            href="/#home"
            className="font-display text-[2rem] font-semibold tracking-[-0.03em] text-[#F1E6D8] md:text-2xl"
          >
            Alex Junfu Lu
          </Link>
        </div>

        <div className="hidden items-center gap-5 text-sm text-[#F1E6D8]/70 md:flex lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`transition hover:text-[#AA2B3A] ${
                (routeActiveSection ?? activeSection) === link.id
                  ? "text-[#AA2B3A] font-medium"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 text-[0.68rem] text-[#F1E6D8]/68 sm:grid-cols-3 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`rounded-full border px-3 py-2.5 text-center transition hover:border-[#AA2B3A]/55 hover:text-[#AA2B3A] ${
                (routeActiveSection ?? activeSection) === link.id
                  ? "border-[#AA2B3A]/55 bg-[#AA2B3A]/10 text-[#AA2B3A]"
                  : "border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.035]"
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
