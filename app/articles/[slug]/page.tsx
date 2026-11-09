import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "../../articles";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import Newsletter from "../../components/Newsletter";
import Byline from "../../components/Byline";
import { CategoryLabel, PostCard } from "../../components/PostViews";

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
    openGraph: { title: article.title, description: article.dek, type: "article", images: [article.image] },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const article = getArticle((await params).slug);
  if (!article) notFound();
  const currentIndex = articles.findIndex(({ slug }) => slug === article.slug);
  const readNext = [1, 2, 3].map((step) => articles[(currentIndex + step) % articles.length]);
  const shareUrl = `https://tech-spot-blog.vercel.app/articles/${article.slug}`;

  return (
    <>
      <SiteHeader active="stories" />
      <main id="content">
        <article>
          <header className="article-head">
            <Link className="back-link" href="/stories">← All stories</Link>
            <CategoryLabel article={article} />
            <h1>{article.title}</h1>
            <p className="dek">{article.dek}</p>
            <div className="article-meta">
              <Byline author={article.author} meta={`${article.date} · ${article.time}`} size={40} />
              <div className="share">
                <a href={`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(shareUrl)}`}>Email</a>
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href={`https://x.com/intent/post?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(article.title)}`} target="_blank" rel="noopener noreferrer">X</a>
              </div>
            </div>
          </header>

          <figure className="article-lead">
            <img src={article.image} alt="" fetchPriority="high" />
          </figure>

          <div className="prose">
            {article.sections.map((section, index) => (
              <section key={section.heading ?? index}>
                {section.heading && <h2>{section.heading}</h2>}
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.quote && <blockquote>{section.quote}</blockquote>}
              </section>
            ))}
            <div className="article-end">
              <span>Filed under</span> <CategoryLabel article={article} />
            </div>
          </div>
        </article>

        <section className="wrap section" aria-labelledby="next-heading">
          <div className="section-head">
            <h2 id="next-heading">Read next</h2>
            <Link className="more-link" href="/stories">All stories →</Link>
          </div>
          <div className="post-grid">
            {readNext.map((next) => <PostCard article={next} key={next.slug} />)}
          </div>
        </section>

        <Newsletter />
      </main>
      <SiteFooter />
    </>
  );
}
