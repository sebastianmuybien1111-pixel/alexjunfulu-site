import Link from "next/link";
import type { ResearchProject } from "@/data/research";

export default function ProjectCard({
  project,
  featured = false,
}: {
  project: ResearchProject;
  featured?: boolean;
}) {
  const href = project.href ?? project.assets?.[0]?.href;
  const external = href?.startsWith("http");

  return (
    <article className={featured ? "project-card project-card--featured" : "project-card"}>
      <div className="project-card__meta">
        <span className="status-label">{project.status}</span>
        <span>{project.year}</span>
      </div>
      <p className="project-card__area">{project.area}</p>
      <h3>
        {href ? (
          <Link href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
            {project.shortTitle}
          </Link>
        ) : project.shortTitle}
      </h3>
      <p className="project-card__description">{project.description}</p>
      <div className="project-card__tags" aria-label="Research themes">
        {project.tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}
      </div>
      {href ? (
        <Link className="text-link" href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
          {project.status === "Publication" ? "Read publication" : "View project"} <span aria-hidden="true">{external ? "↗" : "→"}</span>
        </Link>
      ) : (
        <p className="project-card__integrity">Portfolio record · no public file</p>
      )}
    </article>
  );
}
