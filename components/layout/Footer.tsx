import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";

const links = [
  { href: "/#about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/devops", label: "DevOps" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border-soft mt-24">
      <Container className="py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div>
            <p className="font-display text-lg text-text">{profile.name}</p>
            <p className="text-sm text-text-muted mt-1">{profile.title}</p>
            <p className="font-mono-tag text-xs text-accent mt-3">Build. Automate. Deploy. Monitor.</p>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-6">
            <div className="flex flex-col gap-2">
              <span className="text-xs text-text-faint uppercase tracking-wide font-mono-tag">Navigate</span>
              {links.map((l) => (
                <Link key={l.href} href={l.href} className="text-sm text-text-muted hover:text-text transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xs text-text-faint uppercase tracking-wide font-mono-tag">Connect</span>
              <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors">
                <GithubIcon size={14} /> GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors">
                <LinkedinIcon size={14} /> LinkedIn
              </a>
              <a href={`mailto:${profile.email}`} className="flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors">
                <Mail size={14} /> Email
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border-soft flex flex-col sm:flex-row justify-between gap-2 text-xs text-text-faint">
          <span>© 2026 {profile.name}. All rights reserved.</span>
          <span>{profile.location}</span>
        </div>
      </Container>
    </footer>
  );
}
