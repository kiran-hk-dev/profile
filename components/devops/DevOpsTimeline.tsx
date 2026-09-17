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
  Rocket,
  Cloud,
  Activity,
  Bot,
} from "lucide-react";
import { StageTimeline } from "@/components/ui/StageTimeline";

const stages = [
  { icon: Code2, phase: "Source", title: "Code + AI review", detail: "Git · TypeScript · LLM diff review", color: "#4f7dd9" },
  { icon: GitBranch, phase: "Source", title: "App repo + GitOps repo", detail: "Separated repos — CI never touches prod", color: "#64748b" },
  { icon: Workflow, phase: "Build", title: "Jenkins / GitHub Actions", detail: "Build, test, SBOM", color: "#d97706" },
  { icon: FlaskConical, phase: "Build", title: "Test + policy gate", detail: "Tests · Kyverno/Sonar checks", color: "#0d9488" },
  { icon: ShieldCheck, phase: "Secure", title: "Trivy scan + cosign sign", detail: "Zero critical vulns gate", color: "#e11d48" },
  { icon: Container, phase: "Package", title: "Docker → ECR + tag commit", detail: "CI pushes image, commits tag to GitOps repo", color: "#0284c7" },
  { icon: FileCode2, phase: "Provision", title: "Terraform IaC", detail: "VPC/EKS/ECR/IAM, S3 state", color: "#7c3aed" },
  { icon: Ship, phase: "Sync", title: "ArgoCD auto-sync + self-heal", detail: "App-of-Apps · ApplicationSets · Image Updater", color: "#159e6a" },
  { icon: Rocket, phase: "Release", title: "Argo Rollouts canary", detail: "10→50→100% + Prometheus analysis", color: "#f59e0b" },
  { icon: Cloud, phase: "Run", title: "EKS + ALB / Route 53", detail: "IRSA · External Secrets · autoscaling", color: "#ea580c" },
  { icon: Activity, phase: "Observe", title: "Prometheus / Grafana / Loki", detail: "SLO burn-rate alerts + traces", color: "#c026d3" },
  { icon: Bot, phase: "Augment", title: "AI triage → Slack", detail: "LLM log summary + runbook · k8sgpt", color: "#22c55e" },
];

export function DevOpsTimeline() {
  return (
    <StageTimeline
      stages={stages}
      entry="git push (app repo)"
      exit="Canary prod · SLO-green · AI-watched"
      feedbackTitle="↻ GitOps + AI feedback loop"
      feedbackBody="CI only commits image tags — ArgoCD is the sole deployer. Alerts flow into an LLM enricher (logs + recent deploys + runbook) and back to Code as pipeline fixes, so every incident makes the next deploy safer."
    />
  );
}
