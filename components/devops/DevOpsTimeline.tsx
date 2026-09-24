"use client";

import {
  Code2,
  Workflow,
  FlaskConical,
  ShieldCheck,
  Container,
  Ship,
  Cloud,
  Activity,
} from "lucide-react";
import { StageTimeline } from "@/components/ui/StageTimeline";

const stages = [
  { icon: Code2, phase: "Source", title: "Code + PR review", detail: "Git · GitHub / Bitbucket · reviewed", color: "#4f7dd9" },
  { icon: Workflow, phase: "Build", title: "Jenkins / GitLab CI", detail: "Install, test, build", color: "#d97706" },
  { icon: FlaskConical, phase: "Verify", title: "Postman validation", detail: "Every endpoint checked", color: "#0d9488" },
  { icon: ShieldCheck, phase: "Secure", title: "Image scan + access checks", detail: "Zero critical vulns gate", color: "#e11d48" },
  { icon: Container, phase: "Package", title: "Docker images", detail: "Standardized, scanned builds", color: "#0284c7" },
  { icon: Ship, phase: "Deploy", title: "K8s rolling update", detail: "Zero-downtime · health checks", color: "#159e6a" },
  { icon: Cloud, phase: "Run", title: "AWS ECS / EKS", detail: "Scaled production traffic", color: "#ea580c" },
  { icon: Activity, phase: "Observe", title: "Prometheus / Grafana", detail: "Monitoring + alerting", color: "#c026d3" },
];

export function DevOpsTimeline() {
  return (
    <StageTimeline
      stages={stages}
      entry="git push"
      exit="Stable prod · monitored · rollback-ready"
      feedbackTitle="↻ Release feedback loop"
      feedbackBody="Every deploy is a commit + a pipeline run. Monitoring and QA ticket volume feed back into the next change — fix forward in code, roll back in minutes when needed."
    />
  );
}
