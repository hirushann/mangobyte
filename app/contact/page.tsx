import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Eyebrow } from "@/components/ui";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a website, app, branding or SEO project with MangoByte.",
};

export default function ContactPage() {
  return (
    <section className="px-4 pb-24 pt-16 sm:px-6 sm:pt-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <Eyebrow className="text-muted">Contact</Eyebrow>
          <h1 className="mt-6 font-display text-[clamp(2.75rem,6vw,5rem)] font-bold leading-[0.95] tracking-[-0.03em]">
            Tell us what you’re building.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
            Website, app, rebrand or SEO, share a few details and we’ll get back to you within one working day.
          </p>

          <dl className="mt-12 space-y-6">
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-muted">Email</dt>
              <dd className="mt-1">
                <a href={`mailto:${site.email}`} className="font-display text-2xl font-semibold hover:text-flesh">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-muted">Studio</dt>
              <dd className="mt-1 font-display text-2xl font-semibold">{site.location}</dd>
            </div>
          </dl>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
