import type { Metadata } from "next";
import Link from "next/link";
import { getTopicArticles, topics } from "../articles";

export const metadata: Metadata = { title: "Topics — TechSpot", description: "Explore TechSpot coverage by topic." };

export default function TopicsPage() {
  return <main className="index-page">
    <header className="site-header article-header">
      <Link className="brand" href="/"><span className="brand-mark">T</span><span>TechSpot</span></Link>
      <nav aria-label="Main navigation"><Link href="/stories">Stories</Link><Link className="active" href="/topics">Topics</Link><Link href="/about">About</Link></nav>
      <Link className="header-cta" href="/#newsletter">Get the brief <span>↗</span></Link>
    </header>
    <section className="index-hero topic-index-hero"><span className="kicker">Explore</span><h1>Follow your<br/><em>curiosity.</em></h1><p>Choose a field and find the reporting, context, and ideas that help you understand it.</p></section>
    <section className="topic-index-list">
      {topics.map((topic,index) => <Link href={`/topics/${topic.slug}`} key={topic.slug}><span>0{index+1}</span><div><strong>{topic.name}</strong><p>{topic.description}</p></div><i>{getTopicArticles(topic.slug).length} stories ↗</i></Link>)}
    </section>
    <footer className="article-footer"><Link className="brand footer-brand" href="/"><span className="brand-mark">T</span><span>TechSpot</span></Link><span>© 2026 TechSpot</span><Link href="/stories">All stories →</Link></footer>
  </main>;
}
