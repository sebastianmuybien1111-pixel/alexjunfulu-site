import DotGridBackground from "@/components/DotGridBackground";
import TrueFocus from "@/components/TrueFocus";
import GradientText from "@/components/GradientText";
import InteractivePanel from "@/components/InteractivePanel";
import SplitText from "@/components/SplitText";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import TargetCursor from "@/components/TargetCursor";

const researchAreas = [
  "International Relations",
  "Global Governance",
  "Strategic Competition",
  "Institutional Design",
];

const profileHighlights = [
  {
    value: "IR",
    label: "Undergraduate Research",
  },
  {
    value: "MUN",
    label: "Conference Leadership",
  },
  {
    value: "IPE",
    label: "Political Economy Focus",
  },
];

const capabilityCards = [
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
];

const researchItems = [
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
    title: "Climate Governance and Institutional Inequality",
    abstract:
      "This project examines the Financial Rift between emissions, vulnerability, and climate finance, proposing a justice-based Climate Policy Coordination Alliance.",
    keywords: ["Climate Justice", "Financial Rift", "CPCA", "Global South"],
    href: "/research/climate-governance",
  },
  {
    year: "2026",
    status: "Research Article",
    title:
      "De-Escalatory Institutionalism in the Grey Zone: How Informal Regional Institutions Manage Great-Power Rivalry Where Formal Authority Fails",
    abstract:
      "This article explains how ASEAN's informal institutional architecture manages South China Sea grey-zone tensions through normative enmeshment, ritualized ambiguity, and reputational friction.",
    keywords: ["ASEAN", "Grey-Zone Conflict", "Informal Institutions"],
    href: "/research/de-escalatory-institutionalism",
  },
];

const academicProjects = [
  {
    year: "2026",
    role: "Academic Director",
    title: "Suzhou International Model United Nations",
    detail:
      "Leading committee architecture, research standards, and delegate-facing academic experience.",
  },
  {
    year: "2026",
    role: "Rules Designer",
    title: "WHO Executive Board Special Session",
    detail:
      "Designing procedure, crisis rhythm, and negotiation incentives for a public-health simulation.",
  },
  {
    year: "2026",
    role: "Research Lead",
    title: "UNODC Background Guide",
    detail:
      "Building issue briefs that connect institutional mandates, security dynamics, and policy tradeoffs.",
  },
];

const currentFocusSignals = [
  {
    label: "Regional Order",
    title: "Strategic ambiguity as political practice",
    detail:
      "Tracing how neutrality, hedging, and selective alignment operate less as fixed categories than as negotiated political language.",
  },
  {
    label: "Climate Politics",
    title: "Responsibility under unequal institutional design",
    detail:
      "Following how financial asymmetry and governance architecture shape who is asked to pay, adapt, and justify delay.",
  },
  {
    label: "Institutional Method",
    title: "Formal weakness, informal restraint",
    detail:
      "Studying how ritual, reputation, and procedural ambiguity still structure behavior where enforcement remains thin.",
  },
];

const workingModes = [
  "Case analysis",
  "Institutional design",
  "Simulation writing",
  "Visual argument building",
];

const contactLinks = [
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
];

export default function Home() {
  return (
    <main className="grid-background noise relative min-h-screen overflow-hidden bg-[#28314E] text-[#F1E6D8]">
      <Navbar />

      <section
        id="home"
        className="relative flex min-h-[auto] flex-col items-center justify-start overflow-hidden px-4 pb-20 pt-44 text-center sm:px-6 md:min-h-screen md:justify-center md:pt-24"
      >
        <DotGridBackground />

        <div className="pointer-events-none absolute inset-x-0 top-24 z-0 mx-auto h-80 max-w-5xl rounded-full bg-[#AA2B3A]/10 blur-3xl" />

        <div className="relative z-10 flex max-w-6xl flex-col items-center">
          <div className="mb-6 rounded-full border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.035] px-4 py-2 text-[0.68rem] uppercase tracking-[0.22em] text-[#F1E6D8]/65 backdrop-blur-md sm:mb-8 sm:px-5 sm:text-xs sm:tracking-[0.28em]">
            Academic Portfolio • International Relations
          </div>

          <div className="mb-8 w-full overflow-hidden px-1 sm:mb-10">
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

          <SplitText
            text="Alex Junfu Lu"
            tag="h1"
            splitType="words, chars"
            delay={32}
            duration={1.15}
            threshold={0.02}
            rootMargin="0px"
            textAlign="center"
            clip={false}
            from={{ opacity: 0, y: 46, rotateX: -24, filter: "blur(12px)" }}
            to={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
            className="font-display max-w-5xl text-[4.2rem] font-[600] leading-[0.9] tracking-[-0.05em] text-[#F1E6D8] drop-shadow-[0_18px_45px_rgba(0,0,0,0.22)] sm:text-6xl md:text-9xl md:tracking-[-0.06em]"
          />

          <GradientText
            colors={["#AA2B3A", "#D9B8A7", "#F1E6D8"]}
            direction="horizontal"
            animationSpeed={8}
            className="mt-5 max-w-[22rem] text-[0.94rem] font-medium leading-7 tracking-[-0.01em] sm:mt-8 sm:max-w-none sm:text-[1.05rem]"
          >
            Researching power, institutions, and strategic competition in world politics.
          </GradientText>

          <div className="mt-7 flex max-w-3xl flex-wrap justify-center gap-2 sm:mt-8 sm:gap-3">
            {researchAreas.map((area) => (
              <InteractivePanel
                key={area}
                className="rounded-full border border-[#F1E6D8]/10 bg-[#28314E]/45 px-3 py-2 text-xs text-[#F1E6D8]/68 backdrop-blur-md hover:border-[#AA2B3A]/45 sm:px-4 sm:text-sm"
              >
                {area}
              </InteractivePanel>
            ))}
          </div>

          <div className="mt-9 flex w-full max-w-sm flex-col gap-3 sm:mt-12 sm:max-w-none sm:flex-row sm:gap-6">
            <a
              href="#research"
              className="rounded-full border border-[#F1E6D8]/25 px-8 py-3 text-center text-[#F1E6D8] transition hover:-translate-y-0.5 hover:border-[#AA2B3A] hover:text-[#AA2B3A]"
            >
              View Research
            </a>

            <a
              href="#contact"
              className="rounded-full bg-[#F1E6D8] px-8 py-3 text-center text-[#28314E] shadow-[0_18px_50px_rgba(241,230,216,0.14)] transition hover:-translate-y-0.5 hover:bg-[#AA2B3A] hover:text-[#F1E6D8]"
            >
              Contact
            </a>
          </div>

          <div className="mt-14 grid w-full max-w-3xl grid-cols-3 gap-3 sm:mt-16">
            {profileHighlights.map((item) => (
              <InteractivePanel
                key={item.label}
                className="rounded-[1.2rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.035] px-3 py-4 backdrop-blur-md hover:border-[#AA2B3A]/45 sm:rounded-[1.4rem] sm:px-5"
              >
                <p className="font-display text-2xl font-semibold tracking-[-0.04em] text-[#F1E6D8] sm:text-3xl">
                  {item.value}
                </p>
                <p className="mt-1 text-[0.62rem] uppercase tracking-[0.15em] text-[#F1E6D8]/50 sm:text-xs sm:tracking-[0.18em]">
                  {item.label}
                </p>
              </InteractivePanel>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32">
        <div className="flex flex-col gap-14">
          <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              <p className="mb-6 text-sm uppercase tracking-[0.3em] text-[#AA2B3A]">
                About
              </p>

              <SplitText
                text="Exploring Politics, Institutions, and Global Affairs."
                tag="h2"
                splitType="words"
                delay={70}
                duration={0.9}
                textAlign="left"
                className="font-display max-w-4xl text-4xl font-[500] leading-[1.02] tracking-[-0.04em] text-[#F1E6D8] sm:text-5xl md:text-6xl md:tracking-[-0.045em]"
              />

              <div className="mt-8 max-w-3xl space-y-7 text-[1rem] leading-8 text-[#F1E6D8]/70 sm:mt-10 sm:text-[1.05rem] sm:leading-[2.15rem]">
                <p>
                  Alex Junfu Lu is an undergraduate student in International Relations at Xi’an Jiaotong-Liverpool University, with a strong passion for academic research, global affairs, and political analysis. His academic journey has been shaped by a deep curiosity about how institutions, ideas, and power interact within the international system.
                </p>

                <p>
                  Through extensive coursework, independent research, and conference experience, he has developed particular interests in international political economy, global governance, and contemporary political issues. Beyond the classroom, he actively engages in Model United Nations leadership, policy discussion, and conference design, viewing academic inquiry as both an intellectual pursuit and a practical engagement with the world.
                </p>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[420px] overflow-hidden rounded-[2.2rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.03] lg:mt-2">
              <Image
                src="/new-profile.jpg"
                alt="Alex Junfu Lu"
                width={420}
                height={520}
                className="h-auto w-full object-cover object-center"
                priority={true}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#28314E]/20 via-transparent to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-[#F1E6D8]/10" />
              <InteractivePanel className="absolute bottom-4 left-4 right-4 rounded-[1.4rem] border border-[#F1E6D8]/14 bg-[#28314E]/78 p-4 text-left shadow-[0_18px_45px_rgba(0,0,0,0.22)] backdrop-blur-md hover:border-[#AA2B3A]/45 sm:bottom-5 sm:left-5 sm:right-5 sm:rounded-[1.6rem] sm:p-5">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-[#AA2B3A]">
                      Field Note 01
                    </p>
                    <p className="font-display mt-3 text-xl font-semibold leading-6 tracking-[-0.03em] text-[#F1E6D8] sm:text-2xl sm:leading-7 sm:tracking-[-0.035em]">
                      Power is rarely neutral.
                    </p>
                  </div>

                  <div className="font-display rounded-full border border-[#F1E6D8]/12 px-3 py-1 text-sm italic text-[#F1E6D8]/65">
                    IR
                  </div>
                </div>

                <p className="mt-4 text-sm leading-6 text-[#F1E6D8]/70">
                  I study how institutions, domestic coalitions, and strategic
                  ambiguity shape choices under geopolitical pressure.
                </p>
              </InteractivePanel>
            </div>
          </div>

          <div className="hidden xl:block">
            <TargetCursor spinDuration={3.5} hoverDuration={0.3} />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {capabilityCards.map((item) => (
              <div
                key={item.label}
                className="cursor-target group rounded-[1.6rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.035] p-6 backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:border-[#AA2B3A]/40 hover:bg-[#F1E6D8]/[0.055] sm:rounded-[2rem] sm:p-8"
              >
                <p className="text-sm uppercase tracking-[0.32em] text-[#AA2B3A]">
                  {item.label}
                </p>

                <div className="mt-5 h-px w-10 bg-[#AA2B3A]" />

                <h3 className="font-display mt-8 text-[1.75rem] font-[700] leading-[1.02] tracking-[-0.035em] text-[#F1E6D8] sm:mt-10 sm:text-[2rem] sm:leading-[1.05] sm:tracking-[-0.04em]">
                  {item.title}
                </h3>

                <p className="mt-6 text-[0.98rem] leading-8 text-[#F1E6D8]/65 sm:mt-7 sm:text-[1.02rem] sm:leading-[2rem]">
                  {item.description}
                </p>

                <div className="mt-8 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-[#AA2B3A] to-transparent transition duration-500 group-hover:scale-x-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="pt-4">
            <p className="text-sm uppercase tracking-[0.25em] text-[#AA2B3A]">
              Current Focus
            </p>
            <h2 className="font-display mt-6 text-4xl font-[500] leading-[1.02] tracking-[-0.04em] text-[#F1E6D8] sm:text-5xl sm:leading-[1.05]">
              A research agenda built around institutions, pressure, and political language.
            </h2>
            <p className="mt-6 max-w-xl text-[0.98rem] leading-8 text-[#F1E6D8]/66 sm:text-[1.02rem]">
              Across region-specific and thematic projects, I keep returning to
              the same question: how do actors perform restraint, distribute
              risk, and preserve room for maneuver when institutions cannot fully
              settle conflict?
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {workingModes.map((mode) => (
                <span
                  key={mode}
                  className="rounded-full border border-[#F1E6D8]/10 px-4 py-2 text-sm text-[#F1E6D8]/62"
                >
                  {mode}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            {currentFocusSignals.map((item, index) => (
              <article
                key={item.title}
                className="scholar-motion-card relative overflow-hidden rounded-[1.8rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-7"
                style={{ animationDelay: `${index * 0.28}s` }}
              >
                <div className="scholar-signal-dot" />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-[#AA2B3A]">
                      {item.label}
                    </p>
                    <h3 className="font-display mt-5 text-[1.8rem] leading-[1.02] tracking-[-0.03em] text-[#F1E6D8] sm:text-3xl sm:leading-[1.04] sm:tracking-[-0.035em]">
                      {item.title}
                    </h3>
                  </div>
                  <div className="rounded-full border border-[#F1E6D8]/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-[#F1E6D8]/45">
                    active
                  </div>
                </div>

                <p className="mt-5 max-w-2xl text-[1rem] leading-8 text-[#F1E6D8]/66">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="research" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
        <div className="mb-20">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#AA2B3A]">
            Research
          </p>

          <SplitText
            text="Research Directions and Working Papers"
            tag="h2"
            splitType="words"
            delay={58}
            duration={0.9}
            textAlign="left"
            className="font-display text-4xl font-[500] leading-[1.04] tracking-[-0.03em] text-[#F1E6D8] sm:text-5xl md:text-6xl"
          />

          <p className="mt-6 max-w-2xl text-[1rem] leading-8 text-[#F1E6D8]/70 sm:text-lg">
          An evolving body of research focused on power, institutions, negotiation, and the political dynamics shaping international affairs.
          </p>
        </div>

        <div className="space-y-8">
          {researchItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group relative block overflow-hidden rounded-[1.8rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-6 transition duration-500 hover:-translate-y-1 hover:border-[#AA2B3A]/50 hover:bg-[#F1E6D8]/[0.07] sm:rounded-[2rem] sm:p-8 md:p-10"
            >
              <div className="absolute right-0 top-0 h-40 w-40 translate-x-16 -translate-y-16 rounded-full bg-[#AA2B3A]/10 blur-2xl transition group-hover:bg-[#AA2B3A]/20" />

              <div className="mb-8 flex flex-wrap gap-4 text-sm uppercase tracking-[0.18em]">
                <span className="text-[#F1E6D8]/50">{item.year}</span>
                <span className="text-[#AA2B3A]">{item.status}</span>
              </div>

              <h3 className="font-display max-w-4xl text-[2rem] font-medium leading-[1.03] tracking-[-0.03em] text-[#F1E6D8] sm:text-4xl md:text-5xl">
                {item.title}
              </h3>

              <p className="mt-6 max-w-3xl text-[1rem] leading-8 text-[#F1E6D8]/70 sm:text-lg">
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
                Read Article
              </p>
            </a>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
        <div className="mb-20">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#AA2B3A]">
            Academic Projects
          </p>

          <SplitText
            text="Institutional and Conference Work"
            tag="h2"
            splitType="words"
            delay={58}
            duration={0.9}
            textAlign="left"
            className="font-display text-4xl font-[500] leading-[1.04] tracking-[-0.03em] text-[#F1E6D8] sm:text-5xl md:text-6xl"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {academicProjects.map((project) => (
            <article
              key={project.title}
              className="group rounded-[1.8rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-6 transition duration-500 hover:-translate-y-1 hover:border-[#AA2B3A]/40 sm:rounded-3xl sm:p-8"
            >
              <div className="mb-4 flex items-center gap-4 text-sm uppercase tracking-[0.18em]">
                <p className="text-[#F1E6D8]/50">{project.year}</p>

                <p className="text-[#AA2B3A]">{project.role}</p>
              </div>

              <h3 className="font-display text-3xl tracking-[-0.03em] text-[#F1E6D8] sm:text-4xl">
                {project.title}
              </h3>

              <p className="mt-6 leading-8 text-[#F1E6D8]/64">
                {project.detail}
              </p>

              <div className="mt-10 h-12 w-12 rounded-full border border-[#F1E6D8]/10 bg-[#28314E]/50 transition group-hover:border-[#AA2B3A]/50 group-hover:bg-[#AA2B3A]/10" />
            </article>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
        <div className="relative overflow-hidden rounded-[1.8rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-6 sm:rounded-[2rem] sm:p-10 md:p-14">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#AA2B3A]/12 blur-3xl" />

          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#AA2B3A]">
            Contact
          </p>

          <SplitText
            text="For academic collaboration and research exchange."
            tag="h2"
            splitType="words"
            delay={62}
            duration={0.95}
            textAlign="left"
            className="font-display relative text-4xl font-semibold tracking-[-0.03em] text-[#F1E6D8] sm:text-5xl md:text-6xl"
          />

          <div className="relative mt-12 grid gap-6 md:grid-cols-2">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={item.ariaLabel}
                className="rounded-2xl border border-[#F1E6D8]/10 bg-[#28314E]/60 p-6 transition hover:-translate-y-0.5 hover:border-[#AA2B3A]/50"
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
