import Link from "next/link";

export function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] ${className}`}>
      <span className="inline-block size-2 bg-mango" aria-hidden="true" />
      {children}
    </p>
  );
}

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "mango" | "ghost" | "ghost-light";
};

const variants = {
  primary: "bg-leaf text-paper hover:bg-leaf-soft",
  mango: "bg-mango text-leaf hover:bg-mango-soft",
  ghost: "border border-ink/20 text-ink hover:border-ink",
  "ghost-light": "border border-paper/25 text-paper hover:border-paper",
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors ${variants[variant]}`}
    >
      {children}
      <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
        →
      </span>
    </Link>
  );
}

export function CtaBand() {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-mango px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
        <div className="relative z-10 max-w-3xl">
          <Eyebrow className="text-leaf/70">Got a project?</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-bold leading-[1.02] tracking-tight text-leaf sm:text-6xl">
            Let’s take a bite out of it.
          </h2>
          <p className="mt-5 max-w-xl text-lg text-leaf/80">
            Tell us what you’re building. We’ll reply within one working day with ideas, a rough timeline and an
            honest quote.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">Start a project</Button>
          </div>
        </div>
        <div className="pointer-events-none absolute -right-6 bottom-0 hidden grid-cols-4 gap-2 opacity-90 md:grid" aria-hidden="true">
          {Array.from({ length: 16 }).map((_, i) => (
            <span
              key={i}
              className={`size-12 rounded-md lg:size-16 ${
                [0, 1, 2, 4, 5, 8].includes(i) ? "bg-transparent" : i % 3 === 0 ? "bg-flesh" : "bg-leaf"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
