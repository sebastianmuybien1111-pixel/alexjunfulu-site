import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="site-footer__name">{siteConfig.name}</p>
          <p>{siteConfig.role}</p>
          <p>{siteConfig.institution}</p>
        </div>
        <div className="site-footer__links" aria-label="Footer links">
          <Link href="/research">Research</Link>
          <Link href="/cv">CV</Link>
          <Link href="/contact">Contact</Link>
          <a href={siteConfig.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <Link href="/engagement">Engagement</Link>
        </div>
        <p className="site-footer__copyright">© 2026 Alex Junfu Lu</p>
      </div>
    </footer>
  );
}
