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
        <div className="flex items-baseline gap-3 flex-wrap mt-2">
          <h1 className="font-display text-4xl text-text">{project.title}</h1>
          {project.subtitle && <span className="font-mono-tag text-lg text-accent">/ {project.subtitle}</span>}
        </div>
        <p className="mt-2 text-sm text-text-muted">{project.category}</p>
        <p className="mt-6 text-text-muted leading-relaxed text-lg">{project.description}</p>
        <p className="mt-4 text-sm text-text-faint">Role: <span className="text-text-muted">{project.role}</span></p>

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
        <h2 className="font-display text-xl text-text mb-5">Architecture</h2>
        <div className="rounded-2xl border border-border-soft bg-bg-elevated/50 p-6 sm:p-8">
          <PipelineDiagram nodes={project.architecture} direction="horizontal" />
        </div>
      </div>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {techEntries.map(([category, items]) => (
          <div key={category}>
            <h3 className="font-mono-tag text-xs uppercase tracking-wide text-accent mb-3">{category}</h3>
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
          <h2 className="font-display text-xl text-text mb-6">Features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {project.features.map((f) => (
              <div key={f.title} className="rounded-xl border border-border-soft bg-bg-elevated p-5">
                <h3 className="text-sm font-medium text-text">{f.title}</h3>
                <ul className="mt-3 space-y-1.5">
                  {f.items.map((it) => (
                    <li key={it} className="text-sm text-text-muted flex gap-2">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
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
        <h2 className="font-display text-xl text-text mb-6">My Contributions</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {project.contributions.map((c) => (
            <div key={c.title} className="rounded-xl border border-border-soft bg-bg-elevated p-5">
              <h3 className="text-sm font-medium text-text">{c.title}</h3>
              <ul className="mt-3 space-y-1.5">
                {c.items.map((it) => (
                  <li key={it} className="text-sm text-text-muted flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-accent-2 shrink-0" />
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
