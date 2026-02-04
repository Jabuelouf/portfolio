import Link from "next/link";
import { Container } from "@/components/Container";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] py-10">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <Link
              className="text-muted-foreground hover:text-foreground"
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Link>
            <Link
              className="text-muted-foreground hover:text-foreground"
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </Link>
            <Link
              className="text-muted-foreground hover:text-foreground"
              href={siteConfig.links.kaggle}
              target="_blank"
              rel="noreferrer"
            >
              Kaggle
            </Link>
            <Link
              className="text-muted-foreground hover:text-foreground"
              href={siteConfig.links.tableau}
              target="_blank"
              rel="noreferrer"
            >
              Tableau
            </Link>
            <Link
              className="text-muted-foreground hover:text-foreground"
              href={`mailto:${siteConfig.email}`}
            >
              Email
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
