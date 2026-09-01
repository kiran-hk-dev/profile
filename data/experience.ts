import { ExperienceEntry } from "@/types";

export const experience: ExperienceEntry[] = [
  {
    role: "DevOps Engineer",
    duration: "2.8+ Years Experience",
    summary:
      "Own the path from commit to production — designing pipelines, containerizing services, and keeping clusters healthy.",
    responsibilities: [
      {
        text: "Designing and maintaining CI/CD pipelines for multiple services",
        tech: ["Jenkins", "GitLab CI"],
      },
      {
        text: "Automating application deployments end to end",
        tech: ["Bash", "Groovy"],
      },
      {
        text: "Containerizing applications for consistent, portable builds",
        tech: ["Docker"],
      },
      {
        text: "Managing Kubernetes workloads across environments",
        tech: ["Kubernetes"],
      },
      {
        text: "Packaging and versioning releases with Helm charts",
        tech: ["Helm"],
      },
      {
        text: "Provisioning and maintaining cloud infrastructure",
        tech: ["AWS", "DigitalOcean"],
      },
      {
        text: "Implementing GitOps workflows for declarative delivery",
        tech: ["ArgoCD"],
      },
      {
        text: "Building observability into services and clusters",
        tech: ["Prometheus", "Grafana"],
      },
      {
        text: "Running security scans across images, code, and running apps",
        tech: ["Snyk", "Trivy", "OWASP ZAP"],
      },
      {
        text: "Administering and hardening Linux servers",
        tech: ["Linux"],
      },
      {
        text: "Troubleshooting deployment and infrastructure incidents",
        tech: ["Kubernetes", "Linux"],
      },
    ],
  },
];
