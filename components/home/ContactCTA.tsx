import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";

export function ContactCTA() {
  return (
    <section id="contact" className="scroll-mt-24">
      <Container className="py-20 sm:py-28">
        <div className="rounded-2xl border border-border-soft bg-bg-elevated/50 p-10 text-center sm:p-14">
          <h2 className="font-display text-3xl text-text text-balance sm:text-4xl">Let&apos;s Build, Deploy and Scale.</h2>
          <p className="mx-auto mt-4 max-w-xl text-text-muted">
            Full-stack MERN apps and the DevOps to run them — Docker builds, Jenkins releases, EKS delivery. Email me
            directly and I&apos;ll reply within one business day.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact" variant="primary">Contact Me</Button>
            <Button href={`mailto:${profile.email}`} variant="secondary">{profile.email}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
