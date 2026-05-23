import type { Metadata } from "next";
import BackToHomeLink from "@/components/BackToHomeLink";
import Link from "next/link";

const profileSignals = [
  {
    label: "Base",
    value: "Suzhou / XJTLU",
  },
  {
    label: "Current Mode",
    value: "Undergraduate Research in IR",
  },
  {
    label: "Core Themes",
    value: "Institutions, strategy, and regional order",
  },
];

const methods = [
  "Institutional analysis",
  "Case-based argument building",
  "Strategic narrative reading",
  "Simulation and conference design",
];

const selectedWriting = [
  {
    title: "The Myth of Indonesian Neutrality",
    label: "Working Paper",
    href: "/research/indonesia-hedging",
    description:
      "A study of hedging, selective alignment, and the language of neutrality in Southeast Asian great-power politics.",
  },
  {
    title: "Climate Governance and Institutional Inequality",
    label: "Research Theme",
    href: "/research/climate-governance",
    description:
      "A justice-oriented project on climate finance asymmetry, vulnerability, and coalition design in global governance.",
  },
  {
    title: "De-Escalatory Institutionalism in the Grey Zone",
    label: "Research Article",
    href: "/research/de-escalatory-institutionalism",
    description:
      "An argument about how informal regional institutions manage tension where formal authority and enforcement remain thin.",
  },
];

const leadershipTrack = [
  {
    year: "2026",
    role: "Academic Director",
    title: "Suzhou International Model United Nations",
    detail:
      "Shaping committee architecture, background materials, and delegate-facing academic standards across the conference.",
  },
  {
    year: "2026",
    role: "Rules Designer",
    title: "WHO Executive Board Special Session",
    detail:
      "Designing procedure, crisis rhythm, and negotiation incentives for a public-health simulation environment.",
  },
  {
    year: "2026",
    role: "Research Lead",
    title: "UNODC Background Guide",
    detail:
      "Developing issue briefs that connect institutional mandates, security dynamics, and policy trade-offs for conference use.",
  },
];

export const metadata: Metadata = {
  title: "CV | Alex Junfu Lu",
  description:
    "Curriculum vitae of Alex Junfu Lu, focused on international relations research, institutional analysis, and conference design.",
  openGraph: {
    title: "CV | Alex Junfu Lu",
    description:
      "Curriculum vitae focused on research writing, regional analysis, and institutional practice in international relations.",
    url: "/cv",
    images: [
      {
        url: "/new-profile.jpg",
        width: 800,
        height: 600,
        alt: "Alex Junfu Lu Profile",
      },
    ],
  },
};

export default function CVPage() {
  return (
    <main className="grid-background noise min-h-screen bg-[#28314E] px-4 py-24 text-[#F1E6D8] sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <BackToHomeLink className="mb-12 sm:mb-16" />

        <section className="border-b border-[#F1E6D8]/10 pb-16">
          <p className="mb-6 text-sm uppercase tracking-[0.25em] text-[#AA2B3A]">
            Curriculum Vitae
          </p>

          <h1 className="font-display max-w-[7ch] text-[3.9rem] font-semibold leading-[0.9] tracking-[-0.045em] sm:max-w-none sm:text-7xl md:text-8xl">
            Alex Junfu Lu
          </h1>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="max-w-2xl text-[1.08rem] font-medium leading-8 tracking-[-0.01em] text-[#F1E6D8]/68 md:text-[1.15rem]">
                Researching institutional power, Indo-Pacific geopolitics,
                climate governance, and strategic competition in contemporary
                international relations.
              </p>

              <p className="mt-6 max-w-2xl text-[1rem] leading-8 text-[#F1E6D8]/62">
                My work moves between research writing, regional case analysis,
                and simulation design. I am especially interested in the ways
                institutions stabilize conflict, reshape political language, and
                distribute responsibility across unequal actors.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {profileSignals.map((signal, index) => (
                <div
                  key={signal.label}
                  className="scholar-motion-card scholar-motion-card--soft relative overflow-hidden rounded-[1.6rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-5"
                  style={{ animationDelay: `${index * 0.25}s` }}
                >
                  <div className="scholar-signal-dot" />
                  <p className="text-xs uppercase tracking-[0.24em] text-[#AA2B3A]">
                    {signal.label}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-[#F1E6D8]/74">
                    {signal.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-14 py-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h2 className="font-display mb-8 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Education
            </h2>

            <div className="scholar-motion-card relative overflow-hidden rounded-[1.8rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-6 sm:rounded-[2rem] sm:p-8">
              <div className="scholar-sweep-line" />
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="font-display text-[1.8rem] leading-[1.04] sm:text-3xl">
                    Xi’an Jiaotong-Liverpool University
                  </h3>
                  <p className="mt-3 text-[#F1E6D8]/70">
                    B.A. in International Relations
                  </p>
                  <p className="mt-4 max-w-xl leading-7 text-[#F1E6D8]/60">
                    Undergraduate training centered on international relations,
                    institutional politics, global governance, and regional
                    order.
                  </p>
                </div>

                <p className="text-sm uppercase tracking-[0.2em] text-[#F1E6D8]/55">
                  Suzhou, China
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display mb-8 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Working Methods
            </h2>

            <div className="grid gap-4 sm:grid-cols-2">
              {methods.map((item, index) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] px-5 py-4 text-base text-[#F1E6D8]/80 sm:px-6 sm:py-5 sm:text-lg"
                  style={{
                    boxShadow:
                      index === 0
                        ? "0 0 0 1px rgba(170,43,58,0.10) inset"
                        : undefined,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-16">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-display text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
                Selected Research and Writing
              </h2>
              <p className="mt-4 max-w-2xl text-[1rem] leading-8 text-[#F1E6D8]/64">
                A set of ongoing and emerging projects on strategic competition,
                institutional inequality, and informal regional order.
              </p>
            </div>

            <Link
              href="/#research"
              className="text-sm uppercase tracking-[0.2em] text-[#AA2B3A] transition hover:text-[#F1E6D8]"
            >
              View on homepage
            </Link>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {selectedWriting.map((project, index) => (
              <Link
                key={project.title}
                href={project.href}
                className="scholar-motion-card group relative overflow-hidden rounded-[1.8rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-6 transition duration-500 hover:-translate-y-1 hover:border-[#AA2B3A]/45 sm:rounded-[2rem] sm:p-8"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className="scholar-signal-dot" />
                <p className="text-xs uppercase tracking-[0.24em] text-[#AA2B3A]">
                  {project.label}
                </p>
                <h3 className="font-display mt-6 text-3xl leading-[1.02] tracking-[-0.035em] text-[#F1E6D8] sm:mt-7 sm:text-4xl sm:tracking-[-0.04em]">
                  {project.title}
                </h3>
                <p className="mt-5 leading-8 text-[#F1E6D8]/66">
                  {project.description}
                </p>
                <div className="mt-8 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-[#AA2B3A] to-transparent transition duration-500 group-hover:scale-x-100" />
              </Link>
            ))}
          </div>
        </section>

        <section className="grid gap-14 py-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h2 className="font-display mb-10 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Research Interests
            </h2>

            <div className="grid gap-5 md:grid-cols-2">
              {[
                "Global Governance",
                "Indo-Pacific Geopolitics",
                "International Political Economy",
                "Institutional Power",
                "Climate Governance",
                "ASEAN and Regionalism",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.6rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] px-6 py-5 text-lg text-[#F1E6D8]/80"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display mb-10 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Leadership and Practice
            </h2>

            <div className="space-y-5">
              {leadershipTrack.map((item) => (
                <article
                  key={item.title}
                  className="dossier-track relative overflow-hidden rounded-[1.8rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-6 sm:p-7"
                >
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em]">
                    <span className="text-[#AA2B3A]">{item.year}</span>
                    <span className="text-[#F1E6D8]/48">{item.role}</span>
                  </div>
                  <h3 className="font-display mt-5 text-[1.8rem] leading-[1.04] tracking-[-0.03em] text-[#F1E6D8] sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-8 text-[#F1E6D8]/64">
                    {item.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-16">
          <h2 className="font-display mb-10 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            Languages and Working Environments
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              ["Chinese", "Native"],
              ["English", "Professional Working Proficiency"],
              ["Spanish", "Elementary Proficiency"],
            ].map(([language, level]) => (
              <div
                key={language}
                className="rounded-[1.8rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-6"
              >
                <h3 className="font-display text-2xl">{language}</h3>
                <p className="mt-3 text-[#F1E6D8]/70">{level}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
