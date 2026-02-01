import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <div className="py-20">
      <Container>
        <div className="rounded-3xl border border-[color:var(--border)] bg-muted p-10">
          <p className="text-sm font-medium text-muted-foreground">404</p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight">
            Page not found
          </h1>
          <p className="mt-3 text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background hover:opacity-95"
          >
            Back home
          </Link>
        </div>
      </Container>
    </div>
  );
}
