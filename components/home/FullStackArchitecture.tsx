"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Network,
  Cpu,
  Database,
  Smartphone,
  ArrowDown,
  Layers,
  Lock,
  Rocket,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

const layers = [
  {
    icon: Globe,
    layer: "Client layer",
    title: "Next.js / React Frontend",
    detail: "UI, forms, dashboards",
    tech: ["Next.js", "React", "TypeScript", "Vercel"],
  },
  {
    icon: Network,
    layer: "API layer",
    title: "REST API",
    detail: "Express.js routes & controllers",
    tech: ["Express.js", "REST", "Postman"],
  },
  {
    icon: Cpu,
    layer: "Logic layer",
    title: "Node.js Business Logic",
    detail: "Validation, workflows",
    tech: ["Node.js", "TypeScript"],
  },
  {
    icon: Database,
    layer: "Data layer",
    title: "MongoDB / Supabase Postgres",
    detail: "Data modeling, RLS & realtime",
    tech: ["MongoDB", "Supabase", "PostgreSQL"],
  },
];

const capabilities = [
  { icon: Layers, title: "UI Development", detail: "Responsive React/Next.js interfaces" },
  { icon: Network, title: "API Development", detail: "REST routes, controllers, middleware" },
  { icon: Database, title: "Database Design", detail: "Schemas, RLS policies & queries" },
  { icon: Lock, title: "Authentication", detail: "Auth flows across web & mobile" },
  { icon: Rocket, title: "Deployment", detail: "Vercel edge + Kubernetes rollouts" },
];

export function FullStackArchitecture() {
  return (
    <section>
      <Container className="py-20 sm:py-24">
        <p className="font-mono-tag text-xs uppercase tracking-widest text-accent mb-4">
          Full-stack architecture
        </p>
        <SectionHeading
          title="Full Stack Developer (MERN + Next.js + Supabase)"
          description="I've shipped frontend, backend, and mobile from one codebase family — Next.js/React UIs, Node/Express APIs, MongoDB/Supabase data, and a React Native Android app on the same backend."
        />

        <div className="rounded-2xl border border-border-soft bg-bg-elevated/50 p-5 sm:p-8">
          <p className="font-mono-tag text-xs text-text-faint mb-6">{"// request flow — top to bottom"}</p>
          <div className="flex flex-col items-stretch max-w-3xl mx-auto">
            {layers.map((l, i) => (
              <div key={l.title}>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-xl border border-border-soft bg-bg-elevated px-5 py-4"
                >
                  <div className="flex items-center gap-3.5 min-w-0 sm:flex-1">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-2/15 text-accent-2">
                      <l.icon size={19} />
                    </span>
                    <div className="min-w-0">
                      <p className="font-mono-tag text-[11px] uppercase tracking-widest text-text-faint">
                        {l.layer}
                      </p>
                      <h3 className="mt-0.5 text-[15px] font-semibold text-text leading-snug">{l.title}</h3>
                      <p className="text-[13px] text-text-muted">{l.detail}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:justify-end">
                    {l.tech.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                </motion.div>
                {i < layers.length - 1 && (
                  <div className="flex justify-center py-1.5 text-text-faint" aria-hidden>
                    <ArrowDown size={16} />
                  </div>
                )}
              </div>
            ))}

            <div className="flex justify-center py-1.5 text-text-faint" aria-hidden>
              <ArrowDown size={16} />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: 0.24 }}
              className="flex items-center gap-3.5 rounded-xl border border-dashed border-accent/40 bg-accent-soft/40 px-5 py-4"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <Smartphone size={19} />
              </span>
              <div>
                <h3 className="text-[15px] font-semibold text-text leading-snug">React Native Android app</h3>
                <p className="text-[13px] text-text-muted">Same Supabase backend — realtime orders on mobile</p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 lg:grid-cols-5 gap-3">
          {capabilities.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.3, delay: (i % 5) * 0.05 }}
              className="rounded-xl border border-border-soft bg-bg-elevated px-4 py-4"
            >
              <c.icon size={17} className="text-accent" />
              <p className="mt-2.5 text-sm font-semibold text-text">{c.title}</p>
              <p className="mt-1 text-xs text-text-muted leading-relaxed">{c.detail}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
