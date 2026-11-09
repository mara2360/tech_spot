import Link from "next/link";
import { getTopicArticles, topics } from "../articles";

export default function TopicTiles() {
  return (
    <div className="topic-tiles">
      {topics.map((topic) => (
        <Link className="topic-tile" href={`/topics/${topic.slug}`} key={topic.slug}>
          <strong>{topic.name}</strong>
          <p>{topic.description}</p>
          <span className="topic-tile-foot">
            <span>{getTopicArticles(topic.slug).length} stories</span>
            <span aria-hidden="true">→</span>
          </span>
        </Link>
      ))}
    </div>
  );
}
