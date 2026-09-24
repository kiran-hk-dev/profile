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
        description="5+ years — DevOps Engineer & Full-Stack Developer at ChitXpert/MyChits (Apr 2025 – Present); DevOps Engineer at Native Minds (Jun 2022 – Jan 2025, via freelance from Aug 2023); earlier network and technical support roles."
      />
      <ExperienceTimeline />
    </Container>
  );
}
