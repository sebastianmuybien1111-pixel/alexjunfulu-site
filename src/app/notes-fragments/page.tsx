import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import DotGridBackground from "@/components/DotGridBackground";
import NotesFragmentsArchive, {
  getValidArchiveFilter,
} from "./NotesFragmentsArchive";

const archiveSignals = [
  {
    label: "Video Reflections",
    title: "Simulation, communication, and public-facing analysis",
    detail:
      "Short-form video work where institutional language, positioning, and narrative framing can be tested more directly.",
  },
  {
    label: "Visual Notes",
    title: "Photography and poster studies as observational practice",
    detail:
      "Images, layouts, and atmosphere studies that keep attention on pacing, texture, and how environments quietly organize feeling.",
  },
  {
    label: "Listening Log",
    title: "Music as an extension of drafting rhythm",
    detail:
      "A small record of what helps sustain concentration, transition between modes, and hold an argument in motion.",
  },
];

export const metadata: Metadata = {
  title: "Notes & Fragments | Alex Junfu Lu",
  description:
    "A personal archive of moving images, photographs, visual experiments, and sounds by Alex Junfu Lu.",
  openGraph: {
    title: "Notes & Fragments | Alex Junfu Lu",
    description:
      "A personal archive of moving images, photographs, visual experiments, and sounds that shape everyday life.",
    url: "/notes-fragments",
    images: [
      {
        url: "/notes-fragments/video-bilibili.svg",
        width: 1200,
        height: 760,
        alt: "Notes & Fragments archive preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notes & Fragments | Alex Junfu Lu",
    description:
      "A personal archive of moving images, photographs, visual experiments, and sound notes.",
    images: ["/notes-fragments/video-bilibili.svg"],
  },
};

type NotesFragmentsPageProps = {
  searchParams: Promise<{ filter?: string | string[] }>;
};

export default async function NotesFragmentsPage({
  searchParams,
}: NotesFragmentsPageProps) {
  const { filter } = await searchParams;
  const activeFilter = getValidArchiveFilter(filter);

  return (
    <main className="grid-background noise relative min-h-screen overflow-hidden bg-[#28314E] text-[#F1E6D8]">
      <Navbar />

      <section className="relative overflow-hidden px-4 pb-16 pt-44 sm:px-6 md:pb-20 md:pt-40">
        <DotGridBackground />
        <div className="pointer-events-none absolute inset-x-0 top-24 z-0 mx-auto h-96 max-w-4xl rounded-full bg-[#AA2B3A]/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-6 text-sm uppercase tracking-[0.32em] text-[#AA2B3A]">
              Notes & Fragments
            </p>

            <h1 className="font-display max-w-[11ch] text-[4.1rem] font-semibold leading-[0.93] tracking-[-0.045em] text-[#F1E6D8] sm:max-w-none sm:text-6xl md:text-8xl md:tracking-[-0.055em]">
              A private gallery for the non-academic eye.
            </h1>

            <p className="mt-7 max-w-3xl text-[1rem] leading-8 tracking-[-0.01em] text-[#F1E6D8]/72 sm:mt-10 sm:text-xl sm:leading-9">
              A personal archive of moving images, photographs, visual
              experiments, and sounds that shape my everyday life.
            </p>

            <p className="mt-4 max-w-3xl text-[0.95rem] leading-7 text-[#F1E6D8]/62 sm:mt-6 sm:text-[1.05rem] sm:leading-8">
              Beyond academic work, I use images, sound, and design to record
              fragments of everyday life. This page gathers some of my videos,
              photographs, posters, and music notes as a small archive of
              personal expression.
            </p>
          </div>

          <div className="mt-16 grid gap-4 border-y border-[#F1E6D8]/10 py-6 text-sm uppercase tracking-[0.22em] text-[#F1E6D8]/52 sm:grid-cols-2 lg:grid-cols-4">
            {["Videos", "Photography", "Posters & Visual Design", "Music"].map(
              (item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#AA2B3A]/80" />
                  <span>{item}</span>
                </div>
              ),
            )}
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {archiveSignals.map((signal, index) => (
              <article
                key={signal.label}
                className="scholar-motion-card scholar-motion-card--soft relative overflow-hidden rounded-[1.6rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] p-6 sm:rounded-[1.8rem] sm:p-7"
                style={{ animationDelay: `${index * 0.35}s` }}
              >
                <div className="scholar-signal-dot" />
                <p className="text-xs uppercase tracking-[0.28em] text-[#AA2B3A]">
                  {signal.label}
                </p>
                <h2 className="font-display mt-5 text-[1.8rem] leading-[1.02] tracking-[-0.03em] text-[#F1E6D8] sm:mt-6 sm:text-3xl sm:tracking-[-0.035em]">
                  {signal.title}
                </h2>
                <p className="mt-5 text-[0.98rem] leading-7 text-[#F1E6D8]/66">
                  {signal.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <NotesFragmentsArchive activeFilter={activeFilter} />

      <footer className="border-t border-[#F1E6D8]/10 py-10 text-center text-sm text-[#F1E6D8]/55">
        © 2026 Alex Junfu Lu. All rights reserved.
      </footer>
    </main>
  );
}
