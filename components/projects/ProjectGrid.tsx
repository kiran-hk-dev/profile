"use client";

import { Project } from "@/types";
import { Stagger } from "../animations/Stagger";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <Stagger className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </Stagger>
  );
}
