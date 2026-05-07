import BlurText from "@/components/BlurText";
import DotGridBackground from "@/components/DotGridBackground";

export default function Home() {
  return (
    <main className="grid-background noise relative min-h-screen overflow-hidden bg-[#28314E] text-[#F1E6D8]">
      {/* Navbar */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-[#F1E6D8]/10 bg-[#28314E]/75 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a
            href="#home"
            className="font-display text-2xl font-semibold tracking-[-0.03em] text-[#F1E6D8]"
          >
            Alex Junfu Lu
          </a>

          <div className="hidden items-center gap-8 text-sm text-[#F1E6D8]/70 md:flex">
            <a href="#about" className="transition hover:text-[#AA2B3A]">
              About
            </a>

            <a href="#research" className="transition hover:text-[#AA2B3A]">
              Research
            </a>

            <a href="#projects" className="transition hover:text-[#AA2B3A]">
              Projects
            </a>

            <a href="/cv" className="transition hover:text-[#AA2B3A]">
              CV
            </a>

            <a href="#contact" className="transition hover:text-[#AA2B3A]">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 text-center"
      >
        <DotGridBackground />

        <div className="relative z-10 flex flex-col items-center">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-[#AA2B3A]">
            INTERNATIONAL RELATIONS · GLOBAL GOVERNANCE · GEOPOLITICS
          </p>

          <BlurText
            text="Alex Junfu Lu"
            delay={120}
            animateBy="words"
            direction="top"
            className="font-display max-w-5xl justify-center text-7xl font-semibold leading-none tracking-[-0.04em] text-[#F1E6D8] md:text-9xl"
          />

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#F1E6D8]/75 md:text-xl">
          Researching institutional power, Indo-Pacific geopolitics, global governance, and strategic competition in contemporary international relations.
          </p>

          <div className="mt-12 flex gap-6">
            <a
              href="#research"
              className="rounded-full border border-[#F1E6D8]/25 px-8 py-3 text-[#F1E6D8] transition hover:border-[#AA2B3A] hover:text-[#AA2B3A]"
            >
              View Research
            </a>

            <a
              href="#contact"
              className="rounded-full bg-[#F1E6D8] px-8 py-3 text-[#28314E] transition hover:bg-[#AA2B3A] hover:text-[#F1E6D8]"
            >
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-32">
        <div className="grid gap-16 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#AA2B3A]">
              About
            </p>

            <h2 className="font-display text-5xl font-semibold tracking-[-0.03em] text-[#F1E6D8] md:text-6xl">
              A research-oriented student of world politics.
            </h2>
          </div>

          <div className="space-y-8 text-lg leading-8 text-[#F1E6D8]/75">
            <p>
              Alex Junfu Lu is an undergraduate student in International
              Relations at Xi’an Jiaotong-Liverpool University.
            </p>

            <p>
              His research focuses on Indo-Pacific geopolitics, institutional
              governance, climate governance, and international political
              economy.
            </p>

            <div className="grid gap-4 pt-6 md:grid-cols-3">
              {[
                ["Education", "Xi’an Jiaotong-Liverpool University"],
                ["Field", "International Relations"],
                ["Practice", "Research · MUN · Conference Design"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-5"
                >
                  <p className="text-sm uppercase tracking-[0.2em] text-[#AA2B3A]">
                    {label}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-[#F1E6D8]/70">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research */}
      <section id="research" className="mx-auto max-w-6xl px-6 py-32">
        <div className="mb-20">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#AA2B3A]">
            Research Focus
          </p>

          <h2 className="font-display text-5xl font-semibold tracking-[-0.03em] text-[#F1E6D8] md:text-6xl">
            Current Areas of Interest
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              title: "Indo-Pacific Strategy and Hedging",
              description:
                "Researching middle-power diplomacy, strategic ambiguity, ASEAN centrality, and geopolitical competition in the Indo-Pacific.",
              href: "/research/indonesia-hedging",
            },
            {
              title: "Climate Governance",
              description:
                "Exploring institutional fragmentation, climate finance, and global responsibility distribution.",
              href: "#",
            },
            {
              title: "International Organizations",
              description:
                "Analyzing procedural governance and institutional negotiation mechanisms.",
              href: "#",
            },
            {
              title: "Global Political Economy",
              description:
                "Examining protectionism, strategic supply chains, and economic interdependence.",
              href: "#",
            },
          ].map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group rounded-3xl border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-8 transition hover:-translate-y-1 hover:border-[#AA2B3A]/50 hover:bg-[#F1E6D8]/[0.07]"
            >
              <h3 className="font-display mb-4 text-3xl font-medium tracking-[-0.02em] text-[#F1E6D8]">
                {item.title}
              </h3>

              <p className="leading-7 text-[#F1E6D8]/70">
                {item.description}
              </p>

              <p className="mt-8 text-sm uppercase tracking-[0.2em] text-[#AA2B3A] opacity-80 transition group-hover:opacity-100">
                Read more →
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-32">
        <div className="mb-20">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#AA2B3A]">
            Academic Projects
          </p>

          <h2 className="font-display text-5xl font-semibold tracking-[-0.03em] text-[#F1E6D8] md:text-6xl">
            Institutional and Conference Work
          </h2>
        </div>

        <div className="space-y-6">
          {[
            {
              year: "2026",
              role: "Academic Director",
              title: "Suzhou International Model United Nations",
            },
            {
              year: "2026",
              role: "Rules Designer",
              title: "WHO Executive Board Special Session",
            },
            {
              year: "2026",
              role: "Research Lead",
              title: "UNODC Background Guide",
            },
          ].map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-8"
            >
              <div className="mb-4 flex items-center gap-4 text-sm uppercase tracking-[0.18em]">
                <p className="text-[#F1E6D8]/50">{project.year}</p>

                <p className="text-[#AA2B3A]">{project.role}</p>
              </div>

              <h3 className="font-display text-4xl tracking-[-0.03em] text-[#F1E6D8]">
                {project.title}
              </h3>
            </article>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-32">
        <div className="rounded-[2rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-10 md:p-14">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#AA2B3A]">
            Contact
          </p>

          <h2 className="font-display text-5xl font-semibold tracking-[-0.03em] text-[#F1E6D8] md:text-6xl">
            For academic collaboration and research exchange.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                label: "Academic Email",
                value: "junfu.lu24@student.xjtlu.edu.cn",
                href: "mailto:junfu.lu24@student.xjtlu.edu.cn",
              },
              {
                label: "Personal Email",
                value: "sebastianmuybien1111@gmail.com",
                href: "mailto:sebastianmuybien1111@gmail.com",
              },
              {
                label: "GitHub",
                value: "github.com/sebastianmuybien1111-pixel",
                href: "https://github.com/sebastianmuybien1111-pixel",
              },
              {
                label: "Instagram",
                value: "@sebastien111105",
                href: "https://www.instagram.com/sebastien111105",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="rounded-2xl border border-[#F1E6D8]/10 bg-[#28314E]/60 p-6 transition hover:border-[#AA2B3A]/50"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-[#AA2B3A]">
                  {item.label}
                </p>

                <p className="mt-4 break-words text-[#F1E6D8]/80">
                  {item.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-[#F1E6D8]/10 py-10 text-center text-sm text-[#F1E6D8]/55">
        © 2026 Alex Junfu Lu. All rights reserved.
      </footer>
    </main>
  );
}