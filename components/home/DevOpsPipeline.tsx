"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Workflow,
  ShieldCheck,
  Container,
  FileCode2,
  Ship,
  Rocket,
  Cloud,
  Activity,
  Bot,
  Timer,
  Gauge,
  CheckCircle2,
} from "lucide-react";
import { Container as PageContainer } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { StageTimeline } from "@/components/ui/StageTimeline";

const stages = [
  { icon: Code2, phase: "Source", title: "Code + AI review", detail: "Git · LLM diff check", color: "#4f7dd9" },
  { icon: Workflow, phase: "Build", title: "CI: Jenkins / GH Actions", detail: "Test · SBOM", color: "#d97706" },
  { icon: ShieldCheck, phase: "Secure", title: "Trivy + cosign + Kyverno", detail: "Policy-gated", color: "#e11d48" },
  { icon: Container, phase: "Package", title: "Docker → ECR + tag commit", detail: "CI commits to GitOps repo", color: "#0284c7" },
  { icon: FileCode2, phase: "Provision", title: "Terraform", detail: "VPC/EKS/IAM", color: "#7c3aed" },
  { icon: Ship, phase: "Sync", title: "ArgoCD auto-sync + self-heal", detail: "App-of-Apps · Image Updater", color: "#159e6a" },
  { icon: Rocket, phase: "Release", title: "Rollouts canary", detail: "Prometheus-gated", color: "#f59e0b" },
  { icon: Cloud, phase: "Run", title: "EKS + ALB / Route 53", detail: "Autoscaled", color: "#ea580c" },
  { icon: Activity, phase: "Observe", title: "Prometheus / Grafana / Loki", detail: "SLO alerts", color: "#c026d3" },
  { icon: Bot, phase: "Augment", title: "AI triage → Slack", detail: "Logs + runbook", color: "#22c55e" },
];

const outcomes = [
  { icon: Timer, metric: "30% faster", label: "deploys via CI → GitOps automation" },
  { icon: Gauge, metric: "99% uptime", label: "EKS + canary rollouts + self-heal" },
  { icon: CheckCircle2, metric: "Zero critical vulns", label: "Trivy + signed images + policy gates" },
];

export function DevOpsPipeline() {
  return (
    <section className="bg-bg-elevated/30 border-y border-border-soft">
      <PageContainer className="py-20 sm:py-24">
        <p className="font-mono-tag text-xs uppercase tracking-widest text-accent mb-4">
          DevOps · GitOps (ArgoCD) · AIOps
        </p>
        <SectionHeading
          title="From git push to Self-Healing Production"
          description="CI builds and scans — ArgoCD deploys. App repo commits become ECR images, image tags become GitOps commits, and ArgoCD syncs dev → staging → prod with canaries and AI-watched SLOs."
        />

        <div className="rounded-2xl border border-border-soft bg-bg-elevated/50 p-5 sm:p-8">
          <div className="mx-auto max-w-2xl">
            <StageTimeline stages={stages} entry="git push (app repo)" exit="Canary prod · monitored · AI-watched" />
          </div>
        </div>

        <div className="mt-6 grid sm:grid-cols-3 gap-4">
          {outcomes.map((o, i) => (
            <motion.div
              key={o.metric}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              className="flex items-center gap-3.5 rounded-2xl border border-accent/25 bg-accent-soft/50 px-5 py-4"
            >
              <o.icon size={20} className="text-accent shrink-0" />
              <p className="text-sm leading-snug text-text-muted">
                <span className="font-semibold text-text">{o.metric}</span> — {o.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/devops" variant="secondary">Explore ArgoCD + AI Practice</Button>
          <Button href="/projects" variant="ghost">View GitOps Projects</Button>
        </div>
      </PageContainer>
    </section>
  );
}
