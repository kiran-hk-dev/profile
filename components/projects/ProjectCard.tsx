"use client";

import { Project } from "@/types";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { staggerItem } from "../animations/Stagger";
import { GithubIcon } from "../icons/GithubIcon";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="group flex flex-col rounded-xl border border-(--color-border) bg-(--color-surface) p-6 transition-colors hover:border-(--color-border-strong)"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs text-(--color-accent)">{project.category}</p>
          <h3 className="mt-1.5 font-display text-xl font-semibold text-(--color-text)">
            {project.title}
          </h3>
        </div>
        <div className="flex shrink-0 gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-(--color-border-strong) text-(--color-text-muted) transition-colors hover:border-(--color-accent) hover:text-(--color-accent)"
            >
              <GithubIcon size={14} />
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-(--color-border-strong) text-(--color-text-muted) transition-colors hover:border-(--color-accent) hover:text-(--color-accent)"
            >
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-(--color-text-muted)">
        {project.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {project.technologies.slice(0, 6).map((tech) => (
          <li
            key={tech}
            className="rounded-md border border-(--color-border-strong) px-2 py-0.5 font-mono text-[11px] text-(--color-text-muted)"
          >
            {tech}
          </li>
        ))}
        {project.technologies.length > 6 && (
          <li className="rounded-md px-2 py-0.5 font-mono text-[11px] text-(--color-text-faint)">
            +{project.technologies.length - 6} more
          </li>
        )}
      </ul>

      <Link
        href={`/projects/${project.slug}`}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-(--color-text) transition-colors group-hover:text-(--color-accent)"
      >
        View case study
        <ArrowUpRight
          size={14}
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </Link>
    </motion.article>
  );
}
