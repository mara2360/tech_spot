import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import Newsletter from "../components/Newsletter";

export const metadata: Metadata = {
  title: "About — TechSpot",
  description: "Meet TechSpot, an independent technology publication built for curious people who want signal over noise.",
};

const principles = [
  ["Clarity over hype", "We translate consequential technology into useful context, without flattening the complexity or inflating the promise."],
  ["People before products", "Technology matters because of what it changes for people. Every story begins with that human consequence."],
  ["Curiosity with standards", "We ask generous questions, verify what we can, and clearly separate evidence from informed opinion."],
  ["Independent by design", "Our editorial point of view belongs to our readers—not a launch cycle, trend line, or marketing department."],
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader active="about" />
      <main id="content">
        <section className="wrap page-head">
          <h1>Technology is complicated. We make it clear.</h1>
          <p className="lede">TechSpot is an independent publication for people who want to understand where technology is going—and what it means before it arrives.</p>
        </section>

        <section className="wrap section section-tight split" aria-labelledby="purpose-heading">
          <h2 id="purpose-heading">Signal over noise.</h2>
          <div className="split-copy">
            <p>Technology coverage can feel like an endless feed of launches, predictions, and borrowed certainty. We built TechSpot to be different: selective instead of exhaustive, explanatory instead of reactive, and optimistic without losing our skepticism.</p>
            <p>Our writers follow artificial intelligence, security, development, open source, hardware, and the future of work. We focus on the ideas beneath the news—the shifts that change how people build, create, communicate, and make decisions.</p>
          </div>
        </section>

        <section className="wrap section" aria-labelledby="principles-heading">
          <div className="section-head"><h2 id="principles-heading">Our editorial principles</h2></div>
          <div className="principles">
            {principles.map(([title, copy]) => (
              <article key={title}><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
        </section>

        <section className="wrap section split" aria-labelledby="team-heading">
          <h2 id="team-heading">Independent. Curious. Human.</h2>
          <div className="split-copy">
            <p>TechSpot is made by a small editorial team of writers, researchers, designers, and builders who believe understanding technology should feel energizing—not exhausting.</p>
            <p>We publish with a simple promise: respect the reader’s intelligence, attention, and time.</p>
            <Link className="more-link" href="/stories">Explore our latest stories →</Link>
          </div>
        </section>

        <Newsletter />
      </main>
      <SiteFooter />
    </>
  );
}
