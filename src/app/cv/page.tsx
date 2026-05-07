export default function CVPage() {
    return (
      <main className="grid-background noise min-h-screen bg-[#28314E] px-6 py-32 text-[#F1E6D8]">
        <div className="mx-auto max-w-5xl">
          <section className="border-b border-[#F1E6D8]/10 pb-16">
            <p className="mb-6 text-sm uppercase tracking-[0.25em] text-[#AA2B3A]">
              Curriculum Vitae
            </p>
  
            <h1 className="font-display text-7xl font-semibold tracking-[-0.04em] md:text-8xl">
              Alex Junfu Lu
            </h1>
  
            <p className="mt-10 max-w-xl text-[1.05rem] font-medium leading-8 tracking-[-0.01em] text-[#F1E6D8]/68 md:text-[1.15rem]">
              Researching institutional power, Indo-Pacific geopolitics, global
              governance, and strategic competition in contemporary international
              relations.
            </p>
          </section>
  
          <section className="py-16">
            <h2 className="font-display mb-10 text-5xl font-semibold tracking-[-0.03em]">
              Education
            </h2>
  
            <div className="rounded-3xl border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="font-display text-3xl">
                    Xi’an Jiaotong-Liverpool University
                  </h3>
                  <p className="mt-3 text-[#F1E6D8]/70">
                    B.A. in International Relations
                  </p>
                </div>
  
                <p className="text-sm uppercase tracking-[0.2em] text-[#F1E6D8]/55">
                  Suzhou, China
                </p>
              </div>
            </div>
          </section>
  
          <section className="py-16">
            <h2 className="font-display mb-10 text-5xl font-semibold tracking-[-0.03em]">
              Research Interests
            </h2>
  
            <div className="grid gap-6 md:grid-cols-2">
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
                  className="rounded-2xl border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] px-6 py-5 text-lg text-[#F1E6D8]/80"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>
  
          <section className="py-16">
            <h2 className="font-display mb-10 text-5xl font-semibold tracking-[-0.03em]">
              Academic Projects
            </h2>
  
            <div className="space-y-6">
              {[
                {
                  title: "The Myth of Indonesian Neutrality",
                  description:
                    "Research on strategic ambiguity and selective alignment in Southeast Asian great-power politics.",
                },
                {
                  title: "Climate Governance and Institutional Inequality",
                  description:
                    "Research examining climate finance and responsibility allocation in global governance.",
                },
                {
                  title: "WHO Executive Board Special Session Simulation",
                  description:
                    "Procedural design project exploring motion-driven institutional negotiation systems.",
                },
              ].map((project) => (
                <div
                  key={project.title}
                  className="rounded-3xl border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-8"
                >
                  <h3 className="font-display text-3xl">{project.title}</h3>
                  <p className="mt-4 leading-7 text-[#F1E6D8]/70">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
  
          <section className="py-16">
            <h2 className="font-display mb-10 text-5xl font-semibold tracking-[-0.03em]">
              Leadership and Academic Practice
            </h2>
  
            <div className="space-y-6">
              {[
                "Academic Director — Suzhou International Model United Nations 2026",
                "Committee Design and Rules of Procedure Development",
                "Conference Organization and Academic Coordination",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] px-6 py-5 text-[#F1E6D8]/80"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>
  
          <section className="py-16">
            <h2 className="font-display mb-10 text-5xl font-semibold tracking-[-0.03em]">
              Languages
            </h2>
  
            <div className="grid gap-6 md:grid-cols-3">
              {[
                ["Chinese", "Native"],
                ["English", "Professional Working Proficiency"],
                ["Spanish", "Elementary Proficiency"],
              ].map(([language, level]) => (
                <div
                  key={language}
                  className="rounded-2xl border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-6"
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