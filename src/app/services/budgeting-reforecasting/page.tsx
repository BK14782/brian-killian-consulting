import type { Metadata } from "next";
import Link from "next/link";
import LetsTalkCTA from "@/components/LetsTalkCTA";

export const metadata: Metadata = {
  title: "Budgeting & Reforecasting",
  description:
    "Budgeting and reforecasting consulting for owners and operators: cadence, assumptions, variance controls, and reporting that reduces surprises.",
  alternates: {
    canonical: "https://briankillianconsulting.com/services/budgeting-reforecasting",
  },
  openGraph: {
    type: "website",
    url: "https://briankillianconsulting.com/services/budgeting-reforecasting",
    title: "Budgeting & Reforecasting | Brian Killian Consulting",
    description:
      "Build a clean budget + reforecast rhythm with clear assumptions, variance thresholds, and decision-ready reporting.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Budgeting & Reforecasting | Brian Killian Consulting",
    description:
      "Build a clean budget + reforecast rhythm with clear assumptions, variance thresholds, and decision-ready reporting.",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Budgeting & Reforecasting",
  "description":
    "Budgeting and reforecasting consulting for owners and operators: cadence, assumptions, variance controls, and reporting that reduces surprises.",
  "serviceType": "Budgeting & reforecasting consulting",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Brian Killian Consulting",
    "url": "https://briankillianconsulting.com",
    "areaServed": "US"
  },
  "areaServed": "US",
  "url": "https://briankillianconsulting.com/services/budgeting-reforecasting"
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://briankillianconsulting.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://briankillianconsulting.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Budgeting & Reforecasting",
      "item": "https://briankillianconsulting.com/services/budgeting-reforecasting"
    }
  ]
};

export default function BudgetingReforecastingPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      {/* Breadcrumbs */}
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>

/

      <div className="text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground underline underline-offset-4">
          Home
        </Link>{" "}
        <span className="mx-2">/</span>
        <Link href="/services" className="hover:text-foreground underline underline-offset-4">
          Services
        </Link>{" "}
        <span className="mx-2">/</span>
        <span className="text-foreground">Budgeting &amp; Reforecasting</span>
      </div>

      {/* Hero */}
      <h1 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
        Budgeting &amp; reforecasting that owners can actually trust.
      </h1>

      <p className="mt-3 max-w-3xl text-muted-foreground">
        I help owners and operators install a clean budgeting + reforecasting operating rhythm—clear
        assumptions, variance thresholds, and decision lanes—so performance is predictable and
        surprises get surfaced early.
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
          Deliverables are tailored to your portfolio and reporting expectations, but the goal is
          always the same: fewer surprises and faster decisions.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Card className="p-6">
            <div className="font-semibold">Budget build package</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>• Assumption framework (rent, vacancy, OpEx, utilities, repairs, contracts)</li>
              <li>• Version control + review cadence with clear decision owners</li>
              <li>• Owner-ready narrative and variance-to-prior-year context</li>
            </ul>
          </Card>

          <Card className="p-6">
            <div className="font-semibold">Reforecast cadence + controls</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>• Monthly/quarterly reforecast process that doesn’t feel like rebuilding</li>
              <li>• Variance thresholds + “must-explain” categories</li>
              <li>• Forward-looking risk flags (timing, vendor exposure, lease events)</li>
            </ul>
          </Card>

          <Card className="p-6">
            <div className="font-semibold">Reporting templates</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>• Budget vs Actual and Forecast vs Actual views</li>
              <li>• KPI snapshot (NOI trend, controllables, arrears, WIP, utilities)</li>
              <li>• Consistent story format owners can scan quickly</li>
            </ul>
          </Card>

          <Card className="p-6">
            <div className="font-semibold">Team enablement</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>• “Who does what” and deadlines by role (PM, Accounting, Engineering)</li>
              <li>• A lightweight checklist + handoff points to prevent last-minute scrambles</li>
              <li>• Optional coaching to make it stick after the engagement ends</li>
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
              d: "Quick call to understand the asset/portfolio, existing reporting, and pain points.",
            },
            {
              t: "2) Diagnose",
              d: "Review current budget/forecast files, assumptions, and variance drivers.",
            },
            {
              t: "3) Build & align",
              d: "Create templates + cadence, align on thresholds, and define decision lanes.",
            },
            {
              t: "4) Operate",
              d: "Run the first cycle with you, refine, and hand off a sustainable process.",
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
          <li>• Cleaner variance stories that reduce back-and-forth with ownership</li>
          <li>• Earlier visibility into controllables and timing risks</li>
          <li>• Faster approvals because assumptions are standardized and defensible</li>
          <li>• A repeatable monthly/quarterly rhythm the team can sustain</li>
        </ul>
      </section>

      {/* Best fit */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold tracking-tight">Best fit for</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Card className="p-6">
            <div className="font-semibold">Owners / asset managers</div>
            <p className="mt-2 text-sm text-muted-foreground">
              You want consistent packages, fewer surprises, and clearer explanations of what’s
              changing and why.
            </p>
          </Card>
          <Card className="p-6">
            <div className="font-semibold">Operators / property teams</div>
            <p className="mt-2 text-sm text-muted-foreground">
              You want a practical cadence and templates that support the work—without turning every
              month into a fire drill.
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
              q: "Do you work in our templates, or bring your own?",
              a: "Either. I can work within your current model and improve it, or provide clean templates and map your data into them.",
            },
            {
              q: "How long does this typically take?",
              a: "Most engagements range from 2–6 weeks depending on portfolio size, data cleanliness, and how many templates/cycles we implement.",
            },
            {
              q: "Will this replace our PM/accounting team’s process?",
              a: "No—this makes the existing process clearer and more consistent, with defined owners, thresholds, and timelines.",
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
          <div className="text-lg font-semibold">Ready to reduce surprises?</div>
          <p className="mt-2 text-sm text-muted-foreground">
            If you want a cleaner budget/forecast rhythm and owner-ready reporting, let’s talk.
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
