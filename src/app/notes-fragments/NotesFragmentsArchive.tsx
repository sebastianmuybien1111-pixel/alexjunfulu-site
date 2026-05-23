import Image from "next/image";
import Link from "next/link";

type ArchiveType = "Videos" | "Photography" | "Posters" | "Music";
type FilterType = "All" | ArchiveType;

type ArchiveItem = {
  title: string;
  type: ArchiveType;
  date: string;
  description: string;
  externalLink?: string;
  image?: string;
  tags: string[];
  featured?: boolean;
  platform?: string;
  location?: string;
  camera?: string;
  context?: string;
  artist?: string;
  mood?: string;
  note?: string;
  previewTitle?: string;
  previewSubtitle?: string;
  previewStamp?: string;
  accent?: string;
};

const filters: FilterType[] = ["All", "Videos", "Photography", "Posters", "Music"];

const archiveItems: ArchiveItem[] = [
  {
    title: "Simulation Reflection from the Indonesian Position",
    type: "Videos",
    date: "2026",
    platform: "XJTLU Mediasite",
    description:
      "A reflective video response to a simulation exercise, thinking through how the Indonesian position navigates pressure, ambiguity, and strategic choice in a contested regional setting.",
    externalLink:
      "https://video.xjtlu.edu.cn/Mediasite/Play/629d76ec37a146ac98b36cd94f062c321d",
    previewTitle: "Indonesia in Simulation",
    previewSubtitle: "position, restraint, and strategic reflection",
    previewStamp: "INS106 / Reflection",
    accent: "from-[#AA2B3A]/38 via-[#D9B8A7]/14 to-[#0F172A]",
    tags: ["Simulation", "Indonesia", "Reflection", "Strategy"],
    featured: true,
  },
  {
    title: "Sorting Waste, Framing Responsibility",
    type: "Videos",
    date: "2026",
    platform: "XJTLU Mediasite",
    description:
      "A group video project on waste sorting that connects everyday disposal practices to questions of communication, collective behavior, and the international politics of responsibility.",
    externalLink:
      "https://video.xjtlu.edu.cn/Mediasite/Play/96e5802b26cd4402afd603c05bc6d2a51d",
    previewTitle: "Waste Sorting Analysis",
    previewSubtitle: "international relations meets communication practice",
    previewStamp: "Group Video",
    accent: "from-[#D9B8A7]/30 via-[#6B7280]/12 to-[#0F172A]",
    tags: ["Waste Sorting", "Group Project", "Communication", "IR"],
  },
  {
    title: "A Short Moving-Image Fragment",
    type: "Videos",
    date: "2026",
    platform: "Bilibili",
    description:
      "A short moving-image fragment uploaded to Bilibili, kept here as part of a wider archive of mood, place, pacing, and visual observation.",
    externalLink:
      "https://www.bilibili.com/video/BV1rXmKYmEGv/?spm_id_from=333.1387.0.0",
    previewTitle: "Bilibili Fragment",
    previewSubtitle: "moving image, atmosphere, and personal archive",
    previewStamp: "Bilibili",
    accent: "from-[#3B82F6]/26 via-[#AA2B3A]/14 to-[#0F172A]",
    tags: ["Moving Image", "Personal Archive", "Bilibili"],
  },
  {
    title: "Evening Geometry",
    type: "Photography",
    date: "Spring 2026",
    location: "Suzhou",
    camera: "Phone camera",
    description:
      "A dusk study of riverfront architecture, where window grids, reflected light, and walking rhythms settle into a more geometric composition.",
    image: "/notes-fragments/photo-suzhou.svg",
    tags: ["Street", "Evening", "Suzhou"],
  },
  {
    title: "Campus Light",
    type: "Photography",
    date: "2026",
    location: "XJTLU",
    camera: "Phone camera",
    description:
      "A visual note on campus glass, corridor light, and the suspended quiet that appears between lectures, movement, and institutional routine.",
    image: "/notes-fragments/photo-campus.svg",
    tags: ["Campus", "Light", "Everyday"],
  },
  {
    title: "Rain Study",
    type: "Photography",
    date: "2025",
    location: "Suzhou",
    camera: "Phone camera",
    description:
      "A pared-back study of wet pavement, blurred movement, and the way weather quietly rewrites an otherwise familiar street.",
    image: "/notes-fragments/photo-rain.svg",
    tags: ["Rain", "Texture", "Observation"],
  },
  {
    title: "Climate Governance Poster",
    type: "Posters",
    date: "2026",
    context: "Research visual system",
    description:
      "A poster concept for translating climate finance, responsibility, and institutional inequality into a disciplined visual argument.",
    image: "/notes-fragments/poster-climate.svg",
    tags: ["Poster", "Research", "Climate"],
  },
  {
    title: "Conference Procedure Sheet",
    type: "Posters",
    date: "2026",
    context: "MUN visual design",
    description:
      "A conference-facing visual sheet designed around hierarchy, procedural clarity, and the restrained atmosphere of diplomatic formality.",
    image: "/notes-fragments/poster-mun.svg",
    tags: ["Conference", "Editorial", "Diplomacy"],
  },
  {
    title: "Fragments Study",
    type: "Posters",
    date: "2025",
    context: "Personal visual experiment",
    description:
      "A small poster experiment using paper-like blocks, margins, and negative space as a visual grammar for memory.",
    image: "/notes-fragments/poster-fragments.svg",
    tags: ["Visual Design", "Archive", "Experiment"],
  },
  {
    title: "Sweet Disposition",
    type: "Music",
    date: "Current Listening",
    artist: "The Temper Trap",
    mood: "Open, cinematic, late-walk clarity",
    description:
      "A soundtrack note for momentum without noise, useful for walking through the city after a long reading day.",
    note:
      "I return to songs like this when I want something bright enough to move with, but spacious enough to think inside.",
    tags: ["Current Listening", "Indie", "Walking"],
  },
  {
    title: "Una Mattina",
    type: "Music",
    date: "Soundtrack Note",
    artist: "Ludovico Einaudi",
    mood: "Minimal, interior, reflective",
    description:
      "A piano piece that feels less like background music than a room with good light: restrained, patient, and precise.",
    note:
      "A useful companion for drafting, especially when the argument needs to slow down before it becomes clear.",
    tags: ["Piano", "Writing", "Quiet"],
  },
];

export { filters };

export function getValidArchiveFilter(filter: string | string[] | undefined) {
  const selectedFilter = Array.isArray(filter) ? filter[0] : filter;

  if (filters.includes(selectedFilter as FilterType)) {
    return selectedFilter as FilterType;
  }

  return "All";
}

export default function NotesFragmentsArchive({
  activeFilter,
}: {
  activeFilter: FilterType;
}) {
  const visibleItems =
    activeFilter === "All"
      ? archiveItems
      : archiveItems.filter((item) => item.type === activeFilter);

  return (
    <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 md:pb-32">
      <div className="sticky top-[9.9rem] z-20 -mx-2 mb-10 px-2 py-3 backdrop-blur-md sm:top-[9.2rem] md:top-[4.9rem]">
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <Link
              key={filter}
              href={
                filter === "All"
                  ? "/notes-fragments"
                  : `/notes-fragments?filter=${encodeURIComponent(filter)}`
              }
              className={`rounded-full border px-4 py-2 text-xs transition duration-300 hover:-translate-y-0.5 hover:border-[#AA2B3A]/60 hover:text-[#AA2B3A] sm:px-5 sm:py-2.5 sm:text-sm ${
                activeFilter === filter
                  ? "border-[#AA2B3A]/60 bg-[#AA2B3A]/12 text-[#AA2B3A]"
                  : "border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.035] text-[#F1E6D8]/68"
              }`}
            >
              {filter}
            </Link>
          ))}
        </div>
      </div>

      <div className="grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visibleItems.map((item) => (
          <ArchiveCard key={`${item.type}-${item.title}`} item={item} />
        ))}
      </div>
    </section>
  );
}

function ArchiveCard({ item }: { item: ArchiveItem }) {
  const isVideo = item.type === "Videos";
  const cardContent = (
    <div
      className={`group flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] transition duration-500 hover:-translate-y-1 hover:border-[#AA2B3A]/45 hover:bg-[#F1E6D8]/[0.06] ${
        item.featured ? "md:col-span-2" : ""
      }`}
    >
      {isVideo ? (
        <div
          className={`video-preview-shell relative overflow-hidden border-b border-[#F1E6D8]/10 ${
            item.featured ? "aspect-[16/9]" : "aspect-[4/3]"
          }`}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${item.accent ?? "from-[#AA2B3A]/30 via-[#D9B8A7]/10 to-[#0F172A]"}`}
          />
          <div className="video-preview-grid absolute inset-0 opacity-45" />
          <div className="video-preview-glow absolute left-[8%] top-[12%] h-28 w-28 rounded-full bg-[#F1E6D8]/12 blur-3xl" />
          <div className="video-preview-scan absolute inset-y-0 left-[-18%] w-1/3 rotate-[10deg] bg-gradient-to-r from-transparent via-[#F1E6D8]/12 to-transparent" />

          <div className="relative flex h-full flex-col justify-between p-4 sm:p-5 md:p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="rounded-full border border-[#F1E6D8]/16 bg-[#28314E]/70 px-4 py-2 text-[0.7rem] uppercase tracking-[0.22em] text-[#F1E6D8]/70 backdrop-blur-md">
                {item.platform}
              </div>
              {item.previewStamp ? (
                <div className="rounded-full border border-[#F1E6D8]/12 bg-[#F1E6D8]/8 px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.22em] text-[#F1E6D8]/60">
                  {item.previewStamp}
                </div>
              ) : null}
            </div>

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-full sm:max-w-[70%]">
                <p className="text-xs uppercase tracking-[0.24em] text-[#D9B8A7]">
                  Video Preview
                </p>
                <p className="mt-3 font-display text-[1.9rem] leading-[0.98] tracking-[-0.035em] text-[#F1E6D8] sm:text-4xl md:text-5xl">
                  {item.previewTitle ?? item.title}
                </p>
                {item.previewSubtitle ? (
                  <p className="mt-3 max-w-lg text-[0.82rem] leading-6 text-[#F1E6D8]/66 sm:text-sm md:text-base">
                    {item.previewSubtitle}
                  </p>
                ) : null}
              </div>

              <div className="video-preview-play-wrap shrink-0 self-start sm:self-auto">
                <div className="video-preview-play-ring flex h-16 w-16 items-center justify-center rounded-full border border-[#F1E6D8]/18 bg-[#F1E6D8]/10 backdrop-blur-md sm:h-20 sm:w-20 md:h-24 md:w-24">
                  <div className="ml-1 h-0 w-0 border-b-[12px] border-l-[20px] border-t-[12px] border-b-transparent border-l-[#F1E6D8] border-t-transparent md:border-b-[14px] md:border-l-[24px] md:border-t-[14px]" />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#F1E6D8]/10">
                  <div className="video-preview-progress h-full w-1/2 rounded-full bg-[#F1E6D8]/70" />
                </div>
                <span className="text-[0.65rem] uppercase tracking-[0.2em] text-[#F1E6D8]/44">
                  preview
                </span>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: 24 }).map((_, index) => (
                  <span
                    key={`${item.title}-${index}`}
                    className="video-preview-wave flex-1 rounded-full bg-[#F1E6D8]/18"
                    style={{
                      height: `${12 + ((index * 13) % 32)}px`,
                      animationDelay: `${index * 0.08}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : item.image ? (
        <div
          className={`relative overflow-hidden border-b border-[#F1E6D8]/10 ${
            item.featured ? "aspect-[16/9]" : "aspect-[4/3]"
          }`}
        >
          <Image
            src={item.image}
            alt=""
            fill
            className="object-cover transition duration-700 group-hover:scale-[1.035]"
            sizes={item.featured ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/55 via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-5 left-5 rounded-full border border-[#F1E6D8]/16 bg-[#28314E]/70 px-4 py-2 text-xs uppercase tracking-[0.22em] text-[#F1E6D8]/70 backdrop-blur-md">
            {item.type}
          </div>
        </div>
      ) : (
        <div className="border-b border-[#F1E6D8]/10 p-8">
          <p className="text-xs uppercase tracking-[0.26em] text-[#AA2B3A]">
            {item.type}
          </p>
          <p className="font-display mt-8 text-5xl font-medium leading-none tracking-[-0.05em] text-[#F1E6D8]/92">
            {item.title}
          </p>
        </div>
      )}

      <div className="flex grow flex-col p-6 sm:p-7 md:p-8">
        <div className="mb-5 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em]">
          <span className="text-[#AA2B3A]">{item.date}</span>
          {item.platform ? <span className="text-[#F1E6D8]/48">{item.platform}</span> : null}
          {item.context ? <span className="text-[#F1E6D8]/48">{item.context}</span> : null}
          {item.artist ? <span className="text-[#F1E6D8]/48">{item.artist}</span> : null}
        </div>

        <h2 className="font-display text-[1.9rem] font-medium leading-[1.03] tracking-[-0.03em] text-[#F1E6D8] sm:text-4xl sm:leading-[1.05] sm:tracking-[-0.035em]">
          {item.title}
        </h2>

        <p className="mt-5 text-[0.98rem] leading-7 text-[#F1E6D8]/68 sm:text-base sm:leading-8">
          {item.description}
        </p>

        <div className="mt-7 space-y-2 text-sm leading-6 text-[#F1E6D8]/56">
          {item.location ? <p>Location: {item.location}</p> : null}
          {item.camera ? <p>Camera: {item.camera}</p> : null}
          {item.mood ? <p>Mood: {item.mood}</p> : null}
          {item.note ? <p>{item.note}</p> : null}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#F1E6D8]/10 px-3 py-1.5 text-xs text-[#F1E6D8]/58"
            >
              {tag}
            </span>
          ))}
        </div>

        {item.externalLink ? (
          <span className="mt-8 inline-flex text-sm uppercase tracking-[0.2em] text-[#AA2B3A]">
            {isVideo ? "Watch External Video" : "Open External Link"}
          </span>
        ) : null}
      </div>
    </div>
  );

  if (item.externalLink) {
    return (
      <a
        href={item.externalLink}
        target="_blank"
        rel="noopener noreferrer"
        className={item.featured ? "md:col-span-2" : undefined}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <article className={item.featured ? "md:col-span-2" : undefined}>
      {cardContent}
    </article>
  );
}
