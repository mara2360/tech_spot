import Link from "next/link";
import LogoMark from "./LogoMark";
import { topics } from "../articles";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Link className="brand" href="/" aria-label="TechSpot home">
            <LogoMark />
            <span className="brand-name">TechSpot</span>
          </Link>
          <p>Technology is complicated. Understanding it shouldn’t be.</p>
        </div>
        <div>
          <h2>Read</h2>
          <ul>
            <li><Link href="/stories">All stories</Link></li>
            <li><Link href="/topics">Topics</Link></li>
            <li><Link href="/#newsletter">The weekly brief</Link></li>
          </ul>
        </div>
        <div>
          <h2>Topics</h2>
          <ul>
            {topics.slice(0, 5).map((topic) => (
              <li key={topic.slug}><Link href={`/topics/${topic.slug}`}>{topic.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Company</h2>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><a href="mailto:hello@techspot.com">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© 2026 TechSpot</span>
        <span>Independent. Curious. Human.</span>
      </div>
    </footer>
  );
}
