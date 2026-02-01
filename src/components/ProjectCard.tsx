import Link from "next/link";
import { Badge } from "@/components/Badge";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-2xl border border-[color:var(--border)] bg-background p-6 shadow-sm">
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold tracking-tight">
            {project.title}
          </h3>
          <div className="flex items-center gap-3 text-sm">
            {project.links?.demo ? (
              <Link
                className="text-muted-foreground hover:text-foreground"
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
              >
                Demo
              </Link>
            ) : null}
            {project.links?.repo ? (
              <Link
                className="text-muted-foreground hover:text-foreground"
                href={project.links.repo}
                target="_blank"
                rel="noreferrer"
              >
                Repo
              </Link>
            ) : null}
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        {project.highlights?.length ? (
          <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
