import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Full stack and DevOps projects built by Kiran H K, including MyChits (ChitXpert) and Retail Billing Software.",
};

export default function ProjectsPage() {
  return (
    <Container className="py-20 sm:py-28">
      <SectionHeading title="Projects" description="Real projects, real technology, real outcomes." />
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard project={p} key={p.slug} index={i} />
        ))}
      </div>
    </Container>
  );
}
