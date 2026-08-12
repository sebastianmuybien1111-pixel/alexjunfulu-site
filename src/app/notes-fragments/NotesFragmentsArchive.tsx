import Link from "next/link";

type ArchiveType = "Videos" | "Photography" | "Posters" | "Music";
type FilterType = "All" | ArchiveType;

type ArchiveItem = {
  title: string;
  type: ArchiveType;
  date: string;
  description: string;
  externalLink?: string;
  tags: string[];
  meta?: string;
  note?: string;
};

const filters: FilterType[] = ["All", "Videos"];

const archiveItems: ArchiveItem[] = [
  {
    title: "Simulation Reflection from the Indonesian Position",
    type: "Videos",
    date: "2026",
    meta: "XJTLU Mediasite",
    description:
      "A reflective video response to a simulation exercise on how the Indonesian position navigates pressure, ambiguity, and strategic choice.",
    externalLink: "https://video.xjtlu.edu.cn/Mediasite/Play/629d76ec37a146ac98b36cd94f062c321d",
    tags: ["Simulation", "Indonesia", "Reflection"],
  },
  {
    title: "Sorting Waste, Framing Responsibility",
    type: "Videos",
    date: "2026",
    meta: "XJTLU Mediasite · Group project",
    description:
      "A group video project connecting everyday waste sorting to communication, collective behavior, and responsibility.",
    externalLink: "https://video.xjtlu.edu.cn/Mediasite/Play/96e5802b26cd4402afd603c05bc6d2a51d",
    tags: ["Waste Sorting", "Communication", "Group Project"],
  },
  {
    title: "A Short Moving-Image Fragment",
    type: "Videos",
    date: "2026",
    meta: "Bilibili",
    description: "A short moving-image fragment retained as part of the personal visual archive.",
    externalLink: "https://www.bilibili.com/video/BV1rXmKYmEGv/",
    tags: ["Moving Image", "Personal Archive"],
  },
];

export function getValidArchiveFilter(filter: string | string[] | undefined) {
  const selectedFilter = Array.isArray(filter) ? filter[0] : filter;
  return filters.includes(selectedFilter as FilterType) ? (selectedFilter as FilterType) : "All";
}

export default function NotesFragmentsArchive({ activeFilter }: { activeFilter: FilterType }) {
  const visibleItems = activeFilter === "All" ? archiveItems : archiveItems.filter((item) => item.type === activeFilter);

  return (
    <section className="page-section shell">
      <nav className="archive-filters" aria-label="Filter personal archive">
        {filters.map((filter) => (
          <Link
            key={filter}
            href={filter === "All" ? "/notes-fragments" : `/notes-fragments?filter=${encodeURIComponent(filter)}`}
            aria-current={activeFilter === filter ? "page" : undefined}
          >
            {filter}
          </Link>
        ))}
      </nav>

      <div className="archive-grid">
        {visibleItems.map((item) => (
          <article className="archive-card" key={`${item.type}-${item.title}`}>
            <div className="archive-card__type">{item.type}</div>
            <div className="archive-card__body">
              <p className="archive-card__meta">{item.date} · {item.meta}</p>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              {item.note ? <blockquote>{item.note}</blockquote> : null}
              <p className="archive-card__tags">{item.tags.join(" · ")}</p>
              {item.externalLink ? (
                <a className="text-link" href={item.externalLink} target="_blank" rel="noreferrer">Open external item ↗</a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
