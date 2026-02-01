import Link from "next/link";
import { type ComponentProps } from "react";

export function NavLink(props: ComponentProps<typeof Link>) {
  return (
    <Link
      {...props}
      className={[
        "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30",
        props.className,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
}
