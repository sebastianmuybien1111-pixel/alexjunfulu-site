import ProjectCard from "@/components/ProjectCard";
import ResearchConstellation from "@/components/ResearchConstellation";
import { researchExperience, researchProjects } from "@/data/research";
import { methods, researchAgenda } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Research",
  description: "Publications, selected research papers, working papers, and undergraduate research projects by Alex Junfu Lu.",
  path: "/research",
});

const groups = [
  { key: "publication", title: "Publication", description: "Peer-reviewed work published in conference proceedings." },
  { key: "paper", title: "Selected Research Papers & Working Papers", description: "Undergraduate papers and developing work, labelled separately from publication." },
  { key: "project", title: "Research Projects", description: "University-based research experience completed or currently underway." },
] as const;

export default function ResearchPage() {
  return (
    <main id="main-content" className="page-main research-index">
      <header className="page-header shell">
        <p className="eyebrow">Research</p>
        <h1>Power, institutions, and international competition.</h1>
        <p className="page-header__lead">
          My undergraduate research spans international institutions, foreign policy, global governance, geopolitics, and international political economy. Labels distinguish publication, research papers, working papers, and research projects.
        </p>
      </header>

      <section className="page-section shell research-interests" aria-labelledby="research-interests-title">
        <div>
          <p className="eyebrow">Research interests</p>
          <h2 id="research-interests-title">Questions across levels of world politics</h2>
          <div className="agenda-grid agenda-grid--four">
            {researchAgenda.map((cluster, index) => (
              <article key={cluster.title} className="agenda-item"><span className="agenda-item__number">{String(index + 1).padStart(2, "0")}</span><h3>{cluster.title}</h3><p>{cluster.description}</p></article>
            ))}
          </div>
          <div className="method-strip"><div><span>Methods</span><p>{methods.join(" · ")}</p></div><div><span>Academic stage</span><p>Undergraduate research · status-labelled portfolio</p></div></div>
        </div>
        <ResearchConstellation />
      </section>

      <div className="shell">
        {groups.map((group) => {
          const projects = researchProjects.filter((project) => project.category === group.key);
          return (
            <section key={group.key} className="research-index__group" aria-labelledby={`${group.key}-title`}>
              <header><h2 id={`${group.key}-title`}>{group.title}</h2><p>{group.description}</p></header>
              <div className={projects.length === 1 ? "research-single" : "project-grid research-project-grid"}>
                {projects.map((project) => <ProjectCard key={project.slug} project={project} featured={projects.length === 1} />)}
              </div>
            </section>
          );
        })}
      </div>

      <section className="research-experience-index">
        <div className="shell">
          <header><p className="eyebrow">Research experience</p><h2>Fellowships, assistance, and project leadership</h2></header>
          <ol>
            {researchExperience.map((item) => (
              <li key={`${item.year}-${item.project}`}><span>{item.year}</span><div><p>{item.role} · {item.institution}</p><h3>{item.project}</h3><small>{"supervisor" in item ? `Supervisor: ${item.supervisor}` : "distinction" in item ? item.distinction : ""}</small></div></li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
