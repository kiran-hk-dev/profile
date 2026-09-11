import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PipelineDiagram } from "@/components/ui/PipelineDiagram";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "DevOps",
  description: "How Kiran H K takes applications from code to production using Docker, Kubernetes, Jenkins, GitHub Actions, Terraform, ArgoCD, and AWS (EKS/ECR/VPC).",
};

const pipeline = [
  { label: "Code", detail: "Git · TypeScript" },
  { label: "GitHub / GitLab", detail: "Version control" },
  { label: "Jenkins / GitHub Actions", detail: "Build & automate" },
  { label: "Test", detail: "Validation" },
  { label: "Security Scan", detail: "Trivy image scanning" },
  { label: "Docker Build → ECR", detail: "Containerize" },
  { label: "Terraform", detail: "IaC provision" },
  { label: "Kubernetes (EKS) / ArgoCD", detail: "GitOps deploy" },
  { label: "AWS (VPC/ALB/Route 53) · Vercel Edge", detail: "Cloud infrastructure" },
  { label: "Prometheus / Grafana", detail: "Monitor" },
];

const technologies = [
  "Git", "Jenkins", "GitHub Actions", "GitLab CI/CD", "ArgoCD", "Docker", "Docker Compose", "Kubernetes",
  "Helm", "Terraform", "AWS (EC2, S3, IAM, ECS, EKS)", "AWS (VPC, ALB, Route 53, ECR)", "Vercel", "DigitalOcean", "Prometheus", "Grafana",
  "Trivy / Container Image Scanning", "Bash", "Python", "Groovy", "YAML",
];

export default function DevOpsPage() {
  return (
    <Container className="py-20 sm:py-28">
      <SectionHeading title="From Code to Production" description="The pipeline I build and operate to get an application from a commit to a running, monitored service." />

      <div className="rounded-2xl border border-border-soft bg-bg-elevated/50 p-6 sm:p-8">
        <PipelineDiagram nodes={pipeline} direction="horizontal" />
      </div>

      <div className="mt-16">
        <h2 className="font-display text-xl text-text mb-5">Practice Areas</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="rounded-xl border border-border-soft bg-bg-elevated p-5">
            <h3 className="text-sm font-medium text-text">CI/CD & GitOps Automation</h3>
            <p className="mt-2 text-sm text-text-muted leading-relaxed">
              Built Jenkins, GitLab CI, and GitHub Actions pipelines plus Terraform-provisioned AWS and ArgoCD-style
              GitOps delivery — cutting deployment time by 30% and errors by 10%.
            </p>
          </div>
          <div className="rounded-xl border border-border-soft bg-bg-elevated p-5">
            <h3 className="text-sm font-medium text-text">Container Orchestration</h3>
            <p className="mt-2 text-sm text-text-muted leading-relaxed">
              Containerized microservices with Docker and operated Kubernetes clusters for scaling, rollbacks, and
              zero-downtime deployments.
            </p>
          </div>
          <div className="rounded-xl border border-border-soft bg-bg-elevated p-5">
            <h3 className="text-sm font-medium text-text">Monitoring, Observability & Security</h3>
            <p className="mt-2 text-sm text-text-muted leading-relaxed">
              Set up Prometheus and Grafana for observability (−10% MTTR), with Trivy image scanning and
              access-control audits so zero critical vulnerabilities ship.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="font-display text-xl text-text mb-5">Technologies</h2>
        <div className="flex flex-wrap gap-2">
          {technologies.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      </div>
    </Container>
  );
}
