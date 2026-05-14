import BackToHomeLink from "@/components/BackToHomeLink";
import InteractivePanel from "@/components/InteractivePanel";
import SplitText from "@/components/SplitText";

const thesisPoints = [
  {
    label: "Hedging Plus",
    text: "Indonesia does not simply avoid alignment. It uses Sino-American competition to extract functional benefits from both sides while preserving the diplomatic language of bebas aktif.",
  },
  {
    label: "Intermestic Drivers",
    text: "Domestic regime legitimation and infrastructure-led development push Jakarta toward Chinese capital, while military modernization and maritime deterrence sustain security cooperation with the United States.",
  },
  {
    label: "Elite Disunity",
    text: "The Natuna dispute reveals a split between security institutions seeking firmer deterrence and diplomatic-economic actors prioritizing de-escalation and Chinese economic ties.",
  },
  {
    label: "Hierarchical Order",
    text: "Jakarta’s long-term preference is a regional architecture where American security predominance and Chinese economic integration coexist through ASEAN-centered omni-enmeshment.",
  },
];

const evidenceMap = [
  "China-facing economic engagement through the Belt and Road Initiative and infrastructure finance.",
  "United States-facing security cooperation through military exercises, capacity building, and deterrence signaling.",
  "ASEAN centrality as an institutional hedging mechanism of binding, buffering, and building.",
  "Natuna Sea incidents as evidence of strategic ambiguity under domestic bureaucratic disagreement.",
];

const references = [
  "Anwar, D. F. (2023). Indonesia’s hedging plus policy in the face of China’s rise and the US-China rivalry in the Indo-Pacific region.",
  "Kuik, C.-C. (2021). Getting hedging right: A small-state perspective.",
  "Kuik, C.-C. (2022). Hedging via institutions: ASEAN-led multilateralism in the age of the Indo-Pacific.",
  "Syailendra, E. A. (2017). A nonbalancing act: Explaining Indonesia’s failure to balance against the Chinese threat.",
  "Goh, E. (2008). Great powers and hierarchical order in Southeast Asia.",
];

export default function ResearchPage() {
  return (
    <main className="grid-background noise min-h-screen overflow-hidden bg-[#28314E] px-6 py-28 text-[#F1E6D8]">
      <div className="mx-auto max-w-6xl">
        <BackToHomeLink className="mb-16" />

        <section className="relative overflow-hidden rounded-[2.4rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.18)] md:p-12">
          <div className="absolute right-0 top-0 h-72 w-72 translate-x-24 -translate-y-24 rounded-full bg-[#AA2B3A]/14 blur-3xl" />

          <p className="relative mb-6 text-sm uppercase tracking-[0.28em] text-[#AA2B3A]">
            Working Paper • Indo-Pacific Strategy
          </p>

          <SplitText
            text="The Myth of Indonesian Neutrality"
            tag="h1"
            splitType="words"
            delay={52}
            duration={1}
            textAlign="left"
            clip={false}
            className="font-display relative max-w-5xl text-6xl font-semibold leading-[0.98] tracking-[-0.045em] md:text-8xl"
          />

          <p className="relative mt-8 max-w-4xl text-2xl leading-10 text-[#F1E6D8]/82">
            Strategic Ambiguity and Selective Alignment in Southeast Asian
            Great-Power Politics.
          </p>

          <div className="relative mt-10 grid gap-4 md:grid-cols-3">
            {["Bebas Aktif", "Hedging Plus", "ASEAN Centrality"].map((item) => (
              <InteractivePanel
                key={item}
                className="rounded-2xl border border-[#F1E6D8]/10 bg-[#28314E]/55 px-5 py-4 text-center font-display text-xl text-[#F1E6D8]/85"
              >
                {item}
              </InteractivePanel>
            ))}
          </div>
        </section>

        <section className="grid gap-8 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#AA2B3A]">
              Research Question
            </p>
            <h2 className="font-display text-5xl leading-tight tracking-[-0.04em] md:text-6xl">
              When does neutrality become a strategic narrative?
            </h2>
          </div>

          <InteractivePanel className="rounded-[2rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-8">
            <p className="text-xl leading-9 text-[#F1E6D8]/78">
              The paper asks how Indonesia uses ambiguity and selective
              alignment to navigate Sino-American rivalry while preserving
              autonomy, domestic legitimacy, and regional diplomatic space.
            </p>
          </InteractivePanel>
        </section>

        <section className="py-8">
          <p className="mb-8 text-sm uppercase tracking-[0.25em] text-[#AA2B3A]">
            Argument Map
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            {thesisPoints.map((point) => (
              <InteractivePanel
                key={point.label}
                className="rounded-[2rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-7"
              >
                <p className="font-display text-3xl tracking-[-0.035em] text-[#F1E6D8]">
                  {point.label}
                </p>
                <p className="mt-5 leading-8 text-[#F1E6D8]/68">
                  {point.text}
                </p>
              </InteractivePanel>
            ))}
          </div>
        </section>

        <section className="grid gap-8 py-20 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] border border-[#AA2B3A]/30 bg-[#AA2B3A]/10 p-8">
            <p className="mb-6 text-sm uppercase tracking-[0.25em] text-[#AA2B3A]">
              Core Claim
            </p>
            <p className="font-display text-4xl leading-tight tracking-[-0.04em]">
              Indonesian neutrality is less a detached position than a pragmatic
              instrument for maximizing autonomy under hyper-uncertainty.
            </p>
          </div>

          <div className="space-y-4">
            {evidenceMap.map((item) => (
              <InteractivePanel
                key={item}
                className="rounded-2xl border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-5"
              >
                <p className="leading-7 text-[#F1E6D8]/72">{item}</p>
              </InteractivePanel>
            ))}
          </div>
        </section>

        <section className="py-8">
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
