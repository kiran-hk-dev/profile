"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Terminal, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface FlowStage {
  icon: LucideIcon;
  title: string;
  detail: string;
  /** Hex accent for this stage, e.g. "#38bdf8" */
  color: string;
}

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

/** U-turn connector carrying the flow from the end of one row back to the start of the next. */
function ElbowReturn() {
  return (
    <div aria-hidden className="hidden lg:block py-0.5">
      <svg viewBox="0 0 100 24" preserveAspectRatio="none" className="h-5 w-full text-accent/70">
        <path
          d="M 87.5 0.5 V 12 H 12.5 V 21"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeDasharray="5 4"
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
        />
        <path
          d="M 8 17 L 12.5 22.5 L 17 17"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}

function StageCard({ stage, index }: { stage: FlowStage; index: number }) {
  const tint = `color-mix(in srgb, ${stage.color} 12%, transparent)`;
  const edge = `color-mix(in srgb, ${stage.color} 35%, transparent)`;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.3, delay: (index % 4) * 0.06 }}
      className="h-full rounded-xl border bg-bg-elevated p-3.5"
      style={{ borderColor: edge }}
    >
      <div className="flex items-center justify-between gap-2">
        <span
          className="flex h-8 w-8 items-center justify-center rounded-lg"
          style={{ color: stage.color, backgroundColor: tint }}
        >
          <stage.icon size={16} />
        </span>
        <span className="font-mono-tag text-[11px] font-semibold" style={{ color: stage.color }}>
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="mt-2.5 text-[13px] font-semibold text-text leading-snug">{stage.title}</h3>
      <p className="mt-0.5 text-xs text-text-muted leading-snug">{stage.detail}</p>
    </motion.div>
  );
}

export function PipelineFlow({
  stages,
  entry,
  exit,
  perRow = 4,
}: {
  stages: FlowStage[];
  entry: string;
  exit: string;
  perRow?: number;
}) {
  const rows = chunk(stages, perRow);

  return (
    <div>
      {/* Entry terminal */}
      <div className="mb-2 flex justify-center lg:grid lg:grid-cols-4 lg:gap-3">
        <div className="flex flex-col items-center gap-1">
          <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-accent/50 bg-accent-soft px-3.5 py-1 font-mono-tag text-[11px] text-accent">
            <Terminal size={12} /> {entry}
          </span>
          <ArrowDown size={14} className="text-accent" />
        </div>
      </div>

      {/* Desktop: horizontal flow rows joined by U-turns */}
      <div className="hidden lg:block">
        {rows.map((row, ri) => (
          <div key={ri}>
            <div
              className="grid items-stretch"
              style={{ gridTemplateColumns: row.map(() => "1fr").join(" auto ") }}
            >
              {row.map((s, j) => (
                <Fragment key={s.title}>
                  <StageCard stage={s} index={ri * perRow + j} />
                  {j < row.length - 1 && (
                    <div className="flex items-center px-1 text-accent" aria-hidden>
                      <ArrowRight size={15} />
                    </div>
                  )}
                </Fragment>
              ))}
            </div>
            {ri < rows.length - 1 && <ElbowReturn />}
          </div>
        ))}
      </div>

      {/* Mobile/tablet: vertical flow */}
      <div className="lg:hidden flex flex-col items-stretch">
        {stages.map((s, i) => (
          <div key={s.title}>
            <StageCard stage={s} index={i} />
            {i < stages.length - 1 && (
              <div className="flex justify-center py-1 text-accent" aria-hidden>
                <ArrowDown size={15} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Exit terminal */}
      <div className="mt-2 flex justify-center lg:grid lg:grid-cols-4 lg:gap-3">
        <div className="flex flex-col items-center gap-1 lg:col-start-4">
          <ArrowDown size={14} className="text-accent" />
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent-soft px-3.5 py-1 font-mono-tag text-[11px] font-medium text-accent">
            <Globe size={12} /> {exit}
          </span>
        </div>
      </div>
    </div>
  );
}
