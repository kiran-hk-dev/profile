import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Key projects by Kiran H K: Mychit Software (ChitXpert), Retail Billing Software, Learn With Kiran, Hotel Website + Admin Suite with Android app, and this Developer Profile — with step-by-step build notes.",
};

export default function ProjectsPage() {
  return (
    <Container className="py-20 sm:py-28">
      <SectionHeading title="Projects" description="Real projects with how I built each one — step by step, not just tech lists." />
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard project={p} key={p.slug} index={i} />
        ))}
      </div>
    </Container>
  );
}
