import { Container } from "@/components/ui/Container";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center py-32">
      <Container className="text-center">
        <p className="font-mono text-sm text-(--color-accent)">404</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-(--color-text)">
          This route doesn&apos;t exist.
        </h1>
        <p className="mt-3 text-(--color-text-muted)">
          The page you&apos;re looking for was moved, renamed, or never deployed.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-(--color-accent) px-5 py-2.5 text-sm font-medium text-white transition hover:brightness-110"
        >
          Back to home
        </Link>
      </Container>
    </div>
  );
}
