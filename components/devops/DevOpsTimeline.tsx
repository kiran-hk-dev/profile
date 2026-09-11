"use client";

import {
  Code2,
  GitBranch,
  Workflow,
  FlaskConical,
  ShieldCheck,
  Container,
  FileCode2,
  Ship,
  Cloud,
  Activity,
} from "lucide-react";
import { StageTimeline } from "@/components/ui/StageTimeline";

const stages = [
  { icon: Code2, phase: "Source", title: "Code", detail: "Git · TypeScript", color: "#4f7dd9" },
  { icon: GitBranch, phase: "Source", title: "GitHub / GitLab", detail: "Version control", color: "#64748b" },
  { icon: Workflow, phase: "Build", title: "Jenkins / GitHub Actions", detail: "Build & automate", color: "#d97706" },
  { icon: FlaskConical, phase: "Build", title: "Test", detail: "Validation", color: "#0d9488" },
  { icon: ShieldCheck, phase: "Secure", title: "Security Scan", detail: "Trivy image scanning", color: "#e11d48" },
  { icon: Container, phase: "Package", title: "Docker Build → ECR", detail: "Containerize", color: "#0284c7" },
  { icon: FileCode2, phase: "Provision", title: "Terraform", detail: "IaC provision", color: "#7c3aed" },
  { icon: Ship, phase: "Deploy", title: "Kubernetes (EKS) / ArgoCD", detail: "GitOps deploy", color: "#159e6a" },
  { icon: Cloud, phase: "Run", title: "AWS (VPC/ALB/Route 53) · Vercel Edge", detail: "Cloud infrastructure", color: "#ea580c" },
  { icon: Activity, phase: "Observe", title: "Prometheus / Grafana", detail: "Monitor", color: "#c026d3" },
];

export function DevOpsTimeline() {
  return (
    <StageTimeline
      stages={stages}
      entry="git push"
      exit="Production traffic · Grafana dashboards"
      feedbackTitle="↻ Feedback loop"
      feedbackBody="Alerts and incidents flow back to Code — every outage or slow deploy becomes a pipeline fix, so the loop gets faster and safer over time."
    />
  );
}
