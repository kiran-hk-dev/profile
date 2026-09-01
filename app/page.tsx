import { AboutPreview } from "@/components/home/AboutPreview";
import { ContactCTA } from "@/components/home/ContactCTA";
import { DevOpsPipeline } from "@/components/home/DevOpsPipeline";
import { ExperiencePreview } from "@/components/home/ExperiencePreview";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { GithubSection } from "@/components/home/GithubSection";
import { Hero } from "@/components/home/Hero";
import { ResumeSection } from "@/components/home/ResumeSection";
import { SkillsPreview } from "@/components/home/SkillsPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="divide-y divide-(--color-border)">
        <AboutPreview />
        <SkillsPreview />
        <ExperiencePreview />
        <FeaturedProjects />
        <DevOpsPipeline />
        <GithubSection />
        <ResumeSection />
        <ContactCTA />
      </div>
    </>
  );
}
