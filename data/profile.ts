import { Profile } from "@/types";

export const profile: Profile = {
  name: "Kiran H K",
  title: "Full Stack Developer (MERN) · DevOps / GitOps (ArgoCD)",
  experience: "5+ Years",
  location: "Bengaluru, Karnataka, India",
  openTo: "Bengaluru / Hyderabad",
  email: "kiranhk96@gmail.com",
  phone: "+91 9483426973",
  linkedin: "https://linkedin.com/in/Kiran-HK",
  github: "https://github.com/kiranmychits2025",
  githubUsername: "kiranmychits2025",
  summary:
    "Full Stack Developer (MERN + Next.js, 5+ years) who earned deployment ownership in production: after getting access to releases at ChitXpert/MyChits, introduced GitOps with ArgoCD (App-of-Apps / ApplicationSets, Image Updater, auto-sync + self-heal) and Argo Rollouts canaries on AWS EKS, with Terraform IaC and Jenkins/GitHub Actions CI (Trivy + cosign → ECR → GitOps tag commit). Added AI-augmented on-call — Prometheus/Grafana/Loki alerts enriched by LLM summaries + runbooks in Slack, k8sgpt in-cluster. Outcomes: 30% faster deployments, 99% Kubernetes uptime, zero critical vulns shipped, plus 60% faster onboarding and 97% reporting accuracy from the MERN app layer. Now targeting DevOps Engineer roles in 2026.",
};

export const heroCta = {
  headline: "Full Stack Developer Who Owns Deployments End-to-End.",
  subheadline: "MERN + Next.js Full-Stack · ArgoCD GitOps · AWS EKS · AI-Augmented DevOps",
  supporting:
    "I joined as a MERN full-stack developer and earned deployment ownership: now app commits flow through CI (build/test/Trivy-scan/push to ECR), CI updates the GitOps repo, and ArgoCD syncs dev → staging → prod with self-heal, Rollouts canaries, and AI-enriched alerts — zero-downtime, auditable, fast to roll back.",
};
