"use client";

import { motion } from "framer-motion";
import { GitBranch, Rocket, ShieldCheck, Bot } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const items = [
  { icon: GitBranch, title: "Automate (GitOps)", body: "App repo → CI → GitOps tag commit → ArgoCD auto-sync + self-heal across dev/staging/prod. No manual kubectl to production." },
  { icon: Rocket, title: "Release Safely", body: "Argo Rollouts canaries gated by Prometheus SLOs with auto-rollback, sync waves/hooks, and one-click ArgoCD rollback." },
  { icon: ShieldCheck, title: "Secure by Default", body: "Trivy + cosign-signed images, Kyverno policies, External Secrets — zero critical vulnerabilities shipped." },
  { icon: Bot, title: "Operate with AI", body: "Every alert arrives in Slack with an LLM log summary, probable cause, and runbook link; k8sgpt triages in-cluster." },
];

export function WhatIBring() {
  return (
    <section>
      <Container className="py-20 sm:py-24">
        <SectionHeading
          title="What I Bring to a DevOps Team"
          description="The hiring loop in one row: GitOps automation, safe releases, security gates, and AI-augmented on-call."
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
