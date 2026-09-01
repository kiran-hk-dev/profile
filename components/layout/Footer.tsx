import { navItems, profile } from "@/data/profile";
import Link from "next/link";
import { GithubIcon } from "../icons/GithubIcon";
import { LinkedinIcon } from "../icons/LinkedinIcon";
import { Container } from "../ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-(--color-border) bg-(--color-bg-elevated)">
      <Container className="flex flex-col gap-10 py-14">
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          <div>
            <p className="font-display text-lg font-semibold text-(--color-text)">
              {profile.name}
            </p>
            <p className="text-sm text-(--color-text-muted)">{profile.title}</p>
            <p className="mt-3 font-mono text-xs text-(--color-cyan)">
              Automate. Deploy. Monitor. Improve.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-(--color-text-muted) transition-colors hover:text-(--color-text)"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-start gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-(--color-border-strong) text-(--color-text-muted) transition-colors hover:border-(--color-accent) hover:text-(--color-accent)"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-(--color-border-strong) text-(--color-text-muted) transition-colors hover:border-(--color-accent) hover:text-(--color-accent)"
            >
              <LinkedinIcon size={16} />
            </a>
          </div>
        </div>

        <div className="flex flex-col-reverse items-start justify-between gap-3 border-t border-(--color-border) pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-(--color-text-faint)">
            © {year} {profile.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-(--color-text-faint)">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </Container>
    </footer>
  );
}
