"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface TimelineStage {
  icon: LucideIcon;
  phase: string;
  title: string;
  detail: string;
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
      <div className="relative pb-8 pl-16 md:pl-0 md:text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-accent/50 bg-accent-soft px-4 py-1.5 font-mono-tag text-xs text-accent">
          {entry}
        </span>
      </div>

      <ol className="relative">
        {/* Spine */}
        <div
          aria-hidden
          className="absolute top-0 bottom-0 left-[27px] w-0.5 md:left-1/2 md:-translate-x-1/2 bg-gradient-to-b from-accent/70 via-text-faint/40 to-accent/70"
        />
        {stages.map((s, i) => (
          <li
            key={s.title}
            className="relative pb-8 pl-16 last:pb-0 md:grid md:grid-cols-2 md:gap-20 md:pl-0"
          >
            {/* Node on the spine */}
            <span className="absolute top-0 left-0 z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-bg-elevated md:left-1/2 md:-translate-x-1/2">
              <s.icon size={20} className="text-accent" />
              <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent font-mono-tag text-[11px] font-bold text-bg">
                {i + 1}
              </span>
            </span>
            <div className={i % 2 === 0 ? "md:col-start-1" : "md:col-start-2"}>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: (i % 2) * 0.06 }}
                className="rounded-2xl border border-border-soft bg-bg-elevated p-5 hover:border-accent/40 transition-colors"
              >
                <span className="inline-flex items-center rounded-md border border-border-soft bg-bg-elevated-2 px-2 py-0.5 font-mono-tag text-[11px] uppercase tracking-widest text-text-muted">
                  {s.phase}
                </span>
                <h3 className="mt-3 text-[15px] font-semibold text-text leading-snug">{s.title}</h3>
                <p className="mt-1 text-[13px] text-text-muted leading-relaxed">{s.detail}</p>
              </motion.div>
            </div>
          </li>
        ))}
      </ol>

      {/* Exit terminal */}
      <div className="relative pt-8 pl-16 md:pl-0 md:text-center">
        <span className="absolute top-0 bottom-8 left-[27px] w-0.5 md:left-1/2 md:-translate-x-1/2 bg-gradient-to-b from-accent/70 to-accent" aria-hidden />
        <span className="relative z-10 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent-soft px-4 py-1.5 font-mono-tag text-xs font-medium text-accent">
          <ArrowDown size={13} /> {exit}
        </span>
      </div>

      {/* Feedback loop */}
      {feedbackTitle && (
        <div className="relative pt-8 pl-16 md:flex md:justify-center md:pl-0">
          <div className="max-w-xl rounded-2xl border border-dashed border-accent/50 bg-accent-soft/40 p-5 md:text-center">
            <p className="font-mono-tag text-xs uppercase tracking-widest text-accent">{feedbackTitle}</p>
            {feedbackBody && (
              <p className="mt-2 text-sm text-text-muted leading-relaxed">{feedbackBody}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
