import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="py-14 sm:py-20">
      <Container>
        <SectionHeading
          title="About"
          subtitle="A quick overview for recruiters and hiring teams."
        />

        <div className="mt-10 space-y-6 leading-relaxed text-muted-foreground">
          <p>
            I&apos;m a data analyst who turns messy data into trusted metrics
            and decision-ready dashboards. I focus on clarity, definition
            alignment, and the kind of storytelling that helps leaders take
            action.
          </p>
          <p>
            My recent work blends{" "}
            <span className="text-foreground">SQL</span> for modeling and
            transformation with{" "}
            <span className="text-foreground">Python</span> for automation,
            analysis, and reporting. I&apos;m comfortable partnering with
            cross-functional teams to define KPIs, build pipelines, and deliver
            executive-ready reporting.
          </p>
          <p>
            I&apos;m currently open to data analyst or BI analyst roles. If
            you&apos;re hiring, I&apos;d love to chat:{" "}
            <Link
              className="text-foreground underline underline-offset-4 hover:opacity-90"
              href={`mailto:${siteConfig.email}`}
            >
              {siteConfig.email}
            </Link>
            .
          </p>
        </div>
      </Container>
    </div>
  );
}
