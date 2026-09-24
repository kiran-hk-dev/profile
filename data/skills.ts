import { SkillCategory } from "@/types";

export const skills: SkillCategory[] = [
  {
    category: "Cloud & Infra",
    items: [
      { name: "AWS (EC2, S3, IAM, ECS, EKS)", description: "Production workloads on ECS/EKS; EC2 compute, S3 state and assets, IAM access control." },
      { name: "Docker", description: "Containerized microservices; standardized images (−10% size) across environments." },
      { name: "Kubernetes", description: "Clusters wired into CI/CD; 99% uptime with zero-downtime rolling updates." },
      { name: "DigitalOcean", description: "Hosted and managed application infrastructure alongside AWS." },
    ],
  },
  {
    category: "CI/CD & VCS",
    items: [
      { name: "Jenkins", description: "Automated pipelines across dev, staging and production (−30% deploy time, −10% errors)." },
      { name: "GitLab CI", description: "Stage-based pipelines for test, scan and deploy." },
      { name: "Git · GitHub · Bitbucket", description: "Version control with Agile, cross-functional team delivery." },
    ],
  },
  {
    category: "Full-Stack (MERN)",
    items: [
      { name: "React.js + React Hooks", description: "Enrolment and reporting UIs; reusable components and responsive layouts." },
      { name: "Node.js + Express.js", description: "REST APIs for customers, groups, payments and collections." },
      { name: "Tailwind CSS", description: "Responsive production interfaces." },
      { name: "REST APIs + Postman", description: "Every endpoint authored and validated in Postman before deployment." },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MongoDB", description: "Customers, chit groups, payments and users — modelled around reporting queries." },
      { name: "PostgreSQL", description: "Relational data for admin, billing and reporting workloads." },
    ],
  },
  {
    category: "Languages & Scripting",
    items: [
      { name: "JavaScript", description: "Full-stack application language across React and Node." },
      { name: "Python + Shell", description: "Automation scripts and pipeline glue." },
      { name: "Groovy + YAML", description: "Jenkins pipeline definitions and Kubernetes manifests." },
    ],
  },
  {
    category: "Monitoring & Security",
    items: [
      { name: "Prometheus + Grafana", description: "Real-time monitoring and alerting (−10% incident resolution time)." },
      { name: "Container Image Scanning", description: "Automated pre-deployment scans — zero critical vulns shipped." },
      { name: "Access-Control Auditing", description: "IAM and pipeline access-control checks before release." },
    ],
  },
  {
    category: "Also Used in Live Builds",
    items: [
      { name: "Next.js + TypeScript", description: "Portfolio, training and hotel sites — see live demos in Projects." },
      { name: "Supabase (Postgres + Realtime)", description: "Hotel ordering backend with RLS and realtime order flow." },
      { name: "React Native / Expo", description: "Companion Hotel Android app on the same backend." },
      { name: "Vercel", description: "Hosting for portfolio and EdTech live builds." },
    ],
  },
];
