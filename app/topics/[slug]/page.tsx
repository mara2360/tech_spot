import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTopic, getTopicArticles, topics } from "../../articles";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return topics.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const topic = getTopic((await params).slug);
  if (!topic) return {};
  return { title: `${topic.name} stories — TechSpot`, description: topic.description };
}

export default async function TopicPage({ params }: PageProps) {
  const topic = getTopic((await params).slug);
  if (!topic) notFound();
  const topicArticles = getTopicArticles(topic.slug);

  return (
    <main className="topic-page">
      <header className="site-header article-header">
        <Link className="brand" href="/" aria-label="TechSpot home"><span className="brand-mark">T</span><span>TechSpot</span></Link>
        <nav aria-label="Main navigation"><Link href="/#stories">Stories</Link><Link className="active" href="/#topics">Topics</Link><Link href="/#about">About</Link></nav>
        <Link className="header-cta" href="/#newsletter">Get the brief <span aria-hidden="true">↗</span></Link>
      </header>

      <section className="topic-hero">
        <Link className="article-back" href="/#topics">← All topics</Link>
        <span className="kicker">Explore / {String(topics.findIndex(({ slug }) => slug === topic.slug) + 1).padStart(2, "0")}</span>
        <h1>{topic.name}</h1>
        <p>{topic.description}</p>
        <div className="topic-orbit" aria-hidden="true"><span /></div>
      </section>

      <section className="topic-results">
        <div className="filter-panel">
          <div className="filter-panel-copy">
            <span className="kicker">Filter stories</span>
            <p>Choose a category to browse the ideas, reporting, and perspectives that interest you.</p>
          </div>
          <nav className="topic-filters" aria-label="Filter articles by category">
            {topics.map((filterTopic, index) => {
              const isActive = filterTopic.slug === topic.slug;
              return (
                <Link
                  href={`/topics/${filterTopic.slug}`}
                  className={isActive ? "active" : ""}
                  aria-current={isActive ? "page" : undefined}
                  key={filterTopic.slug}
                >
                  <span>0{index + 1}</span>
                  <strong>{filterTopic.name}</strong>
                  <i aria-hidden="true">{isActive ? "✓" : "↗"}</i>
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="topic-results-heading"><span className="kicker">Latest coverage</span><span>{topicArticles.length} curated stories</span></div>
        <div className="topic-article-grid">
          {topicArticles.map((article, index) => (
            <article className="topic-card" key={article.slug}>
              <Link className="topic-card-image" href={`/articles/${article.slug}`}>
                <img src={article.image} alt="" />
                <span className={`story-tag ${article.accent}`}>{article.category}</span>
                <span className="image-arrow">↗</span>
              </Link>
              <div className="story-meta"><span>{article.date}</span><span>{article.time}</span></div>
              <span className="topic-card-number">0{index + 1}</span>
              <h2><Link href={`/articles/${article.slug}`}>{article.title}</Link></h2>
              <p>{article.summary}</p>
              <Link className="topic-read-link" href={`/articles/${article.slug}`}>Read story <span>→</span></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="topic-more">
        <span className="kicker">Keep exploring</span>
        <div>{topics.filter(({ slug }) => slug !== topic.slug).slice(0, 4).map((item) => <Link href={`/topics/${item.slug}`} key={item.slug}>{item.name}<span>↗</span></Link>)}</div>
      </section>

      <footer className="article-footer"><Link className="brand footer-brand" href="/"><span className="brand-mark">T</span><span>TechSpot</span></Link><span>© 2026 TechSpot</span><Link href="/#topics">All topics →</Link></footer>
    </main>
  );
}
