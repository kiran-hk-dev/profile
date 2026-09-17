import { SkillCategory } from "@/types";

export const skills: SkillCategory[] = [
  {
    category: "GitOps & ArgoCD Automation (2026)",
    items: [
      { name: "ArgoCD (App-of-Apps + ApplicationSets)", description: "Multi-env GitOps: dev/staging/prod from one repo, automated sync + self-heal + prune." },
      { name: "ArgoCD Image Updater", description: "Auto-bump ECR image tags in GitOps repo on CI push — no manual manifest edits." },
      { name: "Argo Rollouts (Canary / Blue-Green)", description: "Progressive delivery with Prometheus analysis templates + auto-rollback." },
      { name: "Sync Waves, Hooks & Policies", description: "Ordered deploys (CRDs → app → jobs), PreSync/PostSync hooks, sync windows." },
      { name: "ArgoCD Notifications + RBAC/SSO", description: "Slack alerts on sync/health, per-team RBAC projects, OIDC SSO." },
      { name: "Helm + Kustomize for GitOps", description: "Templated, environment-overlaid manifests consumed by ArgoCD." },
    ],
  },
  {
    category: "AI for DevOps / AIOps (2026)",
    items: [
      { name: "LLM Alert Enrichment", description: "Prometheus Alertmanager webhook → LLM summarises logs + suggests runbook → Slack." },
      { name: "k8sgpt Operator", description: "In-cluster AI triage of CrashLoopBackOff, OOMKilled, failed syncs with remediation hints." },
      { name: "AI CI Reviewer", description: "LLM reviews Terraform/K8s/Docker diffs in PRs for cost, security, and best-practice risks." },
      { name: "RAG Runbook Assistant", description: "Chat over internal runbooks + past incidents (embeddings + retrieval) for on-call." },
      { name: "AI ChatOps (Slack Bot)", description: "Ask deploys/health in Slack: ArgoCD sync status, rollout pause/promote, log tail." },
      { name: "Predictive Ops & FinOps AI", description: "Forecasting CPU/memory + Kubecost rightsizing prompts; Karpenter + spot guidance." },
    ],
  },
  {
    category: "CI/CD (2026)",
    items: [
      { name: "Jenkins (Shared Libraries)", description: "Build → test → Trivy scan → push ECR → commit tag to GitOps repo (−30% deploy time)." },
      { name: "GitHub Actions (Reusable Workflows)", description: "Lint, typecheck, SBOM, preview deploys for Next.js/Vercel + IaC plan/apply gates." },
      { name: "GitLab CI/CD", description: "Pipeline stages for testing, scanning, and deployment." },
      { name: "GitOps CI Pattern", description: "CI never touches prod — it only commits image tags; ArgoCD is the sole deployer." },
    ],
  },
  {
    category: "Containers & Orchestration",
    items: [
      { name: "Docker (Multi-stage, Distroless)", description: "Slim, reproducible images (−10% size); SBOM + cosign signing in-pipeline." },
      { name: "Docker Compose", description: "Local multi-service stacks mirroring production." },
      { name: "Kubernetes / AWS EKS", description: "Production workloads at 99% uptime; IRSA, Karpenter autoscaling, ALB controller." },
      { name: "Service Mesh & Ingress (Istio / NGINX)", description: "Canary traffic shifting, mTLS, ExternalDNS + cert-manager TLS." },
    ],
  },
  {
    category: "Cloud & IaC (2026)",
    items: [
      { name: "AWS (EKS, ECR, VPC, ALB, Route 53, IAM)", description: "Production path: VPC → EKS → ALB → Route 53, images in ECR, IRSA roles." },
      { name: "Terraform (Modules + Remote State)", description: "Versioned VPC/EKS/ECR/IAM modules; S3 + DynamoDB state, drift detection." },
      { name: "AWS Add-ons (External Secrets, EBS/EFS CSI)", description: "Secrets from AWS Secrets Manager via ESO; persistent volumes on EKS." },
      { name: "Vercel (Edge Deployments)", description: "Hosts 2026 live builds with preview URLs and analytics." },
      { name: "DigitalOcean", description: "Hosted and managed application infrastructure." },
    ],
  },
  {
    category: "Observability, SRE & DevSecOps",
    items: [
      { name: "Prometheus + Grafana + Alertmanager", description: "SLO/SLI dashboards, multi-window burn-rate alerts (−10% MTTR)." },
      { name: "Loki + OpenTelemetry (Logs & Traces)", description: "Centralised logs and distributed traces feeding AI triage." },
      { name: "Trivy + Cosign + Kyverno", description: "Image/CVE scanning, signed images, in-cluster policy enforcement — zero critical vulns." },
      { name: "External Secrets / Vault / Sealed Secrets", description: "No plaintext secrets in Git; rotation-safe GitOps-friendly secret delivery." },
      { name: "Kubecost / FinOps", description: "Namespace-level cost visibility and rightsizing for EKS workloads." },
    ],
  },
  {
    category: "Full Stack (Deployment-Ready Apps)",
    items: [
      { name: "React.js + Next.js 15/16 (App Router)", description: "SEO-ready apps with server components, deployed on Vercel." },
      { name: "TypeScript + Tailwind CSS", description: "Typed, responsive production interfaces." },
      { name: "Node.js + Express.js + REST APIs", description: "Backend services designed for 12-factor container deployment." },
      { name: "MongoDB + PostgreSQL + Supabase", description: "Data modelling with RLS/realtime where it fits (Supabase)." },
      { name: "React Native / Expo (Android)", description: "Companion mobile apps from the same backend." },
    ],
  },
  {
    category: "Version Control & Scripting",
    items: [
      { name: "Git + GitHub / GitLab / Bitbucket", description: "Trunk-based + GitOps repo separation; Agile delivery." },
      { name: "Python + Shell + Groovy + YAML", description: "Automation scripts, Jenkins pipelines, K8s manifests, AI webhook glue." },
    ],
  },
];
