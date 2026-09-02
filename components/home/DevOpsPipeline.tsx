import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PipelineDiagram } from "@/components/ui/PipelineDiagram";

const pipeline = [
  { label: "Code", detail: "Git" },
  { label: "CI/CD", detail: "Jenkins · GitLab" },
  { label: "Security Scan", detail: "Image scanning" },
  { label: "Docker Build", detail: "Containerize" },
  { label: "Kubernetes", detail: "Deploy & orchestrate" },
  { label: "AWS / DigitalOcean", detail: "Cloud infrastructure" },
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
