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
  FlaskConical,
  FileCode2,
} from "lucide-react";
import { Container as PageContainer } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { DevOpsTimeline } from "@/components/devops/DevOpsTimeline";

export const metadata: Metadata = {
  title: "DevOps · CI/CD · Kubernetes on AWS",
  description:
    "How Kiran H K ships: Jenkins/GitLab CI across dev, staging and production → Docker images → Kubernetes rolling updates on AWS ECS/EKS with Prometheus/Grafana observability.",
};

const stats = [
  { icon: Timer, metric: "30% faster", label: "deploys via Jenkins automation" },
  { icon: Gauge, metric: "99% uptime", label: "Kubernetes wired into CI/CD" },
  { icon: Rocket, metric: "+30% scalability", label: "Dockerized microservices" },
  { icon: ShieldCheck, metric: "Zero critical vulns", label: "Scans + access checks in-pipeline" },
];

const practices = [
  {
    icon: Workflow,
    title: "CI/CD Automation",
    body: "Automated Jenkins pipelines spanning dev, staging and production: install → test → scan → push → deploy. Pipeline-as-code, reviewed like app code.",
    chips: ["Jenkins", "GitLab CI", "dev → staging → prod"],
  },
  {
    icon: Boxes,
    title: "Docker & Kubernetes",
    body: "Containerized microservices with standardized images; Kubernetes clusters wired directly into the pipeline with zero-downtime rolling updates.",
    chips: ["Docker", "Kubernetes", "Rolling updates"],
  },
  {
    icon: FileCode2,
    title: "AWS Platform",
    body: "Production workloads on ECS/EKS with EC2 compute, S3 state and assets, and IAM access control — plus DigitalOcean where it fits.",
    chips: ["EC2 / ECS / EKS", "S3 + IAM", "DigitalOcean"],
  },
  {
    icon: Activity,
    title: "Monitoring & Alerting",
    body: "Real-time monitoring and alerting with Prometheus and Grafana — per-service dashboards that cut incident resolution time by 10%.",
    chips: ["Prometheus", "Grafana", "−10% MTTR"],
  },
  {
    icon: ShieldCheck,
    title: "Security in-pipeline",
    body: "Automated container image scanning plus access-control checks on every release — zero critical vulnerabilities shipped.",
    chips: ["Image scanning", "Access-control checks"],
  },
  {
    icon: FlaskConical,
    title: "API Quality (MERN)",
    body: "Every REST endpoint authored and validated in Postman before deployment — fewer post-release defects per QA ticket volume.",
    chips: ["Postman", "REST APIs", "MERN"],
  },
];

const techGroups: { group: string; items: string[] }[] = [
  { group: "Cloud & Infra", items: ["AWS (EC2, S3, IAM, ECS, EKS)", "DigitalOcean", "Docker", "Kubernetes"] },
  { group: "CI/CD & VCS", items: ["Jenkins", "GitLab CI", "Git", "GitHub", "Bitbucket"] },
  { group: "Full-Stack (MERN)", items: ["React.js", "React Hooks", "Node.js", "Express.js", "Tailwind CSS", "REST APIs", "Postman"] },
  { group: "Databases", items: ["MongoDB", "PostgreSQL"] },
  { group: "Languages & Scripting", items: ["JavaScript", "Python", "Shell", "Groovy", "YAML"] },
  { group: "Monitoring & Security", items: ["Prometheus", "Grafana", "Container Image Scanning", "Access-Control Auditing"] },
];

const deliveryLoop = [
  { step: "1 · Push + review", text: "PR to main with tests. Small diffs, reviewed like app code (Git/GitHub/Bitbucket)." },
  { step: "2 · CI verifies", text: "Jenkins: install, test, image scan + access-control checks. Critical findings = fail." },
  { step: "3 · Postman check", text: "REST endpoints validated in Postman before deployment sign-off." },
  { step: "4 · Package", text: "Docker build with standardized images (−10% size). Same image for every env." },
  { step: "5 · Rolling deploy", text: "Kubernetes rolling update across dev → staging → production with health checks." },
  { step: "6 · Observe", text: "Prometheus + Grafana dashboards and alerts. Incidents become pipeline or manifest fixes." },
];

export default function DevOpsPage() {
  return (
    <PageContainer className="py-20 sm:py-28">
      <p className="font-mono-tag text-xs uppercase tracking-widest text-accent mb-4">
        DevOps practice · CI/CD · Kubernetes
      </p>
      <SectionHeading
        title="From git push to Monitored Production"
        description="CI verifies. Kubernetes rolls out. Monitoring watches. Follow the loop top to bottom — this is how I run releases on AWS."
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
      <p className="text-sm text-text-muted mb-10">Eight stages in flow order — build once, promote everywhere, watch everything.</p>
      <div className="rounded-2xl border border-border-soft bg-bg-elevated/50 p-5 sm:p-8">
        <DevOpsTimeline />
      </div>

      <h2 className="font-display text-xl text-text mt-16 mb-2">The delivery loop</h2>
      <p className="text-sm text-text-muted mb-8">Say this in an interview: “Same image from dev to prod, validated in Postman, every deploy verified and monitored.”</p>
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {deliveryLoop.map((a) => (
          <li key={a.step} className="rounded-2xl border border-border-soft bg-bg-elevated p-5">
            <p className="font-mono-tag text-xs uppercase tracking-widest text-accent">{a.step}</p>
            <p className="mt-2 text-sm text-text-muted leading-relaxed">{a.text}</p>
          </li>
        ))}
      </ol>

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

      <div className="mt-14 flex flex-wrap gap-3">
        <Button href="/projects" variant="secondary">See the Projects</Button>
        <Button href="/experience" variant="ghost">See Experience</Button>
      </div>
    </PageContainer>
  );
}
