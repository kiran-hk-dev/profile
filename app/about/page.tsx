import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "About",
  description: "About Kiran H K — DevOps Engineer and Full Stack Developer based in Bengaluru, India.",
};

export default function AboutPage() {
  return (
    <Container className="py-20 sm:py-28">
      <SectionHeading title="About Me" />
      <div className="max-w-2xl">
        <p className="text-text-muted leading-relaxed text-lg">{profile.summary}</p>
        <p className="mt-6 text-text-muted leading-relaxed">
          I work across both software development and DevOps, which lets me understand an application from the
          development side and the infrastructure side at once. That means building the React interface, writing the
          Node.js API behind it, modeling the data in MongoDB, and then containerizing, deploying, and monitoring the
          whole thing in production.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm text-text-muted">
          <span><span className="text-text-faint">Based in</span> {profile.location}</span>
          <span><span className="text-text-faint">Open to</span> {profile.openTo}</span>
          <span><span className="text-text-faint">Experience</span> {profile.experience}</span>
        </div>
      </div>
    </Container>
  );
}
