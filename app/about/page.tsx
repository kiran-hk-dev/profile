import { FadeIn } from "@/components/animations/FadeIn";
import { AnimatedStat } from "@/components/home/AnimatedStat";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile, stats } from "@/data/profile";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: `About ${profile.name}, a ${profile.title} based in ${profile.location}.`,
};

export default function AboutPage() {
  return (
    <div className="py-32 sm:py-40">
      <Container>
        <SectionHeading
          title="About"
          description="A closer look at how I approach DevOps work."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr]">
          <FadeIn className="flex flex-col gap-5">
            <p className="max-w-xl text-lg leading-relaxed text-(--color-text-muted)">
              {profile.summary}
            </p>
            <p className="max-w-xl text-base leading-relaxed text-(--color-text-muted)">
              DevOps Engineer with 2.8+ years of hands-on experience working
              with modern cloud-native technologies. I specialize in
              designing CI/CD pipelines, containerizing applications,
              managing Kubernetes workloads, automating infrastructure,
              implementing monitoring solutions, and improving deployment
              reliability.
            </p>
            <p className="max-w-xl text-base leading-relaxed text-(--color-text-muted)">
              I&rsquo;m based in {profile.location}, and open to opportunities in{" "}
              {profile.openTo.join(", ")} as well.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <AnimatedStat key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
