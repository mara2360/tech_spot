type SecondaryNavItem = {
  href: string;
  label: string;
};

export default function SecondaryNav({
  items,
  label,
}: {
  items: SecondaryNavItem[];
  label: string;
}) {
  return (
    <nav className="ticker" aria-label={label}>
      {items.map((item, index) => (
        <span className="ticker-item" key={item.href}>
          <a className={index === 0 ? "ticker-active" : undefined} href={item.href}>
            {item.label}
          </a>
          {index < items.length - 1 && <i aria-hidden="true" />}
        </span>
      ))}
    </nav>
  );
}
