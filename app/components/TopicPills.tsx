import Link from "next/link";
import { topics } from "../articles";

export default function TopicPills({ active = "all" }: { active?: string }) {
  return (
    <nav className="pills" aria-label="Browse by topic">
      <Link href="/stories" className={active === "all" ? "is-active" : undefined} aria-current={active === "all" ? "page" : undefined}>
        All stories
      </Link>
      {topics.map((topic) => (
        <Link
          key={topic.slug}
          href={`/topics/${topic.slug}`}
          className={active === topic.slug ? "is-active" : undefined}
          aria-current={active === topic.slug ? "page" : undefined}
        >
          {topic.name}
        </Link>
      ))}
    </nav>
  );
}
