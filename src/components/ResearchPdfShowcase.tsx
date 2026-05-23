import InteractivePanel from "@/components/InteractivePanel";

type ResearchPdfShowcaseProps = {
  badge?: string;
  eyebrow: string;
  title: string;
  description: string;
  pdfHref: string;
  previewTitle: string;
  primaryActionLabel?: string;
  secondaryActionLabel?: string;
};

export default function ResearchPdfShowcase({
  badge = "Full Draft",
  eyebrow,
  title,
  description,
  pdfHref,
  previewTitle,
  primaryActionLabel = "Open in New Tab",
  secondaryActionLabel = "Save PDF",
}: ResearchPdfShowcaseProps) {
  return (
    <section
      id="paper-preview"
      className="grid gap-8 py-8 lg:grid-cols-[0.78fr_1.22fr]"
    >
      <div className="space-y-6">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#AA2B3A]">
            {eyebrow}
          </p>
          <h2 className="font-display text-4xl leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-6xl">
            {title}
          </h2>
        </div>

        <InteractivePanel className="rounded-[1.8rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-6 sm:rounded-[2rem] sm:p-8">
          <p className="text-[1rem] leading-8 text-[#F1E6D8]/72 sm:text-lg">{description}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href={pdfHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#F1E6D8] px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#28314E] transition hover:-translate-y-0.5 hover:bg-[#AA2B3A] hover:text-[#F1E6D8]"
            >
              {primaryActionLabel}
            </a>
            <a
              href={pdfHref}
              download
              className="rounded-full border border-[#F1E6D8]/20 px-5 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#F1E6D8] transition hover:-translate-y-0.5 hover:border-[#AA2B3A] hover:text-[#AA2B3A]"
            >
              {secondaryActionLabel}
            </a>
          </div>
        </InteractivePanel>
      </div>

      <div className="relative">
        <div className="absolute right-3 top-3 z-10 rounded-full border border-[#F1E6D8]/15 bg-[#AA2B3A]/90 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#F1E6D8] shadow-[0_14px_30px_rgba(170,43,58,0.28)] sm:-right-5 sm:-top-5 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.24em]">
          {badge}
        </div>
        <div className="overflow-hidden rounded-[1.8rem] border border-[#F1E6D8]/12 bg-[#101523] p-2 shadow-[0_24px_80px_rgba(0,0,0,0.26)] sm:rounded-[2rem] sm:p-3">
          <iframe
            src={pdfHref}
            title={previewTitle}
            className="h-[420px] w-full rounded-[1.1rem] bg-white sm:h-[620px] sm:rounded-[1.25rem]"
          />
        </div>
      </div>
    </section>
  );
}
