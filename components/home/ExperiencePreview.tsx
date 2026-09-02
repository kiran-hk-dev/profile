import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";

export function ExperiencePreview() {
  return (
    <section id="experience" className="scroll-mt-24">
      <Container className="py-20 sm:py-24">
        <SectionHeading
          title="Career Timeline"
          description="From network support to full-stack and DevOps engineering — across full-time and freelance roles."
        />
        <ExperienceTimeline />
        <div className="mt-10">
          <Button href="/experience" variant="secondary">See Full Experience Details</Button>
        </div>
      </Container>
    </section>
  );
}
