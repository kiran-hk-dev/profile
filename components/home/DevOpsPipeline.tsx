"use client";

import { pipelineStages } from "@/data/projects";
import { motion } from "framer-motion";
import {
  Activity,
  Boxes,
  Cloud,
  Container as ContainerIcon,
  FlaskConical,
  GitCommitHorizontal,
  LucideIcon,
  Package,
  RefreshCw,
  ShieldCheck,
  Ship,
  User,
  Workflow,
} from "lucide-react";
import { useState } from "react";
import { GithubIcon } from "../icons/GithubIcon";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

type IconComponent = LucideIcon | typeof GithubIcon;

const icons: Record<string, IconComponent> = {
  User,
  GitCommitHorizontal,
  Github: GithubIcon,
  Workflow,
  FlaskConical,
  ShieldCheck,
  Package,
  Container: ContainerIcon,
  Ship,
  Boxes,
  RefreshCw,
  Cloud,
  Activity,
};

export function DevOpsPipeline() {
  const [active, setActive] = useState(pipelineStages[0].id);
  const activeStage = pipelineStages.find((s) => s.id === active)!;

  return (
    <section id="devops" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          index="05"
          title="How I build & deploy"
          description="A change moves through this path from commit to a monitored, running service. Hover or tap a stage to see what happens there."
        />

        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-3">
            {pipelineStages.map((stage, i) => {
              const Icon = icons[stage.icon] ?? Workflow;
              const isActive = stage.id === active;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onMouseEnter={() => setActive(stage.id)}
                  onFocus={() => setActive(stage.id)}
                  onClick={() => setActive(stage.id)}
                  className={`group relative flex items-center gap-2 rounded-lg border px-3.5 py-2.5 text-left transition-colors ${
                    isActive
                      ? "border-(--color-accent) bg-(--color-accent-soft)"
                      : "border-(--color-border) bg-(--color-surface) hover:border-(--color-border-strong)"
                  }`}
                >
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-md ${
                      isActive
                        ? "bg-(--color-accent) text-white"
                        : "bg-(--color-bg-elevated) text-(--color-text-muted)"
                    }`}
                  >
                    <Icon size={13} />
                  </span>
                  <span
                    className={`whitespace-nowrap text-xs font-medium ${
                      isActive ? "text-(--color-text)" : "text-(--color-text-muted)"
                    }`}
                  >
                    {stage.label}
                  </span>
                  {i < pipelineStages.length - 1 && (
                    <span
                      className="absolute top-1/2 -right-2 hidden h-px w-2 -translate-y-1/2 bg-(--color-border-strong) lg:block"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </div>

          <motion.div
            key={activeStage.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="rounded-xl border border-(--color-border) bg-(--color-surface) p-6"
          >
            <p className="font-mono text-xs text-(--color-accent)">
              {activeStage.label}
            </p>
            <p className="mt-2 max-w-xl text-sm text-(--color-text-muted)">
              {activeStage.description}
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
