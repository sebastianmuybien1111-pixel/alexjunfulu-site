"use client";

import BackToHomeLink from "@/components/BackToHomeLink";
import InteractivePanel from "@/components/InteractivePanel";
import ResearchContinuum from "@/components/ResearchContinuum";
import SplitText from "@/components/SplitText";
import { motion } from "framer-motion";

const paperUrl = "/research/myth-of-indonesian-neutrality.pdf";

const quickFacts = [
  { label: "Status", value: "Working Paper" },
  { label: "Region", value: "Southeast Asia" },
  { label: "Primary Lens", value: "Hedging Theory" },
  { label: "Core Puzzle", value: "Neutrality or selective alignment?" },
];

const argumentMap = [
  {
    title: "Neutrality as Political Language",
    detail:
      "Jakarta preserves the vocabulary of neutrality because it legitimizes autonomy, reduces domestic controversy, and keeps diplomatic maneuver space open across competing external partnerships.",
  },
  {
    title: "Selective Alignment by Domain",
    detail:
      "Indonesia does not align evenly. Security coordination, economic development, maritime deterrence, and regional institutional strategy all pull toward different partners at different moments.",
  },
  {
    title: "Domestic Institutions Matter",
    detail:
      "Foreign policy is not a unitary response. The military, economic ministries, presidential development priorities, and diplomatic elites often read Chinese and American power through different institutional interests.",
  },
  {
    title: "ASEAN as Buffering Device",
    detail:
      "ASEAN centrality allows Indonesia to soften binary choice pressure by embedding competition inside a regional diplomatic architecture that privileges ambiguity, process, and managed coexistence.",
  },
];

const tensionAxes = [
  {
    heading: "Security",
    pullA: "Military exercises, deterrence signaling, and maritime capacity building favor closer functional cooperation with the United States.",
    pullB: "Formal balancing remains politically costly because it would contradict Indonesia's self-image as an autonomous regional actor.",
  },
  {
    heading: "Political Economy",
    pullA: "Chinese capital, infrastructure finance, and industrial development offer immediate domestic benefits for development-oriented governance.",
    pullB: "Overdependence raises strategic anxiety around leverage, debt exposure, and the political optics of asymmetrical economic reliance.",
  },
  {
    heading: "Natuna and Maritime Sovereignty",
    pullA: "Incursions around Natuna push security institutions toward firmer coercive signaling and public sovereignty performance.",
    pullB: "Economic and diplomatic actors still prefer controlled escalation so the dispute does not harden into full-spectrum strategic antagonism.",
  },
  {
    heading: "Regional Order",
    pullA: "Indonesia prefers continued American strategic presence to prevent regional hierarchy from collapsing into Chinese predominance.",
    pullB: "At the same time, Jakarta seeks to avoid any order that forces Southeast Asia into exclusive bloc politics or alliance dependency.",
  },
];

const paperSections = [
  {
    label: "01",
    title: "Conceptual Opening",
    body:
      "The paper distinguishes neutrality, non-alignment, strategic ambiguity, and hedging, arguing that these are too often collapsed into a single descriptive category when analysts discuss middle powers in the Indo-Pacific.",
  },
  {
    label: "02",
    title: "Domestic-External Linkage",
    body:
      "It then shows how Indonesia's external conduct is shaped by internal regime needs: development legitimacy, elite competition, bureaucratic differentiation, and the symbolic value of bebas aktif.",
  },
  {
    label: "03",
    title: "Case Evidence",
    body:
      "Episodes around Natuna, infrastructure cooperation, maritime modernization, and ASEAN diplomacy are treated as issue-specific windows into how selective alignment actually works in practice.",
  },
  {
    label: "04",
    title: "Regional Implication",
    body:
      "The conclusion reframes Indonesian strategy as a model of autonomy-maximizing hedging under hierarchy, rather than as proof that neutrality remains intact in contemporary great-power politics.",
  },
];

const contributions = [
  "Reinterprets Indonesia's neutrality claim as strategic narration rather than fixed positional abstention.",
  "Connects hedging theory more directly to domestic institutional fragmentation and regime legitimation.",
  "Explains why ASEAN-centered diplomacy can coexist with materially uneven external partnerships.",
  "Offers a more fine-grained vocabulary for analyzing middle-power behavior in Sino-American rivalry.",
];

const references = [
  "Anwar, D. F. (2023). Indonesia's hedging plus policy in the face of China's rise and the US-China rivalry in the Indo-Pacific region.",
  "Goh, E. (2008). Great powers and hierarchical order in Southeast Asia.",
  "Kuik, C.-C. (2021). Getting hedging right: A small-state perspective.",
  "Kuik, C.-C. (2022). Hedging via institutions: ASEAN-led multilateralism in the age of the Indo-Pacific.",
  "Syailendra, E. A. (2017). A nonbalancing act: Explaining Indonesia's failure to balance against the Chinese threat.",
];

const sectionTransition = {
  duration: 0.75,
  ease: [0.22, 1, 0.36, 1] as const,
};

export default function ResearchPage() {
  return (
    <main className="grid-background noise min-h-screen overflow-hidden bg-[#28314E] px-4 py-20 text-[#F1E6D8] sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <BackToHomeLink className="mb-12 sm:mb-16" />

        <motion.section
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={sectionTransition}
          className="relative overflow-hidden rounded-[2rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)] sm:rounded-[2.6rem] sm:p-8 md:p-12"
        >
          <motion.div
            aria-hidden="true"
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.35, 0.55, 0.35],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-16 top-0 h-80 w-80 rounded-full bg-[#AA2B3A]/16 blur-3xl"
          />
          <motion.div
            aria-hidden="true"
            animate={{
              x: ["-8%", "10%", "-8%"],
              opacity: [0.18, 0.32, 0.18],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-12 bottom-4 h-64 w-64 rounded-full bg-[#D9B8A7]/14 blur-3xl"
          />
          <motion.div
            aria-hidden="true"
            animate={{ backgroundPositionX: ["0%", "100%"] }}
            transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
            className="absolute inset-x-10 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(241,230,216,0.75),transparent)] bg-[length:200%_100%]"
          />

          <p className="relative mb-6 text-[0.68rem] uppercase tracking-[0.22em] text-[#AA2B3A] sm:text-sm sm:tracking-[0.28em]">
            Working Paper • Indo-Pacific Strategy • PDF Available
          </p>

          <SplitText
            text="The Myth of Indonesian Neutrality"
            tag="h1"
            splitType="words"
            delay={48}
            duration={1}
            textAlign="left"
            clip={false}
            className="font-display relative max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-8xl md:tracking-[-0.045em]"
          />

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...sectionTransition, delay: 0.2 }}
            className="relative mt-8 max-w-4xl text-[1.05rem] leading-8 text-[#F1E6D8]/82 sm:text-2xl sm:leading-10"
          >
            Strategic ambiguity, selective alignment, and the domestic politics
            beneath Indonesia&apos;s language of autonomy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...sectionTransition, delay: 0.3 }}
            className="relative mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <a
              href={paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#F1E6D8] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#28314E] transition hover:-translate-y-0.5 hover:bg-[#AA2B3A] hover:text-[#F1E6D8]"
            >
              Read PDF
            </a>
            <a
              href={paperUrl}
              download
              className="rounded-full border border-[#F1E6D8]/20 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#F1E6D8] transition hover:-translate-y-0.5 hover:border-[#AA2B3A] hover:text-[#AA2B3A]"
            >
              Download
            </a>
            <a
              href="#paper-preview"
              className="rounded-full border border-[#AA2B3A]/40 bg-[#AA2B3A]/10 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#D9B8A7] transition hover:-translate-y-0.5 hover:bg-[#AA2B3A]/16 hover:text-[#F1E6D8]"
            >
              View Showcase
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...sectionTransition, delay: 0.4 }}
            className="relative mt-12 grid gap-4 md:grid-cols-4"
          >
            {quickFacts.map((fact) => (
              <InteractivePanel
                key={fact.label}
                className="rounded-2xl border border-[#F1E6D8]/10 bg-[#28314E]/55 p-5"
              >
                <p className="text-xs uppercase tracking-[0.26em] text-[#AA2B3A]">
                  {fact.label}
                </p>
                <p className="mt-4 font-display text-[1.35rem] leading-tight text-[#F1E6D8]/88 sm:text-2xl">
                  {fact.value}
                </p>
              </InteractivePanel>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={sectionTransition}
          className="grid gap-8 py-20 lg:grid-cols-[0.92fr_1.08fr]"
        >
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#AA2B3A]">
              Research Puzzle
            </p>
            <h2 className="font-display text-4xl leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              If Indonesia is truly neutral, why are its partnerships so uneven
              across strategy, finance, and regional order?
            </h2>
          </div>

          <InteractivePanel className="rounded-[2rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-8">
            <p className="text-[1rem] leading-8 text-[#F1E6D8]/78 sm:text-xl sm:leading-9">
              The paper argues that &quot;neutrality&quot; is better understood as a
              legitimizing narrative than as a descriptively accurate summary of
              Indonesian behavior. What exists in practice is calibrated
              hedging: issue-specific alignment choices contained inside a
              broader language of autonomy.
            </p>
          </InteractivePanel>
        </motion.section>

        <motion.section
          id="paper-preview"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={sectionTransition}
          className="grid gap-8 py-8 lg:grid-cols-[0.78fr_1.22fr]"
        >
          <div className="space-y-6">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#AA2B3A]">
                Paper Showcase
              </p>
              <h2 className="font-display text-5xl leading-tight tracking-[-0.04em] md:text-6xl">
                The full draft now lives inside the page, not just behind the
                title.
              </h2>
            </div>

            <InteractivePanel className="rounded-[2rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-8">
              <p className="text-lg leading-8 text-[#F1E6D8]/72">
                This interface now does two jobs at once: it gives visitors a
                fast intellectual overview, and it gives them direct access to
                the actual PDF for deeper reading or citation.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={paperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#F1E6D8] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#28314E] transition hover:-translate-y-0.5 hover:bg-[#AA2B3A] hover:text-[#F1E6D8]"
                >
                  Open in New Tab
                </a>
                <a
                  href={paperUrl}
                  download
                  className="rounded-full border border-[#F1E6D8]/20 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#F1E6D8] transition hover:-translate-y-0.5 hover:border-[#AA2B3A] hover:text-[#AA2B3A]"
                >
                  Save PDF
                </a>
              </div>
            </InteractivePanel>
          </div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute -right-5 -top-5 z-10 rounded-full border border-[#F1E6D8]/15 bg-[#AA2B3A]/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#F1E6D8] shadow-[0_14px_30px_rgba(170,43,58,0.28)]">
              Full Draft
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-[#F1E6D8]/12 bg-[#101523] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.26)]">
              <iframe
                src={paperUrl}
                title="The Myth of Indonesian Neutrality PDF preview"
                className="h-[620px] w-full rounded-[1.25rem] bg-white"
              />
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={sectionTransition}
          className="py-20"
        >
          <p className="mb-8 text-sm uppercase tracking-[0.25em] text-[#AA2B3A]">
            Argument Architecture
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            {argumentMap.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ ...sectionTransition, delay: index * 0.06 }}
              >
                <InteractivePanel className="rounded-[2rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-7">
                  <p className="text-sm uppercase tracking-[0.22em] text-[#AA2B3A]">
                    Claim {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-4 font-display text-3xl tracking-[-0.035em] text-[#F1E6D8]">
                    {point.title}
                  </p>
                  <p className="mt-5 leading-8 text-[#F1E6D8]/68">
                    {point.detail}
                  </p>
                </InteractivePanel>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={sectionTransition}
          className="grid gap-8 py-8 lg:grid-cols-[0.88fr_1.12fr]"
        >
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#AA2B3A]">
              Abstract
            </p>
            <h2 className="font-display text-5xl leading-tight tracking-[-0.04em] md:text-6xl">
              The project reframes Indonesian foreign policy as uneven
              alignment managed through a consistent language of autonomy.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-9 text-[#F1E6D8]/74">
            <p>
              Rather than treating neutrality as a stable middle point between
              Washington and Beijing, the paper shows that Indonesia combines
              differentiated partnerships with an intentionally broad diplomatic
              vocabulary. That vocabulary matters because it domesticates
              external strategy, stabilizes elite coalitions, and protects room
              for policy improvisation.
            </p>
            <p>
              This approach explains why Jakarta can deepen maritime security
              cooperation with the United States while simultaneously welcoming
              Chinese capital into development strategy. The contradiction is
              only apparent if neutrality is understood literally rather than as
              a strategic narrative supported by issue-specific hedging.
            </p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={sectionTransition}
          className="py-20"
        >
          <p className="mb-8 text-sm uppercase tracking-[0.25em] text-[#AA2B3A]">
            Tension Axes
          </p>

          <div className="grid gap-5 lg:grid-cols-2">
            {tensionAxes.map((axis) => (
              <InteractivePanel
                key={axis.heading}
                className="rounded-[2rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-7"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="font-display text-3xl tracking-[-0.035em] text-[#F1E6D8]">
                    {axis.heading}
                  </p>
                  <div className="h-px flex-1 bg-[#F1E6D8]/10" />
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-[#F1E6D8]/10 bg-[#28314E]/55 p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#AA2B3A]">
                      Pull One
                    </p>
                    <p className="mt-4 leading-7 text-[#F1E6D8]/70">
                      {axis.pullA}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[#F1E6D8]/10 bg-[#28314E]/55 p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#D9B8A7]">
                      Pull Two
                    </p>
                    <p className="mt-4 leading-7 text-[#F1E6D8]/70">
                      {axis.pullB}
                    </p>
                  </div>
                </div>
              </InteractivePanel>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={sectionTransition}
          className="grid gap-8 py-8 lg:grid-cols-[0.88fr_1.12fr]"
        >
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#AA2B3A]">
              Paper Flow
            </p>
            <h2 className="font-display text-5xl leading-tight tracking-[-0.04em] md:text-6xl">
              The argument moves from concept clarification to domestic
              politics, then outward to regional order.
            </h2>
          </div>

          <div className="space-y-5">
            {paperSections.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 22 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ ...sectionTransition, delay: index * 0.08 }}
                className="relative pl-10"
              >
                <div className="absolute left-0 top-1 h-full w-px bg-[#F1E6D8]/10" />
                <div className="absolute left-[-0.4rem] top-1 h-4 w-4 rounded-full border border-[#F1E6D8]/20 bg-[#AA2B3A]" />
                <InteractivePanel className="rounded-[2rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-6">
                  <p className="text-sm uppercase tracking-[0.22em] text-[#AA2B3A]">
                    {item.label}
                  </p>
                  <p className="mt-3 font-display text-3xl tracking-[-0.035em] text-[#F1E6D8]">
                    {item.title}
                  </p>
                  <p className="mt-4 leading-8 text-[#F1E6D8]/70">
                    {item.body}
                  </p>
                </InteractivePanel>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={sectionTransition}
          className="grid gap-8 py-20 lg:grid-cols-[0.86fr_1.14fr]"
        >
          <div className="rounded-[2rem] border border-[#AA2B3A]/30 bg-[#AA2B3A]/10 p-8">
            <p className="mb-6 text-sm uppercase tracking-[0.25em] text-[#AA2B3A]">
              Contribution
            </p>
            <p className="font-display text-4xl leading-tight tracking-[-0.04em]">
              The page now shows the paper as both an argument and an object:
              readable on-site, downloadable, and anchored by a clearer
              theoretical contribution.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {contributions.map((item) => (
              <InteractivePanel
                key={item}
                className="rounded-2xl border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-5"
              >
                <p className="leading-7 text-[#F1E6D8]/72">{item}</p>
              </InteractivePanel>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={sectionTransition}
          className="py-8"
        >
          <p className="mb-8 text-sm uppercase tracking-[0.25em] text-[#AA2B3A]">
            Selected References
          </p>

          <div className="space-y-4">
            {references.map((reference, index) => (
              <motion.div
                key={reference}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ ...sectionTransition, delay: index * 0.04 }}
              >
                <div className="rounded-2xl border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.035] p-5">
                  <p className="leading-7 text-[#F1E6D8]/68">{reference}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <ResearchContinuum currentSlug="indonesia-hedging" />
      </div>
    </main>
  );
}
