import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "../articles";

export const metadata: Metadata = { title: "All stories — TechSpot", description: "Browse every TechSpot story across AI, security, development, open source, cloud, and hardware." };

export default function StoriesPage() {
  return <main className="index-page">
    <header className="site-header article-header">
      <Link className="brand" href="/"><span className="brand-mark">T</span><span>TechSpot</span></Link>
      <nav aria-label="Main navigation"><Link className="active" href="/stories">Stories</Link><Link href="/topics">Topics</Link><Link href="/about">About</Link></nav>
      <Link className="header-cta" href="/#newsletter">Get the brief <span>↗</span></Link>
    </header>
    <section className="index-hero"><span className="kicker">The archive</span><h1>All stories.</h1><p>Deep reads, quick context, and independent perspectives on the technology shaping what comes next.</p></section>
    <section className="index-stories">
      <div className="topic-results-heading"><span className="kicker">Latest coverage</span><span>{articles.length} stories</span></div>
      <div className="topic-article-grid">
        {articles.map((article, index) => <article className="topic-card" key={article.slug}>
          <Link className="topic-card-image" href={`/articles/${article.slug}`}><img src={article.image} alt=""/><span className={`story-tag ${article.accent}`}>{article.category}</span><span className="image-arrow">↗</span></Link>
          <div className="story-meta"><span>{article.date}</span><span>{article.time}</span></div><span className="topic-card-number">{String(index + 1).padStart(2,"0")}</span>
          <h2><Link href={`/articles/${article.slug}`}>{article.title}</Link></h2><p>{article.summary}</p><Link className="topic-read-link" href={`/articles/${article.slug}`}>Read story <span>→</span></Link>
        </article>)}
      </div>
    </section>
    <footer className="article-footer"><Link className="brand footer-brand" href="/"><span className="brand-mark">T</span><span>TechSpot</span></Link><span>© 2026 TechSpot</span><Link href="/topics">Browse topics →</Link></footer>
  </main>;
}
