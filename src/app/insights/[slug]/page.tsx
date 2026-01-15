import Link from "next/link";
import { notFound } from "next/navigation";

const posts: Record<
  string,
  { title: string; body: string; tags: string[] }
> = {
  "forecast-variance-is-a-signal": {
    title: "Forecast variance is a signal, not a surprise",
    tags: ["Reporting", "Forecasting"],
    body:
      "Most surprises aren’t financial—they’re informational. Start by separating paper variance from cash variance, define escalation thresholds, and force decisions earlier. The goal is not zero variance; it’s predictability and fast explanation.\n\nA simple operating cadence (weekly risk check + monthly narrative) reduces surprise and makes ownership conversations shorter, clearer, and more actionable.",
  },
  "approval-friction-costs-noi": {
    title: "Approval friction quietly costs NOI",
    tags: ["Governance", "Capital planning"],
    body:
      "Long approval cycles increase cost through rework, delay, and scope drift. A repeatable proposal format—context, ask, options, risks, and assumptions—reduces follow-ups and improves first-pass approvals.\n\nOwners don’t need more data; they need cleaner decisions. Treat decision velocity as a performance metric.",
  },
  "vendor-performance-is-a-system": {
    title: "Vendor performance is a system, not a personality",
    tags: ["Vendors", "Operations"],
    body:
      "Vendor outcomes improve when scope is clear, standards are measurable, and accountability is consistent. Before switching vendors, tighten scope language, define service-level expectations, and enforce invoice discipline.\n\nMost portfolios don’t have a vendor problem—they have a governance problem. Fix the system and performance follows.",
  },
};

export default function InsightPost({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];
  if (!post) return notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <div className="text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground underline underline-offset-4">
          Home
        </Link>{" "}
        <span className="mx-2">/</span>
        <Link href="/insights" className="hover:text-foreground underline underline-offset-4">
          Insights
        </Link>{" "}
        <span className="mx-2">/</span>
        <span className="text-foreground">{post.title}</span>
      </div>

      <h1 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
        {post.title}
      </h1>

      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((t) => (
          <span
            key={t}
            className="inline-flex items-center rounded-full border bg-foreground/5 px-3 py-1 text-xs text-muted-foreground"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="prose prose-neutral mt-8 max-w-none">
        {post.body.split("\n\n").map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="mt-10 border-t pt-6">
        <div className="text-sm font-semibold">Want a clear next step?</div>
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
