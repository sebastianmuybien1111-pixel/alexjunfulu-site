import Link from "next/link";
import InteractivePanel from "@/components/InteractivePanel";

type ResearchThread = {
  slug: string;
  status: string;
  scope: string;
  title: string;
  summary: string;
  href: string;
};

const researchThreads: ResearchThread[] = [
  {
    slug: "indonesia-hedging",
    status: "Working Paper",
    scope: "Southeast Asia / Strategic Competition",
    title: "The Myth of Indonesian Neutrality",
    summary:
      "A paper on hedging, selective alignment, and the domestic politics beneath Indonesia's language of strategic autonomy.",
    href: "/research/indonesia-hedging",
  },
  {
    slug: "climate-governance",
    status: "Conference Paper",
    scope: "Global Governance / Climate Justice",
    title: "Unequal Skies, Shared Destiny",
    summary:
      "A project on the Financial Rift, climate finance asymmetry, and responsibility allocation in unequal institutional orders.",
    href: "/research/climate-governance",
  },
  {
    slug: "de-escalatory-institutionalism",
    status: "Research Article",
    scope: "ASEAN / Informal Institutions",
    title: "De-Escalatory Institutionalism in the Grey Zone",
    summary:
      "An article on how informal regional institutions manage escalation where formal authority is blocked or politically unusable.",
    href: "/research/de-escalatory-institutionalism",
  },
];

type ResearchContinuumProps = {
  currentSlug: string;
};

export default function ResearchContinuum({
  currentSlug,
}: ResearchContinuumProps) {
  const currentThread =
    researchThreads.find((thread) => thread.slug === currentSlug) ??
    researchThreads[0];
  const relatedThreads = researchThreads.filter(
    (thread) => thread.slug !== currentThread.slug,
  );

  return (
    <section className="py-16 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#AA2B3A]">
            Research Continuum
          </p>
          <h2 className="font-display text-4xl leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-6xl">
            This paper sits inside a larger portfolio of arguments on
            institutions, pressure, and regional order.
          </h2>
          <p className="mt-6 max-w-xl text-[1rem] leading-8 text-[#F1E6D8]/66">
            The projects are different in subject matter, but they keep talking
            to one another. Together they trace how power is managed through
            ambiguity, procedural design, and unequal governance structures.
          </p>

          <div className="mt-8 rounded-[1.6rem] border border-[#AA2B3A]/28 bg-[#AA2B3A]/10 p-5 sm:rounded-[1.8rem] sm:p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-[#AA2B3A]">
              Current Thread
            </p>
            <p className="mt-4 font-display text-[1.8rem] leading-[1.02] tracking-[-0.03em] text-[#F1E6D8] sm:text-3xl sm:leading-[1.04] sm:tracking-[-0.035em]">
              {currentThread.title}
            </p>
            <p className="mt-4 text-sm uppercase tracking-[0.18em] text-[#F1E6D8]/52">
              {currentThread.status} • {currentThread.scope}
            </p>
            <p className="mt-4 leading-8 text-[#F1E6D8]/70">
              {currentThread.summary}
            </p>
          </div>
        </div>

        <div className="grid gap-5">
          {relatedThreads.map((thread, index) => (
            <Link key={thread.slug} href={thread.href} className="block">
              <InteractivePanel
                className="scholar-motion-card group relative overflow-hidden rounded-[1.8rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-6 transition duration-500 hover:-translate-y-1 hover:border-[#AA2B3A]/45 sm:rounded-[2rem] sm:p-7"
                style={{ animationDelay: `${index * 0.18}s` }}
              >
                <div className="scholar-signal-dot" />
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em]">
                  <span className="text-[#AA2B3A]">{thread.status}</span>
                  <span className="text-[#F1E6D8]/46">{thread.scope}</span>
                </div>
                <h3 className="font-display mt-5 text-3xl leading-[1.02] tracking-[-0.035em] text-[#F1E6D8] sm:text-4xl sm:tracking-[-0.04em]">
                  {thread.title}
                </h3>
                <p className="mt-5 max-w-3xl leading-8 text-[#F1E6D8]/66">
                  {thread.summary}
                </p>
                <div className="mt-7 flex items-center justify-between gap-4">
                  <span className="text-sm uppercase tracking-[0.2em] text-[#AA2B3A]">
                    Continue Reading
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-[#AA2B3A]/60 to-transparent" />
                </div>
              </InteractivePanel>
            </Link>
          ))}

          <Link
            href="/#research"
            className="rounded-[1.8rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.03] px-6 py-5 text-sm uppercase tracking-[0.2em] text-[#F1E6D8]/58 transition hover:border-[#AA2B3A]/45 hover:text-[#AA2B3A]"
          >
            Return to research overview
          </Link>
        </div>
      </div>
    </section>
  );
}
