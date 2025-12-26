import type { Metadata } from "next";
import Link from "next/link";
import LetsTalkCTA from "@/components/LetsTalkCTA";

export const metadata: Metadata = {
  title: "Owner & Investor Reporting",
  description:
    "Owner and investor reporting support for property portfolios: KPI dashboards, variance narratives, package standards, and a consistent cadence owners can rely on.",
  alternates: {
    canonical: "https://briankillianconsulting.com/services/owner-investor-reporting",
  },
  openGraph: {
    type: "website",
    url: "https://briankillianconsulting.com/services/owner-investor-reporting",
    title: "Owner & Investor Reporting | Brian Killian Consulting",
    description:
      "Monthly packages that tell the story: KPIs, variance narratives, and forward-looking risk flags.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Owner & Investor Reporting | Brian Killian Consulting",
    description:
      "Monthly packages that tell the story: KPIs, variance narratives, and forward-looking risk flags.",
  },
};

const Card = ({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <div className={`rounded-3xl border bg-background shadow-sm ${className}`}>
    {children}
  </div>
);

export default function OwnerInvestorReportingPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      {/* Breadcrumbs */}
      <div className="text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground underline underline-offset-4">
          Home
        </Link>{" "}
        <span className="mx-2">/</span>
        <Link href="/services" className="hover:text-foreground underline underline-offset-4">
          Services
        </Link>{" "}
        <span className="mx-2">/</span>
        <span className="text-foreground">Owner &amp; Investor Reporting</span>
      </div>

      {/* Hero */}
      <h1 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
        Owner reporting that answers questions before they’re asked.
      </h1>

      <p className="mt-3 max-w-3xl text-muted-foreground">
        I help owners and operators build reporting packages that are consistent, scan-friendly, and
        decision-ready—KPIs, variance narratives, forward-looking risks, and clear next steps.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <LetsTalkCTA className="inline-flex items-center justify-center rounded-2xl border bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90" />
        <Link
          href="/services"
          className="inline-flex items-center justify-center rounded-2xl border px-4 py-2 text-sm font-medium hover:bg-foreground/5"
        >
          Back to services
        </Link>
      </div>

      {/* What you get */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold tracking-tight">What you get</h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          A standardized monthly package that tells the story—what happened, why it happened, what’s
          changing next, and what decisions (if any) are needed.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Card className="p-6">
            <div className="font-semibold">Package structure + standards</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>• A consistent table of contents and narrative format</li>
              <li>• “What changed and why” sections that reduce follow-up questions</li>
              <li>• Definitions for KPIs and recurring reporting terms</li>
            </ul>
          </Card>

          <Card className="p-6">
            <div className="font-semibold">KPI dashboard</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>• NOI trend + key controllables</li>
              <li>• Leasing/occupancy summary (if applicable)</li>
              <li>• Arrears, delinquencies, and collections visibility</li>
            </ul>
          </Card>

          <Card className="p-6">
            <div className="font-semibold">Variance narratives</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>• Budget vs Actual + Forecast vs Actual storylines</li>
              <li>• “Timing vs true variance” clarity</li>
              <li>• Clear callouts for one-time items and recurring run-rate changes</li>
            </ul>
          </Card>

          <Card className="p-6">
            <div className="font-semibold">Forward-looking risk + action log</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>• Risks by category (leasing, vendors, projects, compliance, utilities)</li>
              <li>• Next steps with owners and due dates</li>
              <li>• Decision history so approvals don’t get re-litigated</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* How it works */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold tracking-tight">How it works</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-4">
          {[
            {
              t: "1) Discovery",
              d: "Align on the audience (owners, investors, lenders) and the decisions the package must support.",
            },
            {
              t: "2) Standardize",
              d: "Define the package structure, KPIs, narrative format, and responsibility matrix.",
            },
            {
              t: "3) Build & run",
              d: "Create templates and run the first cycle with you to refine and stabilize.",
            },
            {
              t: "4) Embed",
              d: "Document the cadence and handoffs so the package stays consistent month-to-month.",
            },
          ].map((x) => (
            <Card key={x.t} className="p-6">
              <div className="text-sm font-semibold">{x.t}</div>
              <div className="mt-2 text-sm text-muted-foreground">{x.d}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* Outcomes */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold tracking-tight">Typical outcomes</h2>
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          <li>• Fewer follow-up emails because the narrative is consistent and complete</li>
          <li>• Faster decisions because risks and needed approvals are clearly surfaced</li>
          <li>• Cleaner month-to-month comparability across a portfolio</li>
          <li>• Stronger trust with ownership through predictability and transparency</li>
        </ul>
      </section>

      {/* Best fit */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold tracking-tight">Best fit for</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Card className="p-6">
            <div className="font-semibold">Owners / asset managers</div>
            <p className="mt-2 text-sm text-muted-foreground">
              You want clear packages with consistent KPIs and a narrative that highlights what matters.
            </p>
          </Card>
          <Card className="p-6">
            <div className="font-semibold">Operating teams</div>
            <p className="mt-2 text-sm text-muted-foreground">
              You want a repeatable monthly cadence that reduces last-minute scrambles and makes reporting easier.
            </p>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold tracking-tight">FAQ</h2>
        <div className="mt-5 grid gap-4">
          {[
            {
              q: "Do you write the reporting narrative, or just provide templates?",
              a: "Either. I can provide templates and standards, or help write the narrative while your team builds the underlying data—then transition to your internal cadence.",
            },
            {
              q: "Can this work across multiple owners with different expectations?",
              a: "Yes. We can maintain a core standard package and add lightweight variations for specific owners or reporting requirements.",
            },
            {
              q: "Will this integrate with our existing systems (Yardi, MRI, etc.)?",
              a: "Yes. The package can be built around exports and your current reporting outputs. The goal is clarity and cadence, not a system change.",
            },
          ].map((x) => (
            <Card key={x.q} className="p-6">
              <div className="font-semibold">{x.q}</div>
              <div className="mt-2 text-sm text-muted-foreground">{x.a}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mt-12">
        <Card className="p-6">
          <div className="text-lg font-semibold">Want reporting that builds confidence?</div>
          <p className="mt-2 text-sm text-muted-foreground">
            If your monthly package needs to be clearer, faster, and more consistent, let’s talk.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <LetsTalkCTA className="inline-flex items-center justify-center rounded-2xl border bg-foreground px-4 py-2 text-sm font-medium text-background hover:bg-foreground/90" />
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-2xl border px-4 py-2 text-sm font-medium hover:bg-foreground/5"
            >
              Back to services
            </Link>
          </div>
        </Card>
      </section>
    </main>
  );
}
