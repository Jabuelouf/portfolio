import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <div className="py-14 sm:py-20">
      <Container>
        <SectionHeading
          title="Projects"
          subtitle="A selection of work across analytics, dashboards, and data tooling."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Container>
    </div>
  );
}
