import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical insights on reporting clarity, forecasting discipline, vendor performance, capital planning, and portfolio execution.",
  alternates: {
    canonical: "https://briankillianconsulting.com/insights",
  },
};

const posts = [
  {
    slug: "forecast-variance-is-a-signal",
    title: "Forecast variance is a signal, not a surprise",
    desc:
      "A simple way to reduce month-end surprises: separate paper variance from cash variance, define escalation thresholds, and force decisions earlier.",
    tags: ["Reporting", "Forecasting"],
  },
  {
    slug: "approval-friction-costs-noi",
    title: "Approval friction quietly costs NOI",
    desc:
      "When approvals take weeks, projects get expensive. A repeatable proposal format shortens cycles and reduces rework—without increasing risk.",
    tags: ["Governance", "Capital planning"],
  },
  {
    slug: "vendor-performance-is-a-system",
    title: "Vendor performance is a system, not a personality",
    desc:
      "Better scope clarity, service-level standards, and invoice discipline drives better outcomes than ‘finding a better vendor.’",
    tags: ["Vendors", "Operations"],
  },
];

export default function InsightsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground underline underline-offset-4">
          Home
        </Link>{" "}
        <span className="mx-2">/</span>
        <span className="text-foreground">Insights</span>
      </div>

      <h1 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
        Insights
      </h1>

      <p className="mt-3 max-w-3xl text-muted-foreground">
        Practical notes on operating clarity, forecasting discipline, and execution cadence—written for owners and operators.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/insights/${p.slug}`}
            className="block rounded-3xl border bg-background shadow-sm transition hover:shadow-md hover:border-foreground/20"
          >
            <div className="p-6">
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border bg-foreground/5 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-4 text-base font-semibold">{p.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>

              <div className="mt-4 text-sm underline underline-offset-4">
                Read more
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 rounded-3xl border bg-background/60 p-6">
        <div className="text-sm font-semibold">Want to talk through your situation?</div>
        <p className="mt-2 text-sm text-muted-foreground">
          If you share what you’re trying to improve, I’ll recommend the fastest path to clarity.
        </p>
        <Link
          href="/contact"
          className="mt-4 inline-flex items-center justify-center rounded-2xl border bg-foreground px-5 py-3 text-sm font-medium text-background shadow-sm transition hover:bg-foreground/90"
        >
          Contact
        </Link>
      </div>
    </main>
  );
}
