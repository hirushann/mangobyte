import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { CtaBand, Eyebrow } from "@/components/ui";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected websites designed and built by MangoByte for clients in Sri Lanka and the USA.",
};

export default function WorkPage() {
  return (
    <>
      <section className="px-4 pb-16 pt-16 sm:px-6 sm:pt-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Eyebrow className="text-muted">Portfolio</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.75rem,7vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.03em]">
            Websites we’ve designed, built and launched.
          </h1>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-14 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
