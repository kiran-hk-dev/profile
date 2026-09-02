import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";

export const metadata: Metadata = {
  title: "Experience",
  description: "Career timeline of Kiran H K across DevOps, full-stack development, and network support roles.",
};

export default function ExperiencePage() {
  return (
    <Container className="py-20 sm:py-28">
      <SectionHeading
        title="Professional Experience"
        description="5+ years across freelance and full-time roles — from network support to DevOps and full-stack engineering."
      />
      <ExperienceTimeline />
    </Container>
  );
}
