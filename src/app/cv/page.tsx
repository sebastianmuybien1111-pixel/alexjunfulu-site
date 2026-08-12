import PrintButton from "@/components/PrintButton";
import { areasOfInterest, methods, siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Academic CV",
  description: "Academic curriculum vitae of Alex Junfu Lu, an International Relations undergraduate at Xi’an Jiaotong-Liverpool University.",
  path: "/cv",
});

function CvSection({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="cv-section"><h2>{title}</h2><div className="cv-section__content">{children}</div></section>;
}

function CvEntry({ title, meta, date, children }: { title: React.ReactNode; meta?: string; date: string; children?: React.ReactNode }) {
  return <article className="cv-entry"><div><h3>{title}</h3>{meta ? <p className="cv-entry__meta">{meta}</p> : null}</div><span className="cv-entry__date">{date}</span>{children ? <div className="cv-entry__body">{children}</div> : null}</article>;
}

export default function CvPage() {
  return (
    <main id="main-content" className="page-main cv-page">
      <div className="shell shell--reading">
        <header className="cv-header">
          <div>
            <p className="eyebrow">Academic curriculum vitae</p>
            <h1>{siteConfig.name}</h1>
            <p className="cv-header__role">International Relations · {siteConfig.institution}</p>
            <div className="cv-actions">
              <a className="button" href="/cv/Alex-Junfu-Lu-CV.pdf" download>Download CV (PDF)</a>
              <PrintButton />
            </div>
          </div>
          <div className="cv-header__contact"><p>{siteConfig.location}</p><p><a href={`mailto:${siteConfig.academicEmail}`}>{siteConfig.academicEmail}</a></p><p><a href={siteConfig.github} target="_blank" rel="noreferrer">GitHub ↗</a></p></div>
        </header>

        <CvSection title="Research Interests"><ul className="cv-inline-list">{areasOfInterest.map((item) => <li key={item}>{item}</li>)}</ul></CvSection>

        <CvSection title="Education">
          <CvEntry title="Xi’an Jiaotong-Liverpool University" meta="B.A. in International Relations · GPA: 3.8/4.0" date="Expected May 2028"><p>Suzhou, China</p></CvEntry>
          <CvEntry title="National Research University Higher School of Economics (HSE University)" meta="Summer Programme in Political Science and Digital Politics · Score: 9/10" date="Summer 2024"><p>Saint Petersburg, Russia</p></CvEntry>
        </CvSection>

        <CvSection title="Research Experience">
          <CvEntry title="Summer Undergraduate Research Fellow (SURF), XJTLU" meta="Supervisor: Dr. Mohsen Al Attar" date="2026"><p><em>Algorithmic Jurisdictions: Lex Informatica and Legal Heterodoxy in the Chinese Platform Economy</em></p></CvEntry>
          <CvEntry title="Research Lead, XJTLU Research-Led Learning Symposium" meta="First Prize" date="2025"><p><em>A Global Climate Framework for a Shared Future</em></p></CvEntry>
          <CvEntry title="Undergraduate Research Assistant / SURF, XJTLU" meta="Supervisor: Dr. Lina Gong" date="2025"><p><em>Accountability and Politics: Measuring ICC Arrest Warrants’ Practical Effects</em></p></CvEntry>
        </CvSection>

        <CvSection title="Publication">
          <CvEntry title={<a href="https://doi.org/10.5220/0014003400004912" target="_blank" rel="noreferrer">Fang, Y., & Lu, J. “Complex Mechanisms in Climate Refugee Management: A Case Study from Bangladesh.” ↗</a>} meta="Proceedings of the 1st International Conference on Innovative Education and Social Development (IESD 2025), pp. 564–570 · SciTePress" date="2025"><p>DOI: 10.5220/0014003400004912</p></CvEntry>
        </CvSection>

        <CvSection title="Selected Papers">
          <CvEntry title={<em>When Are Regional Organisations More Effective than Global Institutions? Explaining Governance Effectiveness in Complex Transnational Challenges</em>} meta="Selected Research Paper" date="2026" />
          <CvEntry title={<em>When Security Overrides Efficiency: The Return of Geopolitics in the Global Economy</em>} meta="Selected Research Paper" date="2026" />
          <CvEntry title={<em>Unequal Skies, Shared Destiny: Bridging the Political and Financial Rift in Global Climate Governance</em>} meta="Working Paper" date="2026" />
        </CvSection>

        <CvSection title="Awards & Honours">
          <CvEntry title="Best Paper Award" meta="XJTLU HSS Interdisciplinary Student Conference" date="2026" />
          <CvEntry title="First Prize" meta="XJTLU Research-Led Learning Symposium" date="2025" />
          <CvEntry title="Second Place" meta="Student Research Mini-Projects on Internationalization of Education, XJTLU" date="2024" />
          <CvEntry title="First-Class Scholarship" meta="Xi’an Jiaotong-Liverpool University" date="2024" />
        </CvSection>

        <CvSection title="Academic Leadership">
          <CvEntry title="Executive Secretary-General" meta="XJTLU Model United Nations Association" date="2026" />
          <CvEntry title="Academic Director" meta="XJTLU Model United Nations Association" date="2025" />
          <CvEntry title="Dais Head" meta="Zhejiang University Pan-Yangtze River Delta Region MUN · China Daily MUN · Beijing Foreign Studies University MUN" date="2026" />
        </CvSection>

        <CvSection title="University Service">
          <CvEntry title="Undergraduate Student Representative" meta="Academic Board" date="Current" />
          <CvEntry title="Class President" meta="Xi’an Jiaotong-Liverpool University" date="Current" />
          <CvEntry title="International Relations Student Ambassador" meta="Xi’an Jiaotong-Liverpool University" date="Current" />
        </CvSection>

        <CvSection title="Additional Experience">
          <CvEntry title="Government Finance Office Intern" meta="Dongguan Finance Bureau, Dalang Branch" date="Jul–Aug 2024" />
        </CvSection>

        <CvSection title="Methods & Technical Skills">
          <div className="cv-skill-group"><h3>Research methods</h3><p>{methods.join(" · ")}</p></div>
          <div className="cv-skill-group"><h3>Technical</h3><p>Microsoft Excel · Zotero · LaTeX · Microsoft Office</p></div>
        </CvSection>

        <CvSection title="Languages"><ul className="cv-inline-list"><li>Chinese — Native</li><li>English — Advanced</li><li>Spanish — Elementary</li></ul></CvSection>

        <CvSection title="Standardized Tests">
          <CvEntry title="GRE General Test: 339" meta="Verbal 170 · Quantitative 169 · Analytical Writing 5.0" date="June 2026" />
          <CvEntry title="IELTS Academic: Overall 7.0" date="July 2023" />
        </CvSection>
      </div>
    </main>
  );
}
