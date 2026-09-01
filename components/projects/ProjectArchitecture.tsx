"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

export function ProjectArchitecture({ steps }: { steps: string[] }) {
  return (
    <div className="rounded-xl border border-(--color-border) bg-(--color-surface) p-6">
      <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:flex-wrap sm:items-center">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-2 sm:contents">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="flex-1 rounded-lg border border-(--color-border-strong) bg-(--color-bg-elevated) px-4 py-3 text-center font-mono text-xs text-(--color-text) sm:flex-none"
            >
              {step}
            </motion.div>
            {i < steps.length - 1 && (
              <span className="flex shrink-0 items-center justify-center text-(--color-text-faint) sm:hidden">
                <ArrowDown size={14} />
              </span>
            )}
            {i < steps.length - 1 && (
              <span className="hidden shrink-0 items-center justify-center text-(--color-text-faint) sm:flex">
                <ArrowRight size={14} />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
