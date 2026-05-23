import BackToHomeLink from "@/components/BackToHomeLink";
import InteractivePanel from "@/components/InteractivePanel";
import ResearchContinuum from "@/components/ResearchContinuum";
import ResearchPdfShowcase from "@/components/ResearchPdfShowcase";
import SplitText from "@/components/SplitText";

const abstractParagraphs = [
  "This research article asks why informal regional institutions can sometimes manage acute security tensions more effectively than formally authoritative universal bodies. It develops the concept of de-escalatory institutionalism to explain ASEAN's distinctive role in South China Sea governance, where the United Nations Security Council is structurally blocked and formal legal processes can harden rather than resolve great-power disputes.",
  "The article argues that institutional effectiveness under hegemonic contestation should not be measured only by enforcement capacity, legal authority, or dispute settlement. A separate dimension matters: de-escalatory capacity, or the ability to prevent low-intensity coercive interactions from crossing thresholds of open armed conflict.",
  "Using process-tracing of the 2002 Declaration on the Conduct of Parties and the aftermath of the 2016 Permanent Court of Arbitration ruling, the paper identifies three mechanisms through which ASEAN's informality becomes functional: normative enmeshment, ritualized ambiguity, and reputational friction.",
];

const conceptualVocabulary = [
  {
    term: "De-escalatory capacity",
    definition:
      "The ability of an institution to manage crisis dynamics and prevent coercive interactions from cascading into armed confrontation, even when it cannot resolve the underlying dispute.",
  },
  {
    term: "Grey-zone competition",
    definition:
      "Coercive activity that remains below the threshold of war but above routine diplomatic competition, including coast guard pressure, maritime militia operations, and incremental status-quo revision.",
  },
  {
    term: "Informal institutional design",
    definition:
      "A governance architecture based on non-binding commitments, consensus, ambiguity, and repeated diplomatic engagement rather than legal compulsion or formal enforcement.",
  },
  {
    term: "Hegemonic contestation",
    definition:
      "A strategic environment in which great-power rivalry blocks universal institutions and makes formal authority politically inaccessible or counterproductive.",
  },
];

const literatureInterventions = [
  {
    field: "Liberal Institutionalism",
    intervention:
      "Challenges the assumption that stronger legal authority and enforcement capacity necessarily produce better governance outcomes in security disputes involving a revisionist great power.",
  },
  {
    field: "Constructivism and ASEAN Studies",
    intervention:
      "Builds on norm localization and omni-enmeshment but specifies the causal mechanisms through which ASEAN's diplomatic routines shape escalation dynamics.",
  },
  {
    field: "Grey-Zone Conflict",
    intervention:
      "Connects escalation management to institutional design, showing how multilateral forums can govern the space between routine competition and military deterrence.",
  },
  {
    field: "Informal Institutions",
    intervention:
      "Treats informality not as institutional failure but as a strategic design feature that can preserve access, reduce zero-sum confrontation, and sustain crisis-management channels.",
  },
];

const mechanisms = [
  {
    title: "Normative Enmeshment",
    function: "Embedding a great power in repeated diplomatic interaction.",
    detail:
      "ASEAN's dense network of summits, working groups, and regional forums gives China reputational reasons to remain inside the diplomatic framework. The mechanism does not require Beijing to internalize ASEAN's norms fully; it only requires that exit from the framework appear more costly than continued participation.",
    implication:
      "This makes de-escalation more politically accessible because restraint can be framed as continued regional engagement rather than legal concession.",
  },
  {
    title: "Ritualized Ambiguity",
    function: "Deferring sovereignty questions while preserving engagement.",
    detail:
      "ASEAN's consensus norm and non-binding diplomacy create a shared space where parties can discuss conduct without adjudicating sovereignty. This ambiguity prevents negotiations from becoming zero-sum contests in which claimants must either concede core interests or abandon the forum.",
    implication:
      "The result is not dispute resolution, but a diplomatic focal point that coordinates expectations of restraint.",
  },
  {
    title: "Reputational Friction",
    function: "Raising the visible cost of overt coercion.",
    detail:
      "ASEAN communiques, DOC language, and peaceful-resolution norms create reputational speed bumps. They do not stop all grey-zone operations, but they make unambiguous escalation more diplomatically costly and harder to reconcile with China's narrative of peaceful rise.",
    implication:
      "This slows escalation tempo by making some coercive choices more visible, more contestable, and more expensive.",
  },
];

const criticalJunctures = [
  {
    year: "2002",
    title: "Declaration on the Conduct of Parties",
    puzzle:
      "Why did a non-binding declaration matter when it contained no enforcement mechanism?",
    detail:
      "The DOC was formally weak but politically useful. By accepting a non-binding ASEAN-China framework, Beijing acknowledged ASEAN's convening role and entered a diplomatic architecture that made escalation more costly and visible.",
    evidence:
      "Its commitment to self-restraint created a vocabulary that ASEAN claimants could later invoke when Chinese activity appeared to violate the spirit of the declaration.",
  },
  {
    year: "2016",
    title: "PCA Ruling and Its Aftermath",
    puzzle:
      "Why did the legal victory not translate into stronger formal institutional enforcement?",
    detail:
      "After China's rejection of the arbitral ruling, ASEAN's ambiguous compromise preserved institutional cohesion and kept open the diplomatic channels through which crisis management could continue.",
    evidence:
      "From a legalist perspective, ASEAN's muted response looked weak; from a de-escalatory perspective, preserving the forum prevented diplomatic breakdown during a high-risk moment.",
  },
];

const boundaryConditions = [
  {
    condition: "Continued institutional participation",
    detail:
      "The revisionist power must still value participation in the diplomatic framework, either for legitimacy, access, or avoidance of countervailing responses.",
  },
  {
    condition: "Minimum regional cohesion",
    detail:
      "The informal institution must retain enough internal unity to present a credible diplomatic front; severe fragmentation can embolden rather than constrain coercive behaviour.",
  },
  {
    condition: "Below-deterrence competition",
    detail:
      "The conflict must remain in the grey-zone register, where diplomacy can shape escalation tempo before hard military deterrence becomes the dominant logic.",
  },
];

const theoreticalContributions = [
  "Disaggregates institutional effectiveness into dispute resolution, compliance generation, and de-escalatory capacity.",
  "Shows why institutional informality can become an asset rather than a deficiency under hegemonic contestation.",
  "Connects informal institutional design to grey-zone escalation management through a three-mechanism framework.",
  "Develops generalizable scope conditions for comparing ASEAN with cases such as the OSCE, Arctic Council, and cyber governance frameworks.",
];

const alternativeExplanations = [
  {
    explanation: "U.S. hegemonic deterrence",
    response:
      "The paper accepts that U.S. deterrence helps prevent large-scale armed conflict, but argues that deterrence alone cannot explain day-to-day management of grey-zone incidents deliberately designed to stay below military thresholds.",
  },
  {
    explanation: "ASEAN failure thesis",
    response:
      "The paper does not claim ASEAN stops Chinese grey-zone expansion. Its narrower claim is that ASEAN affects escalation dynamics by preserving diplomatic channels and raising reputational costs around more overt escalation.",
  },
  {
    explanation: "Legalist critique",
    response:
      "Formal legal authority can clarify rights, but in this case it also hardened Chinese rejection. The article therefore distinguishes legal correctness from de-escalatory usefulness.",
  },
];

const generalizationCases = [
  "OSCE monitoring and diplomatic management in Eastern Europe",
  "Arctic Council governance under renewed great-power competition",
  "Emerging cyber governance forums where binding enforcement remains politically difficult",
  "ASEAN-centered diplomacy in adjacent regional crises where sovereignty sensitivity remains high",
];

const references = [
  "Acharya, A. (2004). How ideas spread: Whose norms matter? Norm localization and institutional change in Asian regionalism.",
  "Goh, E. (2008). Great powers and hierarchical order in Southeast Asia: Analyzing regional security strategies.",
  "Johnston, A. I. (2003). Socialization in international institutions: The ASEAN way and international relations theory.",
  "Koremenos, B., Lipson, C., & Snidal, D. (2001). The rational design of international institutions.",
  "Mazarr, M. J. (2015). Mastering the gray zone: Understanding a changing era of conflict.",
  "Vabulas, F., & Snidal, D. (2013). Organization without delegation: Informal intergovernmental organizations.",
];

export default function DeEscalatoryInstitutionalismPage() {
  return (
    <main className="grid-background noise min-h-screen overflow-hidden bg-[#28314E] px-4 py-20 text-[#F1E6D8] sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <BackToHomeLink className="mb-12 sm:mb-16" />

        <section className="relative overflow-hidden rounded-[2rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)] sm:rounded-[2.4rem] sm:p-8 md:p-12">
          <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-[#AA2B3A]/14 blur-3xl" />
          <div className="absolute -bottom-24 left-8 h-64 w-64 rounded-full bg-[#D9B8A7]/10 blur-3xl" />

          <p className="relative mb-6 text-[0.68rem] uppercase tracking-[0.22em] text-[#AA2B3A] sm:text-sm sm:tracking-[0.28em]">
            Research Article • Informal Institutions
          </p>

          <SplitText
            text="De-Escalatory Institutionalism in the Grey Zone"
            tag="h1"
            splitType="words"
            delay={52}
            duration={1}
            textAlign="left"
            clip={false}
            className="font-display relative max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-8xl md:tracking-[-0.045em]"
          />

          <p className="relative mt-8 max-w-4xl text-[1.05rem] leading-8 text-[#F1E6D8]/82 sm:text-2xl sm:leading-10">
            How informal regional institutions manage great-power rivalry
            where formal authority fails.
          </p>

          <div className="relative mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="/research/de-escalatory-institutionalism-paper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#F1E6D8] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#28314E] transition hover:-translate-y-0.5 hover:bg-[#AA2B3A] hover:text-[#F1E6D8]"
            >
              Read Full PDF
            </a>
            <a
              href="#framework"
              className="rounded-full border border-[#F1E6D8]/20 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#F1E6D8] transition hover:-translate-y-0.5 hover:border-[#AA2B3A] hover:text-[#AA2B3A]"
            >
              View Framework
            </a>
            <a
              href="#paper-preview"
              className="rounded-full border border-[#AA2B3A]/40 bg-[#AA2B3A]/10 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#D9B8A7] transition hover:-translate-y-0.5 hover:bg-[#AA2B3A]/16 hover:text-[#F1E6D8]"
            >
              View Showcase
            </a>
          </div>
        </section>

        <section className="grid gap-8 py-20 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#AA2B3A]">
              Research Puzzle
            </p>
            <h2 className="font-display text-4xl leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              Why can informal institutions sometimes manage security tensions
              better than formal universal bodies?
            </h2>
          </div>

          <InteractivePanel className="rounded-[2rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-8">
            <p className="text-[1rem] leading-8 text-[#F1E6D8]/78 sm:text-xl sm:leading-9">
              The article argues that ASEAN occupies a functional niche in South
              China Sea governance that the UNSC cannot fill. Its effectiveness
              lies not in enforcement or dispute settlement, but in preventing
              low-intensity coercive interactions from crossing thresholds of
              armed confrontation.
            </p>
          </InteractivePanel>
        </section>

        <ResearchPdfShowcase
          eyebrow="Paper Showcase"
          title="The article now sits on the page as a visible research object with room to be explored."
          description="This section gives the project the same spatial weight as your Indonesia paper: visitors can understand the core intervention quickly, then move straight into the draft itself through an embedded preview and direct PDF access."
          pdfHref="/research/de-escalatory-institutionalism-paper.pdf"
          previewTitle="De-Escalatory Institutionalism in the Grey Zone PDF preview"
          badge="Research Article"
        />

        <section className="py-8">
          <p className="mb-8 text-sm uppercase tracking-[0.25em] text-[#AA2B3A]">
            Abstract and Intervention
          </p>

          <div className="rounded-[2rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-8 md:p-10">
            <div className="space-y-7 text-lg leading-9 text-[#F1E6D8]/72">
              {abstractParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <p className="mb-8 text-sm uppercase tracking-[0.25em] text-[#AA2B3A]">
            Conceptual Vocabulary
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            {conceptualVocabulary.map((concept) => (
              <InteractivePanel
                key={concept.term}
                className="rounded-[2rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-7"
              >
                <p className="font-display text-3xl tracking-[-0.035em] text-[#F1E6D8]">
                  {concept.term}
                </p>
                <p className="mt-5 leading-8 text-[#F1E6D8]/68">
                  {concept.definition}
                </p>
              </InteractivePanel>
            ))}
          </div>
        </section>

        <section className="grid gap-8 py-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#AA2B3A]">
              Literature Positioning
            </p>
            <h2 className="font-display text-5xl leading-tight tracking-[-0.04em] md:text-6xl">
              The article intervenes where institutional theory, ASEAN studies,
              and grey-zone conflict research overlap.
            </h2>
          </div>

          <div className="space-y-4">
            {literatureInterventions.map((item) => (
              <InteractivePanel
                key={item.field}
                className="rounded-2xl border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-6"
              >
                <p className="text-sm uppercase tracking-[0.22em] text-[#AA2B3A]">
                  {item.field}
                </p>
                <p className="mt-4 leading-8 text-[#F1E6D8]/70">
                  {item.intervention}
                </p>
              </InteractivePanel>
            ))}
          </div>
        </section>

        <section id="framework" className="py-8">
          <p className="mb-8 text-sm uppercase tracking-[0.25em] text-[#AA2B3A]">
            Three Causal Mechanisms
          </p>

          <div className="grid gap-5 lg:grid-cols-3">
            {mechanisms.map((mechanism) => (
              <InteractivePanel
                key={mechanism.title}
                className="rounded-[2rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-7"
              >
                <p className="font-display text-3xl tracking-[-0.035em] text-[#F1E6D8]">
                  {mechanism.title}
                </p>
                <p className="mt-4 text-sm uppercase tracking-[0.2em] text-[#AA2B3A]">
                  {mechanism.function}
                </p>
                <p className="mt-5 leading-8 text-[#F1E6D8]/68">
                  {mechanism.detail}
                </p>
                <div className="mt-6 h-px w-full bg-[#F1E6D8]/10" />
                <p className="mt-5 text-sm leading-7 text-[#F1E6D8]/58">
                  {mechanism.implication}
                </p>
              </InteractivePanel>
            ))}
          </div>
        </section>

        <section className="grid gap-8 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-[#AA2B3A]/30 bg-[#AA2B3A]/10 p-8">
            <p className="mb-6 text-sm uppercase tracking-[0.25em] text-[#AA2B3A]">
              Core Claim
            </p>
            <p className="font-display text-4xl leading-tight tracking-[-0.04em]">
              Institutional softness can become a security-governance asset
              when formal authority would trigger vetoes, exit, or escalation.
            </p>
          </div>

          <div className="space-y-5">
            {criticalJunctures.map((caseStudy) => (
              <InteractivePanel
                key={caseStudy.title}
                className="rounded-2xl border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-6"
              >
                <div className="mb-4 flex flex-wrap gap-4 text-sm uppercase tracking-[0.18em]">
                  <span className="text-[#F1E6D8]/50">{caseStudy.year}</span>
                  <span className="text-[#AA2B3A]">Critical Juncture</span>
                </div>
                <p className="font-display text-3xl tracking-[-0.035em] text-[#F1E6D8]">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-sm uppercase tracking-[0.18em] text-[#AA2B3A]">
                  Empirical Puzzle
                </p>
                <p className="mt-3 leading-7 text-[#F1E6D8]/62">
                  {caseStudy.puzzle}
                </p>
                <p className="mt-4 leading-8 text-[#F1E6D8]/68">
                  {caseStudy.detail}
                </p>
                <p className="mt-4 leading-8 text-[#F1E6D8]/58">
                  {caseStudy.evidence}
                </p>
              </InteractivePanel>
            ))}
          </div>
        </section>

        <section className="py-8">
          <p className="mb-8 text-sm uppercase tracking-[0.25em] text-[#AA2B3A]">
            Boundary Conditions
          </p>

          <div className="grid gap-5 md:grid-cols-3">
            {boundaryConditions.map((condition) => (
              <InteractivePanel
                key={condition.condition}
                className="rounded-[2rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-7"
              >
                <p className="font-display text-3xl tracking-[-0.035em] text-[#F1E6D8]">
                  {condition.condition}
                </p>
                <p className="mt-5 leading-8 text-[#F1E6D8]/68">
                  {condition.detail}
                </p>
              </InteractivePanel>
            ))}
          </div>
        </section>

        <section className="py-20">
          <p className="mb-8 text-sm uppercase tracking-[0.25em] text-[#AA2B3A]">
            Alternative Explanations
          </p>

          <div className="space-y-5">
            {alternativeExplanations.map((item) => (
              <InteractivePanel
                key={item.explanation}
                className="grid gap-5 rounded-[2rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-7 md:grid-cols-[0.38fr_0.62fr]"
              >
                <p className="font-display text-3xl tracking-[-0.035em] text-[#F1E6D8]">
                  {item.explanation}
                </p>
                <p className="leading-8 text-[#F1E6D8]/70">{item.response}</p>
              </InteractivePanel>
            ))}
          </div>
        </section>

        <section className="grid gap-8 py-20 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#AA2B3A]">
              Theoretical Contribution
            </p>
            <h2 className="font-display text-5xl leading-tight tracking-[-0.04em] md:text-6xl">
              A framework for assessing institutional effectiveness below the
              threshold of war.
            </h2>
          </div>

          <div className="space-y-4">
            {theoreticalContributions.map((contribution) => (
              <InteractivePanel
                key={contribution}
                className="rounded-2xl border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-5"
              >
                <p className="leading-7 text-[#F1E6D8]/72">
                  {contribution}
                </p>
              </InteractivePanel>
            ))}
          </div>
        </section>

        <section className="py-8">
          <p className="mb-8 text-sm uppercase tracking-[0.25em] text-[#AA2B3A]">
            Generalization Agenda
          </p>

          <div className="rounded-[2rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-8 md:p-10">
            <p className="max-w-4xl text-xl leading-9 text-[#F1E6D8]/76">
              The paper treats the South China Sea as a theory-building case,
              not an isolated regional story. De-escalatory institutionalism is
              most likely to matter where formal bodies are blocked, grey-zone
              competition remains below deterrence thresholds, and an informal
              forum still commands enough participation to structure diplomatic
              expectations.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {generalizationCases.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#F1E6D8]/10 bg-[#28314E]/45 p-5"
                >
                  <p className="leading-7 text-[#F1E6D8]/68">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-8 md:p-10">
            <div className="absolute right-0 top-0 h-40 w-40 translate-x-12 -translate-y-12 rounded-full bg-[#AA2B3A]/12 blur-2xl" />
            <p className="relative mb-4 text-sm uppercase tracking-[0.25em] text-[#AA2B3A]">
              Reader Access
            </p>
            <p className="relative max-w-3xl text-xl leading-9 text-[#F1E6D8]/76">
              The full manuscript is available as a PDF for readers who want to
              examine the argument, process-tracing evidence, references, and
              appendix in full.
            </p>
            <a
              href="/research/de-escalatory-institutionalism-paper.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-8 inline-flex rounded-full border border-[#F1E6D8]/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#F1E6D8] transition hover:-translate-y-0.5 hover:border-[#AA2B3A] hover:text-[#AA2B3A]"
            >
              Open PDF Manuscript
            </a>
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

        <ResearchContinuum currentSlug="de-escalatory-institutionalism" />
      </div>
    </main>
  );
}
