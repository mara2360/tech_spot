import Link from "next/link";
import { articles } from "./articles";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import TopicPills from "./components/TopicPills";
import TopicTiles from "./components/TopicTiles";
import Newsletter from "./components/Newsletter";
import { FeaturedPost, PostCard, PostRow } from "./components/PostViews";

export default function Home() {
  const [featured, ...rest] = articles;
  const latest = rest.slice(0, 3);
  const more = rest.slice(3);

  return (
    <>
      <SiteHeader active="home" />
      <main id="content">
        <section className="wrap page-head">
          <h1>Ideas for the next internet.</h1>
          <p className="lede">Clear-eyed reporting on the tools, people, and ideas reshaping technology—without the noise.</p>
          <div className="head-links">
            <Link href="/#newsletter">Newsletter</Link>
            <Link href="/topics">Topics</Link>
            <Link href="/about">About TechSpot</Link>
          </div>
        </section>

        <div className="wrap"><TopicPills /></div>

        <section className="wrap" aria-label="Featured story">
          <FeaturedPost article={featured} />
        </section>

        <section className="wrap section" aria-labelledby="latest-heading">
          <div className="section-head">
            <h2 id="latest-heading">Latest stories</h2>
            <Link className="more-link" href="/stories">View all stories →</Link>
          </div>
          <div className="post-grid">
            {latest.map((article) => <PostCard article={article} key={article.slug} />)}
          </div>
        </section>

        {more.length > 0 && (
          <section className="wrap section" aria-labelledby="more-heading">
            <div className="section-head">
              <h2 id="more-heading">Quick reads</h2>
            </div>
            <div className="post-list">
              {more.map((article) => <PostRow article={article} key={article.slug} />)}
            </div>
          </section>
        )}

        <section className="wrap section" aria-labelledby="topics-heading">
          <div className="section-head">
            <h2 id="topics-heading">Explore by topic</h2>
            <Link className="more-link" href="/topics">All topics →</Link>
          </div>
          <TopicTiles />
        </section>

        <Newsletter />
      </main>
      <SiteFooter />
    </>
  );
}
