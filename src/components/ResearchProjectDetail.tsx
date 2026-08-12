import Link from "next/link";
import type { ResearchProject } from "@/data/research";

function DetailSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="research-detail__section">
      <h2>{title}</h2>
      <div className="research-prose">{children}</div>
    </section>
  );
}

export default function ResearchProjectDetail({ project }: { project: ResearchProject }) {
  const creativeWorkJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    author: { "@type": "Person", name: "Alex Junfu Lu" },
    dateCreated: project.year,
    description: project.description,
    url: `https://www.alexjunfulu.top/research/${project.slug}`,
    keywords: project.tags.join(", "),
  };

  return (
    <main id="main-content" className="page-main research-detail">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(creativeWorkJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="shell shell--reading">
        <Link className="back-link" href="/research">
          <span aria-hidden="true">←</span> Research overview
        </Link>

        <header className="research-detail__header">
          <div className="research-detail__kicker">
            <span className="status-label">{project.status}</span>
            <span>{project.year}</span>
          </div>
          <p className="eyebrow">{project.area}</p>
          <h1>{project.title}</h1>
          <p className="research-detail__summary">{project.description}</p>

          {project.assets && project.assets.length > 0 ? (
            <div className="button-row" aria-label="Project files">
              {project.assets.map((asset, index) => (
                <a
                  key={asset.href}
                  className={index === 0 ? "button" : "button button--secondary"}
                  href={asset.href}
                  target={asset.kind === "bibtex" ? undefined : "_blank"}
                  rel={asset.kind === "bibtex" ? undefined : "noreferrer"}
                  download={asset.kind === "bibtex" ? true : undefined}
                >
                  {asset.label}
                </a>
              ))}
            </div>
          ) : null}

          <dl className="research-facts">
            <div>
              <dt>Status</dt>
              <dd>{project.status}</dd>
            </div>
            <div>
              <dt>Research area</dt>
              <dd>{project.area}</dd>
            </div>
            {project.methods?.length ? <div>
              <dt>Methods</dt>
              <dd>{project.methods.join("; ")}</dd>
            </div> : null}
            {project.lastUpdated ? <div>
              <dt>Last updated</dt>
              <dd>{project.lastUpdated}</dd>
            </div> : null}
          </dl>
        </header>

        {project.researchQuestion ? <DetailSection title="Research Question">
          <p className="research-question">{project.researchQuestion}</p>
        </DetailSection> : null}

        {project.abstract?.length ? <DetailSection title="Overview">
          {project.abstract.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </DetailSection> : null}

        {project.workingArgument ? <DetailSection title="Working Argument">
          <p>{project.workingArgument}</p>
        </DetailSection> : null}

        {project.theoreticalFramework?.length ? <DetailSection title="Theoretical Framework">
          <ul>
            {project.theoreticalFramework.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </DetailSection> : null}

        {project.researchDesign ? <DetailSection title="Method / Research Design">
          <p>{project.researchDesign}</p>
        </DetailSection> : null}

        {project.caseSelection ? <DetailSection title="Scope">
          <p>{project.caseSelection}</p>
        </DetailSection> : null}

        {project.evidence ? <DetailSection title="Evidence and Sources">
          <p>{project.evidence}</p>
        </DetailSection> : null}

        {project.currentStatus ? <DetailSection title="Status Note">
          <p>{project.currentStatus}</p>
        </DetailSection> : null}

        {project.references && project.references.length > 0 ? (
          <DetailSection title="Selected References">
            <ol className="references-list">
              {project.references.map((reference) => (
                <li key={reference}>{reference}</li>
              ))}
            </ol>
          </DetailSection>
        ) : null}

        {project.citation ? (
          <DetailSection title="Citation">
            <p className="citation-block">{project.citation}</p>
          </DetailSection>
        ) : null}

        {project.assets?.some((asset) => asset.kind === "pdf") ? (
          <section className="pdf-access" aria-labelledby="pdf-access-title">
            <div>
              <p className="eyebrow">Document access</p>
              <h2 id="pdf-access-title">Read the complete document</h2>
              <p>
                The PDF is provided as the authored document. Its status is shown above and should not be interpreted as a publication claim.
              </p>
            </div>
            <a
              className="button"
              href={project.assets.find((asset) => asset.kind === "pdf")?.href}
              target="_blank"
              rel="noreferrer"
            >
              Open PDF
            </a>
          </section>
        ) : null}
      </div>
    </main>
  );
}
