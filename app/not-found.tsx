import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="py-28 text-center">
      <p className="font-mono-tag text-accent text-sm">404</p>
      <h1 className="mt-3 font-display text-3xl text-text">Page not found</h1>
      <p className="mt-3 text-text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <div className="mt-8">
        <Button href="/" variant="primary">Back to home</Button>
      </div>
      <Link href="/projects" className="block mt-4 text-sm text-text-muted hover:text-text">
        Or browse projects →
      </Link>
    </Container>
  );
}
