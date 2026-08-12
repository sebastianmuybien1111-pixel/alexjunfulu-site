import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="page-main">
      <section className="page-header shell">
        <p className="eyebrow">404 · Page not found</p>
        <h1>This page is not in the archive.</h1>
        <p className="page-header__lead">
          The address may have changed, or the page may no longer be public.
        </p>
        <div className="button-row">
          <Link className="button" href="/">Return home</Link>
          <Link className="button button--secondary" href="/research">Browse research</Link>
        </div>
      </section>
    </main>
  );
}
