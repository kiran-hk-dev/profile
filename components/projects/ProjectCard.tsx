"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types";
import { Badge } from "@/components/ui/Badge";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const techFlat = Object.values(project.technologies).flat().slice(0, 6);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group block rounded-2xl border border-border-soft bg-bg-elevated p-6 sm:p-7 hover:border-accent/40 transition-colors h-full"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-baseline gap-2 flex-wrap">
              <h3 className="font-display text-xl text-text">{project.title}</h3>
              {project.subtitle && <span className="font-mono-tag text-sm text-accent">/ {project.subtitle}</span>}
            </div>
            <p className="text-xs text-text-faint font-mono-tag mt-1">{project.category}</p>
          </div>
          <ArrowUpRight size={18} className="text-text-faint group-hover:text-accent transition-colors shrink-0" />
        </div>

        <p className="mt-4 text-sm text-text-muted leading-relaxed">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {techFlat.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>

        {project.kpis.length > 0 && (
          <div className="mt-5 pt-5 border-t border-border-soft flex flex-col gap-1.5">
            {project.kpis.map((kpi) => (
              <p key={kpi} className="text-xs text-accent flex gap-2">
                <span>▲</span> {kpi}
              </p>
            ))}
          </div>
        )}
      </Link>
    </motion.div>
  );
}
