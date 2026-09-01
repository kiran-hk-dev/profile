import { profile } from "@/data/profile";
import { skillCategories } from "@/data/skills";
import { Eye, FileDown } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

const resumeSkills = [
  "AWS",
  "Docker",
  "Kubernetes",
  "Jenkins",
  "GitLab",
  "Helm",
  "ArgoCD",
  "Prometheus",
  "Grafana",
  "Linux",
  "Bash",
  "Python",
  "Groovy",
];

export function ResumeSection() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          index="07"
          title="Resume"
          description="A quick summary, or the full document if you're ready to download it."
        />

        <div className="overflow-hidden rounded-xl border border-(--color-border) bg-(--color-surface)">
          <div className="flex flex-col gap-8 p-6 sm:p-8 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="font-display text-2xl font-semibold text-(--color-text)">
                {profile.name}
              </p>
              <p className="mt-1 text-sm text-(--color-text-muted)">{profile.title}</p>
              <p className="mt-1 font-mono text-xs text-(--color-cyan)">
                {profile.experience}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {resumeSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-(--color-border-strong) px-2.5 py-1 font-mono text-[11px] text-(--color-text-muted)"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col">
              <a
                href={profile.resumePath}
                download
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-(--color-accent) px-5 py-2.5 text-sm font-medium text-white transition hover:brightness-110"
              >
                <FileDown size={15} />
                Download resume
              </a>
              <a
                href={profile.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-(--color-border-strong) px-5 py-2.5 text-sm font-medium text-(--color-text) transition hover:border-(--color-accent) hover:text-(--color-accent)"
              >
                <Eye size={15} />
                View resume
              </a>
            </div>
          </div>
        </div>
        <p className="mt-3 text-xs text-(--color-text-faint)">
          Replace <code className="font-mono">public{profile.resumePath}</code> with
          your PDF to enable these links. Skill categories shown in full above:{" "}
          {skillCategories.length} groups covering {skillCategories.reduce((n, c) => n + c.items.length, 0)}{" "}
          technologies.
        </p>
      </Container>
    </section>
  );
}
