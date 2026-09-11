import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PipelineDiagram } from "@/components/ui/PipelineDiagram";

const pipeline = [
  { label: "Code", detail: "Git · TypeScript" },
  { label: "CI/CD", detail: "Jenkins · GitHub Actions · GitLab" },
  { label: "Security Scan", detail: "Trivy image scanning" },
  { label: "Docker Build → ECR", detail: "Containerize" },
  { label: "Terraform", detail: "IaC provision" },
  { label: "Kubernetes (EKS) / ArgoCD", detail: "GitOps deploy" },
  { label: "AWS (VPC/ALB/Route 53) · Vercel", detail: "Cloud + edge" },
  { label: "Prometheus / Grafana", detail: "Monitor" },
];

export function DevOpsPipeline() {
  return (
    <section className="bg-bg-elevated/30 border-y border-border-soft">
      <Container className="py-20 sm:py-24">
        <SectionHeading title="From Code to Production" description="How I take an application from a commit to a monitored, running service." />
        <div className="rounded-2xl border border-border-soft bg-bg-elevated/50 p-6 sm:p-8">
          <PipelineDiagram nodes={pipeline} direction="horizontal" />
        </div>
        <div className="mt-8">
          <Button href="/devops" variant="secondary">Explore DevOps Practice</Button>
        </div>
      </Container>
    </section>
  );
}
