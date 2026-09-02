"use client";

import { motion } from "framer-motion";
import { Hammer, Plug, Rocket, Gauge } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const items = [
  { icon: Hammer, title: "Build", body: "I build frontend interfaces, backend APIs, and the business logic that connects them." },
  { icon: Plug, title: "Integrate", body: "I connect web applications to backend services and databases with well-designed REST APIs." },
  { icon: Rocket, title: "Deploy", body: "I containerize applications and deploy them to Kubernetes on cloud infrastructure." },
  { icon: Gauge, title: "Operate", body: "I automate deployments, monitor production systems, and resolve issues quickly." },
];

export function WhatIBring() {
  return (
    <section>
      <Container className="py-20 sm:py-24">
        <SectionHeading title="What I Bring" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="rounded-xl border border-border-soft bg-bg-elevated p-6"
            >
              <it.icon size={20} className="text-accent" />
              <h3 className="mt-3 font-display text-lg text-text">{it.title}</h3>
              <p className="mt-2 text-sm text-text-muted leading-relaxed">{it.body}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
