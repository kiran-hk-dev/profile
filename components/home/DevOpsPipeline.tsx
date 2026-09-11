"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Workflow,
  ShieldCheck,
  Container,
  FileCode2,
  Ship,
  Cloud,
  Activity,
  Timer,
  Gauge,
  CheckCircle2,
} from "lucide-react";
import { Container as PageContainer } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { StageTimeline } from "@/components/ui/StageTimeline";

const stages = [
  { icon: Code2, phase: "Source", title: "Code", detail: "Git · TypeScript", color: "#4f7dd9" },
  { icon: Workflow, phase: "Build", title: "CI/CD", detail: "Jenkins · GitHub Actions · GitLab", color: "#d97706" },
  { icon: ShieldCheck, phase: "Secure", title: "Security Scan", detail: "Trivy image scanning", color: "#e11d48" },
  { icon: Container, phase: "Package", title: "Docker Build → ECR", detail: "Containerize", color: "#0284c7" },
  { icon: FileCode2, phase: "Provision", title: "Terraform", detail: "IaC provision", color: "#7c3aed" },
  { icon: Ship, phase: "Deploy", title: "Kubernetes (EKS) / ArgoCD", detail: "GitOps deploy", color: "#159e6a" },
  { icon: Cloud, phase: "Run", title: "AWS (VPC/ALB/Route 53) · Vercel", detail: "Cloud + edge", color: "#ea580c" },
  { icon: Activity, phase: "Observe", title: "Prometheus / Grafana", detail: "Monitor", color: "#c026d3" },
];

const outcomes = [
  { icon: Timer, metric: "30% faster", label: "deployments via automated pipelines" },
  { icon: Gauge, metric: "99% uptime", label: "production Kubernetes clusters" },
  { icon: CheckCircle2, metric: "Zero critical vulns", label: "shipped — scanned in-pipeline" },
];

export function DevOpsPipeline() {
  return (
    <section className="bg-bg-elevated/30 border-y border-border-soft">
      <PageContainer className="py-20 sm:py-24">
        <p className="font-mono-tag text-xs uppercase tracking-widest text-accent mb-4">
          DevOps · CI/CD · GitOps
        </p>
        <SectionHeading
          title="From Code to Production"
          description="How I take an application from a commit to a monitored, running service — follow the flow top to bottom."
        />

        <div className="rounded-2xl border border-border-soft bg-bg-elevated/50 p-5 sm:p-8">
          <div className="mx-auto max-w-2xl">
            <StageTimeline stages={stages} entry="git push" exit="Live URL · monitored" />
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
          <Button href="/devops" variant="secondary">Explore DevOps Practice</Button>
          <Button href="/projects" variant="ghost">View Projects</Button>
        </div>
      </PageContainer>
    </section>
  );
}
