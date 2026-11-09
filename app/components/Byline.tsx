const palette = ["#5b4cf5", "#0e8f87", "#d9480f", "#2f6fdb", "#9c36b5", "#2b8a3e"];

function colorFor(name: string) {
  let hash = 0;
  for (const char of name) hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  return palette[hash % palette.length];
}

export function Avatar({ name, size = 28 }: { name: string; size?: number }) {
  const initials = name.split(" ").map((part) => part[0]).join("").slice(0, 2);
  return (
    <span
      className="avatar"
      aria-hidden="true"
      style={{ width: size, height: size, fontSize: Math.round(size * 0.4), background: colorFor(name) }}
    >
      {initials}
    </span>
  );
}

export default function Byline({ author, meta, size }: { author: string; meta: string; size?: number }) {
  return (
    <div className="byline">
      <Avatar name={author} size={size} />
      <span className="byline-name">{author}</span>
      <span className="byline-meta">{meta}</span>
    </div>
  );
}
