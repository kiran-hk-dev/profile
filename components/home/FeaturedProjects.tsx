import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ProjectGrid } from "../projects/ProjectGrid";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-20 sm:py-28">
      <Container>
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            index="04"
            title="Projects"
            description="Platforms I've built and the infrastructure work behind shipping them."
            className="mb-0"
          />
          <Link
            href="/projects"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-(--color-text-muted) transition-colors hover:text-(--color-text)"
          >
            View all projects
            <ArrowRight size={14} />
          </Link>
        </div>

        <ProjectGrid projects={featured} />
      </Container>
    </section>
  );
}
