import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { caseStudies, getCaseStudy } from "@/lib/caseStudies";

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const cs = getCaseStudy(params.slug);

  if (!cs) {
    return {
      title: "Case Study Not Found",
    };
  }

  const title = `${cs.title} | Case Study`;
  const description = cs.outcome;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}


export function generateStaticParams(): { slug: string }[] {
  return caseStudies.map((c) => ({ slug: c.slug }));
}


export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const cs = getCaseStudy(params.slug);
  if (!cs) return notFound();

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="max-w-3xl">
        <div className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-xs">
          {cs.tag}
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
          {cs.title}
        </h1>

        <p className="mt-4 text-muted-foreground">{cs.context}</p>

        <div className="mt-6 rounded-3xl border bg-background/60 p-6">
          <div className="text-sm font-semibold">Outcome</div>
          <div className="mt-2 text-sm text-muted-foreground">{cs.outcome}</div>
        </div>

        {cs.timeline ? (
          <div className="mt-6 rounded-3xl border bg-background/60 p-6">
            <div className="text-sm font-semibold">Timeline</div>
            <div className="mt-2 text-sm text-muted-foreground">{cs.timeline}</div>
          </div>
        ) : null}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <section className="rounded-3xl border bg-background p-6 shadow-sm">
          <h2 className="text-base font-semibold">What changed</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {cs.bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full border" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border bg-background p-6 shadow-sm">
          <h2 className="text-base font-semibold">Performance metrics</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {cs.metrics.map((m) => (
              <li key={m} className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full border" />
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-3xl border bg-background p-6 shadow-sm lg:col-span-2">
          <h2 className="text-base font-semibold">My role</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {cs.whatIDid.map((x) => (
              <li key={x} className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full border" />
                <span>{x}</span>
              </li>
            ))}
          </ul>

          {cs.tools?.length ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {cs.tools.map((t) => (
                <span key={t} className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          ) : null}
        </section>
      </div>
    </main>
  );
}