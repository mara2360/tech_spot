import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "../../articles";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = getArticle((await params).slug);
  if (!article) return {};
  return {
    title: `${article.title} — TechSpot`,
    description: article.dek,
    openGraph: { title: article.title, description: article.dek, type: "article", images: ["/og.png"] },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const article = getArticle((await params).slug);
  if (!article) notFound();
  const currentIndex = articles.findIndex(({ slug }) => slug === article.slug);
  const nextArticle = articles[(currentIndex + 1) % articles.length];

  return (
    <main className="article-page">
      <header className="site-header article-header">
        <Link className="brand" href="/" aria-label="TechSpot home"><span className="brand-mark">T</span><span>TechSpot</span></Link>
        <nav aria-label="Main navigation"><Link className="active" href="/#stories">Stories</Link><Link href="/#topics">Topics</Link><Link href="/#about">About</Link></nav>
        <Link className="header-cta" href="/#newsletter">Get the brief <span aria-hidden="true">↗</span></Link>
      </header>

      <article>
        <div className="article-hero">
          <Link className="article-back" href="/#stories">← All stories</Link>
          <div className="article-labels"><span className={`story-tag static-tag ${article.accent}`}>{article.category}</span><span>{article.date}</span><span>{article.time}</span></div>
          <h1>{article.title}</h1>
          <p className="article-dek">{article.dek}</p>
          <div className="article-byline"><span className="author-dot">{article.author.charAt(0)}</span><span>By <strong>{article.author}</strong></span><span>TechSpot Editorial</span></div>
        </div>

        <figure className="article-lead"><img src={article.image} alt="" /><figcaption>{article.category} / TechSpot</figcaption></figure>

        <div className="article-layout">
          <aside className="article-share"><span>Share</span><a href={`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(`https://techspot-modern-journal.md-ramshaw.chatgpt.site/articles/${article.slug}`)}`}>Email</a><a href="#top">Top ↑</a></aside>
          <div className="article-body" id="top">
            {article.sections.map((section, index) => (
              <section key={section.heading ?? index}>
                {section.heading && <h2>{section.heading}</h2>}
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.quote && <blockquote>{section.quote}</blockquote>}
              </section>
            ))}
          </div>
        </div>
      </article>

      <section className="next-story">
        <span className="kicker">Read next</span>
        <Link href={`/articles/${nextArticle.slug}`}><span>{nextArticle.category}</span><strong>{nextArticle.title}</strong><i aria-hidden="true">→</i></Link>
      </section>

      <footer className="article-footer"><Link className="brand footer-brand" href="/"><span className="brand-mark">T</span><span>TechSpot</span></Link><span>© 2026 TechSpot</span><Link href="/#stories">More stories →</Link></footer>
    </main>
  );
}
