import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/lib/caseStudies";
import LeadCaptureButton from "@/components/LeadCaptureButton";
import Image from "next/image";



export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);

  if (!cs) {
    return { title: "Case Study Not Found" };
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

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const cs = getCaseStudy(slug);
  if (!cs) return notFound();

  return (
    <main className="relative mx-auto max-w-6xl px-4 py-12">
      {cs.heroImage ? (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <Image
      src={cs.heroImage}
      alt=""
      fill
      priority
      className="object-cover opacity-40"
    />
    <div className="absolute inset-0 bg-background/65" />
    <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
  </div>
) : null}


      <div className="max-w-3xl">
        <div className="inline-flex items-center rounded-full border bg-background px-3 py-1 text-xs">
          {cs.tag}
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
          {cs.title}
        </h1>

        <div className="mt-4">
  <div className="text-sm font-semibold">Asset Context</div>
  <p className="mt-1 text-muted-foreground">
    {cs.context}
  </p>
</div>


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

      <div className="mt-12 max-w-3xl space-y-12">

  {/* Challenge */}
  <section>
    <h2 className="text-lg font-semibold">Challenge</h2>
    <p className="mt-3 text-muted-foreground">
      {cs.context}
    </p>

    <ul className="mt-4 list-disc space-y-2 pl-6 text-sm text-muted-foreground">
      {cs.bullets.map((b) => (
        <li key={b}>{b}</li>
      ))}
    </ul>
  </section>

  {/* Intervention */}
  <section>
    <h2 className="text-lg font-semibold">Intervention</h2>

    <ul className="mt-4 list-disc space-y-2 pl-6 text-sm text-muted-foreground">
      {cs.whatIDid.map((x) => (
        <li key={x}>{x}</li>
      ))}
    </ul>
  </section>

  {/* Results */}
  <section>
    <h2 className="text-lg font-semibold">Results</h2>

    <ul className="mt-4 list-disc space-y-2 pl-6 text-sm text-muted-foreground">
      {cs.metrics.map((m) => (
        <li key={m}>{m}</li>
      ))}
    </ul>
  </section>

  {/* Business Impact */}
  <section className="rounded-3xl border bg-background/60 p-6">
    <h2 className="text-lg font-semibold">Business Impact</h2>
    <p className="mt-3 text-muted-foreground">
      {cs.outcome}
    </p>
  </section>

</div>


      <section className="mt-16 rounded-3xl border bg-background/60 p-8">
        <h2 className="text-xl font-semibold">Want similar outcomes?</h2>

        <p className="mt-3 max-w-2xl text-muted-foreground">
          These results came from disciplined operating systems, clear ownership
          communication, and practical execution. If you’re navigating similar
          challenges, I’m happy to talk.
        </p>

        <div className="mt-6">
          <LeadCaptureButton />

        </div>
      </section>
    </main>
  );
}
