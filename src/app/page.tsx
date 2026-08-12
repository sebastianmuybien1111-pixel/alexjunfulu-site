import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import ResearchConstellation from "@/components/ResearchConstellation";
import SectionHeading from "@/components/SectionHeading";
import { featuredLeadership } from "@/data/engagement";
import { researchExperience, researchProjects } from "@/data/research";
import { methods, researchAgenda, siteConfig } from "@/data/site";

const selectedSlugs = [
  "regional-organisations",
  "security-overrides-efficiency",
  "climate-governance",
  "climate-refugee-management",
];

const selectedProjects = selectedSlugs
  .map((slug) => researchProjects.find((project) => project.slug === slug))
  .filter((project): project is NonNullable<typeof project> => Boolean(project));

const academicIndex = [
  ["Field", "International Relations"],
  ["Interests", "Power · institutions · state behaviour"],
  ["Methods", "Qualitative · comparative · document-based"],
  ["Based in", "Suzhou, China"],
];

export default function Home() {
  return (
    <main id="main-content" className="page-main home-page home-v2">
      <section className="hero-v2 shell">
        <div className="hero-v2__main">
          <p className="eyebrow hero-v2__eyebrow">International Relations · Xi’an Jiaotong-Liverpool University</p>
          <h1><span>Alex</span><span>Junfu Lu</span></h1>
          <p className="hero-v2__thesis">
            I am an International Relations undergraduate interested in how <em>power, institutions, political decision-making, and international competition</em> shape world politics.
          </p>
          <div className="hero-v2__actions">
            <Link className="button" href="/research">Research</Link>
            <a className="button button--secondary" href="/cv/Alex-Junfu-Lu-CV.pdf" download>CV</a>
            <Link className="text-link" href="/contact">Contact <span aria-hidden="true">→</span></Link>
          </div>
        </div>

        <aside className="hero-v2__aside" aria-label="Academic profile summary">
          <figure className="hero-v2__portrait">
            <Image src="/academic-portrait.jpg" alt="Portrait of Alex Junfu Lu" fill priority sizes="(min-width: 981px) 22vw, (min-width: 641px) 35vw, 92vw" />
            <figcaption>International Relations undergraduate · Suzhou</figcaption>
          </figure>
          <dl className="academic-index">
            {academicIndex.map(([term, detail]) => <div key={term}><dt>{term}</dt><dd>{detail}</dd></div>)}
          </dl>
        </aside>

        <div className="hero-v2__scroll" aria-hidden="true"><span>Scroll to profile</span><i /></div>
      </section>

      <section className="research-statement">
        <div className="shell research-statement__inner">
          <p className="research-statement__number">01</p>
          <div><p className="eyebrow">Academic profile</p><h2>Power, order, and political choice.</h2></div>
          <p className="research-statement__copy">
            My work ranges across foreign policy, international conflict, global governance, institutions, and political economy—connected by an interest in how political actors make choices within unequal and contested international orders.
          </p>
        </div>
      </section>

      <section className="section shell agenda-v2" aria-labelledby="interests-title">
        <div className="agenda-v2__intro">
          <SectionHeading eyebrow="Areas of interest" title="A broad map of questions in world politics" id="interests-title" description="An interactive overview of the fields that currently organise my reading, coursework, and undergraduate research." />
          <div className="agenda-v2__clusters">
            {researchAgenda.map((cluster, index) => (
              <article key={cluster.title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{cluster.title}</h3><p>{cluster.description}</p></div></article>
            ))}
          </div>
        </div>
        <ResearchConstellation />
      </section>

      <section className="section shell selected-v2" aria-labelledby="selected-title">
        <div className="selected-v2__heading">
          <SectionHeading eyebrow="Selected research" title="Published, completed, and developing work" id="selected-title" description="Every item is labelled by its actual academic status; undergraduate papers are not presented as publications." />
          <Link className="text-link" href="/research">Full research record <span aria-hidden="true">→</span></Link>
        </div>
        <div className="project-grid project-grid--v2 home-project-grid">
          {selectedProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </section>

      <section className="experience-band" aria-labelledby="experience-title">
        <div className="shell experience-band__inner">
          <div className="experience-band__head">
            <p className="eyebrow">Research experience</p>
            <h2 id="experience-title">Learning research by doing it.</h2>
            <p>Three university-based projects spanning digital governance, international accountability, and climate governance.</p>
          </div>
          <div className="experience-ledger">
            {researchExperience.map((item) => (
              <article key={`${item.year}-${item.project}`}>
                <span>{item.year}</span>
                <div><p>{item.role}</p><h3>{item.project}</h3><small>{item.institution}{"supervisor" in item ? ` · ${item.supervisor}` : "distinction" in item ? ` · ${item.distinction}` : ""}</small></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="profile-band">
        <div className="shell profile-band__grid">
          <article>
            <p className="eyebrow">About</p>
            <h2>International Relations at Xi’an Jiaotong-Liverpool University</h2>
            <p>A research-oriented undergraduate profile shaped by institutional questions, international competition, and the relationship between domestic politics and state behaviour.</p>
            <Link className="text-link text-link--light" href="/about">Read the academic profile →</Link>
          </article>
          <dl>
            <div><dt>Degree</dt><dd>B.A. International Relations · Expected 2028</dd></div>
            <div><dt>Methods</dt><dd>{methods.slice(0, 4).join(" / ")}</dd></div>
            <div><dt>Institution</dt><dd>{siteConfig.institution}</dd></div>
            <div><dt>Location</dt><dd>{siteConfig.location}</dd></div>
          </dl>
        </div>
      </section>

      <section className="section shell engagement-v2" aria-labelledby="engagement-title">
        <div className="engagement-v2__head">
          <SectionHeading eyebrow="Selected engagement" title="Chairing, conference leadership, and academic service" id="engagement-title" description="A concise selection from a larger record of Model United Nations leadership, delegate experience, and conference organisation." />
          <Link className="text-link" href="/engagement">Full engagement record →</Link>
        </div>
        <div className="engagement-v2__list">
          {featuredLeadership.slice(0, 3).map((item, index) => (
            <article key={`${item.year}-${item.title}`}><span>{String(index + 1).padStart(2, "0")}</span><p>{item.year} · {item.role}</p><h3>{item.title}</h3><div>{item.committee}</div></article>
          ))}
        </div>
      </section>

      <section className="contact-v2">
        <div className="shell contact-v2__inner">
          <p className="eyebrow">Contact</p>
          <h2>Academic conversation and research exchange.</h2>
          <a href={`mailto:${siteConfig.academicEmail}`}>{siteConfig.academicEmail}</a>
          <div><Link href="/research">Research</Link><Link href="/cv">CV</Link><Link href="/engagement">Engagement</Link><a href={siteConfig.github} target="_blank" rel="noreferrer">GitHub ↗</a></div>
        </div>
      </section>
    </main>
  );
}
