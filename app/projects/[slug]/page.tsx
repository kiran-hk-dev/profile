import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { PipelineDiagram } from "@/components/ui/PipelineDiagram";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const techEntries = Object.entries(project.technologies).filter(([, v]) => v && v.length > 0) as [string, string[]][];

  return (
    <Container className="py-20 sm:py-28">
      <div className="max-w-3xl">
        <p className="font-mono-tag text-xs text-text-faint">{project.duration}</p>
        <div className="mt-2 flex flex-wrap items-baseline gap-3">
          <h1 className="font-display text-4xl text-text">{project.title}</h1>
          {project.subtitle && <span className="font-mono-tag text-lg text-accent">/ {project.subtitle}</span>}
        </div>
        <p className="mt-2 text-sm text-text-muted">{project.category}</p>
        <p className="mt-6 text-lg leading-relaxed text-text-muted">{project.description}</p>
        <p className="mt-4 text-sm text-text-faint">Role: <span className="text-text-muted">{project.role}</span></p>

        {(project.liveDemo || project.github) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-black hover:opacity-90"
              >
                Open Live Demo ↗
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border-soft px-4 py-2 text-sm text-text-muted hover:text-text"
              >
                View Source ↗
              </a>
            )}
          </div>
        )}

        {project.kpis.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.kpis.map((k) => (
              <span key={k} className="rounded-lg border border-accent/30 bg-accent-soft px-3 py-1.5 text-xs text-accent">
                {k}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="mt-14">
        <h2 className="mb-2 font-display text-xl text-text">Architecture & Flow</h2>
        <p className="mb-5 text-sm text-text-muted">Top to bottom — how requests and releases move through this project.</p>
        <div className="rounded-2xl border border-border-soft bg-bg-elevated/50 p-6 sm:p-8">
          <PipelineDiagram nodes={project.architecture} direction="vertical" />
        </div>
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {techEntries.map(([category, items]) => (
          <div key={category} className="rounded-xl border border-border-soft bg-bg-elevated/60 p-5">
            <h3 className="mb-3 font-mono-tag text-xs uppercase tracking-wide text-accent">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>

      {project.features.length > 0 && (
        <div className="mt-16">
          <h2 className="mb-6 font-display text-xl text-text">What it does</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((f) => (
              <div key={f.title} className="rounded-xl border border-border-soft bg-bg-elevated p-5">
                <h3 className="text-sm font-medium text-text">{f.title}</h3>
                <ul className="mt-3 space-y-1.5">
                  {f.items.map((it) => (
                    <li key={it} className="flex gap-2 text-sm text-text-muted">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-16">
        <h2 className="mb-2 font-display text-xl text-text">How I built it — step by step</h2>
        <p className="mb-6 text-sm text-text-muted">The actual order I worked in, and what I did at each step.</p>
        <div className="grid gap-5 md:grid-cols-2">
          {project.contributions.map((c, i) => (
            <div key={c.title} className="rounded-xl border border-border-soft bg-bg-elevated p-5 sm:p-6">
              <p className="font-mono-tag text-[11px] font-bold uppercase tracking-widest text-accent">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-1.5 text-[15px] font-semibold text-text">{c.title}</h3>
              <ul className="mt-3 space-y-1.5">
                {c.items.map((it) => (
                  <li key={it} className="flex gap-2 text-sm leading-relaxed text-text-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-2" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
