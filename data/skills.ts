import { SkillCategory } from "@/types";

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", description: "Built application interfaces and reusable component libraries." },
      { name: "React Hooks", description: "Managed component state and side effects in functional components." },
      { name: "Tailwind CSS", description: "Styled responsive, production interfaces with a utility-first workflow." },
      { name: "JavaScript", description: "Core language for frontend and backend application logic." },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", description: "Built backend services and business logic for production applications." },
      { name: "Express.js", description: "Designed REST API routes, controllers, and middleware." },
      { name: "REST APIs", description: "Designed, built, and tested APIs consumed by web applications." },
      { name: "Postman", description: "Tested and documented API endpoints during development." },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", description: "Modeled application data and built reporting queries." },
      { name: "PostgreSQL", description: "Worked with relational schemas for structured application data." },
    ],
  },
  {
    category: "Containerization & Orchestration",
    items: [
      { name: "Docker", description: "Containerized microservices for consistent, reproducible deployments." },
      { name: "Kubernetes", description: "Deployed and maintained clusters running production workloads." },
    ],
  },
  {
    category: "CI/CD",
    items: [
      { name: "Jenkins", description: "Automated build, test, and deployment pipelines." },
      { name: "GitLab CI/CD", description: "Built pipeline stages for testing, scanning, and deployment." },
    ],
  },
  {
    category: "Cloud",
    items: [
      { name: "AWS (EC2, S3, IAM, ECS, EKS)", description: "Provisioned compute, storage, and container infrastructure." },
      { name: "DigitalOcean", description: "Hosted and managed application infrastructure." },
    ],
  },
  {
    category: "Monitoring & Security",
    items: [
      { name: "Prometheus", description: "Collected infrastructure and application metrics." },
      { name: "Grafana", description: "Built dashboards for monitoring production systems." },
      { name: "Container Image Scanning", description: "Identified vulnerabilities and access-control flaws before deployment." },
    ],
  },
  {
    category: "Version Control",
    items: [
      { name: "Git", description: "Managed source control across all projects." },
      { name: "GitHub / GitLab / Bitbucket", description: "Hosted repositories and managed team workflows." },
    ],
  },
  {
    category: "Scripting",
    items: [
      { name: "Python", description: "Wrote automation and tooling scripts." },
      { name: "Shell", description: "Wrote shell scripts for operational and deployment tasks." },
      { name: "Groovy", description: "Wrote Jenkins pipeline scripts." },
      { name: "YAML", description: "Authored Kubernetes manifests and pipeline configuration." },
    ],
  },
];
