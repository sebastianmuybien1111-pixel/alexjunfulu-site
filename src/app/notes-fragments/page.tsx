import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import DotGridBackground from "@/components/DotGridBackground";
import NotesFragmentsArchive, {
  getValidArchiveFilter,
} from "./NotesFragmentsArchive";

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

      <section className="relative overflow-hidden px-6 pb-20 pt-44 md:pt-40">
        <DotGridBackground />
        <div className="pointer-events-none absolute inset-x-0 top-24 z-0 mx-auto h-96 max-w-4xl rounded-full bg-[#AA2B3A]/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-6 text-sm uppercase tracking-[0.32em] text-[#AA2B3A]">
              Notes & Fragments
            </p>

            <h1 className="font-display text-6xl font-semibold leading-[0.98] tracking-[-0.055em] text-[#F1E6D8] md:text-8xl">
              A private gallery for the non-academic eye.
            </h1>

            <p className="mt-10 max-w-3xl text-xl leading-9 tracking-[-0.01em] text-[#F1E6D8]/72">
              A personal archive of moving images, photographs, visual
              experiments, and sounds that shape my everyday life.
            </p>

            <p className="mt-6 max-w-3xl text-[1.05rem] leading-8 text-[#F1E6D8]/62">
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
        </div>
      </section>

      <NotesFragmentsArchive activeFilter={activeFilter} />

      <footer className="border-t border-[#F1E6D8]/10 py-10 text-center text-sm text-[#F1E6D8]/55">
        © 2026 Alex Junfu Lu. All rights reserved.
      </footer>
    </main>
  );
}
