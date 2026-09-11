"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Workflow,
  ShieldCheck,
  Container,
  FileCode2,
  Rocket,
  Cloud,
  Activity,
  Timer,
  Gauge,
  CheckCircle2,
} from "lucide-react";
import { Container as PageContainer } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const stages = [
  { icon: Code2, title: "Code", detail: "Git · TypeScript" },
  { icon: Workflow, title: "CI/CD", detail: "Jenkins · GitHub Actions · GitLab" },
  { icon: ShieldCheck, title: "Security Scan", detail: "Trivy image scanning" },
  { icon: Container, title: "Docker Build → ECR", detail: "Containerize" },
  { icon: FileCode2, title: "Terraform", detail: "IaC provision" },
  { icon: Rocket, title: "Kubernetes (EKS) / ArgoCD", detail: "GitOps deploy" },
  { icon: Cloud, title: "AWS (VPC/ALB/Route 53) · Vercel", detail: "Cloud + edge" },
  { icon: Activity, title: "Prometheus / Grafana", detail: "Monitor" },
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
          description="How I take an application from a commit to a monitored, running service — every stage automated, scanned, and observable."
        />

        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stages.map((stage, i) => (
            <motion.li
              key={stage.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: (i % 4) * 0.07 }}
              className="relative rounded-2xl border border-border-soft bg-bg-elevated p-5 hover:border-accent/40 transition-colors"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <stage.icon size={19} />
                </span>
                <span className="font-mono-tag text-xs text-text-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-4 text-[15px] font-semibold text-text leading-snug">{stage.title}</h3>
              <p className="mt-1 text-[13px] text-text-muted leading-relaxed">{stage.detail}</p>
            </motion.li>
          ))}
        </ol>

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
