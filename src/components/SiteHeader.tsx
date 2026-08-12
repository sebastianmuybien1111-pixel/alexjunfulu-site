import Link from "next/link";
import { navigation } from "@/data/site";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <div className="site-header__inner">
        <Link className="site-identity" href="/" aria-label="Alex Junfu Lu, homepage">
          <span className="site-identity__name">Alex Junfu Lu</span>
          <span className="site-identity__field">International Relations</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <details className="mobile-nav">
          <summary>Menu</summary>
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
