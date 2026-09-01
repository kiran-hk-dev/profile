"use client";

import { experience } from "@/data/experience";
import { motion } from "framer-motion";

export function ExperienceTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-[15px] top-2 bottom-2 w-px bg-(--color-border)" />

      <div className="flex flex-col gap-14">
        {experience.map((entry, entryIndex) => (
          <div key={entryIndex} className="relative pl-11">
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-(--color-accent) bg-(--color-bg-elevated)"
            >
              <span className="h-2 w-2 rounded-full bg-(--color-accent)" />
            </motion.span>

            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-display text-xl font-semibold text-(--color-text)">
                {entry.role}
              </h3>
              <span className="font-mono text-xs text-(--color-cyan)">
                {entry.duration}
              </span>
            </div>
            <p className="mt-2 max-w-2xl text-sm text-(--color-text-muted)">
              {entry.summary}
            </p>

            <ul className="mt-6 flex flex-col gap-3">
              {entry.responsibilities.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                  className="flex flex-col gap-2 rounded-lg border border-(--color-border) bg-(--color-surface) px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="text-sm text-(--color-text)">{item.text}</span>
                  <span className="flex flex-wrap gap-1.5">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-(--color-border-strong) px-2 py-0.5 font-mono text-[11px] text-(--color-text-muted)"
                      >
                        {t}
                      </span>
                    ))}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
