import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Academic contact details and professional links for Alex Junfu Lu, International Relations undergraduate at Xi’an Jiaotong-Liverpool University.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main id="main-content" className="page-main">
      <header className="page-header shell">
        <p className="eyebrow">Contact</p>
        <h1>Academic conversation and research exchange.</h1>
        <p className="page-header__lead">
          The best way to reach me about research interests, academic work, or conference projects is through my university email.
        </p>
      </header>

      <section className="contact-grid shell">
        <div className="contact-primary">
          <span className="contact-label">Academic email</span>
          <a href={`mailto:${siteConfig.academicEmail}`}>{siteConfig.academicEmail}</a>
          <p>
            Please include a clear subject line and brief context. I may not be able to respond immediately during term time.
          </p>
        </div>
        <div className="contact-secondary" aria-label="Professional and personal links">
          <a href={siteConfig.github} target="_blank" rel="noreferrer"><span>GitHub</span><span>Profile ↗</span></a>
          <div><span>Location</span><span>{siteConfig.location}</span></div>
          <a href={`mailto:${siteConfig.personalEmail}`}><span>Personal email</span><span>Secondary</span></a>
          <a href={siteConfig.instagram} target="_blank" rel="noreferrer"><span>Instagram</span><span>Personal ↗</span></a>
        </div>
      </section>
    </main>
  );
}
