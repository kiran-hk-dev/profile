"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface PipelineNode {
  label: string;
  detail?: string;
  icon?: React.ReactNode;
}

export function PipelineDiagram({
  nodes,
  direction = "vertical",
  className,
}: {
  nodes: PipelineNode[];
  direction?: "vertical" | "horizontal";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex gap-0",
        direction === "vertical" ? "flex-col" : "flex-col lg:flex-row lg:items-stretch",
        className
      )}
    >
      {nodes.map((node, i) => (
        <div key={node.label} className={cn("flex", direction === "vertical" ? "flex-col" : "flex-col lg:flex-1")}>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
            className="group relative rounded-xl border border-border-soft bg-bg-elevated px-4 py-3.5 hover:border-accent/40 transition-colors"
          >
            <div className="flex items-center gap-2.5">
              {node.icon && (
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent">
                  {node.icon}
                </span>
              )}
              <div className="min-w-0">
                <p className="text-sm font-medium text-text truncate">{node.label}</p>
                {node.detail && <p className="text-xs text-text-faint mt-0.5">{node.detail}</p>}
              </div>
            </div>
          </motion.div>
          {i < nodes.length - 1 && (
            <div
              className={cn(
                "flex items-center justify-center text-text-faint",
                direction === "vertical" ? "h-6" : "h-6 lg:h-auto lg:w-6 lg:self-center"
              )}
            >
              {direction === "vertical" ? (
                <svg width="14" height="24" viewBox="0 0 14 24" fill="none">
                  <path d="M7 0V18M7 18L1 12M7 18L13 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg width="24" height="14" viewBox="0 0 24 14" fill="none" className="hidden lg:block">
                  <path d="M0 7H18M18 7L12 1M18 7L12 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
              {direction === "horizontal" && (
                <svg width="14" height="24" viewBox="0 0 14 24" fill="none" className="lg:hidden">
                  <path d="M7 0V18M7 18L1 12M7 18L13 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
