import Link from "next/link";
import type { Article } from "../articles";
import Byline from "./Byline";

export function CategoryLabel({ article }: { article: Article }) {
  return <span className={`cat cat-${article.accent}`}>{article.category}</span>;
}

export function FeaturedPost({ article }: { article: Article }) {
  const href = `/articles/${article.slug}`;
  return (
    <article className="featured">
      <Link className="featured-media media" href={href} tabIndex={-1} aria-hidden="true">
        <img src={article.image} alt="" loading="eager" fetchPriority="high" />
      </Link>
      <div className="featured-copy">
        <div className="featured-kicker"><span className="badge">Featured</span><CategoryLabel article={article} /></div>
        <h2><Link href={href}>{article.title}</Link></h2>
        <p>{article.summary}</p>
        <Byline author={article.author} meta={`${article.date} · ${article.time}`} size={32} />
      </div>
    </article>
  );
}

export function PostCard({ article }: { article: Article }) {
  const href = `/articles/${article.slug}`;
  return (
    <article className="post-card">
      <Link className="media" href={href} tabIndex={-1} aria-hidden="true">
        <img src={article.image} alt="" loading="lazy" decoding="async" />
      </Link>
      <CategoryLabel article={article} />
      <h3><Link href={href}>{article.title}</Link></h3>
      <p>{article.summary}</p>
      <Byline author={article.author} meta={`${article.date} · ${article.time}`} />
    </article>
  );
}

export function PostRow({ article }: { article: Article }) {
  const href = `/articles/${article.slug}`;
  return (
    <article className="post-row">
      <Link className="media" href={href} tabIndex={-1} aria-hidden="true">
        <img src={article.image} alt="" loading="lazy" decoding="async" />
      </Link>
      <div className="post-row-copy">
        <div className="post-row-top"><CategoryLabel article={article} /><span>{article.date}</span></div>
        <h3><Link href={href}>{article.title}</Link></h3>
        <p>{article.summary}</p>
        <Byline author={article.author} meta={article.time} />
      </div>
    </article>
  );
}
