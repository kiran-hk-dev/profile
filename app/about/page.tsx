import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";
import { education } from "@/data/experience";

export const metadata: Metadata = {
  title: "About",
  description: "About Kiran H K — DevOps Engineer and MERN Full-Stack Developer based in Bengaluru, India.",
};

const competencies = [
  { group: "Infrastructure", items: "DevOps & CI/CD Automation · Docker & Kubernetes Orchestration · AWS (EC2, S3, IAM, ECS, EKS) · Monitoring & Observability (Prometheus, Grafana)" },
  { group: "Development", items: "MERN Stack (MongoDB, Express.js, React.js, Node.js) · REST API Design & Testing · Application & Container Security" },
  { group: "Delivery", items: "Git / GitHub / GitLab / Bitbucket · Agile, Cross-Functional Team Delivery" },
];

export default function AboutPage() {
  return (
    <Container className="py-20 sm:py-28">
      <SectionHeading title="About Me" />
      <div className="max-w-2xl">
        <p className="text-text-muted leading-relaxed text-lg">{profile.summary}</p>
        <p className="mt-6 text-text-muted leading-relaxed">
          I work across both software development and DevOps, which lets me understand an application from the
          development side and the infrastructure side at once. That means building the React interface, writing the
          Node.js API behind it, validating every endpoint in Postman, modeling the data in MongoDB, and then
          containerizing with Docker, deploying through Jenkins to Kubernetes, and monitoring the whole thing with
          Prometheus and Grafana.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm text-text-muted">
          <span><span className="text-text-faint">Based in</span> {profile.location}</span>
          <span><span className="text-text-faint">Open to</span> {profile.openTo}</span>
          <span><span className="text-text-faint">Experience</span> {profile.experience}</span>
        </div>
      </div>

      <div className="mt-14 max-w-3xl">
        <h2 className="font-display text-xl text-text mb-6">Core Competencies</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {competencies.map((c) => (
            <div key={c.group} className="rounded-xl border border-border-soft bg-bg-elevated p-5">
              <h3 className="font-mono-tag text-xs uppercase tracking-wide text-accent">{c.group}</h3>
              <p className="mt-2.5 text-sm text-text-muted leading-relaxed">{c.items}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 max-w-3xl">
        <h2 className="font-display text-xl text-text mb-4">Education</h2>
        <div className="rounded-xl border border-border-soft bg-bg-elevated p-5">
          <p className="text-sm font-medium text-text">{education.degree}</p>
          <p className="mt-1 text-sm text-text-muted">{education.school}</p>
        </div>
      </div>
    </Container>
  );
}
