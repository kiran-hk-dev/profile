import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Kiran H K for full-stack development, DevOps, or cloud infrastructure work.",
};

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}?subject=${encodeURIComponent("Project enquiry from portfolio")}`,
    cta: "Send email",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    cta: "Call now",
  },
  {
    icon: MapPin,
    label: "Location",
    value: `${profile.location} · Open to ${profile.openTo}`,
    href: undefined,
    cta: undefined,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: profile.github.replace("https://", ""),
    href: profile.github,
    cta: "View profile",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/Kiran-HK",
    href: profile.linkedin,
    cta: "Connect",
  },
];

export default function ContactPage() {
  return (
    <Container className="py-20 sm:py-28">
      <SectionHeading
        title="Let's Build, Deploy and Scale."
        description="The fastest way to reach me is email or phone — I reply within one business day. No forms, no black holes."
      />
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="flex flex-col gap-4">
          {channels.map((c) => {
            const Icon = c.icon as React.ElementType;
            const inner = (
              <>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon size={18} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-mono-tag text-[11px] uppercase tracking-widest text-text-faint">
                    {c.label}
                  </span>
                  <span className="mt-0.5 block truncate text-sm font-medium text-text">
                    {c.value}
                  </span>
                </span>
                {c.cta && c.href && (
                  <span className="inline-flex shrink-0 items-center gap-1 text-xs font-medium text-accent">
                    {c.cta} <ArrowUpRight size={13} />
                  </span>
                )}
              </>
            );
            const cls =
              "flex items-center gap-4 rounded-xl border border-border-soft bg-bg-elevated px-5 py-4 transition-colors";
            return c.href ? (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                className={`${cls} hover:border-accent/40`}
              >
                {inner}
              </a>
            ) : (
              <div key={c.label} className={cls}>
                {inner}
              </div>
            );
          })}
        </div>

        <div className="h-fit rounded-2xl border border-border-soft bg-bg-elevated/50 p-6 sm:p-8">
          <div className="flex items-center gap-2.5">
            <Clock size={16} className="text-accent" />
            <h2 className="font-display text-lg text-text">What happens next</h2>
          </div>
          <ol className="mt-5 space-y-4">
            {[
              { step: "01", text: "You send an email with the role, stack and timeline." },
              { step: "02", text: "I reply within one business day with availability and relevant work." },
              { step: "03", text: "We set up a 20-min call to scope the work and next steps." },
            ].map((s) => (
              <li key={s.step} className="flex gap-3.5">
                <span className="font-mono-tag text-xs font-bold text-accent">{s.step}</span>
                <p className="text-sm leading-relaxed text-text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-7 flex flex-col gap-3">
            <a
              href={`mailto:${profile.email}?subject=${encodeURIComponent("Project enquiry from portfolio")}`}
              className="inline-flex items-center justify-center rounded-lg bg-accent px-5 py-3 text-sm font-medium text-black transition-opacity hover:opacity-90"
            >
              Email me directly
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center rounded-lg border border-border-soft px-5 py-3 text-sm text-text-muted transition-colors hover:border-accent/40 hover:text-text"
            >
              {profile.phone}
            </a>
          </div>
          <p className="mt-4 text-center text-xs text-text-faint">
            Based in {profile.location} · Open to {profile.openTo}
          </p>
        </div>
      </div>
    </Container>
  );
}
