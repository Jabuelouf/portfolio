import Link from "next/link";
import { Container } from "@/components/Container";
import { NavLink } from "@/components/NavLink";
import { siteConfig } from "@/lib/site";

const nav = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  return (
    <header className="border-b border-[color:var(--border)] bg-background/70 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="font-semibold tracking-tight hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 rounded-md px-2 py-1"
          >
            {siteConfig.name}
          </Link>
          <nav className="flex items-center gap-1">
            {nav.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
