import BlurText from "@/components/BlurText";
export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0B0B0F] text-[#F5F5F5]">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-10rem] h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-[#8FA7BF]/10 blur-[120px]" />
        <div className="absolute bottom-[-10rem] right-[-5rem] h-[30rem] w-[30rem] rounded-full bg-[#C2A878]/10 blur-[120px]" />
      </div>

      {/* Navbar */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#0B0B0F]/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#home" className="font-display text-2xl font-semibold tracking-[-0.03em]">
            Alex Junfu Lu
          </a>

          <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
  <a href="#about" className="transition hover:text-[#F5F5F5]">
    About
  </a>

  <a href="#research" className="transition hover:text-[#F5F5F5]">
    Research
  </a>

  <a href="#projects" className="transition hover:text-[#F5F5F5]">
    Projects
  </a>

  <a href="/cv" className="transition hover:text-[#F5F5F5]">
    CV
  </a>

  <a href="#contact" className="transition hover:text-[#F5F5F5]">
    Contact
  </a>
</div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center"
      >
        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-[#8FA7BF]">
          International Relations · Global Governance · Geopolitics
        </p>

        <BlurText
  text="Alex Junfu Lu"
  delay={120}
  animateBy="words"
  direction="top"
  className="font-display max-w-5xl justify-center text-7xl font-semibold leading-none tracking-[-0.04em] md:text-9xl"
/>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
          Undergraduate researcher in International Relations, focusing on
          institutional power, Indo-Pacific geopolitics, climate governance, and
          international political economy.
        </p>

        <div className="mt-12 flex gap-6">
          <a
            href="#research"
            className="rounded-full border border-zinc-700 px-8 py-3 transition hover:border-[#8FA7BF] hover:text-[#8FA7BF]"
          >
            View Research
          </a>

          <a
            href="#contact"
            className="rounded-full bg-[#F5F5F5] px-8 py-3 text-black transition hover:opacity-80"
          >
            Contact
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-32">
        <div className="grid gap-16 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#C2A878]">
              About
            </p>

            <h2 className="font-display text-5xl font-semibold tracking-[-0.03em] md:text-6xl">
              A research-oriented student of world politics.
            </h2>
          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">
            <p>
              Alex Junfu Lu is an undergraduate student in International
              Relations at Xi’an Jiaotong-Liverpool University. His academic
              interests lie in global governance, international political
              economy, Indo-Pacific security, and the role of institutions in
              shaping power relations.
            </p>

            <p>
              His current work examines how states, international organizations,
              and institutional procedures respond to strategic uncertainty,
              geopolitical rivalry, and unequal responsibility in global
              governance.
            </p>

            <div className="grid gap-4 pt-6 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-[#8FA7BF]">
                  Education
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  Xi’an Jiaotong-Liverpool University
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-[#8FA7BF]">
                  Field
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  International Relations
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-[#8FA7BF]">
                  Practice
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  Research · MUN · Conference Design
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Focus */}
<section id="research" className="mx-auto max-w-6xl px-6 py-32">
  <div className="mb-20">
    <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#8FA7BF]">
      Research Focus
    </p>

    <h2 className="font-display text-5xl font-semibold tracking-[-0.03em] md:text-6xl">
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
        title: "Climate Governance and Institutional Inequality",
        description:
          "Exploring climate finance, institutional fragmentation, and the unequal distribution of responsibilities in global governance.",
        href: "#",
      },
      {
        title: "International Organizations",
        description:
          "Analyzing institutional procedure, consensus-building, and governance mechanisms within international organizations.",
        href: "#",
      },
      {
        title: "Global Political Economy",
        description:
          "Examining trade, protectionism, strategic supply chains, and the political consequences of economic interdependence.",
        href: "#",
      },
    ].map((item) => (
      <a
        key={item.title}
        href={item.href}
        className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:-translate-y-1 hover:border-[#8FA7BF]/40 hover:bg-white/[0.07]"
      >
        <h3 className="font-display mb-4 text-3xl font-medium tracking-[-0.02em]">
          {item.title}
        </h3>

        <p className="leading-7 text-zinc-400">{item.description}</p>

        <p className="mt-8 text-sm uppercase tracking-[0.2em] text-[#8FA7BF] opacity-70 transition group-hover:opacity-100">
          Read more →
        </p>
      </a>
    ))}
  </div>
</section>

      {/* Projects */}
<section id="projects" className="mx-auto max-w-6xl px-6 py-32">
  <div className="mb-20">
    <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#C2A878]">
      Academic Projects
    </p>

    <h2 className="font-display text-5xl font-semibold tracking-[-0.03em] md:text-6xl">
      Institutional and Conference Work
    </h2>

    <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
      Selected academic and institutional projects combining research,
      procedural design, and conference leadership.
    </p>
  </div>

  <div className="space-y-6">
    {[
      {
        year: "2026",
        role: "Academic Director",
        type: "Conference Design",
        title: "Suzhou International Model United Nations",
        description:
          "Led academic planning, committee coordination, and standards design for an international Model United Nations conference hosted at Xi’an Jiaotong-Liverpool University.",
      },
      {
        year: "2026",
        role: "Rules Designer",
        type: "Institutional Simulation",
        title: "WHO Executive Board Special Session Simulation",
        description:
          "Designed a motion-driven Rules of Procedure system to replace the traditional General Speakers List and encourage consensus-oriented institutional negotiation.",
      },
      {
        year: "2026",
        role: "Research Lead",
        type: "Committee Framework",
        title: "UNODC Committee Background Guide",
        description:
          "Developed a structured research framework for transnational crime governance, integrating committee design, glossary architecture, and policy-oriented background analysis.",
      },
    ].map((project) => (
      <article
        key={project.title}
        className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-[#C2A878]/40 hover:bg-white/[0.07] md:grid-cols-[0.25fr_1fr]"
      >
        <div className="space-y-4 text-sm uppercase tracking-[0.18em] text-zinc-500">
          <p>{project.year}</p>
          <p className="text-[#C2A878]">{project.role}</p>
          <p>{project.type}</p>
        </div>

        <div>
          <h3 className="font-display mb-4 text-4xl font-medium tracking-[-0.03em]">
            {project.title}
          </h3>

          <p className="max-w-3xl leading-7 text-zinc-400">
            {project.description}
          </p>
        </div>
      </article>
    ))}
  </div>
</section>
      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-32">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 md:p-14">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#8FA7BF]">
            Contact
          </p>

          <h2 className="font-display text-5xl font-semibold tracking-[-0.03em] md:text-6xl">
            For academic collaboration, conference work, or research exchange.
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
              {
                label: "TikTok",
                value: "@Alex_supercool",
                href: "https://www.tiktok.com/@Alex_supercool",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="rounded-2xl border border-white/10 bg-[#0B0B0F]/60 p-6 transition hover:border-[#8FA7BF]/40 hover:bg-white/[0.07]"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-[#8FA7BF]">
                  {item.label}
                </p>

                <p className="mt-4 break-words text-zinc-300">{item.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
      <footer className="border-t border-white/10 py-10 text-center text-sm text-zinc-500">
        © 2026 Alex Junfu Lu. All rights reserved.
      </footer>
    </main>
  );
}