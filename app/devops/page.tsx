import type { Metadata } from "next";
import {
  Timer,
  Gauge,
  ShieldCheck,
  Rocket,
  Workflow,
  Activity,
  CheckCircle2,
  Boxes,
} from "lucide-react";
import { Container as PageContainer } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { DevOpsTimeline } from "@/components/devops/DevOpsTimeline";

export const metadata: Metadata = {
  title: "DevOps",
  description: "How Kiran H K takes applications from code to production using Docker, Kubernetes, Jenkins, GitHub Actions, Terraform, ArgoCD, and AWS (EKS/ECR/VPC).",
};

const stats = [
  { icon: Timer, metric: "30% faster", label: "deployments, 10% fewer errors" },
  { icon: Gauge, metric: "99% uptime", label: "production Kubernetes clusters" },
  { icon: Rocket, metric: "Zero-downtime", label: "rollouts through traffic spikes" },
  { icon: ShieldCheck, metric: "Zero critical vulns", label: "shipped — scanned in-pipeline" },
];

const practices = [
  {
    icon: Workflow,
    title: "CI/CD & GitOps Automation",
    body: "Built Jenkins, GitLab CI, and GitHub Actions pipelines plus Terraform-provisioned AWS and ArgoCD-style GitOps delivery — cutting deployment time by 30% and errors by 10%.",
    chips: ["−30% deploy time", "−10% deploy errors"],
  },
  {
    icon: Boxes,
    title: "Container Orchestration",
    body: "Containerized microservices with Docker and operated Kubernetes clusters for scaling, rollbacks, and zero-downtime deployments.",
    chips: ["99% cluster uptime", "Zero-downtime rollouts"],
  },
  {
    icon: Activity,
    title: "Monitoring, Observability & Security",
    body: "Set up Prometheus and Grafana for observability (−10% MTTR), with Trivy image scanning and access-control audits so zero critical vulnerabilities ship.",
    chips: ["−10% MTTR", "Zero critical vulns"],
  },
];

const techGroups: { group: string; items: string[] }[] = [
  { group: "Source & CI/CD", items: ["Git", "Jenkins", "GitHub Actions", "GitLab CI/CD", "ArgoCD"] },
  { group: "Containers & Orchestration", items: ["Docker", "Docker Compose", "Kubernetes", "Helm"] },
  { group: "Cloud & IaC", items: ["AWS (EC2, S3, IAM, ECS, EKS)", "AWS (VPC, ALB, Route 53, ECR)", "Terraform", "Vercel", "DigitalOcean"] },
  { group: "Observability & Security", items: ["Prometheus", "Grafana", "Trivy / Container Image Scanning"] },
  { group: "Scripting & Config", items: ["Bash", "Python", "Groovy", "YAML"] },
];

export default function DevOpsPage() {
  return (
    <PageContainer className="py-20 sm:py-28">
      <p className="font-mono-tag text-xs uppercase tracking-widest text-accent mb-4">
        DevOps practice
      </p>
      <SectionHeading
        title="From Code to Production"
        description="The pipeline I build and operate to get an application from a commit to a running, monitored service — follow it top to bottom."
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div
            key={s.metric}
            className="rounded-2xl border border-border-soft bg-bg-elevated px-5 py-5"
          >
            <s.icon size={20} className="text-accent" />
            <p className="mt-3 font-display text-xl font-semibold text-text">{s.metric}</p>
            <p className="mt-1 text-[13px] text-text-muted leading-snug">{s.label}</p>
          </div>
        ))}
      </div>

      <h2 className="font-display text-xl text-text mt-16 mb-2">Pipeline stages</h2>
      <p className="text-sm text-text-muted mb-10">Ten stages in flow order — grouped by phase, from source to observe.</p>
      <div className="rounded-2xl border border-border-soft bg-bg-elevated/50 p-5 sm:p-8">
        <DevOpsTimeline />
      </div>

      <h2 className="font-display text-xl text-text mt-16 mb-6">Practice Areas</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {practices.map((p) => (
          <div key={p.title} className="rounded-2xl border border-border-soft bg-bg-elevated p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <p.icon size={19} />
            </span>
            <h3 className="mt-4 text-[15px] font-semibold text-text">{p.title}</h3>
            <p className="mt-2 text-sm text-text-muted leading-relaxed">{p.body}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.chips.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-accent/30 bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent"
                >
                  <CheckCircle2 size={12} /> {c}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h2 className="font-display text-xl text-text mt-16 mb-6">Technologies</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {techGroups.map((g) => (
          <div key={g.group} className="rounded-2xl border border-border-soft bg-bg-elevated/60 p-5">
            <h3 className="font-mono-tag text-xs uppercase tracking-widest text-accent">{g.group}</h3>
            <div className="mt-3.5 flex flex-wrap gap-2">
              {g.items.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageContainer>
  );
}
