"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/FadeIn";
import { BookOpen, Terminal, MessageSquare, Layers, ArrowRight } from "lucide-react";

const sections = [
  {
    title: "Jenkins CI/CD Implementation",
    description: "Complete guide to setting up Jenkins pipelines, from installation to production deployment.",
    href: "/learn/jenkins",
    icon: Layers,
    color: "text-red-400",
  },
  {
    title: "Project Walkthroughs",
    description: "Step-by-step implementation guides with commands and architecture diagrams for real projects.",
    href: "/learn/projects",
    icon: Terminal,
    color: "text-accent-2",
  },
  {
    title: "Interview Questions",
    description: "30+ searchable DevOps interview questions with 30-second answers, detailed explanations, and follow-up questions.",
    href: "/learn/interviews",
    icon: MessageSquare,
    color: "text-violet-400",
  },
];

const technologies = [
  { name: "Linux", color: "bg-yellow-500" },
  { name: "Git", color: "bg-orange-500" },
  { name: "AWS", color: "bg-orange-400" },
  { name: "Docker", color: "bg-blue-500" },
  { name: "Jenkins", color: "bg-red-500" },
  { name: "Kubernetes", color: "bg-blue-600" },
  { name: "EKS", color: "bg-violet-500" },
  { name: "Terraform", color: "bg-violet-600" },
  { name: "ArgoCD", color: "bg-orange-600" },
  { name: "Prometheus", color: "bg-red-600" },
  { name: "Grafana", color: "bg-amber-500" },
  { name: "Helm", color: "bg-blue-700" },
];

export default function LearnPage() {
  return (
    <div className="py-32 sm:py-40">
      <Container>
        <FadeIn>
          <SectionHeading
            index="Learn"
            title="DevOps Knowledge Hub"
            description="Complete learning resources covering Linux, Git, AWS, Docker, Jenkins, Kubernetes, EKS, Terraform, and more."
          />
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 mb-16">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <FadeIn key={section.href}>
                <Link
                  href={section.href}
                  className="group block rounded-xl border border-border bg-bg-elevated p-6 transition-all hover:border-accent hover:bg-bg-elevated-2"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className={section.color}>
                      <Icon size={20} />
                    </span>
                    <ArrowRight size={14} className="ml-auto text-text-faint transition-transform group-hover:translate-x-1 group-hover:text-accent" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-text mb-2">{section.title}</h3>
                  <p className="text-sm text-text-muted">{section.description}</p>
                </Link>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn>
          <h2 className="font-display text-2xl font-semibold text-text mb-6">Technologies Covered</h2>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <span key={tech.name} className="flex items-center gap-2 rounded-full border border-border bg-bg-elevated px-4 py-2">
                <span className={`h-2 w-2 rounded-full ${tech.color}`} />
                <span className="text-sm text-text-muted">{tech.name}</span>
              </span>
            ))}
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}