import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — TechSpot",
  description: "Meet TechSpot, an independent technology publication built for curious people who want signal over noise.",
};

const principles = [
  ["01", "Clarity over hype", "We translate consequential technology into useful context, without flattening the complexity or inflating the promise."],
  ["02", "People before products", "Technology matters because of what it changes for people. Every story begins with that human consequence."],
  ["03", "Curiosity with standards", "We ask generous questions, verify what we can, and clearly separate evidence from informed opinion."],
  ["04", "Independent by design", "Our editorial point of view belongs to our readers—not a launch cycle, trend line, or marketing department."],
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <header className="site-header article-header">
        <Link className="brand" href="/" aria-label="TechSpot home"><span className="brand-mark">T</span><span>TechSpot</span></Link>
        <nav aria-label="Main navigation"><Link href="/stories">Stories</Link><Link href="/topics">Topics</Link><Link className="active" href="/about">About</Link></nav>
        <Link className="header-cta" href="/#newsletter">Get the brief <span aria-hidden="true">↗</span></Link>
      </header>

      <section className="about-hero">
        <span className="kicker">About TechSpot</span>
        <h1>Technology is<br />complicated.<br /><em>We make it clear.</em></h1>
        <p>TechSpot is an independent publication for people who want to understand where technology is going—and what it means before it arrives.</p>
        <div className="about-orbit" aria-hidden="true"><span>T</span></div>
      </section>

      <nav className="ticker" aria-label="About page sections">
        <a className="ticker-active" href="#purpose">Our purpose</a><i />
        <a href="#principles">What guides us</a><i />
        <a href="#team">The team</a><i />
        <a href="#stay-curious">The weekly brief</a>
      </nav>

      <section className="about-intro section" id="purpose">
        <span className="kicker">Our purpose</span>
        <div>
          <h2>Signal over noise.</h2>
          <p>Technology coverage can feel like an endless feed of launches, predictions, and borrowed certainty. We built TechSpot to be different: selective instead of exhaustive, explanatory instead of reactive, and optimistic without losing our skepticism.</p>
          <p>Our writers follow artificial intelligence, security, development, open source, hardware, and the future of work. We focus on the ideas beneath the news—the shifts that change how people build, create, communicate, and make decisions.</p>
        </div>
      </section>

      <section className="about-principles section" id="principles">
        <div className="section-heading compact"><div><span className="kicker">What guides us</span><h2>Our editorial<br />principles.</h2></div></div>
        <div className="principle-list">
          {principles.map(([number, title, copy]) => (
            <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
      </section>

      <section className="about-team section" id="team">
        <div><span className="kicker">The team</span><h2>Independent.<br />Curious. Human.</h2></div>
        <div className="about-team-copy"><p>TechSpot is made by a small editorial team of writers, researchers, designers, and builders who believe understanding technology should feel energizing—not exhausting.</p><p>We publish with a simple promise: respect the reader’s intelligence, attention, and time.</p><Link href="/#stories">Explore our latest stories <span>→</span></Link></div>
      </section>

      <section className="about-cta" id="stay-curious">
        <span className="kicker">Stay curious</span>
        <h2>The next idea<br />is already moving.</h2>
        <Link href="/#newsletter">Get the weekly brief <span>↗</span></Link>
      </section>

      <footer className="article-footer"><Link className="brand footer-brand" href="/"><span className="brand-mark">T</span><span>TechSpot</span></Link><span>© 2026 TechSpot</span><Link href="/#stories">Latest stories →</Link></footer>
    </main>
  );
}
