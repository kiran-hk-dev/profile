"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/FadeIn";
import { ProjectWalkthroughCard } from "@/components/learn/ProjectWalkthrough";
import { projectWalkthroughs } from "@/data/learn/projects";
import { ArrowLeft } from "lucide-react";

export default function ProjectsLearnPage() {
  return (
    <div className="py-32 sm:py-40">
      <Container>
        <Link
          href="/learn"
          className="inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-text"
        >
          <ArrowLeft size={14} />
          Back to Learn
        </Link>

        <FadeIn className="mt-6">
          <SectionHeading
            index="Projects"
            title="Project Walkthroughs"
            description="Step-by-step implementation guides with real commands, architecture diagrams, and troubleshooting for production DevOps projects."
          />
        </FadeIn>

        <div className="space-y-10">
          {projectWalkthroughs.map((project) => (
            <FadeIn key={project.id}>
              <ProjectWalkthroughCard project={project} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </div>
  );
}