import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ExperiencePreview } from "@/components/home/ExperiencePreview";
import { SkillsGrid } from "@/components/home/SkillsGrid";
import { FullStackArchitecture } from "@/components/home/FullStackArchitecture";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { DevOpsPipeline } from "@/components/home/DevOpsPipeline";
import { WhatIBring } from "@/components/home/WhatIBring";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutPreview />
      <ExperiencePreview />
      <SkillsGrid />
      <FullStackArchitecture />
      <FeaturedProjects />
      <DevOpsPipeline />
      <WhatIBring />
      <ContactCTA />
    </>
  );
}
