import Link from "next/link";
import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/site";

export default function Home() {
  const featured = projects.slice(0, 2);

  return (
    <div className="py-14 sm:py-20">
      <Container>
        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <p className="text-sm font-medium text-muted-foreground">
              Data Analysis · Dashboarding · Stakeholder Storytelling
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Hi, I&apos;m {siteConfig.name}.
              <br />I turn data into decisions.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              I build reliable data pipelines, create executive-ready KPI
              dashboards, and communicate insights that help teams move faster.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/projects"
              className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background hover:opacity-95"
            >
              View projects
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-full border border-[color:var(--border)] px-5 text-sm font-medium text-foreground hover:bg-muted"
            >
              Contact me
            </Link>
          </div>
        </section>

        <section className="mt-16 sm:mt-20">
          <div className="rounded-3xl border border-[color:var(--border)] bg-muted p-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col gap-1">
                <p className="text-sm text-muted-foreground">Strengths</p>
                <p className="font-semibold">SQL · Python · BI</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm text-muted-foreground">Focus</p>
                <p className="font-semibold">Dashboards + analytics</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-semibold">{siteConfig.location}</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm text-muted-foreground">Open to</p>
                <p className="font-semibold">Data Analyst · BI Analyst</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 sm:mt-20">
          <div className="flex items-end justify-between gap-4">
            <SectionHeading
              title="Featured projects"
              subtitle="A few highlights—see the full list for more."
            />
            <Link
              href="/projects"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              All projects →
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {featured.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
