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
  GitBranch,
  Bot,
  BellRing,
  FileCode2,
} from "lucide-react";
import { Container as PageContainer } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { DevOpsTimeline } from "@/components/devops/DevOpsTimeline";

export const metadata: Metadata = {
  title: "DevOps · GitOps (ArgoCD) · AI-Augmented Delivery",
  description:
    "How Kiran H K runs production on EKS: Jenkins/GitHub Actions CI → ECR → GitOps repo → ArgoCD auto-sync (App-of-Apps, Image Updater) → Argo Rollouts canaries → Prometheus/Grafana/Loki observability with LLM incident triage.",
};

const stats = [
  { icon: Timer, metric: "30% faster", label: "deploys via CI → GitOps automation" },
  { icon: Gauge, metric: "99% uptime", label: "EKS + self-heal + canary rollbacks" },
  { icon: Rocket, metric: "Zero-touch prod", label: "ArgoCD is the sole deployer" },
  { icon: ShieldCheck, metric: "Zero critical vulns", label: "Trivy + cosign + Kyverno gates" },
];

const practices = [
  {
    icon: GitBranch,
    title: "ArgoCD GitOps Automation",
    body: "App repo + GitOps repo split. CI builds, scans, pushes to ECR, and commits the tag — ArgoCD (App-of-Apps, ApplicationSets, Image Updater, automated sync + self-heal + prune) does the deploying across dev/staging/prod.",
    chips: ["App-of-Apps", "Image Updater", "Self-heal + prune"],
  },
  {
    icon: Rocket,
    title: "Progressive Delivery",
    body: "Argo Rollouts canaries (10% → 50% → 100%) gated by Prometheus analysis templates, with sync waves/hooks ordering migrations before app code and one-click rollback.",
    chips: ["Canary / blue-green", "Auto-rollback", "Sync waves + hooks"],
  },
  {
    icon: Boxes,
    title: "IaC + EKS Platform",
    body: "Terraform modules (VPC/EKS/ECR/IAM/IRSA) with S3 remote state, Karpenter autoscaling, ALB + ExternalDNS + cert-manager, External Secrets — reproducible clusters from code.",
    chips: ["Terraform modules", "Karpenter", "IRSA + ESO"],
  },
  {
    icon: Bot,
    title: "AI-Augmented On-Call",
    body: "Alertmanager webhooks hit an LLM enricher (Loki logs + recent deploys + runbook RAG) that posts probable cause + fix steps to Slack; k8sgpt triages CrashLoop/OOM in-cluster; ChatOps bot answers sync/rollout status.",
    chips: ["LLM alert summaries", "k8sgpt", "Slack ChatOps"],
  },
  {
    icon: Activity,
    title: "Observability & SRE",
    body: "Prometheus SLO burn-rate alerts, Grafana dashboards, Loki + OpenTelemetry traces — the signal layer the AI triage reads from. Every incident becomes a pipeline fix.",
    chips: ["SLO dashboards", "Loki + OTEL", "−10% MTTR"],
  },
  {
    icon: Workflow,
    title: "DevSecOps Gates",
    body: "Trivy scans + cosign signing + SBOM in CI, Kyverno admission policies in-cluster, ArgoCD RBAC/SSO per team — nothing unverified reaches production.",
    chips: ["Trivy + cosign", "Kyverno", "RBAC + SSO"],
  },
];

const techGroups: { group: string; items: string[] }[] = [
  { group: "GitOps & Delivery", items: ["ArgoCD (App-of-Apps, ApplicationSets)", "ArgoCD Image Updater", "Argo Rollouts", "Helm + Kustomize", "Sync waves / hooks / windows"] },
  { group: "CI", items: ["Jenkins (shared libs)", "GitHub Actions (reusable)", "GitLab CI/CD", "SonarQube", "SBOM (Syft/Grype)"] },
  { group: "Cloud & IaC", items: ["AWS EKS + ECR", "VPC / ALB / Route 53", "IAM / IRSA", "Terraform (S3 state)", "Karpenter", "ExternalDNS + cert-manager"] },
  { group: "Observability & AI", items: ["Prometheus + Alertmanager", "Grafana (SLO)", "Loki + OpenTelemetry", "k8sgpt", "LLM runbook RAG", "Slack ChatOps"] },
  { group: "Security", items: ["Trivy", "cosign signing", "Kyverno / OPA", "External Secrets / Vault", "ArgoCD RBAC + SSO"] },
  { group: "Scripting & Config", items: ["Bash", "Python (FastAPI webhooks)", "Groovy", "YAML"] },
];

const argocdLoop = [
  { step: "1 · Push", text: "Developer pushes to the app repo. CI runs tests, LLM reviews the IaC/K8s diff, builds the image." },
  { step: "2 · Scan + sign", text: "Trivy scans, cosign signs, SBOM attaches. Fail on critical CVE — nothing unsigned proceeds." },
  { step: "3 · Push + tag commit", text: "Image goes to ECR; CI commits the new tag to the GitOps repo (env overlay). This commit is the only deploy trigger." },
  { step: "4 · ArgoCD syncs", text: "ApplicationSet detects drift; automated sync + self-heal applies dev → staging → prod with sync-wave ordering and PreSync/PostSync hooks." },
  { step: "5 · Canary", text: "Argo Rollouts shifts 10% → 50% → 100%, Prometheus analysis watches error-rate/p99; breach = automatic rollback." },
  { step: "6 · Notify", text: "ArgoCD Notifications post sync/health to Slack; dashboards update; audit trail = git history." },
];

const aiLoop = [
  { icon: BellRing, title: "Alert fires", body: "Prometheus burn-rate alert → Alertmanager webhook with labels, runbook URL, and links to Loki/Grafana." },
  { icon: Bot, title: "LLM enriches", body: "Enricher pulls recent Loki logs, last 5 GitOps commits, and rollout state; RAG over runbooks; posts probable cause + fix steps to Slack." },
  { icon: FileCode2, title: "Fix becomes code", body: "Resolutions land as GitOps/Terraform PRs (AI-reviewed), so the same failure auto-heals next time. k8sgpt keeps annotating in-cluster." },
];

export default function DevOpsPage() {
  return (
    <PageContainer className="py-20 sm:py-28">
      <p className="font-mono-tag text-xs uppercase tracking-widest text-accent mb-4">
        DevOps practice · GitOps (ArgoCD) · AIOps
      </p>
      <SectionHeading
        title="From git push to Self-Healing Production"
        description="CI builds and verifies. ArgoCD deploys. AI watches. Follow the loop top to bottom — this is the operating model I run on EKS."
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
      <p className="text-sm text-text-muted mb-10">Twelve stages in flow order — CI verifies, ArgoCD deploys, AI augments.</p>
      <div className="rounded-2xl border border-border-soft bg-bg-elevated/50 p-5 sm:p-8">
        <DevOpsTimeline />
      </div>

      <h2 className="font-display text-xl text-text mt-16 mb-2">The ArgoCD automation loop</h2>
      <p className="text-sm text-text-muted mb-8">Say this in an interview: “CI never touches prod — it only commits image tags. ArgoCD is the sole deployer.”</p>
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {argocdLoop.map((a) => (
          <li key={a.step} className="rounded-2xl border border-border-soft bg-bg-elevated p-5">
            <p className="font-mono-tag text-xs uppercase tracking-widest text-accent">{a.step}</p>
            <p className="mt-2 text-sm text-text-muted leading-relaxed">{a.text}</p>
          </li>
        ))}
      </ol>

      <h2 className="font-display text-xl text-text mt-16 mb-2">AI integration: alerts become answers</h2>
      <p className="text-sm text-text-muted mb-8">What “AI for DevOps” concretely means on my platform — not demos, but on-call tooling.</p>
      <div className="grid sm:grid-cols-3 gap-4">
        {aiLoop.map((a) => (
          <div key={a.title} className="rounded-2xl border border-border-soft bg-bg-elevated p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <a.icon size={19} />
            </span>
            <h3 className="mt-4 text-[15px] font-semibold text-text">{a.title}</h3>
            <p className="mt-2 text-sm text-text-muted leading-relaxed">{a.body}</p>
          </div>
        ))}
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

      <div className="mt-14 flex flex-wrap gap-3">
        <Button href="/projects" variant="secondary">See the GitOps Projects</Button>
        <Button href="/experience" variant="ghost">See Experience</Button>
      </div>
    </PageContainer>
  );
}
