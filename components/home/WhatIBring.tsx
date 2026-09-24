"use client";

import { motion } from "framer-motion";
import { GitBranch, Rocket, ShieldCheck, Activity } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const items = [
  { icon: GitBranch, title: "Automate releases", body: "Jenkins pipelines across dev, staging and production: test → scan → rolling deploy. Same image everywhere, no manual steps." },
  { icon: Rocket, title: "Release safely", body: "Kubernetes rolling updates with health checks — 100% uptime through peak spikes, one-command rollback when needed." },
  { icon: ShieldCheck, title: "Secure by default", body: "Image scanning + access-control checks in-pipeline, Postman-validated APIs — zero critical vulnerabilities shipped." },
  { icon: Activity, title: "Watch everything", body: "Prometheus/Grafana monitoring and alerting per service — 10% faster incident resolution." },
];

export function WhatIBring() {
  return (
    <section>
      <Container className="py-20 sm:py-24">
        <SectionHeading
          title="What I Bring to a Team"
          description="Automation, safe releases, security checks and real observability — measured in my resume metrics."
        />
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
