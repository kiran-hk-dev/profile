"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface TimelineStage {
  icon: LucideIcon;
  phase: string;
  title: string;
  detail: string;
  /** Hex accent for this stage, e.g. "#38bdf8" */
  color: string;
}

export function StageTimeline({
  stages,
  entry,
  exit,
  feedbackTitle,
  feedbackBody,
}: {
  stages: TimelineStage[];
  entry: string;
  exit: string;
  feedbackTitle?: string;
  feedbackBody?: string;
}) {
  return (
    <div>
      {/* Entry terminal */}
      <div className="relative pb-6 pl-14 md:pl-0 md:text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-accent/50 bg-accent-soft px-3.5 py-1 font-mono-tag text-[11px] text-accent">
          {entry}
        </span>
      </div>

      <ol className="relative">
        {/* Spine */}
        <div
          aria-hidden
          className="absolute top-0 bottom-0 left-[21px] w-0.5 md:left-1/2 md:-translate-x-1/2 bg-gradient-to-b from-accent/70 via-text-faint/40 to-accent/70"
        />
        {stages.map((s, i) => {
          const tint = `color-mix(in srgb, ${s.color} 12%, transparent)`;
          const edge = `color-mix(in srgb, ${s.color} 40%, transparent)`;
          return (
            <li
              key={s.title}
              className="relative pb-6 pl-14 last:pb-0 md:grid md:grid-cols-2 md:gap-20 md:pl-0"
            >
              {/* Node on the spine */}
              <span
                className="absolute top-0 left-0 z-10 flex h-11 w-11 items-center justify-center rounded-xl border bg-bg-elevated md:left-1/2 md:-translate-x-1/2"
                style={{ borderColor: edge }}
              >
                <s.icon size={17} style={{ color: s.color }} />
                <span
                  className="absolute -top-2 -right-2 flex h-5 min-w-5 items-center justify-center rounded-full border px-1 font-mono-tag text-[10px] font-bold"
                  style={{ color: s.color, backgroundColor: tint, borderColor: edge }}
                >
                  {i + 1}
                </span>
              </span>
              <div className={i % 2 === 0 ? "md:col-start-1" : "md:col-start-2"}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.3, delay: (i % 2) * 0.06 }}
                  className="rounded-xl border bg-bg-elevated p-4"
                  style={{ borderColor: edge }}
                >
                  <span className="inline-flex items-center rounded-md border border-border-soft bg-bg-elevated-2 px-2 py-0.5 font-mono-tag text-[10px] uppercase tracking-widest text-text-muted">
                    {s.phase}
                  </span>
                  <h3 className="mt-2 text-sm font-semibold text-text leading-snug">{s.title}</h3>
                  <p className="mt-0.5 text-xs text-text-muted leading-snug">{s.detail}</p>
                </motion.div>
              </div>
            </li>
          );
        })}
      </ol>

      {/* Exit terminal */}
      <div className="relative pt-6 pl-14 md:pl-0 md:text-center">
        <span className="absolute top-0 bottom-6 left-[21px] w-0.5 md:left-1/2 md:-translate-x-1/2 bg-gradient-to-b from-accent/70 to-accent" aria-hidden />
        <span className="relative z-10 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent-soft px-3.5 py-1 font-mono-tag text-[11px] font-medium text-accent">
          <ArrowDown size={12} /> {exit}
        </span>
      </div>

      {/* Feedback loop */}
      {feedbackTitle && (
        <div className="relative pt-6 pl-14 md:flex md:justify-center md:pl-0">
          <div className="max-w-xl rounded-xl border border-dashed border-accent/50 bg-accent-soft/40 p-4 md:text-center">
            <p className="font-mono-tag text-[11px] uppercase tracking-widest text-accent">{feedbackTitle}</p>
            {feedbackBody && (
              <p className="mt-1.5 text-[13px] text-text-muted leading-relaxed">{feedbackBody}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
