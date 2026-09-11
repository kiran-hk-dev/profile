import { SkillCategory } from "@/types";

export const skills: SkillCategory[] = [
  {
    category: "Frontend (2026)",
    items: [
      { name: "React.js", description: "Built application interfaces and reusable component libraries." },
      { name: "Next.js 15/16 (App Router)", description: "Built SEO-ready portfolio & learning platforms with server components, deployed on Vercel." },
      { name: "TypeScript", description: "Typed React/Next.js and Node APIs used across 2026 live builds." },
      { name: "React Hooks", description: "Managed component state and side effects in functional components." },
      { name: "Tailwind CSS", description: "Styled responsive, production interfaces with a utility-first workflow." },
      { name: "JavaScript (ES2024+)", description: "Core language for frontend and backend application logic." },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", description: "Built backend services and business logic for production applications." },
      { name: "Express.js", description: "Designed REST API routes, controllers, and middleware." },
      { name: "REST APIs", description: "Designed, built, and tested APIs consumed by web and mobile apps." },
      { name: "Postman", description: "Tested and documented API endpoints during development." },
    ],
  },
  {
    category: "Database & BaaS",
    items: [
      { name: "MongoDB", description: "Modeled application data and built reporting queries." },
      { name: "PostgreSQL", description: "Worked with relational schemas for structured application data." },
      { name: "Supabase (Postgres + Realtime + Auth)", description: "Powered hotel ordering/billing app with realtime orders, RLS, and inventory." },
    ],
  },
  {
    category: "Mobile",
    items: [
      { name: "React Native / Expo (Android)", description: "Shipped hotel customer Android app from the same Supabase backend as the web suite." },
    ],
  },
  {
    category: "Containerization & Orchestration",
    items: [
      { name: "Docker", description: "Containerized microservices for consistent, reproducible deployments." },
      { name: "Docker Compose", description: "Local multi-service stacks mirroring production." },
      { name: "Kubernetes", description: "Deployed and maintained clusters running production workloads (99% uptime)." },
      { name: "Helm", description: "Packaged Kubernetes releases for repeatable deploys — taught in Learn With Kiran." },
    ],
  },
  {
    category: "CI/CD & GitOps (2026)",
    items: [
      { name: "Jenkins", description: "Automated build, test, and deployment pipelines (−30% deploy time)." },
      { name: "GitHub Actions", description: "Modern CI for Next.js/Vercel builds: lint, typecheck, preview deploys." },
      { name: "GitLab CI/CD", description: "Built pipeline stages for testing, scanning, and deployment." },
      { name: "ArgoCD (GitOps)", description: "Declarative Kubernetes delivery model covered across the 2026 learning platform." },
    ],
  },
  {
    category: "Cloud & IaC (2026)",
    items: [
      { name: "AWS (EC2, S3, IAM, ECS, EKS)", description: "Provisioned compute, storage, and container infrastructure." },
      { name: "AWS Networking (VPC, ALB, Route 53, ECR)", description: "Production path taught end-to-end: VPC → EC2/EKS → ALB → Route 53, images in ECR." },
      { name: "Terraform (IaC)", description: "Provisioned AWS resources as versioned code across the Learn With Kiran curriculum." },
      { name: "Vercel (Edge Deployments)", description: "Hosts all 2026 live builds with preview URLs and analytics." },
      { name: "DigitalOcean", description: "Hosted and managed application infrastructure." },
    ],
  },
  {
    category: "Monitoring, Observability & Security",
    items: [
      { name: "Prometheus", description: "Collected infrastructure and application metrics." },
      { name: "Grafana", description: "Built dashboards for monitoring production systems." },
      { name: "Trivy / Container Image Scanning", description: "Zero critical vulns shipped — scans and access-control checks in-pipeline." },
      { name: "Access-Control Auditing", description: "IAM/RLS reviews across AWS and Supabase backends." },
    ],
  },
  {
    category: "Version Control",
    items: [
      { name: "Git", description: "Managed source control across all projects." },
      { name: "GitHub / GitLab / Bitbucket", description: "Hosted repositories, Agile cross-functional delivery." },
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
