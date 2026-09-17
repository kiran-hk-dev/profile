import { Profile } from "@/types";

export const profile: Profile = {
  name: "Kiran H K",
  title: "DevOps Engineer · GitOps (ArgoCD) · AI-Augmented Platform",
  experience: "5+ Years",
  location: "Bengaluru, Karnataka, India",
  openTo: "Bengaluru / Hyderabad",
  email: "kiranhk96@gmail.com",
  phone: "+91 9483426973",
  linkedin: "https://linkedin.com/in/Kiran-HK",
  github: "https://github.com/kiranmychits2025",
  githubUsername: "kiranmychits2025",
  summary:
    "DevOps Engineer (5+ years) specialising in GitOps with ArgoCD and AI-augmented delivery on AWS EKS: automated sync + self-heal + prune, App-of-Apps / ApplicationSets, Image Updater, Argo Rollouts canary releases, Terraform IaC, and Jenkins/GitHub Actions pipelines that build → scan (Trivy) → push to ECR → update GitOps repo. Ships observable, secure platforms — Prometheus/Grafana/Loki + OpenTelemetry, Kyverno policies, External Secrets — with LLM-powered incident triage (alert → AI summary + runbook → Slack) cutting MTTR. Track record: 30% faster deployments, 99% Kubernetes uptime, zero critical vulns shipped. Also a MERN/Next.js full-stack developer, so services are built deployment-ready from day one.",
};

export const heroCta = {
  headline: "I Ship GitOps Platforms That Deploy Themselves.",
  subheadline: "ArgoCD GitOps · AWS EKS · Terraform · AI-Augmented DevOps",
  supporting:
    "I run production Kubernetes the 2026 way: app repo commits trigger CI (build/test/Trivy-scan/push to ECR), CI updates the GitOps repo, and ArgoCD syncs dev → staging → prod with automated sync, self-heal, Rollouts canaries, and AI-enriched alerts — so releases are zero-downtime, auditable, and fast to roll back.",
};
