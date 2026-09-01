"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, CircleDashed, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

const LINES = [
  { prompt: "kiran@ops ~", cmd: "kubectl apply -f deployment.yaml" },
  { prompt: "kiran@ops ~", cmd: "helm upgrade api ./charts/api --wait" },
  { prompt: "kiran@ops ~", cmd: "argocd app sync production-api" },
];

const STAGES = [
  "Build image",
  "Trivy scan",
  "Push to registry",
  "Helm release",
  "ArgoCD sync",
];

function useTypewriter(lines: typeof LINES) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    const current = lines[lineIndex].cmd;

    if (charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 28);
      return () => clearTimeout(t);
    }

    const pause = setTimeout(() => {
      if (lineIndex < lines.length - 1) {
        setLineIndex((i) => i + 1);
        setCharIndex(0);
      } else {
        setDone(true);
      }
    }, 650);
    return () => clearTimeout(pause);
  }, [charIndex, lineIndex, lines, done]);

  return { lineIndex, charIndex, done };
}

export function TerminalVisual() {
  const { lineIndex, charIndex, done } = useTypewriter(LINES);
  const [stageProgress, setStageProgress] = useState(0);

  useEffect(() => {
    if (!done) return;
    if (stageProgress >= STAGES.length) return;
    const t = setTimeout(() => setStageProgress((s) => s + 1), 420);
    return () => clearTimeout(t);
  }, [done, stageProgress]);

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-(--color-violet) opacity-20 blur-[70px]" />
      <div className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-(--color-cyan) opacity-20 blur-[70px]" />

      <div className="relative overflow-hidden rounded-xl border border-(--color-border-strong) bg-(--color-bg-elevated) shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]">
        <div className="flex items-center gap-1.5 border-b border-(--color-border) px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-(--color-rose)" />
          <span className="h-2.5 w-2.5 rounded-full bg-(--color-amber)" />
          <span className="h-2.5 w-2.5 rounded-full bg-(--color-cyan)" />
          <span className="ml-3 font-mono text-xs text-(--color-text-faint)">
            deploy.sh — production
          </span>
        </div>

        <div className="min-h-[168px] px-4 py-4 font-mono text-[13px] leading-6">
          {LINES.slice(0, lineIndex + (charIndex > 0 || done ? 1 : 0)).map(
            (line, i) => {
              const isCurrent = i === lineIndex && !done;
              const text = isCurrent ? line.cmd.slice(0, charIndex) : line.cmd;
              return (
                <div key={i} className="flex gap-2">
                  <span className="shrink-0 text-(--color-cyan)">
                    {line.prompt}
                    <span className="text-(--color-text-faint)"> $</span>
                  </span>
                  <span className="text-(--color-text)">
                    {text}
                    {isCurrent && (
                      <span className="ml-0.5 inline-block h-3.5 w-[7px] translate-y-0.5 animate-blink bg-(--color-accent)" />
                    )}
                  </span>
                </div>
              );
            }
          )}
        </div>

        <div className="border-t border-(--color-border) px-4 py-4">
          <ul className="space-y-2">
            {STAGES.map((stage, i) => {
              const state =
                i < stageProgress ? "done" : i === stageProgress ? "active" : "pending";
              return (
                <li key={stage} className="flex items-center gap-2.5">
                  <AnimatePresence mode="wait" initial={false}>
                    {state === "done" ? (
                      <motion.span
                        key="done"
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                      >
                        <CheckCircle2 size={14} className="text-(--color-cyan)" />
                      </motion.span>
                    ) : state === "active" ? (
                      <Loader2
                        size={14}
                        className="animate-spin text-(--color-accent)"
                      />
                    ) : (
                      <CircleDashed size={14} className="text-(--color-text-faint)" />
                    )}
                  </AnimatePresence>
                  <span
                    className={
                      state === "pending"
                        ? "font-mono text-xs text-(--color-text-faint)"
                        : "font-mono text-xs text-(--color-text-muted)"
                    }
                  >
                    {stage}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
