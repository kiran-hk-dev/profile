import { FadeIn } from "@/components/animations/FadeIn";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { ProjectArchitecture } from "@/components/projects/ProjectArchitecture";
import { Container } from "@/components/ui/Container";
import { projects } from "@/data/projects";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <div className="py-32 sm:py-40">
      <Container>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-(--color-text-muted) transition-colors hover:text-(--color-text)"
        >
          <ArrowLeft size={14} />
          All projects
        </Link>

        <FadeIn className="mt-6 max-w-2xl">
          <p className="font-mono text-xs text-(--color-accent)">{project.category}</p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-(--color-text) sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-(--color-text-muted)">
            {project.longDescription}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-(--color-border-strong) px-4 py-2 text-sm font-medium text-(--color-text) transition-colors hover:border-(--color-accent) hover:text-(--color-accent)"
              >
                <GithubIcon size={15} />
                View source
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-(--color-accent) px-4 py-2 text-sm font-medium text-white transition hover:brightness-110"
              >
                Live demo
                <ArrowUpRight size={15} />
              </a>
            )}
          </div>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.8fr]">
          <div className="flex flex-col gap-12">
            <FadeIn>
              <h2 className="font-display text-xl font-semibold text-(--color-text)">
                Architecture
              </h2>
              <div className="mt-5">
                <ProjectArchitecture steps={project.architecture} />
              </div>
            </FadeIn>

            <FadeIn>
              <h2 className="font-display text-xl font-semibold text-(--color-text)">
                Features
              </h2>
              <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-lg border border-(--color-border) bg-(--color-surface) px-4 py-3 text-sm text-(--color-text-muted)"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn>
              <h2 className="font-display text-xl font-semibold text-(--color-text)">
                DevOps contributions
              </h2>
              <ul className="mt-5 flex flex-col gap-2.5">
                {project.devopsContributions.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-lg border border-(--color-border) bg-(--color-surface) px-4 py-3 text-sm text-(--color-text)"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-(--color-cyan)" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <FadeIn delay={0.1} className="h-fit rounded-xl border border-(--color-border) bg-(--color-surface) p-6">
            <h2 className="font-display text-base font-semibold text-(--color-text)">
              Technologies
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md border border-(--color-border-strong) px-2.5 py-1 font-mono text-xs text-(--color-text-muted)"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Container>
    </div>
  );
}
