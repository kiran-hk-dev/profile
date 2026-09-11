"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Terminal, Globe } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface FlowStage {
  icon: LucideIcon;
  title: string;
  detail: string;
}

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

/** U-turn connector carrying the flow from the end of one row back to the start of the next. */
function ElbowReturn() {
  return (
    <div aria-hidden className="hidden lg:block py-1">
      <svg viewBox="0 0 100 24" preserveAspectRatio="none" className="h-6 w-full text-text-faint">
        <path
          d="M 87.5 0.5 V 12 H 12.5 V 21"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          vectorEffect="non-scaling-stroke"
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: (index % 4) * 0.07 }}
      className="h-full rounded-2xl border border-border-soft bg-bg-elevated p-5 hover:border-accent/40 transition-colors"
    >
      <div className="flex items-start justify-between gap-2">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
          <stage.icon size={19} />
        </span>
        <span className="font-mono-tag text-xs text-text-faint">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3 className="mt-4 text-[15px] font-semibold text-text leading-snug">{stage.title}</h3>
      <p className="mt-1 text-[13px] text-text-muted leading-relaxed">{stage.detail}</p>
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
      <div className="mb-3 flex justify-center lg:grid lg:grid-cols-4 lg:gap-3">
        <div className="flex flex-col items-center gap-1.5">
          <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-accent/50 bg-accent-soft px-4 py-1.5 font-mono-tag text-xs text-accent">
            <Terminal size={13} /> {entry}
          </span>
          <ArrowDown size={15} className="text-accent" />
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
                    <div className="flex items-center px-1.5 text-accent" aria-hidden>
                      <ArrowRight size={18} />
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
              <div className="flex justify-center py-1.5 text-accent" aria-hidden>
                <ArrowDown size={16} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Exit terminal */}
      <div className="mt-3 flex justify-center lg:grid lg:grid-cols-4 lg:gap-3">
        <div className="flex flex-col items-center gap-1.5 lg:col-start-4">
          <ArrowDown size={15} className="text-accent" />
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent-soft px-4 py-1.5 font-mono-tag text-xs font-medium text-accent">
            <Globe size={13} /> {exit}
          </span>
        </div>
      </div>
    </div>
  );
}
