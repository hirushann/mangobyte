import { LogoMark } from "@/components/logo";
import { ProjectCard } from "@/components/project-card";
import { Button, CtaBand, Eyebrow } from "@/components/ui";
import { process, projects, services, values } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Work />
      <Process />
      <Values />
      <CtaBand />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 pt-14 sm:px-6 sm:pt-20 lg:grid-cols-[1.15fr_1fr] lg:px-8 lg:pb-28">
        <div>
          <Eyebrow className="text-muted">Web design &amp; development · Sri Lanka</Eyebrow>
          <h1 className="mt-6 font-display text-[clamp(3rem,8vw,6.5rem)] font-bold leading-[0.92] tracking-[-0.035em]">
            We build websites with{" "}
            <span className="relative inline-block">
              <span className="relative z-10">bite.</span>
              <span
                className="absolute inset-x-[-0.08em] bottom-[0.08em] h-[0.38em] -rotate-1 bg-mango"
                aria-hidden="true"
              />
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            MangoByte is a small studio crafting fast, custom websites, UI/UX and SEO for startups and growing
            brands, from Colombo to Las Vegas.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/contact">Start a project</Button>
            <Button href="/work" variant="ghost">
              See our work
            </Button>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg" aria-hidden="true">
      <div className="pixel-grid relative aspect-square overflow-hidden rounded-[2.5rem] bg-leaf">
        <LogoMark className="absolute left-1/2 top-1/2 w-[62%] -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_30px_40px_rgba(0,0,0,0.35)]" />
      </div>

      <div className="absolute -left-1 top-10 rotate-[-4deg] rounded-2xl bg-paper px-4 py-3 shadow-xl shadow-leaf/15 sm:-left-10">
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted">Performance</p>
        <p className="font-display text-3xl font-bold leading-none">
          90<span className="text-flesh">+</span>
        </p>
      </div>

      <div className="absolute -right-2 bottom-24 rotate-[3deg] rounded-full bg-mango px-5 py-2.5 font-semibold text-leaf shadow-xl shadow-leaf/20 sm:-right-8">
        Mobile-first
      </div>

      <div className="absolute -bottom-5 left-8 flex items-center gap-3 rounded-2xl bg-paper px-4 py-3 shadow-xl shadow-leaf/15">
        <span className="grid size-8 place-items-center rounded-lg bg-sprout font-mono text-xs font-medium text-paper">
          SEO
        </span>
        <span className="text-sm font-medium">Built in, not bolted on</span>
      </div>
    </div>
  );
}

function Marquee() {
  const items = services.map((s) => s.title);
  return (
    <div className="overflow-hidden border-y border-leaf bg-leaf py-5 text-paper">
      <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            {item}
            <span className="inline-block size-3 bg-mango" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="scroll-mt-16 px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <Eyebrow className="text-muted">What we do</Eyebrow>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.02] tracking-tight sm:text-6xl">
              Everything your brand needs to grow online.
            </h2>
          </div>
          <p className="max-w-md text-lg text-muted lg:justify-self-end">
            Pick one service or let us handle the lot. Either way, design, code and search work together from day
            one.
          </p>
        </div>

        <div className="mt-16 grid border-t border-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <article
              key={service.title}
              className="group relative border-b border-line py-10 sm:px-8 sm:[&:nth-child(odd)]:border-r lg:[&:nth-child(odd)]:border-r-0 lg:[&:not(:nth-child(3n))]:border-r"
            >
              <span className="font-mono text-sm text-muted">{String(i + 1).padStart(2, "0")}/</span>
              <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">
                <span className="bg-[linear-gradient(var(--color-mango),var(--color-mango))] bg-[length:0%_0.35em] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_0.35em]">
                  {service.title}
                </span>
              </h3>
              <p className="mt-4 leading-relaxed text-muted">{service.body}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <li key={tag} className="rounded-full bg-paper-deep px-3 py-1 font-mono text-xs text-ink/75">
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="bg-paper-deep px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow className="text-muted">Selected work</Eyebrow>
            <h2 className="mt-5 max-w-2xl font-display text-4xl font-bold leading-[1.02] tracking-tight sm:text-6xl">
              Recent launches, here and abroad.
            </h2>
          </div>
          <Button href="/work" variant="ghost">
            All projects
          </Button>
        </div>

        <div className="mt-16 grid gap-x-8 gap-y-14 md:grid-cols-2">
          {projects.slice(0, 4).map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="pixel-grid bg-leaf px-4 py-24 text-paper sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Eyebrow className="text-paper/60">How it works</Eyebrow>
        <h2 className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.02] tracking-tight sm:text-6xl">
          From first chat to launch in four steps.
        </h2>

        <ol className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((item) => (
            <li
              key={item.step}
              className="flex flex-col rounded-3xl border border-leaf-line bg-leaf-soft/80 p-7 transition-colors hover:border-mango/60"
            >
              <span className="font-mono text-sm text-mango">{item.step}</span>
              <h3 className="mt-10 font-display text-2xl font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-paper/70">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <Eyebrow className="text-muted">Why MangoByte</Eyebrow>
          <h2 className="mt-5 font-display text-4xl font-bold leading-[1.02] tracking-tight sm:text-5xl">
            Sweet to work with. Sharp where it counts.
          </h2>
        </div>
        <div className="divide-y divide-line border-y border-line">
          {values.map((v) => (
            <div key={v.title} className="grid gap-3 py-8 sm:grid-cols-[14rem_1fr] sm:gap-10">
              <h3 className="font-display text-xl font-semibold tracking-tight">{v.title}</h3>
              <p className="leading-relaxed text-muted">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
