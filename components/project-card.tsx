import type { Project } from "@/lib/content";

const tones: Record<Project["tone"], { panel: string; frame: string; text: string; label: string; accent: string }> = {
  mango: { panel: "bg-mango", frame: "bg-paper", text: "text-leaf", label: "text-leaf/70", accent: "bg-mango" },
  leaf: { panel: "bg-leaf pixel-grid", frame: "bg-leaf-soft", text: "text-mango", label: "text-paper/60", accent: "bg-mango" },
  flesh: { panel: "bg-flesh", frame: "bg-paper", text: "text-leaf", label: "text-leaf/70", accent: "bg-flesh" },
  sprout: { panel: "bg-sprout", frame: "bg-paper", text: "text-leaf", label: "text-leaf/70", accent: "bg-sprout" },
  ink: { panel: "bg-ink pixel-grid", frame: "bg-paper", text: "text-leaf", label: "text-paper/60", accent: "bg-flesh" },
  paper: { panel: "bg-paper-deep", frame: "bg-leaf", text: "text-mango", label: "text-leaf/60", accent: "bg-mango" },
};

// Placeholder preview: a stylised browser frame until real project screenshots are added.
export function ProjectCard({ project }: { project: Project }) {
  const tone = tones[project.tone];

  return (
    <article className="group">
      <div
        className={`relative aspect-[4/3] overflow-hidden rounded-3xl ${tone.panel} p-6 transition-transform duration-500 group-hover:-translate-y-1 sm:p-8`}
      >
        <div
          className={`absolute inset-x-6 bottom-0 top-14 rounded-t-2xl ${tone.frame} shadow-2xl shadow-black/20 transition-transform duration-500 group-hover:translate-y-[-6px] sm:inset-x-10 sm:top-16`}
        >
          <div className="flex gap-1.5 p-3">
            <span className="size-2 rounded-full bg-current opacity-20" />
            <span className="size-2 rounded-full bg-current opacity-20" />
            <span className="size-2 rounded-full bg-current opacity-20" />
          </div>
          <div className={`px-5 ${tone.text}`}>
            <p className="max-w-[80%] font-display text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
              {project.name}
            </p>
            <div className="mt-4 space-y-2" aria-hidden="true">
              <span className="block h-2 w-3/5 rounded-full bg-current opacity-15" />
              <span className="block h-2 w-2/5 rounded-full bg-current opacity-15" />
            </div>
            <span className={`mt-5 block h-6 w-24 rounded-full ${tone.accent}`} aria-hidden="true" />
            <div className="mt-6 grid grid-cols-3 gap-3" aria-hidden="true">
              <span className="aspect-[4/3] rounded-lg bg-current opacity-10" />
              <span className="aspect-[4/3] rounded-lg bg-current opacity-10" />
              <span className="aspect-[4/3] rounded-lg bg-current opacity-10" />
            </div>
          </div>
        </div>
        <span className={`absolute left-6 top-5 font-mono text-xs uppercase tracking-widest sm:left-8 sm:top-6 ${tone.label}`}>
          {project.category}
        </span>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-xl font-semibold tracking-tight">{project.name}</h3>
          <p className="mt-1 text-sm text-muted">
            {project.location} · Client: {project.client}
          </p>
        </div>
        <span className="font-mono text-sm text-muted">{project.year}</span>
      </div>
    </article>
  );
}
