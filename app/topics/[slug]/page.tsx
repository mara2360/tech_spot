import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTopic, getTopicArticles, topics } from "../../articles";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import TopicPills from "../../components/TopicPills";
import Newsletter from "../../components/Newsletter";
import { PostRow } from "../../components/PostViews";

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
    <>
      <SiteHeader active="topics" />
      <main id="content">
        <section className="wrap page-head">
          <Link className="back-link" href="/topics">← All topics</Link>
          <h1>{topic.name}</h1>
          <p className="lede">{topic.description}</p>
        </section>
        <div className="wrap"><TopicPills active={topic.slug} /></div>
        <section className="wrap section section-tight">
          <div className="section-head"><h2 className="count">{topicArticles.length} stories</h2></div>
          <div className="post-list">
            {topicArticles.map((article) => <PostRow article={article} key={article.slug} />)}
          </div>
        </section>
        <Newsletter />
      </main>
      <SiteFooter />
    </>
  );
}
