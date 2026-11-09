// TechSpot "code spot" mark: angle brackets around a violet spot.
// Brackets use currentColor so the mark follows the text color around it.
export default function LogoMark({ size = 34 }: { size?: number }) {
  return (
    <svg
      className="brand-mark"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 16 L4 32 L18 48" />
        <path d="M46 16 L60 32 L46 48" />
      </g>
      <circle cx="32" cy="32" r="8" fill="#5b4cf5" />
    </svg>
  );
}
