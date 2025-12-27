import type { Metadata } from "next";
import Link from "next/link";
import LetsTalkCTA from "@/components/LetsTalkCTA";

export const metadata: Metadata = {
  title: "Capital Planning",
  description:
    "Capital planning support for owners and operators: scopes, budgets, schedules, bids, approvals, and clean owner-facing reporting.",
  alternates: {
    canonical: "https://briankillianconsulting.com/services/capital-planning",
  },
  openGraph: {
    type: "website",
    url: "https://briankillianconsulting.com/services/capital-planning",
    title: "Capital Planning | Brian Killian Consulting",
    description:
      "Scopes, budgets, bid leveling, approvals, and execution tracking—kept defensible and on-scope.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Capital Planning | Brian Killian Consulting",
    description:
      "Scopes, budgets, bid leveling, approvals, and execution tracking—kept defensible and on-scope.",
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
  "@id": "https://briankillianconsulting.com/#service-capital-planning",
  "name": "Capital Planning",
  "description":
    "Capital planning support for owners and operators: scopes, budgets, schedules, bids, approvals, and clean owner-facing reporting.",
  "serviceType": "Capital planning consulting",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Brian Killian Consulting",
    "url": "https://briankillianconsulting.com",
    "areaServed": "US",
     "address": {
    "@type": "PostalAddress",
    "addressLocality": "Seattle",
    "addressRegion": "WA",
    "addressCountry": "US"
    }
  },
  "areaServed": "US",
  "url": "https://briankillianconsulting.com/services/capital-planning"
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
      "name": "Capital Planning",
      "item": "https://briankillianconsulting.com/services/capital-planning"
    }
  ]
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you manage projects day-to-day?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "I can support execution with structure, reporting, and governance. If you need full project management coverage, we can define scope and integration with your internal resources."
      }
    },
    {
      "@type": "Question",
      "name": "Can you work with our existing vendors and templates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Yes. I can improve your existing templates and workflows, or provide clean tools and align them to your current process."
      }
    },
    {
      "@type": "Question",
      "name": "What types of projects does this work best for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "It’s ideal for multi-project programs where approvals, scope clarity, and consistent reporting drive outcomes—especially when timelines and stakeholders are complex."
      }
    }
  ]
};


export default function CapitalPlanningPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
         {/* Breadcrumbs */}
         <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>

          <div className="text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground underline underline-offset-4">
          Home
        </Link>{" "}
        <span className="mx-2">/</span>
        <Link href="/services" className="hover:text-foreground underline underline-offset-4">
          Services
        </Link>{" "}
        <span className="mx-2">/</span>
        <span className="text-foreground">Capital Planning</span>
      </div>

      {/* Hero */}
      <h1 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
        Capital planning that stays on-scope, on-budget, and defensible.
      </h1>

      <p className="mt-3 max-w-3xl text-muted-foreground">
        I help owners and property teams build a practical capital plan—from early scoping through
        approvals and execution tracking—so decisions are clear, documentation is consistent, and
        reporting is owner-ready.
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
          A disciplined capital planning workflow that improves approvals, reduces change-order risk,
          and gives ownership clear visibility from scope through closeout.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Card className="p-6">
            <div className="font-semibold">Project scoping + prioritization</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>• Scope narratives that make approvals easier</li>
              <li>• Prioritization logic tied to risk, ROI, compliance, and lifecycle</li>
              <li>• Clear “must do vs should do” framing</li>
            </ul>
          </Card>

          <Card className="p-6">
            <div className="font-semibold">Budget + schedule framework</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>• Budget assumptions and contingency approach</li>
              <li>• Milestone schedule: design, procurement, mobilization, delivery</li>
              <li>• Roles/responsibilities across PM, engineering, accounting, and vendors</li>
            </ul>
          </Card>

          <Card className="p-6">
            <div className="font-semibold">Bid leveling + approval packages</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>• Apples-to-apples bid comparisons</li>
              <li>• Vendor scope alignment and exclusions tracking</li>
              <li>• Owner-ready approval memo + attachments list</li>
            </ul>
          </Card>

          <Card className="p-6">
            <div className="font-semibold">Execution tracking + reporting</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>• Monthly project status rollups (budget, schedule, risks)</li>
              <li>• Change management log and decision history</li>
              <li>• Closeout checklist + lessons learned</li>
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
              d: "Align on goals, current pipeline, governance, and owner expectations.",
            },
            {
              t: "2) Scope & plan",
              d: "Define scope narratives, assumptions, and a workable milestone schedule.",
            },
            {
              t: "3) Package & approve",
              d: "Bid leveling, exclusions clarity, and approval-ready documentation.",
            },
            {
              t: "4) Track & report",
              d: "Consistent reporting cadence with risks, decisions, and next steps.",
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
          <li>• Faster approvals because scopes and assumptions are standardized</li>
          <li>• Fewer change orders from clearer vendor scope alignment</li>
          <li>• Cleaner monthly reporting with documented decisions and risks</li>
          <li>• Better prioritization across the capital plan (risk, ROI, compliance)</li>
        </ul>
      </section>

      {/* Best fit */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold tracking-tight">Best fit for</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Card className="p-6">
            <div className="font-semibold">Owners / asset managers</div>
            <p className="mt-2 text-sm text-muted-foreground">
              You want clean approval packages and consistent visibility into scope, spend, and
              schedule across a capital program.
            </p>
          </Card>
          <Card className="p-6">
            <div className="font-semibold">Operators / property teams</div>
            <p className="mt-2 text-sm text-muted-foreground">
              You want practical tools—bid leveling, status rollups, and change logs—that reduce
              chaos and make reporting easier.
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
              q: "Do you manage projects day-to-day?",
              a: "I can support your team’s execution with structure, reporting, and governance. If you need full project management coverage, we can define scope and integration with your PM/engineering resources.",
            },
            {
              q: "Can you work with our existing vendors and templates?",
              a: "Yes. I can improve your current templates and workflows, or provide clean tools and map your process into them.",
            },
            {
              q: "What types of projects does this work best for?",
              a: "It’s ideal for multi-project programs where approvals, scope clarity, and consistent reporting drive outcomes—especially when timelines and stakeholders are complex.",
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
          <div className="text-lg font-semibold">Want clearer capital decisions?</div>
          <p className="mt-2 text-sm text-muted-foreground">
            If you need a defensible capital plan, cleaner approvals, and consistent reporting,
            let’s talk.
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
