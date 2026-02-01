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
          subtitle="A quick overview—edit this page to match your story and target roles."
        />

        <div className="mt-10 space-y-6 leading-relaxed text-muted-foreground">
          <p>
            I&apos;m a data analyst focused on turning messy data into clear,
            trusted metrics. I enjoy building dashboards that teams actually
            use, and I care about definitions, data quality, and communication.
          </p>
          <p>
            Recently, I&apos;ve been working on analytics projects that combine{" "}
            <span className="text-foreground">SQL</span> for reliable
            transformations with{" "}
            <span className="text-foreground">Python</span> for modeling,
            automation, and reporting.
          </p>
          <p>
            If you&apos;re hiring for analytics roles, I&apos;d love to chat:{" "}
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
