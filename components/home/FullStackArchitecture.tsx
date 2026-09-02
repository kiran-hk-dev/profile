import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PipelineDiagram } from "@/components/ui/PipelineDiagram";

const stack = [
  { label: "React Frontend", detail: "UI, forms, dashboards" },
  { label: "REST API", detail: "Express.js routes & controllers" },
  { label: "Node.js Business Logic", detail: "Validation, workflows" },
  { label: "MongoDB / PostgreSQL", detail: "Data modeling & queries" },
];

export function FullStackArchitecture() {
  return (
    <section>
      <Container className="py-20 sm:py-24">
        <SectionHeading
          title="Full Stack Development"
          description="I've worked on both frontend and backend rather than only consuming existing APIs — building the UI, the API, and the data layer beneath it."
        />
        <div className="rounded-2xl border border-border-soft bg-bg-elevated/50 p-6 sm:p-8">
          <PipelineDiagram nodes={stack} direction="horizontal" />
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {["UI Development", "API Development", "Database Design", "Authentication", "Deployment"].map((t) => (
            <div key={t} className="rounded-lg border border-border-soft px-4 py-3 text-sm text-text-muted text-center">
              {t}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
