import Link from "next/link";
import {
  daisExperience,
  delegateExperience,
  engagementItems,
  featuredLeadership,
  organisationalLeadership,
  type EngagementItem,
} from "@/data/engagement";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Engagement",
  description: "Conference experience, academic leadership, chairing, delegate honours, and conference organisation by Alex Junfu Lu.",
  path: "/engagement",
});

function RecordMeta({ item }: { item: EngagementItem }) {
  return (
    <p className="engagement-record__meta">
      {[item.committee, item.country, item.honour].filter(Boolean).join(" · ")}
    </p>
  );
}

export default function EngagementPage() {
  return (
    <main id="main-content" className="page-main engagement-page">
      <header className="page-header shell engagement-hero">
        <p className="eyebrow">Engagement</p>
        <h1>Conference leadership in practice.</h1>
        <p className="page-header__lead">
          Model United Nations has been a sustained part of my academic life: a space for chairing, institutional simulation, public speaking, committee design, and conference organisation. This record is separate from my research publications and papers.
        </p>
        <dl className="engagement-stats" aria-label="Engagement overview">
          <div><dt>{featuredLeadership.length}</dt><dd>Dais Head roles</dd></div>
          <div><dt>{daisExperience.length}</dt><dd>Dais Member roles</dd></div>
          <div><dt>{delegateExperience.filter((item) => item.honour).length}</dt><dd>Delegate honours</dd></div>
          <div><dt>{organisationalLeadership.length}</dt><dd>Organisation roles</dd></div>
        </dl>
      </header>

      <section className="featured-conference" aria-labelledby="featured-title">
        <div className="shell featured-conference__grid">
          <div className="featured-conference__index"><span>01</span><p>Featured conference leadership</p></div>
          <article>
            <div className="featured-conference__meta"><span>2026</span><span>Dais Head · UNGA Plenary</span></div>
            <h2 id="featured-title">The 18th Zhejiang University Pan-Yangtze River Delta Region Model United Nations Conference</h2>
            <blockquote>The Essequibo Crisis and the Contest over International Order: Sovereignty, Legitimacy, and Multilateralism</blockquote>
          </article>
        </div>
      </section>

      <section className="page-section shell" aria-labelledby="chairing-title">
        <header className="section-heading engagement-section-heading"><p className="eyebrow">Chairing & Dais leadership</p><h2 id="chairing-title">Leading committees across institutions and issues</h2></header>
        <div className="leadership-editorial-grid">
          {featuredLeadership.slice(1).map((item, index) => (
            <article key={`${item.year}-${item.title}`} className={index === 0 ? "leadership-card leadership-card--wide" : "leadership-card"}>
              <div><span>{item.year}</span><span>{item.role}</span></div><h3>{item.title}</h3><RecordMeta item={item} />
            </article>
          ))}
        </div>
        <div className="dais-ledger">
          {daisExperience.map((item) => (
            <article key={`${item.year}-${item.title}`}><span>{item.year}</span><p>{item.role}</p><h3>{item.title}</h3><RecordMeta item={item} /></article>
          ))}
        </div>
      </section>

      <section className="delegate-section" aria-labelledby="delegate-title">
        <div className="shell">
          <header className="delegate-section__header"><div><p className="eyebrow">Delegate experience & honours</p><h2 id="delegate-title">Participation, representation, and recognition</h2></div><p>Major awards are foregrounded; the full delegate record remains visible.</p></header>
          <div className="honours-grid">
            {delegateExperience.filter((item) => item.honour).map((item) => (
              <article key={`${item.year}-${item.title}`}><span>{item.honour}</span><h3>{item.title}</h3><RecordMeta item={item} /><p>{item.year}</p></article>
            ))}
          </div>
          <div className="delegate-ledger">
            {delegateExperience.filter((item) => !item.honour).map((item) => (
              <article key={`${item.year}-${item.title}`}><span>{item.year}</span><h3>{item.title}</h3><RecordMeta item={item} /></article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section shell" aria-labelledby="organisation-title">
        <header className="section-heading engagement-section-heading"><p className="eyebrow">Organisational leadership</p><h2 id="organisation-title">Building the conference around the committee</h2></header>
        <div className="organisation-timeline">
          {organisationalLeadership.map((item) => (
            <article key={`${item.year}-${item.title}-${item.role}`}><span>{item.year}</span><div><p>{item.role}</p><h3>{item.title}</h3></div></article>
          ))}
        </div>
      </section>

      <section className="conference-archive" aria-labelledby="archive-title">
        <div className="shell">
          <div className="conference-archive__head"><div><p className="eyebrow">Full conference archive</p><h2 id="archive-title">The complete record, grouped by year</h2></div><p>{engagementItems.length} verified roles and conference experiences from 2024–2026.</p></div>
          {["2026", "2025", "2024"].map((year) => (
            <details key={year} open={year === "2026"}>
              <summary><span>{year}</span><span>{engagementItems.filter((item) => item.year === year).length} records</span></summary>
              <div>
                {engagementItems.filter((item) => item.year === year).map((item) => (
                  <article key={`${item.title}-${item.role}`}><p>{item.role}</p><h3>{item.title}</h3><RecordMeta item={item} /></article>
                ))}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="contact-band"><div className="shell contact-band__inner"><div><p className="eyebrow">Academic record</p><h2>Research remains a separate body of work.</h2></div><p>Conference leadership is presented here as engagement and service—not as publication or research output.</p><Link className="button" href="/research">View research</Link></div></section>
    </main>
  );
}
