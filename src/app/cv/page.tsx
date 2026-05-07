export default function CVPage() {
    return (
      <main className="min-h-screen bg-[#0B0B0F] px-6 py-32 text-[#F5F5F5]">
        <div className="mx-auto max-w-5xl">
          
          {/* Header */}
          <section className="border-b border-white/10 pb-16">
            <p className="mb-6 text-sm uppercase tracking-[0.25em] text-[#8FA7BF]">
              Curriculum Vitae
            </p>
  
            <h1 className="font-display text-7xl font-semibold tracking-[-0.04em] md:text-8xl">
              Alex Junfu Lu
            </h1>
  
            <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
              Undergraduate researcher in International Relations focusing on
              global governance, Indo-Pacific geopolitics, institutional power,
              and international political economy.
            </p>
          </section>
  
          {/* Education */}
          <section className="py-16">
            <h2 className="font-display mb-10 text-5xl font-semibold tracking-[-0.03em]">
              Education
            </h2>
  
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                
                <div>
                  <h3 className="font-display text-3xl">
                    Xi’an Jiaotong-Liverpool University
                  </h3>
  
                  <p className="mt-3 text-zinc-400">
                    B.A. in International Relations
                  </p>
                </div>
  
                <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                  Suzhou, China
                </p>
              </div>
            </div>
          </section>
  
          {/* Research Interests */}
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
                  className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-lg text-zinc-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>
  
          {/* Academic Projects */}
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
                  className="rounded-3xl border border-white/10 bg-white/5 p-8"
                >
                  <h3 className="font-display text-3xl">
                    {project.title}
                  </h3>
  
                  <p className="mt-4 leading-7 text-zinc-400">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
  
          {/* Leadership */}
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
                  className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 text-zinc-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </section>
  
          {/* Languages */}
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
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="font-display text-2xl">
                    {language}
                  </h3>
  
                  <p className="mt-3 text-zinc-400">
                    {level}
                  </p>
                </div>
              ))}
            </div>
          </section>
  
        </div>
      </main>
    );
  }