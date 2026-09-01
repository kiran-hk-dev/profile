import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Platforms and infrastructure projects built by Kiran H K, covering CI/CD, Kubernetes, monitoring, and cloud-native delivery.",
};

export default function ProjectsPage() {
  return (
    <div className="py-32 sm:py-40">
      <Container>
        <SectionHeading
          title="Projects"
          description="Platforms I've built and the infrastructure work behind shipping them."
        />
        <ProjectGrid projects={projects} />
      </Container>
    </div>
  );
}
