import BlurText from "@/components/BlurText";
import DotGridBackground from "@/components/DotGridBackground";
import TrueFocus from "@/components/TrueFocus";
import ScrollFloat from "@/components/ScrollFloat";
import GradientText from "@/components/GradientText";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import TargetCursor from "@/components/TargetCursor";
import newProfile from "../../public/new-profile.jpg";

export default function Home() {
  return (
    <main className="grid-background noise relative min-h-screen overflow-hidden bg-[#28314E] text-[#F1E6D8]">
      
      {/* 提取出的独立导航栏组件 */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 text-center"
      >
        <DotGridBackground />

        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-10">
            <TrueFocus
              phrases={[
                "INTERNATIONAL RELATIONS",
                "GLOBAL GOVERNANCE",
                "GEOPOLITICS",
              ]}
              blurAmount={2}
              borderColor="#AA2B3A"
              glowColor="rgba(170,43,58,0.45)"
              animationDuration={0.7}
              pauseBetweenAnimations={1.4}
            />
          </div>

          <BlurText
            text="Alex Junfu Lu"
            delay={120}
            animateBy="words"
            direction="top"
            className="font-display max-w-5xl justify-center text-7xl font-[600] leading-none tracking-[-0.055em] text-[#F1E6D8] drop-shadow-[0_0_12px_rgba(241,230,216,0.08)] md:text-9xl"
          />

          <GradientText
            colors={["#AA2B3A", "#D9B8A7", "#F1E6D8"]}
            direction="horizontal"
            animationSpeed={8}
            className="mt-8 text-[1.05rem] font-medium tracking-[-0.01em]"
          >
            Researching power, institutions, and strategic competition in world politics.
          </GradientText>

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
      <section id="about" className="mx-auto max-w-7xl px-6 py-32">
        <div className="flex flex-col gap-14">
          {/* Top Content */}
          <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            {/* Left: Text */}
            <div>
              <p className="mb-6 text-sm uppercase tracking-[0.3em] text-[#AA2B3A]">
                About
              </p>

              <ScrollFloat className="font-display max-w-4xl text-5xl font-[500] leading-[1.05] tracking-[-0.045em] text-[#F1E6D8] md:text-6xl">
                Exploring Politics, Institutions, and Global Affairs.
              </ScrollFloat>

              <div className="mt-10 max-w-3xl space-y-8 text-[1.05rem] leading-[2.15rem] text-[#F1E6D8]/70">
                <p>
                  Alex Junfu Lu is an undergraduate student in International Relations at Xi’an Jiaotong-Liverpool University, with a strong passion for academic research, global affairs, and political analysis. His academic journey has been shaped by a deep curiosity about how institutions, ideas, and power interact within the international system.
                </p>

                <p>
                  Through extensive coursework, independent research, and conference experience, he has developed particular interests in international political economy, global governance, and contemporary political issues. Beyond the classroom, he actively engages in Model United Nations leadership, policy discussion, and conference design, viewing academic inquiry as both an intellectual pursuit and a practical engagement with the world.
                </p>
              </div>
            </div>

            {/* Right: Portrait */}
            <div className="relative mx-auto w-full max-w-[420px] overflow-hidden rounded-[2.2rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.03] lg:mt-2">
              <Image
                src={newProfile}
                alt="Alex Junfu Lu"
                sizes="(min-width: 1024px) 420px, 100vw"
                className="h-auto w-full object-cover object-center"
                priority={true}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#28314E]/20 via-transparent to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-[#F1E6D8]/10" />
            </div>
          </div>

          {/* Bottom Cards */}
          <TargetCursor
  spinDuration={3.5}
  hoverDuration={0.3}
/>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                label: "Research",
                title: "Academic Inquiry • Political Analysis",
                description:
                  "Driven by curiosity and critical thinking to understand power, ideas, and political dynamics in the international system.",
              },
              {
                label: "Governance",
                title: "Institutions • Global Affairs",
                description:
                  "Exploring how institutions shape collective action and global challenges through governance, policy, and international cooperation.",
              },
              {
                label: "Diplomacy",
                title: "Negotiation • Multilateralism",
                description:
                  "Engaging in dialogue and negotiation across diverse perspectives to build understanding and advance cooperative solutions.",
              },
              {
                label: "Conferences",
                title: "MUN • Committee Design",
                description:
                  "Designing meaningful MUN experiences and fostering impactful discussions through structure, leadership, and collaboration.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="cursor-target rounded-[2rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.035] p-8 backdrop-blur-sm transition hover:border-[#AA2B3A]/30"
              >
                <p className="text-sm uppercase tracking-[0.32em] text-[#AA2B3A]">
                  {item.label}
                </p>

                <div className="mt-5 h-px w-10 bg-[#AA2B3A]" />

                <h3 className="font-display mt-10 text-[2rem] font-[700] leading-[1.05] tracking-[-0.04em] text-[#F1E6D8]">
                  {item.title}
                </h3>

                <p className="mt-7 text-[1.02rem] leading-[2rem] text-[#F1E6D8]/65">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research */}
      <section id="research" className="mx-auto max-w-6xl px-6 py-32">
        <div className="mb-20">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#AA2B3A]">
            Research
          </p>

          <ScrollFloat className="font-display text-5xl font-[500] leading-[1.08] tracking-[-0.03em] text-[#F1E6D8] md:text-6xl">
          Research Directions and Working Papers
          </ScrollFloat>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#F1E6D8]/70">
          An evolving body of research focused on power, institutions, negotiation, and the political dynamics shaping international affairs.
          </p>
        </div>

        <div className="space-y-8">
          {[
            {
              year: "2026",
              status: "Working Paper",
              title:
                "The Myth of Indonesian Neutrality: Strategic Ambiguity and Selective Alignment in Southeast Asian Great-Power Politics",
              abstract:
                "This project examines how Indonesia navigates Sino-American rivalry through hedging, selective alignment, and institutional ambiguity rather than conventional neutrality.",
              keywords: ["Indonesia", "Hedging", "ASEAN", "Indo-Pacific"],
              href: "/research/indonesia-hedging",
            },
            {
              year: "2026",
              status: "Research Theme",
              title:
                "Climate Governance and Institutional Inequality",
              abstract:
                "This research direction explores how climate finance, fragmented governance, and unequal responsibility allocation shape contemporary global climate politics.",
              keywords: ["Climate Finance", "Global Governance", "Inequality"],
              href: "#",
            },
            {
              year: "2026",
              status: "Research Theme",
              title:
                "International Organizations and Procedural Power",
              abstract:
                "This theme examines how institutional procedures, rules of negotiation, and consensus mechanisms shape political outcomes in international organizations.",
              keywords: ["Institutions", "Procedure", "Negotiation"],
              href: "#",
            },
          ].map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group block rounded-[2rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-8 transition hover:-translate-y-1 hover:border-[#AA2B3A]/50 hover:bg-[#F1E6D8]/[0.07] md:p-10"
            >
              <div className="mb-8 flex flex-wrap gap-4 text-sm uppercase tracking-[0.18em]">
                <span className="text-[#F1E6D8]/50">{item.year}</span>
                <span className="text-[#AA2B3A]">{item.status}</span>
              </div>

              <h3 className="font-display max-w-4xl text-4xl font-medium leading-tight tracking-[-0.03em] text-[#F1E6D8] md:text-5xl">
                {item.title}
              </h3>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#F1E6D8]/70">
                {item.abstract}
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                {item.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full border border-[#F1E6D8]/10 px-4 py-2 text-sm text-[#F1E6D8]/65"
                  >
                    {keyword}
                  </span>
                ))}
              </div>

              <p className="mt-10 text-sm uppercase tracking-[0.2em] text-[#AA2B3A] opacity-80 transition group-hover:opacity-100">
                Read Article →
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

          <ScrollFloat className="font-display text-5xl font-[500] leading-[1.08] tracking-[-0.03em] text-[#F1E6D8] md:text-6xl">
            Institutional and Conference Work
          </ScrollFloat>
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
                ariaLabel: "Send an academic email to Alex Junfu Lu",
              },
              {
                label: "Personal Email",
                value: "sebastianmuybien1111@gmail.com",
                href: "mailto:sebastianmuybien1111@gmail.com",
                ariaLabel: "Send a personal email to Alex Junfu Lu",
              },
              {
                label: "GitHub",
                value: "github.com/sebastianmuybien1111-pixel",
                href: "https://github.com/sebastianmuybien1111-pixel",
                ariaLabel: "Visit Alex Junfu Lu's GitHub profile",
              },
              {
                label: "Instagram",
                value: "@sebastien111105",
                href: "https://www.instagram.com/sebastien111105",
                ariaLabel: "Visit Alex Junfu Lu's Instagram profile",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={item.ariaLabel}
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
