import type { ReactNode } from "react";

export function SectionHeading({
  title,
  subtitle,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      {subtitle ? (
        <p className="text-muted-foreground leading-relaxed">{subtitle}</p>
      ) : null}
    </div>
  );
}
