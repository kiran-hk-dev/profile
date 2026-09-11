"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Network,
  Cpu,
  Database,
  ArrowDown,
  ArrowUp,
  Layers,
  Lock,
  Rocket,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

const clients = [
  { icon: Globe, title: "Web client", detail: "Next.js on Vercel", color: "#4f7dd9" },
  { icon: Smartphone, title: "Android app", detail: "React Native · same backend", color: "#159e6a" },
];

const layers = [
  {
    icon: Network,
    layer: "API layer",
    title: "REST API",
    detail: "Express.js routes & controllers",
    tech: ["Express.js", "REST", "Postman"],
    color: "#d97706",
  },
  {
    icon: Cpu,
    layer: "Logic layer",
    title: "Node.js Business Logic",
    detail: "Validation, workflows",
    tech: ["Node.js", "TypeScript"],
    color: "#7c3aed",
  },
  {
    icon: Database,
    layer: "Data layer",
    title: "MongoDB / Supabase Postgres",
    detail: "Data modeling, RLS & realtime",
    tech: ["MongoDB", "Supabase", "PostgreSQL"],
    color: "#0d9488",
  },
];

const capabilities = [
  { icon: Layers, title: "UI Development", detail: "Responsive React/Next.js interfaces" },
  { icon: Network, title: "API Development", detail: "REST routes, controllers, middleware" },
  { icon: Database, title: "Database Design", detail: "Schemas, RLS policies & queries" },
  { icon: Lock, title: "Authentication", detail: "Auth flows across web & mobile" },
  { icon: Rocket, title: "Deployment", detail: "Vercel edge + Kubernetes rollouts" },
];

/** One flow line splitting into two (entry → two clients). */
function Fork() {
  return (
    <div aria-hidden className="text-border">
      <div className="mx-auto h-3 w-px bg-current" />
      <div className="mx-[25%] border-t-2 border-current" />
      <div className="relative h-3">
        <span className="absolute left-1/4 top-0 h-full w-px -translate-x-1/2 bg-current" />
        <span className="absolute left-3/4 top-0 h-full w-px -translate-x-1/2 bg-current" />
      </div>
    </div>
  );
}

/** Two flow lines merging into one (two clients → API). */
function Merge() {
  return (
    <div aria-hidden className="text-border">
      <div className="relative h-3">
        <span className="absolute left-1/4 top-0 h-full w-px -translate-x-1/2 bg-current" />
        <span className="absolute left-3/4 top-0 h-full w-px -translate-x-1/2 bg-current" />
      </div>
      <div className="mx-[25%] border-t-2 border-current" />
      <div className="flex flex-col items-center">
        <div className="h-3 w-px bg-current" />
        <ArrowDown size={15} className="text-accent" />
      </div>
    </div>
  );
}

/** Straight down-connector between stacked layers. */
function FlowDown() {
  return (
    <div aria-hidden className="flex flex-col items-center py-1">
      <div className="h-3 w-px bg-border" />
      <ArrowDown size={15} className="text-accent" />
    </div>
  );
}

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

        <div className="relative rounded-2xl border border-border-soft bg-bg-elevated/50 p-5 sm:p-8">
          {/* Side annotations (desktop) */}
          <div aria-hidden className="absolute left-4 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-2 xl:flex">
            <span className="font-mono-tag text-[11px] uppercase tracking-widest text-text-faint [writing-mode:vertical-lr] rotate-180">
              Request
            </span>
            <ArrowDown size={14} className="text-accent" />
          </div>
          <div aria-hidden className="absolute right-4 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-2 xl:flex">
            <ArrowUp size={14} className="text-accent-2" />
            <span className="font-mono-tag text-[11px] uppercase tracking-widest text-text-faint [writing-mode:vertical-lr]">
              Response
            </span>
          </div>

          <div className="mx-auto max-w-3xl">
            {/* Entry */}
            <div className="flex justify-center">
              <span className="inline-flex items-center rounded-full border border-dashed border-accent/50 bg-accent-soft px-4 py-1.5 font-mono-tag text-xs text-accent">
                User requests
              </span>
            </div>

            <Fork />

            {/* Clients */}
            <div className="grid grid-cols-2 gap-4">
              {clients.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  className="flex items-center gap-3 rounded-xl border border-border-soft bg-bg-elevated px-4 py-3"
                >
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                    style={{
                      color: c.color,
                      backgroundColor: `color-mix(in srgb, ${c.color} 12%, transparent)`,
                    }}
                  >
                    <c.icon size={16} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="truncate text-sm font-semibold text-text">{c.title}</h3>
                    <p className="truncate text-xs text-text-muted">{c.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Merge />

            {/* Layers */}
            {layers.map((l, i) => (
              <div key={l.title}>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  className="flex flex-col gap-4 rounded-xl border border-border-soft bg-bg-elevated px-5 py-4 sm:flex-row sm:items-center"
                >
                  <div className="flex min-w-0 flex-1 items-center gap-3">
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                      style={{
                        color: l.color,
                        backgroundColor: `color-mix(in srgb, ${l.color} 12%, transparent)`,
                      }}
                    >
                      <l.icon size={17} />
                    </span>
                    <div className="min-w-0">
                      <p className="font-mono-tag text-[11px] uppercase tracking-widest text-text-faint">
                        {l.layer}
                      </p>
                      <h3 className="mt-0.5 text-[15px] font-semibold leading-snug text-text">{l.title}</h3>
                      <p className="text-[13px] text-text-muted">{l.detail}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:justify-end">
                    {l.tech.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                </motion.div>
                {i < layers.length - 1 && <FlowDown />}
              </div>
            ))}

            {/* Exit */}
            <div className="flex flex-col items-center pt-1">
              <div className="h-3 w-px bg-border" aria-hidden />
              <ArrowDown size={15} className="text-accent" aria-hidden />
              <span className="mt-2 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent-soft px-4 py-1.5 font-mono-tag text-xs font-medium text-accent">
                <CheckCircle2 size={13} /> Response · realtime updates
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-5">
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
              <p className="mt-1 text-xs leading-relaxed text-text-muted">{c.detail}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
