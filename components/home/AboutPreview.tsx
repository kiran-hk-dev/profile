"use client";

import { motion } from "framer-motion";
import { GitBranch, Rocket, ShieldCheck, Bot } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

const highlights = [
  {
    icon: GitBranch,
    title: "GitOps (ArgoCD)",
    detail: "App-of-Apps · Image Updater · auto-sync",
  },
  {
    icon: Rocket,
    title: "EKS + Terraform + Rollouts",
    detail: "Canary releases · IaC · autoscaling",
  },
  {
    icon: ShieldCheck,
    title: "DevSecOps",
    detail: "Trivy · cosign · Kyverno · ESO",
  },
  {
    icon: Bot,
    title: "AI-Augmented Ops",
    detail: "LLM triage · k8sgpt · ChatOps",
  },
];

export function AboutPreview() {
  return (
    <section id="about" className="scroll-mt-24">
      <Container className="py-20 sm:py-24">
        <SectionHeading title="About Me" />
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 items-start">
          <p className="text-text-muted leading-relaxed text-lg">{profile.summary}</p>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="rounded-xl border border-border-soft bg-bg-elevated p-5"
              >
                <h.icon size={18} className="text-accent" />
                <p className="mt-3 text-sm font-medium text-text">{h.title}</p>
                <p className="mt-1 text-xs text-text-faint font-mono-tag">{h.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
