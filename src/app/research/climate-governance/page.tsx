import BackToHomeLink from "@/components/BackToHomeLink";
import InteractivePanel from "@/components/InteractivePanel";
import SplitText from "@/components/SplitText";

const takeaways = [
  "The Financial Rift is a structural divide between the geography of emissions generation and the geography of climate harm.",
  "Climate governance is weakened by institutional fragmentation, major-power instability, and unequal discourse power.",
  "Developing countries are often treated as policy followers despite facing disproportionate vulnerability.",
  "The proposed CPCA shifts climate finance from voluntary charity toward binding responsibility and accountability.",
];

const framework = [
  {
    title: "Fair Climate Financing",
    detail:
      "Mandatory contributions based on historical emissions, current capacity, and luxury carbon consumption, with predictable funding for adaptation and loss-and-damage needs.",
  },
  {
    title: "South-South Cooperation",
    detail:
      "A technology-transfer facility that strengthens agency among developing states through open knowledge sharing, local capacity building, and resilience-oriented adaptation tools.",
  },
  {
    title: "Monitoring & Arbitration",
    detail:
      "Independent tracking of financial flows and policy implementation, paired with dispute-resolution mechanisms to address responsibility, compliance, and climate damages.",
  },
];

const concepts = [
  "Distributive Justice",
  "Fragmentation Trap",
  "Discourse Power",
  "Common but Differentiated Responsibilities",
  "Sustainable Development Goals",
  "Climate Finance",
];

const references = [
  "Chancel, L. (2022). Global Carbon Inequality 1990-2019.",
  "Burke, M., Hsiang, S. M., & Miguel, E. (2015). Global non-linear effect of temperature on economic production.",
  "Ostrom, E. (2009). A Polycentric Approach for Coping with Climate Change.",
  "Roberts, J. T., & Parks, B. C. (2007). A Climate of Injustice.",
  "United Nations. (2015). Transforming our world: the 2030 Agenda for Sustainable Development.",
];

export default function ClimateGovernancePage() {
  return (
    <main className="grid-background noise min-h-screen overflow-hidden bg-[#28314E] px-6 py-28 text-[#F1E6D8]">
      <div className="mx-auto max-w-6xl">
        <BackToHomeLink className="mb-16" />

        <section className="relative overflow-hidden rounded-[2.4rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.18)] md:p-12">
          <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-[#AA2B3A]/14 blur-3xl" />
          <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#D9B8A7]/10 blur-3xl" />

          <p className="relative mb-6 text-sm uppercase tracking-[0.28em] text-[#AA2B3A]">
            Conference Paper • Global Public Policy
          </p>

          <SplitText
            text="Unequal Skies, Shared Destiny"
            tag="h1"
            splitType="words"
            delay={54}
            duration={1}
            textAlign="left"
            clip={false}
            className="font-display relative max-w-5xl text-6xl font-semibold leading-[0.98] tracking-[-0.045em] md:text-8xl"
          />

          <p className="relative mt-8 max-w-4xl text-2xl leading-10 text-[#F1E6D8]/82">
            Bridging the Political and Financial Rift in Global Climate
            Governance.
          </p>

          <div className="relative mt-10 flex flex-wrap gap-4">
            <a
              href="/research/climate-governance-paper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#F1E6D8] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#28314E] transition hover:-translate-y-0.5 hover:bg-[#AA2B3A] hover:text-[#F1E6D8]"
            >
              Read Paper
            </a>
            <a
              href="/research/climate-governance-poster.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#F1E6D8]/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#F1E6D8] transition hover:-translate-y-0.5 hover:border-[#AA2B3A] hover:text-[#AA2B3A]"
            >
              View Poster
            </a>
          </div>
        </section>

        <section className="grid gap-8 py-20 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#AA2B3A]">
              Research Puzzle
            </p>
            <h2 className="font-display text-5xl leading-tight tracking-[-0.04em] md:text-6xl">
              Why do those least responsible often suffer the most?
            </h2>
          </div>

          <InteractivePanel className="rounded-[2rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-8">
            <p className="text-xl leading-9 text-[#F1E6D8]/78">
              The project examines a systemic disconnect between emissions,
              vulnerability, and financial capacity. It argues that climate
              governance cannot be effective unless responsibility, resources,
              and voice are reorganized around distributive justice.
            </p>
          </InteractivePanel>
        </section>

        <section className="py-8">
          <p className="mb-8 text-sm uppercase tracking-[0.25em] text-[#AA2B3A]">
            Key Takeaways
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            {takeaways.map((takeaway) => (
              <InteractivePanel
                key={takeaway}
                className="rounded-[2rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-7"
              >
                <p className="leading-8 text-[#F1E6D8]/74">{takeaway}</p>
              </InteractivePanel>
            ))}
          </div>
        </section>

        <section className="grid gap-8 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-[#AA2B3A]/30 bg-[#AA2B3A]/10 p-8">
            <p className="mb-6 text-sm uppercase tracking-[0.25em] text-[#AA2B3A]">
              Proposed Architecture
            </p>
            <p className="font-display text-4xl leading-tight tracking-[-0.04em]">
              Climate Policy Coordination Alliance: from fragmented pledges to
              justice-based coordination.
            </p>
          </div>

          <div className="space-y-5">
            {framework.map((item) => (
              <InteractivePanel
                key={item.title}
                className="rounded-2xl border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-6"
              >
                <p className="font-display text-3xl tracking-[-0.035em] text-[#F1E6D8]">
                  {item.title}
                </p>
                <p className="mt-4 leading-8 text-[#F1E6D8]/68">
                  {item.detail}
                </p>
              </InteractivePanel>
            ))}
          </div>
        </section>

        <section className="py-8">
          <p className="mb-8 text-sm uppercase tracking-[0.25em] text-[#AA2B3A]">
            Conceptual Vocabulary
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {concepts.map((concept) => (
              <InteractivePanel
                key={concept}
                className="rounded-2xl border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.035] px-5 py-4 text-center font-display text-xl text-[#F1E6D8]/82"
              >
                {concept}
              </InteractivePanel>
            ))}
          </div>
        </section>

        <section className="py-20">
          <p className="mb-8 text-sm uppercase tracking-[0.25em] text-[#AA2B3A]">
            Selected References
          </p>

          <div className="space-y-4">
            {references.map((reference) => (
              <div
                key={reference}
                className="rounded-2xl border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.035] p-5"
              >
                <p className="leading-7 text-[#F1E6D8]/68">{reference}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
