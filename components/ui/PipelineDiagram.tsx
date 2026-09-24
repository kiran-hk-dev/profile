"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface PipelineNode {
  label: string;
  detail?: string;
  icon?: React.ReactNode;
}

function ArrowDown() {
  return (
    <svg width="14" height="22" viewBox="0 0 14 22" fill="none" aria-hidden>
      <path
        d="M7 0V16M7 16L1.5 10.5M7 16l5.5-5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="22" height="14" viewBox="0 0 22 14" fill="none" aria-hidden>
      <path
        d="M0 7h16M16 7l-5.5-5.5M16 7l-5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
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
  if (direction === "horizontal") {
    return (
      <div className={cn("w-full", className)}>
        {/* Mobile: vertical stack */}
        <ol className="flex flex-col lg:hidden">
          {nodes.map((node, i) => (
            <li key={`${node.label}-${i}`} className="flex flex-col">
              <PipelineCard node={node} index={i} />
              {i < nodes.length - 1 && (
                <div className="flex justify-center py-2 text-accent/70">
                  <ArrowDown />
                </div>
              )}
            </li>
          ))}
        </ol>

        {/* Desktop: even grid with centered arrows between cards */}
        <ol
          className="hidden lg:grid lg:items-stretch lg:gap-0"
          style={{
            gridTemplateColumns: `repeat(${nodes.length}, minmax(0, 1fr))`,
          }}
        >
          {nodes.map((node, i) => (
            <li
              key={`${node.label}-${i}`}
              className="relative flex items-stretch"
            >
              <div className="flex min-w-0 flex-1">
                <PipelineCard node={node} index={i} className="w-full" />
              </div>
              {i < nodes.length - 1 && (
                <div
                  aria-hidden
                  className="flex w-8 shrink-0 items-center justify-center self-center text-accent/70"
                >
                  <ArrowRight />
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    );
  }

  // Vertical timeline — single centered column, spine + numbered cards
  return (
    <ol className={cn("relative mx-auto w-full max-w-2xl", className)}>
      {/* spine */}
      <div
        aria-hidden
        className="absolute bottom-6 left-[22px] top-6 w-px bg-gradient-to-b from-accent/50 via-border to-accent/50"
      />
      {nodes.map((node, i) => (
        <li key={`${node.label}-${i}`} className="relative flex gap-4 pb-4 last:pb-0">
          <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border-soft bg-bg-elevated text-sm font-semibold text-accent">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="min-w-0 flex-1 pb-1">
            <PipelineCard node={node} index={i} showNumber={false} />
          </div>
        </li>
      ))}
    </ol>
  );
}

function PipelineCard({
  node,
  index,
  showNumber = true,
  className,
}: {
  node: PipelineNode;
  index: number;
  showNumber?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.3) }}
      className={cn(
        "flex min-h-[76px] items-center gap-3 rounded-xl border border-border-soft bg-bg-elevated px-4 py-3.5 transition-colors hover:border-accent/40",
        className
      )}
    >
      {node.icon ? (
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
          {node.icon}
        </span>
      ) : showNumber ? (
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-soft font-mono-tag text-xs font-bold text-accent">
          {String(index + 1).padStart(2, "0")}
        </span>
      ) : null}
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium leading-snug text-text [overflow-wrap:anywhere]">
          {node.label}
        </p>
        {node.detail && (
          <p className="mt-0.5 text-xs leading-snug text-text-faint [overflow-wrap:anywhere]">
            {node.detail}
          </p>
        )}
      </div>
    </motion.div>
  );
}
