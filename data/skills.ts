import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "cicd",
    title: "DevOps & CI/CD",
    description: "Building and shipping software on a predictable, automated path.",
    icon: "GitBranch",
    items: [
      { name: "Jenkins", usage: "Daily" },
      { name: "GitLab CI/CD", usage: "Daily" },
      { name: "Git", usage: "Daily" },
      { name: "GitHub", usage: "Daily" },
      { name: "ArgoCD", usage: "Regular" },
    ],
  },
  {
    id: "containers",
    title: "Containers & Orchestration",
    description: "Packaging services and running them reliably at scale.",
    icon: "Boxes",
    items: [
      { name: "Docker", usage: "Daily" },
      { name: "Kubernetes", usage: "Daily" },
      { name: "Helm", usage: "Regular" },
      { name: "Kind", usage: "Working knowledge" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud",
    description: "Provisioning and operating infrastructure across providers.",
    icon: "Cloud",
    items: [
      { name: "AWS", usage: "Daily" },
      { name: "DigitalOcean", usage: "Regular" },
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    description: "The building blocks behind every reliable deployment.",
    icon: "Server",
    items: [
      { name: "Kubernetes", usage: "Daily" },
      { name: "Docker Compose", usage: "Regular" },
      { name: "Linux", usage: "Daily" },
      { name: "Networking", usage: "Regular" },
      { name: "Storage", usage: "Regular" },
      { name: "PV / PVC", usage: "Regular" },
    ],
  },
  {
    id: "monitoring",
    title: "Monitoring",
    description: "Making system health visible before it becomes a problem.",
    icon: "Activity",
    items: [
      { name: "Prometheus", usage: "Regular" },
      { name: "Grafana", usage: "Regular" },
    ],
  },
  {
    id: "security",
    title: "Security",
    description: "Catching vulnerabilities before they ship to production.",
    icon: "ShieldCheck",
    items: [
      { name: "Snyk", usage: "Regular" },
      { name: "Aqua Trivy", usage: "Regular" },
      { name: "OWASP ZAP", usage: "Working knowledge" },
    ],
  },
  {
    id: "scripting",
    title: "Programming & Scripting",
    description: "Automating the repetitive parts of infrastructure work.",
    icon: "Terminal",
    items: [
      { name: "Bash", usage: "Daily" },
      { name: "Python", usage: "Regular" },
      { name: "Groovy", usage: "Regular" },
      { name: "JavaScript", usage: "Regular" },
      { name: "Node.js", usage: "Working knowledge" },
    ],
  },
  {
    id: "development",
    title: "Development",
    description: "Enough full-stack fluency to understand what I'm deploying.",
    icon: "Code2",
    items: [
      { name: "Node.js", usage: "Regular" },
      { name: "Express.js", usage: "Regular" },
      { name: "React", usage: "Working knowledge" },
      { name: "MongoDB", usage: "Working knowledge" },
      { name: "REST APIs", usage: "Regular" },
    ],
  },
];
