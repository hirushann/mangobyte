import Link from "next/link";
import { nav, services, site } from "@/lib/content";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="bg-leaf text-paper">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-paper/70">
              A web design and development studio in Sri Lanka, building fast, custom websites for brands
              that plan to grow.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-6 inline-block font-display text-2xl font-semibold text-mango underline decoration-mango/40 underline-offset-4 hover:decoration-mango"
            >
              {site.email}
            </a>
          </div>

          <FooterCol title="Services">
            {services.map((s) => (
              <li key={s.title}>
                <Link href="/#services" className="hover:text-mango">
                  {s.title}
                </Link>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Studio">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-mango">
                  {item.label}
                </Link>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Follow">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="hover:text-mango">
                  {s.label}
                </a>
              </li>
            ))}
          </FooterCol>
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-leaf-line pt-6 font-mono text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 MangoByte. Made in {site.location}.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-paper">Privacy</a>
            <a href="#" className="hover:text-paper">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-mono text-xs uppercase tracking-widest text-paper/50">{title}</h2>
      <ul className="mt-5 space-y-3 text-paper/85">{children}</ul>
    </div>
  );
}
