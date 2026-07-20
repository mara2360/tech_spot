"use client";

import { FormEvent, useState } from "react";
import { featuredArticles as stories, quickReadArticles as quickReads, topics } from "./articles";

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  const [subscribed, setSubscribed] = useState(false);

  function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubscribed(true);
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="TechSpot home">
          <span className="brand-mark">T</span>
          <span>TechSpot</span>
        </a>
        <nav aria-label="Main navigation">
          <a className="active" href="#stories">Stories</a>
          <a href="#topics">Topics</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-cta" href="#newsletter">Get the brief <Arrow /></a>
      </header>

      <section className="hero" id="top">
        <div className="eyebrow"><span /> Independent technology journalism</div>
        <h1>Ideas for the<br /><em>next</em> internet.</h1>
        <div className="hero-bottom">
          <p>Clear-eyed reporting on the tools, people, and ideas reshaping technology—without the noise.</p>
          <a className="circle-link" href="#stories" aria-label="Explore the latest stories">↓</a>
        </div>
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />
      </section>

      <section className="ticker" aria-label="Trending topics">
        <span>Trending now</span><i />
        <a href="#stories">AI agents</a><i />
        <a href="#stories">Passkeys</a><i />
        <a href="#stories">Spatial computing</a><i />
        <a href="#stories">Open models</a>
      </section>

      <section className="stories section" id="stories">
        <div className="section-heading">
          <div><span className="kicker">01 / Latest</span><h2>Stories worth<br />your attention.</h2></div>
          <p>Deep reads and sharp perspectives, selected by our editors every week.</p>
        </div>
        <div className="story-grid">
          {stories.map((story, index) => (
            <article className={`story-card story-${index + 1}`} key={story.title}>
              <a className="story-image" href={`/articles/${story.slug}`} aria-label={`Read ${story.title}`}>
                <img src={story.image} alt="" />
                <span className={`story-tag ${story.accent}`}>{story.category}</span>
                <span className="image-arrow"><Arrow /></span>
              </a>
              <div className="story-meta"><span>{story.date}</span><span>{story.time}</span></div>
              <h3><a href={`/articles/${story.slug}`}>{story.title}</a></h3>
              <p>{story.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="quick-section section">
        <div className="quick-intro">
          <span className="kicker">02 / Quick reads</span>
          <h2>Catch up<br />in ten.</h2>
          <p>The essential context, minus the endless scroll.</p>
        </div>
        <div className="quick-list">
          {quickReads.map((item, index) => (
            <a href={`/articles/${item.slug}`} className="quick-row" key={item.slug}>
              <span className="quick-number">0{index + 1}</span>
              <span className="quick-topic">{item.category}</span>
              <strong>{item.title}</strong>
              <span className="quick-time">{item.time.replace(" read", "")}</span>
              <Arrow />
            </a>
          ))}
        </div>
      </section>

      <section className="topics section" id="topics">
        <div className="section-heading compact">
          <div><span className="kicker">03 / Explore</span><h2>Follow your curiosity.</h2></div>
        </div>
        <div className="topic-cloud">
          {topics.map((topic, index) => (
            <a href={`/topics/${topic.slug}`} key={topic.slug}><sup>0{index + 1}</sup>{topic.name}<Arrow /></a>
          ))}
        </div>
      </section>

      <section className="newsletter section" id="newsletter">
        <div className="newsletter-art"><span>Signal</span><span>over</span><span>noise.</span></div>
        <div className="newsletter-copy">
          <span className="kicker">The weekly brief</span>
          <h2>Your edge,<br />delivered.</h2>
          <p>One thoughtful email every Thursday. The stories that matter, a point of view you can use, and zero filler.</p>
          {subscribed ? (
            <div className="success" role="status">You’re on the list. See you Thursday.</div>
          ) : (
            <form onSubmit={subscribe}>
              <label className="sr-only" htmlFor="email">Email address</label>
              <input id="email" type="email" required placeholder="you@example.com" />
              <button type="submit">Subscribe <Arrow /></button>
            </form>
          )}
          <small>No spam. Unsubscribe whenever you like.</small>
        </div>
      </section>

      <footer id="about">
        <div className="footer-top">
          <a className="brand footer-brand" href="#top"><span className="brand-mark">T</span><span>TechSpot</span></a>
          <p>Technology is complicated.<br />Understanding it shouldn’t be.</p>
          <div className="footer-links"><a href="#stories">Stories</a><a href="#topics">Topics</a><a href="#newsletter">Newsletter</a></div>
          <div className="footer-links"><a href="#about">About</a><a href="mailto:hello@techspot.com">Contact</a><a href="#top">Back to top ↑</a></div>
        </div>
        <div className="footer-bottom"><span>© 2026 TechSpot</span><span>Independent. Curious. Human.</span></div>
      </footer>
    </main>
  );
}
