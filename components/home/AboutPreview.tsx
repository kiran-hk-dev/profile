import { stats } from "@/data/profile";
import { FadeIn } from "../animations/FadeIn";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { AnimatedStat } from "./AnimatedStat";

export function AboutPreview() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          index="01"
          title="About"
          description="A short introduction to how I work and what I focus on."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr]">
          <FadeIn>
            <p className="max-w-xl text-lg leading-relaxed text-(--color-text-muted)">
              DevOps Engineer with 2.8+ years of hands-on experience working
              with modern cloud-native technologies. I specialize in
              designing CI/CD pipelines, containerizing applications,
              managing Kubernetes workloads, automating infrastructure,
              implementing monitoring solutions, and improving deployment
              reliability.
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-(--color-text-muted)">
              I care about systems that stay predictable under pressure —
              pipelines that fail loudly and early, deployments that are
              boring in the best way, and infrastructure that&rsquo;s documented
              well enough for the next engineer to trust it.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <AnimatedStat key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
