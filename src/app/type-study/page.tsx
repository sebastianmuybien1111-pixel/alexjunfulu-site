import type { Metadata } from "next";
import Link from "next/link";

const sampleTitle = "Body Typeface Study";
const sampleParagraphs = [
  "Alex Junfu Lu is an undergraduate student in International Relations at Xi’an Jiaotong-Liverpool University, with a strong passion for academic research, global affairs, and political analysis.",
  "His academic journey has been shaped by a deep curiosity about how institutions, ideas, and power interact within the international system.",
];

const fontOptions = [
  {
    id: "a",
    name: "Inter",
    style: {
      fontFamily:
        'Inter, "Helvetica Neue", "Arial Nova", Arial, sans-serif',
    },
    label: "Cleanest option",
    note: "Sharper spacing and calmer rhythm. Good if you want the site to feel more polished without becoming too formal.",
  },
  {
    id: "b",
    name: "Public Sans",
    style: {
      fontFamily: '"Public Sans", "Helvetica Neue", Arial, sans-serif',
    },
    label: "Policy / academic",
    note: "Feels closest to policy briefs, think-tank writing, and institutional documents. Very suitable for IR.",
  },
  {
    id: "c",
    name: "IBM Plex Sans",
    style: {
      fontFamily: '"IBM Plex Sans", "Helvetica Neue", Arial, sans-serif',
    },
    label: "Most intellectual",
    note: "A bit more character, slightly more serious and research-forward. Strong fit with your headline serif.",
  },
  {
    id: "d",
    name: "Manrope",
    style: {
      fontFamily: 'Manrope, "Helvetica Neue", Arial, sans-serif',
    },
    label: "Soft modern",
    note: "More refined and contemporary, with smoother curves. Good if you want the site to feel elegant and less institutional.",
  },
];

export const metadata: Metadata = {
  title: "Typeface Study | Alex Junfu Lu",
  description:
    "Preview page for comparing body text font options on Alex Junfu Lu's academic portfolio.",
};

export default function TypefaceStudyPage() {
  return (
    <main className="grid-background noise min-h-screen bg-[#28314E] px-6 py-24 text-[#F1E6D8]">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/#about"
          className="inline-flex items-center gap-4 text-sm uppercase tracking-[0.34em] text-[#AA2B3A] transition hover:text-[#F1E6D8]"
        >
          <span aria-hidden="true" className="text-base leading-none">
            ←
          </span>
          <span>Back to homepage</span>
        </Link>

        <section className="mt-14 grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-[#AA2B3A]">
              Typography Preview
            </p>
            <h1 className="font-display mt-6 text-6xl leading-[0.98] tracking-[-0.05em] md:text-8xl">
              Keep the headline. Replace the body voice.
            </h1>
            <p className="mt-8 max-w-xl text-[1.02rem] leading-8 text-[#F1E6D8]/66">
              I kept your current serif headline untouched and only built a
              comparison for the smaller sans-serif copy. Each option below uses
              the same text, size, spacing, and layout so you can judge the font
              itself rather than the styling around it.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#AA2B3A]/25 bg-[#AA2B3A]/10 p-7">
            <p className="text-xs uppercase tracking-[0.24em] text-[#AA2B3A]">
              My shortlist
            </p>
            <div className="mt-5 space-y-4 text-[0.98rem] leading-7 text-[#F1E6D8]/70">
              <p>
                <span className="font-semibold text-[#F1E6D8]">Best academic fit:</span>{" "}
                IBM Plex Sans
              </p>
              <p>
                <span className="font-semibold text-[#F1E6D8]">Best clean upgrade:</span>{" "}
                Inter
              </p>
              <p>
                <span className="font-semibold text-[#F1E6D8]">Best policy-document mood:</span>{" "}
                Public Sans
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-6 xl:grid-cols-2">
          {fontOptions.map((option) => (
            <article
              key={option.id}
              className="scholar-motion-card relative overflow-hidden rounded-[2rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-8"
            >
              <div className="scholar-signal-dot" />
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.22em]">
                <span className="text-[#AA2B3A]">Option {option.id.toUpperCase()}</span>
                <span className="text-[#F1E6D8]/46">{option.label}</span>
              </div>

              <h2 className="font-display mt-6 text-4xl tracking-[-0.035em] text-[#F1E6D8]">
                {option.name}
              </h2>

              <p className="mt-4 max-w-2xl leading-8 text-[#F1E6D8]/62">
                {option.note}
              </p>

              <div className="mt-8 rounded-[1.6rem] border border-[#F1E6D8]/10 bg-[#28314E]/58 p-7">
                <p className="font-display text-4xl tracking-[-0.04em] text-[#F1E6D8]">
                  {sampleTitle}
                </p>
                <div
                  className="mt-8 space-y-7 text-[1.02rem] font-medium leading-[2.15rem] tracking-[-0.005em] text-[#F1E6D8]/72"
                  style={option.style}
                >
                  {sampleParagraphs.map((paragraph) => (
                    <p key={`${option.id}-${paragraph}`}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.03] p-8">
          <p className="text-sm uppercase tracking-[0.24em] text-[#AA2B3A]">
            How to choose
          </p>
          <div className="mt-6 grid gap-4 text-[0.98rem] leading-7 text-[#F1E6D8]/66 md:grid-cols-3">
            <p>
              Choose <span className="text-[#F1E6D8]">Inter</span> if you want
              the site to look cleaner and more premium with minimal risk.
            </p>
            <p>
              Choose <span className="text-[#F1E6D8]">Public Sans</span> if you
              want a stronger policy / institutional atmosphere.
            </p>
            <p>
              Choose <span className="text-[#F1E6D8]">IBM Plex Sans</span> if
              you want the most academic personality and the strongest contrast
              with your headline serif.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
