import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);
  return (
    <section id="projects" className="scroll-mt-24">
      <Container className="py-20 sm:py-24">
        <SectionHeading title="Featured Projects" description="Real projects I've built and operated, with how I built each one." />
        <div className="grid md:grid-cols-2 gap-6">
          {featured.map((p, i) => (
            <ProjectCard project={p} key={p.slug} index={i} />
          ))}
        </div>
        <div className="mt-10">
          <Button href="/projects" variant="secondary">View All Projects</Button>
        </div>
      </Container>
    </section>
  );
}
