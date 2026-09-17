import { ExperienceItem } from "@/types";

export const experience: ExperienceItem[] = [
  {
    role: "DevOps Engineer (GitOps · ArgoCD · AI-Augmented Delivery)",
    company: "ChitXpert · MyChits — Vijaya Vinayak Chitfunds Pvt. Ltd.",
    location: "Bengaluru, India",
    start: "April 2025",
    end: "Present",
    current: true,
    type: "freelance",
    summary:
      "Own the GitOps platform for a licensed financial-services company: app repos + a dedicated GitOps repo, ArgoCD App-of-Apps across dev/staging/prod on EKS, with AI-assisted incident response on top.",
    highlights: [
      "GitOps automation: split app + GitOps repos; Jenkins CI builds → Trivy-scans → pushes to ECR → commits image tag; ArgoCD (automated sync + self-heal + prune) rolls dev → staging → prod with zero manual kubectl",
      "ArgoCD at scale: ApplicationSets per environment, sync waves/hooks for DB-migrate-before-app ordering, Image Updater for auto tag bumps, Notifications to Slack on sync/health",
      "Progressive delivery: Argo Rollouts canary (10% → 50% → 100%) gated by Prometheus success-rate analysis; automatic rollback on SLO breach — 100% uptime through peak traffic",
      "AI-augmented on-call: Alertmanager webhook → LLM enriches every page with log summary + probable cause + runbook link in Slack; k8sgpt operator triages CrashLoop/OOM in-cluster — faster MTTR vs raw alerts",
      "60% faster customer onboarding: MERN enrolment module (React, Node.js, Express.js, MongoDB) shipped through the same GitOps pipeline",
      "97% reporting accuracy: real-time payment-reporting engine with WhatsApp notifications via REST APIs, verified by reconciliation audits",
    ],
  },
  {
    role: "DevOps Engineer (Kubernetes · CI/CD · IaC)",
    company: "Native Minds Technologies Pvt Ltd",
    location: "Bengaluru, India",
    start: "August 2023",
    end: "January 2025",
    current: false,
    type: "freelance",
    summary:
      "Automated CI/CD and Kubernetes delivery on AWS; introduced the GitOps operating model (ArgoCD pilot) and Terraform IaC that the team still runs on.",
    highlights: [
      "ArgoCD GitOps pilot: declarative Application manifests, automated sync + self-heal, per-env overlays (Kustomize/Helm) — the template for zero-touch prod deploys",
      "30% faster deployments and 10% fewer errors via Jenkins shared-library pipelines (build/test/Trivy/ECR-push/GitOps-commit) across dev, staging, production",
      "99% cluster uptime: EKS + ALB + Route 53 production path, Terraform modules (VPC/EKS/ECR/IAM) with S3 remote state; −10% image size via multi-stage Docker builds",
      "DevSecOps in-pipeline: Trivy image scanning, cosign signing, Kyverno admission policies, External Secrets (no plaintext secrets in Git) — zero critical vulns shipped",
      "10% faster incident resolution: Prometheus + Grafana SLO dashboards and Alertmanager routing; Loki logs + OpenTelemetry traces wired for AI summarisation",
    ],
  },
  {
    role: "DevOps Engineer",
    company: "Native Minds Technologies Pvt Ltd",
    location: "Bengaluru, India",
    start: "June 2022",
    end: "July 2023",
    current: false,
    type: "full-time",
    summary:
      "Built CI/CD automation and container orchestration from the ground up for the Retail Billing platform.",
    highlights: [
      "Automated CI/CD pipelines with Jenkins, cutting deployment time by 30%",
      "Containerized microservices with Docker and orchestrated them with Kubernetes for +30% scalability",
      "Maintained Kubernetes clusters (99% uptime) supporting the Retail Billing Software project",
      "Used Git, GitHub, GitLab, and Bitbucket for version control and Agile team delivery",
    ],
  },
  {
    role: "Network Support Engineer",
    company: "CTK Networks",
    location: "Bengaluru, India",
    start: "September 2021",
    end: "May 2022",
    current: false,
    type: "full-time",
    summary: "Provided network and systems support, resolving infrastructure issues and maintaining connectivity.",
    highlights: [
      "Resolved network and system issues to minimize downtime",
      "Configured and maintained LAN/Wi-Fi networks",
      "Performed system upgrades and preventive maintenance",
    ],
  },
  {
    role: "Senior Technical Engineer",
    company: "Next Education India Pvt Ltd",
    location: "Hyderabad, India",
    start: "October 2019",
    end: "July 2020",
    current: false,
    type: "full-time",
    summary: "Provided technical engineering support.",
    highlights: [],
  },
];
