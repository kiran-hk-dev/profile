"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check, ChevronRight } from "lucide-react";

interface Step {
  title: string;
  explanation: string;
  commands: string[];
  expectedOutput?: string;
  diagram?: string;
}

interface Project {
  title: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Senior";
  technologies: string[];
  architecture: string[];
  steps: Step[];
}

const difficultyColors: Record<Project["difficulty"], string> = {
  Beginner: "border-green-500/30 text-green-400",
  Intermediate: "border-yellow-500/30 text-yellow-400",
  Advanced: "border-orange-500/30 text-orange-400",
  Senior: "border-red-500/30 text-red-400",
};

export function ProjectWalkthroughCard({ project }: { project: Project }) {
  const [expandedStep, setExpandedStep] = useState<number | null>(0);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());

  const toggleStep = (i: number) => {
    setExpandedStep(expandedStep === i ? null : i);
  };

  const markComplete = (i: number) => {
    setCompletedSteps((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  const progress = (completedSteps.size / project.steps.length) * 100;

  return (
    <div className="rounded-xl border border-border bg-bg-elevated overflow-hidden">
      {/* Header */}
      <div className="border-b border-border-soft p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className={cn("rounded-full border px-3 py-1 text-xs font-semibold font-mono-tag", difficultyColors[project.difficulty])}>
            {project.difficulty}
          </span>
          <span className="text-xs text-text-faint">{completedSteps.size}/{project.steps.length} steps</span>
        </div>
        <h3 className="font-display text-xl font-semibold text-text mb-2">{project.title}</h3>
        <p className="text-sm text-text-muted">{project.description}</p>

        {/* Progress bar */}
        <div className="mt-4 h-2 rounded-full bg-bg-elevated-2 overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-md border border-border bg-bg-elevated-2 px-2 py-0.5 font-mono text-[10px] text-text-muted">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Architecture flow */}
      <div className="border-b border-border-soft p-6">
        <h4 className="font-display text-sm font-semibold text-text mb-3">Architecture Flow</h4>
        <div className="flex flex-wrap items-center gap-2">
          {project.architecture.map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <span className="rounded-md border border-border bg-bg-elevated-2 px-3 py-1.5 font-mono text-xs text-text">
                {step}
              </span>
              {i < project.architecture.length - 1 && (
                <ChevronRight size={12} className="text-text-faint" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Steps */}
      <div className="p-6">
        <h4 className="font-display text-sm font-semibold text-text mb-4">Step-by-Step Implementation</h4>
        <div className="space-y-3">
          {project.steps.map((step, i) => (
            <div
              key={i}
              className={cn(
                "rounded-lg border transition-colors",
                expandedStep === i
                  ? "border-accent bg-bg-elevated-2"
                  : "border-border bg-bg",
                completedSteps.has(i) && "border-green-500/30"
              )}
            >
              <button
                onClick={() => toggleStep(i)}
                className="w-full flex items-center gap-3 p-4 text-left"
              >
                <button
                  onClick={(e) => { e.stopPropagation(); markComplete(i); }}
                  className={cn(
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-colors",
                    completedSteps.has(i)
                      ? "border-green-500 bg-green-500 text-white"
                      : "border-border-strong hover:border-accent"
                  )}
                >
                  {completedSteps.has(i) && <Check size={12} />}
                </button>
                <span className="font-mono text-xs text-accent">{i + 1}.</span>
                <span className={cn(
                  "text-sm font-medium",
                  completedSteps.has(i) ? "text-text-faint line-through" : "text-text"
                )}>
                  {step.title}
                </span>
                <ChevronRight
                  size={14}
                  className={cn(
                    "ml-auto text-text-faint transition-transform",
                    expandedStep === i && "rotate-90"
                  )}
                />
              </button>

              <AnimatePresence>
                {expandedStep === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 ml-9">
                      <p className="text-sm text-text-muted mb-3">{step.explanation}</p>

                      {step.commands.length > 0 && (
                        <div className="space-y-1 mb-3">
                          {step.commands.map((cmd) => (
                            <code key={cmd} className="block rounded-md bg-bg px-3 py-2 font-mono text-xs text-accent-2">
                              {cmd}
                            </code>
                          ))}
                        </div>
                      )}

                      {step.expectedOutput && (
                        <div className="rounded-md bg-bg p-3">
                          <span className="text-[10px] font-semibold text-text-faint font-mono-tag uppercase">Expected Output</span>
                          <pre className="mt-1 font-mono text-xs text-text-muted whitespace-pre-wrap">{step.expectedOutput}</pre>
                        </div>
                      )}

                      {step.diagram && (
                        <div className="mt-3 rounded-md bg-bg p-3">
                          <span className="text-[10px] font-semibold text-text-faint font-mono-tag uppercase">Code / Config</span>
                          <pre className="mt-1 font-mono text-xs text-accent-2 whitespace-pre-wrap">{step.diagram}</pre>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}