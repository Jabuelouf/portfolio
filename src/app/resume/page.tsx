import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Resume",
};

export default function ResumePage() {
  return (
    <div className="py-14 sm:py-20">
      <Container>
        <SectionHeading
          title="Resume"
          subtitle="Add your PDF to public/resume.pdf and this page will link to it."
        />

        <div className="mt-10 rounded-2xl border border-[color:var(--border)] bg-background p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-1">
              <p className="font-medium">Download PDF</p>
              <p className="text-sm text-muted-foreground">public/resume.pdf</p>
            </div>
            <Link
              href="/resume.pdf"
              className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background hover:opacity-95"
            >
              Download
            </Link>
          </div>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          Tip: keep the filename exactly <span className="font-mono">resume.pdf</span>{" "}
          so you don&apos;t have to change this page later.
        </p>
      </Container>
    </div>
  );
}
