import Link from "next/link";

type Section = "home" | "stories" | "topics" | "about";

const links: { href: string; label: string; key: Section }[] = [
  { href: "/stories", label: "Stories", key: "stories" },
  { href: "/topics", label: "Topics", key: "topics" },
  { href: "/about", label: "About", key: "about" },
];

export default function SiteHeader({ active = "home" }: { active?: Section }) {
  return (
    <>
      <a className="skip-link" href="#content">Skip to content</a>
      <div className="announce">
        <span>The weekly brief: one thoughtful email every Thursday.</span>
        <Link href="/#newsletter">Subscribe →</Link>
      </div>
      <header className="site-header">
        <div className="wrap header-row">
          <Link className="brand" href="/" aria-label="TechSpot home">
            <span className="brand-mark" aria-hidden="true">T</span>
            <span className="brand-name">TechSpot</span>
            <span className="brand-sub">Blog</span>
          </Link>

          <nav className="main-nav" aria-label="Main navigation">
            {links.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={active === link.key ? "is-active" : undefined}
                aria-current={active === link.key ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <Link className="btn btn-dark" href="/#newsletter">Subscribe</Link>
            <details className="mobile-nav">
              <summary aria-label="Menu"><span /><span /></summary>
              <nav aria-label="Mobile navigation">
                <Link href="/">Home</Link>
                {links.map((link) => (
                  <Link key={link.key} href={link.href} aria-current={active === link.key ? "page" : undefined}>
                    {link.label}
                  </Link>
                ))}
                <Link href="/#newsletter">The weekly brief</Link>
              </nav>
            </details>
          </div>
        </div>
      </header>
    </>
  );
}
