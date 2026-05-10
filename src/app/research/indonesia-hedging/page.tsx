import BackToHomeLink from "@/components/BackToHomeLink";

export default function ResearchPage() {
  return (
    <main className="grid-background noise min-h-screen bg-[#28314E] px-6 py-32 text-[#F1E6D8]">
      <div className="mx-auto max-w-5xl">
        <BackToHomeLink className="mb-16" />
        {/* Header */}
        <section className="border-b border-[#F1E6D8]/10 pb-16">
          <p className="mb-6 text-sm uppercase tracking-[0.25em] text-[#AA2B3A]">
            Research Project
          </p>

          <h1 className="font-display text-6xl font-semibold leading-tight tracking-[-0.04em] md:text-7xl">
            The Myth of Indonesian Neutrality:
            Strategic Ambiguity and Selective Alignment
            in Southeast Asian Great-Power Politics
          </h1>

          <p className="mt-10 max-w-4xl text-lg leading-8 text-[#F1E6D8]/75">
            This research examines Indonesia’s contemporary foreign policy
            strategy under intensifying Sino-American competition in the
            Indo-Pacific. Rather than practicing genuine neutrality,
            Indonesia employs a calculated hedging strategy characterized by
            strategic ambiguity, selective alignment, and institutional balancing.
          </p>
        </section>

        {/* Research Question */}
        <section className="py-16">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#AA2B3A]">
            Research Question
          </p>

          <div className="rounded-3xl border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-10">
            <p className="text-2xl leading-10 text-[#F1E6D8]">
              How does Indonesia utilize strategic ambiguity and selective
              alignment to navigate great-power rivalry in the Indo-Pacific?
            </p>
          </div>
        </section>

        {/* Key Arguments */}
        <section className="py-16">
          <p className="mb-10 text-sm uppercase tracking-[0.25em] text-[#AA2B3A]">
            Key Arguments
          </p>

          <div className="space-y-6">
            {[
              "Indonesia’s bebas aktif doctrine no longer reflects classical neutrality under contemporary geopolitical conditions.",
              "Indonesia strategically deepens economic engagement with China while simultaneously maintaining security cooperation with the United States.",
              "Strategic ambiguity allows Jakarta to minimize risks while preserving diplomatic flexibility and domestic political legitimacy.",
              "ASEAN centrality functions not only as regional diplomacy, but also as a mechanism of institutional hedging.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-6"
              >
                <p className="leading-8 text-[#F1E6D8]/80">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Themes */}
        <section className="py-16">
          <p className="mb-10 text-sm uppercase tracking-[0.25em] text-[#AA2B3A]">
            Core Themes
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              "Indo-Pacific Strategy",
              "ASEAN Centrality",
              "Middle-Power Diplomacy",
              "Strategic Ambiguity",
              "Institutional Hedging",
              "Geopolitical Competition",
            ].map((theme) => (
              <div
                key={theme}
                className="rounded-2xl border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] px-6 py-5"
              >
                <p className="text-lg text-[#F1E6D8]/80">
                  {theme}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* References */}
        <section className="py-16">
          <p className="mb-10 text-sm uppercase tracking-[0.25em] text-[#AA2B3A]">
            Selected References
          </p>

          <div className="space-y-6">
            {[
              "Anwar, D. F. (2023). Indonesia’s Hedging Plus Policy in the Face of China’s Rise.",
              "Kuik, C.-C. Hedging in Post-Pandemic Asia-Pacific.",
              "Acharya, A. Constructing a Security Community in Southeast Asia.",
              "Syailendra, E. Indonesia’s Maritime Strategy and the Natuna Question.",
            ].map((reference) => (
              <div
                key={reference}
                className="rounded-2xl border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-6"
              >
                <p className="leading-7 text-[#F1E6D8]/75">
                  {reference}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
