import Link from "next/link";
import { caseStudies } from "@/lib/caseStudies";

export default function CaseStudiesIndexPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Case Studies
        </h1>
        <p className="mt-3 text-muted-foreground">
          Representative examples of outcomes and operating methods. Details can be anonymized for confidentiality.
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {caseStudies.map((c) => (
          <Link
            key={c.slug}
            href={`/case-studies/${c.slug}`}
            className="block rounded-3xl border bg-background p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs">
              {c.tag}
            </div>
            <div className="mt-4 text-lg font-semibold leading-tight">{c.title}</div>
            <div className="mt-2 text-sm text-muted-foreground">{c.context}</div>
            <div className="mt-4 text-sm font-medium">Outcome: {c.outcome}</div>
            <div className="mt-4 text-sm text-muted-foreground underline underline-offset-4">
              View details →
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
