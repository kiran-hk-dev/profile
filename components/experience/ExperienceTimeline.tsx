"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { Badge } from "@/components/ui/Badge";

export function ExperienceTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border-soft" aria-hidden />
      <div className="flex flex-col gap-10">
        {experience.map((item, i) => (
          <motion.div
            key={`${item.company}-${item.start}`}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="relative pl-8"
          >
            <span
              className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2"
              style={{
                borderColor: item.current ? "var(--accent)" : "var(--border)",
                background: item.current ? "var(--accent)" : "var(--bg)",
              }}
              aria-hidden
            />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-base font-medium text-text">{item.role}</h3>
              {item.current && <Badge className="text-accent border-accent/30">Current</Badge>}
            </div>
            <p className="text-sm text-text-muted mt-0.5">
              {item.company} · {item.location}
            </p>
            <p className="font-mono-tag text-xs text-text-faint mt-1">
              {item.start} — {item.end}
            </p>
            <p className="mt-3 text-sm text-text-muted leading-relaxed max-w-2xl">{item.summary}</p>
            {item.highlights.length > 0 && (
              <ul className="mt-3 space-y-1.5">
                {item.highlights.map((h) => (
                  <li key={h} className="text-sm text-text-muted flex gap-2">
                    <span className="text-accent mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
