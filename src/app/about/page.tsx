import Image from "next/image";
import Link from "next/link";
import { researchExperience } from "@/data/research";
import { areasOfInterest, methods, researchAgenda, siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About",
  description: "About Alex Junfu Lu, an International Relations undergraduate at Xi’an Jiaotong-Liverpool University.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main id="main-content" className="page-main">
      <header className="page-header shell">
        <p className="eyebrow">About</p>
        <h1>World politics, studied from more than one angle.</h1>
        <p className="page-header__lead">
          I am an International Relations undergraduate at Xi’an Jiaotong-Liverpool University, interested in how power, institutions, political decision-making, and international competition shape state behaviour and global outcomes.
        </p>
      </header>

      <section className="page-section shell prose-grid">
        <div><p className="prose-grid__label">Academic profile</p></div>
        <div className="prose-grid__body">
          <p>
            My interests have developed across international institutions and global governance, international political economy, foreign-policy decision-making, international conflict, and the domestic foundations of state behaviour. I am especially drawn to questions that connect broad structures of power with the political choices made inside states and institutions.
          </p>
          <p>
            Undergraduate research has given me opportunities to work on digital governance in the Chinese platform economy, the practical effects of International Criminal Court arrest warrants, and institutional responses to climate inequality. These projects have also strengthened my interest in comparative and qualitative research.
          </p>
        </div>
      </section>

      <section className="page-section shell" aria-labelledby="about-fields-title">
        <p className="eyebrow">Fields of interest</p>
        <div className="two-column-list" id="about-fields-title">
          {researchAgenda.map((cluster) => <div key={cluster.title}><h3>{cluster.title}</h3><p>{cluster.description}</p></div>)}
        </div>
      </section>

      <section className="page-section shell prose-grid">
        <div><p className="prose-grid__label">Research experience</p></div>
        <div className="prose-grid__body about-experience-list">
          {researchExperience.map((item) => (
            <article key={`${item.year}-${item.project}`}>
              <p className="eyebrow">{item.year} · {item.role}</p>
              <h2>{item.project}</h2>
              <p>{item.institution}{"supervisor" in item ? ` · Supervised by ${item.supervisor}` : "distinction" in item ? ` · ${item.distinction}` : ""}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section shell home-academic" aria-label="Education and profile">
        <figure className="hero__portrait">
          <div className="hero__portrait-frame"><Image src="/new-profile.jpg" alt="Portrait of Alex Junfu Lu" fill sizes="(min-width: 900px) 40vw, 90vw" /></div>
          <figcaption><span>{siteConfig.location}</span><span>International Relations</span></figcaption>
        </figure>
        <div className="institution-block">
          <p className="eyebrow">Education</p>
          <h2>{siteConfig.institution}</h2>
          <p className="institution-block__degree">B.A. International Relations · Expected May 2028</p>
          <p>My current toolkit includes {methods.join(", ")}. Areas of interest include {areasOfInterest.join(", ")}.</p>
          <div className="education-note">
            <span>Summer 2024</span>
            <h3>HSE University · Saint Petersburg</h3>
            <p>Summer Programme in Political Science and Digital Politics · Score: 9/10</p>
          </div>
          <Link className="text-link" href="/cv">View the complete CV →</Link>
        </div>
      </section>
    </main>
  );
}
