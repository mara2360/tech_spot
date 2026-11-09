import type { Metadata } from "next";
import { articles } from "../articles";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import TopicPills from "../components/TopicPills";
import Newsletter from "../components/Newsletter";
import { PostRow } from "../components/PostViews";

export const metadata: Metadata = { title: "All stories — TechSpot", description: "Browse every TechSpot story across AI, security, development, open source, cloud, and hardware." };

export default function StoriesPage() {
  return (
    <>
      <SiteHeader active="stories" />
      <main id="content">
        <section className="wrap page-head">
          <h1>All stories</h1>
          <p className="lede">Deep reads, quick context, and independent perspectives on the technology shaping what comes next.</p>
        </section>
        <div className="wrap"><TopicPills active="all" /></div>
        <section className="wrap section section-tight">
          <div className="section-head"><h2 className="count">{articles.length} stories</h2></div>
          <div className="post-list">
            {articles.map((article) => <PostRow article={article} key={article.slug} />)}
          </div>
        </section>
        <Newsletter />
      </main>
      <SiteFooter />
    </>
  );
}
