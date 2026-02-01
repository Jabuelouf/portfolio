import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="py-14 sm:py-20">
      <Container>
        <SectionHeading
          title="Contact"
          subtitle="Reach out for opportunities, collaborations, or a quick chat about analytics."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Card
            title="Email"
            description="Fastest way to reach me."
            href={`mailto:${siteConfig.email}`}
            label={siteConfig.email}
          />
          <Card
            title="LinkedIn"
            description="Role updates and messages."
            href={siteConfig.links.linkedin}
            label="linkedin.com"
          />
          <Card
            title="GitHub"
            description="Code and projects."
            href={siteConfig.links.github}
            label="github.com"
          />
        </div>
      </Container>
    </div>
  );
}

function Card({
  title,
  description,
  href,
  label,
}: {
  title: string;
  description: string;
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="rounded-2xl border border-[color:var(--border)] bg-background p-6 transition-colors hover:bg-muted"
    >
      <div className="flex flex-col gap-2">
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
        <p className="mt-2 text-sm font-medium">{label} →</p>
      </div>
    </Link>
  );
}
