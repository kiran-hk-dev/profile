import { Repository } from "@/types";

/**
 * Static fallback list, used when live GitHub API data isn't available.
 * Update this file directly to change the featured repositories shown
 * when NEXT_PUBLIC_GITHUB_USERNAME fetching is skipped or fails.
 */
export const staticRepositories: Repository[] = [
  {
    name: "cloud-native-deployment-platform",
    description:
      "Reference CI/CD pipeline: Git to production via Jenkins, Docker, Helm, and ArgoCD.",
    url: "https://github.com/kiranhk/cloud-native-deployment-platform",
    language: "HCL",
    topics: ["kubernetes", "argocd", "helm", "cicd"],
  },
  {
    name: "monitoring-observability-stack",
    description: "Prometheus and Grafana stack for Kubernetes workload monitoring.",
    url: "https://github.com/kiranhk/monitoring-observability-stack",
    language: "YAML",
    topics: ["prometheus", "grafana", "kubernetes"],
  },
  {
    name: "mychits",
    description: "Full-stack chit fund management platform with containerized services.",
    url: "https://github.com/kiranhk/mychits",
    language: "JavaScript",
    topics: ["mern", "docker", "kubernetes"],
  },
  {
    name: "chitxpert",
    description: "Enterprise chit fund operations platform deployed on AWS.",
    url: "https://github.com/kiranhk/chitxpert",
    language: "JavaScript",
    topics: ["mern", "aws", "cicd"],
  },
];
