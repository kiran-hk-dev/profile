import { profile } from "@/data/profile";
import { Mail, MapPin } from "lucide-react";
import { FadeIn } from "../animations/FadeIn";
import { GithubIcon } from "../icons/GithubIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { ContactForm } from "./ContactForm";

export function ContactCTA() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          index="08"
          title="Let's build something reliable."
          description="Have a role, project, or infrastructure problem in mind? Send a message and I'll get back to you."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeIn className="flex flex-col gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 rounded-lg border border-(--color-border) bg-(--color-surface) px-4 py-3.5 text-sm text-(--color-text) transition-colors hover:border-(--color-accent)"
            >
              <Mail size={16} className="text-(--color-accent)" />
              {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-(--color-border) bg-(--color-surface) px-4 py-3.5 text-sm text-(--color-text) transition-colors hover:border-(--color-accent)"
            >
              <GithubIcon size={16} className="text-(--color-accent)" />
              GitHub profile
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-(--color-border) bg-(--color-surface) px-4 py-3.5 text-sm text-(--color-text) transition-colors hover:border-(--color-accent)"
            >
              <LinkedinIcon size={16} className="text-(--color-accent)" />
              LinkedIn profile
            </a>
            <div className="flex items-center gap-3 rounded-lg border border-(--color-border) bg-(--color-surface) px-4 py-3.5 text-sm text-(--color-text-muted)">
              <MapPin size={16} className="text-(--color-accent)" />
              {profile.location}
            </div>
          </FadeIn>

          <FadeIn delay={0.08} className="rounded-xl border border-(--color-border) bg-(--color-surface) p-6 sm:p-8">
            <ContactForm />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
