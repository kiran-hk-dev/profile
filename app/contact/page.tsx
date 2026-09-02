import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Kiran H K for full-stack development, DevOps, or cloud infrastructure work.",
};

export default function ContactPage() {
  return (
    <Container className="py-20 sm:py-28">
      <SectionHeading
        title="Let's Build, Deploy and Scale."
        description="Interested in working together on full-stack applications, cloud infrastructure, or DevOps automation?"
      />
      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12">
        <div className="flex flex-col gap-4">
          <a href={`mailto:${profile.email}`} className="flex items-center gap-3 rounded-xl border border-border-soft bg-bg-elevated px-5 py-4 text-sm text-text-muted hover:text-text hover:border-accent/40 transition-colors">
            <Mail size={17} className="text-accent" /> {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 rounded-xl border border-border-soft bg-bg-elevated px-5 py-4 text-sm text-text-muted hover:text-text hover:border-accent/40 transition-colors">
            <Phone size={17} className="text-accent" /> {profile.phone}
          </a>
          <div className="flex items-center gap-3 rounded-xl border border-border-soft bg-bg-elevated px-5 py-4 text-sm text-text-muted">
            <MapPin size={17} className="text-accent" /> {profile.location}
          </div>
          <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-border-soft bg-bg-elevated px-5 py-4 text-sm text-text-muted hover:text-text hover:border-accent/40 transition-colors">
            <GithubIcon size={17} className="text-accent" /> GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-border-soft bg-bg-elevated px-5 py-4 text-sm text-text-muted hover:text-text hover:border-accent/40 transition-colors">
            <LinkedinIcon size={17} className="text-accent" /> LinkedIn
          </a>
        </div>

        <div className="rounded-2xl border border-border-soft bg-bg-elevated/50 p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </Container>
  );
}
