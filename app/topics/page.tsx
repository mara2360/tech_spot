import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import TopicTiles from "../components/TopicTiles";
import Newsletter from "../components/Newsletter";

export const metadata: Metadata = { title: "Topics — TechSpot", description: "Explore TechSpot coverage by topic." };

export default function TopicsPage() {
  return (
    <>
      <SiteHeader active="topics" />
      <main id="content">
        <section className="wrap page-head">
          <h1>Topics</h1>
          <p className="lede">Choose a field and find the reporting, context, and ideas that help you understand it.</p>
        </section>
        <section className="wrap section section-tight">
          <TopicTiles />
        </section>
        <Newsletter />
      </main>
      <SiteFooter />
    </>
  );
}
