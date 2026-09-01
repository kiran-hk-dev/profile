import { skillCategories } from "@/data/skills";
import { Stagger } from "../animations/Stagger";
import { SkillCategoryCard } from "../skills/SkillCategory";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";

export function SkillsPreview() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          index="02"
          title="Skills"
          description="Tools and technologies I use across the delivery pipeline, grouped by where they sit."
        />

        <Stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <SkillCategoryCard key={category.id} category={category} />
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
