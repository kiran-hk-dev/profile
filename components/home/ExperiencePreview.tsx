import { ExperienceTimeline } from "../experience/ExperienceTimeline";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function ExperiencePreview() {
  return (
    <section id="experience" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          index="03"
          title="Experience"
          description="What the day-to-day of the role has looked like."
        />
        <ExperienceTimeline />
      </Container>
    </section>
  );
}
