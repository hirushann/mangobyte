type MarkProps = { className?: string };

// The mark: a ripe mango with a stepped, pixelated "byte" taken out of it.
export function LogoMark({ className }: MarkProps) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={className}>
      <defs>
        <mask id="mb-bite">
          <rect width="40" height="40" fill="white" />
          <rect x="27" y="0" width="13" height="12" fill="black" />
          <rect x="31" y="12" width="9" height="4" fill="black" />
          <rect x="35" y="16" width="5" height="4" fill="black" />
        </mask>
      </defs>
      <path
        mask="url(#mb-bite)"
        d="M21 7c9 0 15 7 14.5 16S28 37 19.5 37 5 31 5.5 22 12 7 21 7Z"
        fill="var(--color-mango)"
      />
      <path d="M19 8c-1-3.5 1.5-6.5 6-6.5-.5 4-2.5 6.2-6 6.5Z" fill="var(--color-sprout)" />
      <rect x="29" y="7" width="4" height="4" fill="var(--color-flesh)" />
      <rect x="34" y="2" width="3" height="3" fill="var(--color-mango)" />
      <rect x="37" y="11" width="2.5" height="2.5" fill="var(--color-flesh)" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <LogoMark className="size-8" />
      <span className="font-display text-xl font-bold tracking-tight">
        mango<span className="font-mono text-[0.85em] font-medium">byte</span>
      </span>
    </span>
  );
}
