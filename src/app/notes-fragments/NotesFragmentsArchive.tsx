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
};

const filters: FilterType[] = ["All", "Videos", "Photography", "Posters", "Music"];

const archiveItems: ArchiveItem[] = [
  {
    title: "A Short Moving-Image Fragment",
    type: "Videos",
    date: "2026",
    platform: "Bilibili",
    description:
      "A featured video work gathered here as part of a broader archive of moving images, mood, place, and observation.",
    externalLink:
      "https://www.bilibili.com/video/BV1rXmKYmEGv/?spm_id_from=333.1387.0.0",
    image: "/notes-fragments/video-bilibili.svg",
    tags: ["Moving Image", "Personal Archive", "Bilibili"],
    featured: true,
  },
  {
    title: "Evening Geometry",
    type: "Photography",
    date: "Spring 2026",
    location: "Suzhou",
    camera: "Daily camera placeholder",
    description:
      "A quiet study of architecture after dusk, where windows, river light, and pedestrian rhythm begin to flatten into shapes.",
    image: "/notes-fragments/photo-suzhou.svg",
    tags: ["Street", "Evening", "Suzhou"],
  },
  {
    title: "Campus Light",
    type: "Photography",
    date: "2026",
    location: "XJTLU",
    camera: "Replace with camera/lens",
    description:
      "A daily photograph placeholder for soft institutional light, glass reflections, and the atmosphere between classes.",
    image: "/notes-fragments/photo-campus.svg",
    tags: ["Campus", "Light", "Everyday"],
  },
  {
    title: "Rain Study",
    type: "Photography",
    date: "2025",
    location: "Suzhou",
    camera: "Replace with camera/lens",
    description:
      "A spare visual note on wet pavement, blurred movement, and the way weather edits a familiar street.",
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
      "A restrained conference-design placeholder, shaped around hierarchy, procedural clarity, and diplomatic atmosphere.",
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
    <section className="mx-auto max-w-7xl px-6 pb-32">
      <div className="sticky top-[7.7rem] z-20 -mx-2 mb-12 overflow-x-auto px-2 py-3 backdrop-blur-md md:top-[4.9rem]">
        <div className="flex min-w-max gap-3">
          {filters.map((filter) => (
            <Link
              key={filter}
              href={
                filter === "All"
                  ? "/notes-fragments"
                  : `/notes-fragments?filter=${encodeURIComponent(filter)}`
              }
              className={`rounded-full border px-5 py-2.5 text-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#AA2B3A]/60 hover:text-[#AA2B3A] ${
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
  const cardContent = (
    <div
      className={`group flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#F1E6D8]/10 bg-[#F1E6D8]/[0.04] transition duration-500 hover:-translate-y-1 hover:border-[#AA2B3A]/45 hover:bg-[#F1E6D8]/[0.06] ${
        item.featured ? "md:col-span-2" : ""
      }`}
    >
      {item.image ? (
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

      <div className="flex grow flex-col p-7 md:p-8">
        <div className="mb-5 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em]">
          <span className="text-[#AA2B3A]">{item.date}</span>
          {item.platform ? <span className="text-[#F1E6D8]/48">{item.platform}</span> : null}
          {item.context ? <span className="text-[#F1E6D8]/48">{item.context}</span> : null}
          {item.artist ? <span className="text-[#F1E6D8]/48">{item.artist}</span> : null}
        </div>

        <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-[#F1E6D8]">
          {item.title}
        </h2>

        <p className="mt-5 leading-8 text-[#F1E6D8]/68">{item.description}</p>

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
            Open External Link
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
