"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface JenkinsStage {
  id: string;
  name: string;
  description: string;
  whatHappens: string;
  commands: string[];
  commonErrors: string[];
  troubleshooting: string;
}

export function JenkinsDiagram({ stages }: { stages: JenkinsStage[] }) {
  const [active, setActive] = useState(stages[0].id);
  const activeStage = stages.find((s) => s.id === active)!;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-3">
        {stages.map((stage, i) => (
          <button
            key={stage.id}
            type="button"
            onClick={() => setActive(stage.id)}
            className={cn(
              "group relative flex items-center gap-2 rounded-lg border px-3.5 py-2.5 text-left transition-colors",
              active === stage.id
                ? "border-accent bg-accent-soft"
                : "border-border bg-bg-elevated hover:border-accent/40"
            )}
          >
            <span
              className={cn(
                "flex h-7 w-7 items-center justify-center rounded-md text-xs font-mono font-bold",
                active === stage.id
                  ? "bg-accent text-[#0b0f14]"
                  : "bg-bg-elevated-2 text-text-muted"
              )}
            >
              {i + 1}
            </span>
            <span
              className={cn(
                "whitespace-nowrap text-xs font-medium",
                active === stage.id ? "text-text" : "text-text-muted"
              )}
            >
              {stage.name}
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeStage.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="rounded-xl border border-border bg-bg-elevated p-6"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-sm text-accent">{activeStage.name}</span>
          </div>
          <p className="text-sm text-text-muted mb-4">{activeStage.description}</p>
          <p className="text-sm text-text-muted mb-4">{activeStage.whatHappens}</p>

          <h4 className="font-display text-sm font-semibold text-text mb-2">Commands:</h4>
          <div className="space-y-1 mb-4">
            {activeStage.commands.map((cmd) => (
              <code key={cmd} className="block rounded-md bg-bg-elevated-2 px-3 py-2 font-mono text-xs text-accent-2">
                {cmd}
              </code>
            ))}
          </div>

          <h4 className="font-display text-sm font-semibold text-text mb-2">Common Errors:</h4>
          <ul className="space-y-1 mb-4">
            {activeStage.commonErrors.map((err) => (
              <li key={err} className="flex items-start gap-2 text-xs text-text-muted">
                <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-red-400" />
                {err}
              </li>
            ))}
          </ul>

          <h4 className="font-display text-sm font-semibold text-text mb-2">Troubleshooting:</h4>
          <p className="text-xs text-text-muted">{activeStage.troubleshooting}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}