"use client";

import { motion } from "framer-motion";
import { FileText, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { profile, heroCta } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PipelineDiagram } from "@/components/ui/PipelineDiagram";

const nodes = [
  { label: "App repo: Next.js / Node API", detail: "CI builds + AI diff review" },
  { label: "Trivy scan → ECR + cosign", detail: "Signed, gated images" },
  { label: "CI commits tag → GitOps repo", detail: "Only deploy trigger" },
  { label: "Terraform: VPC / EKS / IAM", detail: "S3 remote state" },
  { label: "ArgoCD App-of-Apps (auto-sync)", detail: "ApplicationSets · self-heal" },
  { label: "Argo Rollouts canary", detail: "Prometheus analysis gate" },
  { label: "EKS + ALB / Route 53", detail: "IRSA · External Secrets" },
  { label: "Prometheus / Grafana / Loki", detail: "SLO burn-rate alerts" },
  { label: "AI triage → Slack + runbook", detail: "k8sgpt · LLM summary" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-grid">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-bg/40 to-bg" />
      <Container className="relative py-16 sm:py-24 lg:py-28">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-mono-tag text-sm text-accent">{profile.title}</span>

            <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-text text-balance leading-[1.08]">
              {heroCta.headline}
            </h1>

            <p className="mt-5 text-lg text-text-muted">{heroCta.subheadline}</p>
            <p className="mt-4 max-w-xl text-text-muted leading-relaxed">{heroCta.supporting}</p>

            <div className="mt-8 flex items-baseline gap-3">
              <span className="font-display text-4xl text-accent">{profile.experience}</span>
              <span className="text-sm text-text-muted">Years Experience</span>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/projects" variant="primary">View Projects</Button>
              <Button href="/experience" variant="secondary">View Experience</Button>
              <Button href="/resume/Kiran-HK-Resume.pdf" target="_blank" rel="noreferrer" variant="secondary" icon={<FileText size={15} />}>
                Download Resume
              </Button>
              <Button href="/contact" variant="ghost">Contact Me</Button>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-text-muted hover:text-text transition-colors"><GithubIcon size={19} /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-text-muted hover:text-text transition-colors"><LinkedinIcon size={19} /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="text-text-muted hover:text-text transition-colors"><Mail size={19} /></a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative"
          >
            <div className="rounded-2xl border border-border-soft bg-bg-elevated/60 backdrop-blur-sm p-5 sm:p-6">
              <p className="font-mono-tag text-xs text-text-faint mb-4">{"// git push → AI-watched production"}</p>
              <PipelineDiagram nodes={nodes} direction="vertical" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
