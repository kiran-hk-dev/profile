import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";

export function ContactCTA() {
  return (
    <section id="contact" className="scroll-mt-24">
      <Container className="py-20 sm:py-28">
        <div className="rounded-2xl border border-border-soft bg-bg-elevated/50 p-10 sm:p-14 text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-text text-balance">Let&apos;s Build, Deploy and Scale.</h2>
          <p className="mt-4 max-w-xl mx-auto text-text-muted">
            Interested in working together on full-stack applications, cloud infrastructure, or DevOps automation?
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
