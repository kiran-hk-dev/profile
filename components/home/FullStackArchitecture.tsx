import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PipelineDiagram } from "@/components/ui/PipelineDiagram";

const stack = [
  { label: "Next.js / React Frontend", detail: "UI, forms, dashboards · Vercel" },
  { label: "REST API", detail: "Express.js routes & controllers" },
  { label: "Node.js Business Logic", detail: "Validation, workflows" },
  { label: "MongoDB / Supabase Postgres", detail: "Data modeling, RLS & realtime" },
];

export function FullStackArchitecture() {
  return (
    <section>
      <Container className="py-20 sm:py-24">
        <SectionHeading
          title="Full Stack Developer (MERN + Next.js + Supabase)"
          description="I've shipped frontend, backend, and mobile from one codebase family — Next.js/React UIs, Node/Express APIs, MongoDB/Supabase data, and a React Native Android app on the same backend."
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
