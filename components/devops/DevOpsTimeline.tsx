"use client";

import {
  Code2,
  GitBranch,
  Workflow,
  FlaskConical,
  ShieldCheck,
  Container,
  FileCode2,
  Rocket,
  Cloud,
  Activity,
} from "lucide-react";
import { StageTimeline } from "@/components/ui/StageTimeline";

const stages = [
  { icon: Code2, phase: "Source", title: "Code", detail: "Git · TypeScript" },
  { icon: GitBranch, phase: "Source", title: "GitHub / GitLab", detail: "Version control" },
  { icon: Workflow, phase: "Build", title: "Jenkins / GitHub Actions", detail: "Build & automate" },
  { icon: FlaskConical, phase: "Build", title: "Test", detail: "Validation" },
  { icon: ShieldCheck, phase: "Secure", title: "Security Scan", detail: "Trivy image scanning" },
  { icon: Container, phase: "Package", title: "Docker Build → ECR", detail: "Containerize" },
  { icon: FileCode2, phase: "Provision", title: "Terraform", detail: "IaC provision" },
  { icon: Rocket, phase: "Deploy", title: "Kubernetes (EKS) / ArgoCD", detail: "GitOps deploy" },
  { icon: Cloud, phase: "Run", title: "AWS (VPC/ALB/Route 53) · Vercel Edge", detail: "Cloud infrastructure" },
  { icon: Activity, phase: "Observe", title: "Prometheus / Grafana", detail: "Monitor" },
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
