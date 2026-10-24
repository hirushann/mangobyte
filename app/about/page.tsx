import type { Metadata } from "next";
import { LogoMark } from "@/components/logo";
import { CtaBand, Eyebrow } from "@/components/ui";
import { process, values } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "MangoByte is a web design and development studio in Sri Lanka helping startups and small businesses build a strong online presence.",
};

export default function AboutPage() {
  return (
    <>
      <section className="px-4 pb-20 pt-16 sm:px-6 sm:pt-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <Eyebrow className="text-muted">About the studio</Eyebrow>
            <h1 className="mt-6 font-display text-[clamp(2.75rem,7vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.03em]">
              Grown in Sri Lanka. Built for the world.
            </h1>
          </div>
          <p className="text-lg leading-relaxed text-muted">
            MangoByte is a results-driven web studio. We help startups, small businesses and growing brands look
            sharp and get found online, with custom websites, thoughtful UI/UX and SEO that delivers.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="pixel-grid mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-leaf text-paper lg:grid-cols-2">
          <div className="p-8 sm:p-14">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Why “MangoByte”?</h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-paper/75">
              <p>
                The mango is Sri Lanka’s favourite fruit: bright, generous and impossible to ignore. The byte is
                the smallest unit of everything we build.
              </p>
              <p>
                Put them together and you get our approach: warm, human work on the outside, precise engineering
                underneath. Every pixel considered, every byte earning its place.
              </p>
            </div>
          </div>
          <div className="relative grid min-h-72 place-items-center bg-leaf-soft/60 p-10">
            <LogoMark className="w-48 sm:w-64" />
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Eyebrow className="text-muted">What we stand for</Eyebrow>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {values.map((v, i) => (
              <article key={v.title} className="rounded-3xl bg-paper-deep p-8">
                <span
                  className={`block size-10 rounded-lg ${["bg-mango", "bg-flesh", "bg-sprout"][i]}`}
                  aria-hidden="true"
                />
                <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Eyebrow className="text-muted">Our process</Eyebrow>
          <ol className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <li key={item.step} className="border-t-2 border-ink pt-5">
                <span className="font-mono text-sm text-muted">{item.step}</span>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
