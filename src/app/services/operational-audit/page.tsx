import type { Metadata } from "next";
import Link from "next/link";
import LetsTalkCTA from "@/components/LetsTalkCTA";

export const metadata: Metadata = {
  title: "Operational Audit | Brian Killian Consulting",
  description:
    "Operational audit consulting for property teams: workflows, vendor controls, reporting cadence, and practical SOPs that reduce risk and save time.",
  alternates: {
    canonical: "https://briankillianconsulting.com/services/operational-audit",
  },
  openGraph: {
    type: "website",
    url: "https://briankillianconsulting.com/services/operational-audit",
    title: "Operational Audit | Brian Killian Consulting",
    description:
      "Review workflows, controls, vendor governance, and reporting cadence—then deliver practical SOP fixes.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Operational Audit | Brian Killian Consulting",
    description:
      "Review workflows, controls, vendor governance, and reporting cadence—then deliver practical SOP fixes.",
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
  "@id": "https://briankillianconsulting.com/#service-operational-audit",
name:"Operational Audit",
  description:
    "Operational audit consulting for property teams: workflows, vendor controls, reporting cadence, and practical SOPs that reduce risk and save time.",
  serviceType: "Operational audit consulting",
  provider: {
    "@id": "https://briankillianconsulting.com/#organization",
  
  },
  "areaServed": "US",
  "url": "https://briankillianconsulting.com/services/operational-audit"
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
      "name": "Operational Audit",
      "item": "https://briankillianconsulting.com/services/operational-audit"
    }
  ]
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Will this create more work for my team?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "The goal is the opposite. We keep the audit lightweight, then deliver practical SOPs and templates that reduce rework and clarify expectations."
      }
    },
    {
      "@type": "Question",
      "name": "Do you need access to our systems?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Not always. Many audits can be done with exports, samples, and interviews. If deeper access helps, we’ll define what’s needed and why."
      }
    },
    {
      "@type": "Question",
      "name": "What’s the typical engagement length?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text":
          "Many audits take 2–5 weeks depending on portfolio size and how many workflows and stakeholders are in scope."
      }
    }
  ]
};


export default function OperationalAuditPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
    {/* Structured data */}
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
/>

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
        <span className="text-foreground">Operational Audit</span>
      </div>

      {/* Hero */}
      <h1 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
        Operational audits that turn into cleaner systems, not a binder on a shelf.
      </h1>

      <p className="mt-3 max-w-3xl text-muted-foreground">
        I review your current operations (processes, reporting, vendor controls, and tenant
        workflows) and deliver practical fixes: SOPs, checklists, cadence, and owner-ready reporting.
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
          A clear picture of what’s working, what’s breaking, and the highest-leverage improvements
          to reduce risk and improve performance—delivered in a format your team can actually use.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Card className="p-6">
            <div className="font-semibold">Workflow map + bottlenecks</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>• End-to-end process map (PM, engineering, accounting, vendors)</li>
              <li>• Where things stall: approvals, handoffs, unclear ownership</li>
              <li>• “Fix first” recommendations ranked by impact</li>
            </ul>
          </Card>

          <Card className="p-6">
            <div className="font-semibold">Controls + governance improvements</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>• Vendor governance (scope clarity, SLAs/KPIs, escalation paths)</li>
              <li>• Approval thresholds and decision lanes</li>
              <li>• Tracking: WOs, proposals, projects, invoices, compliance items</li>
            </ul>
          </Card>

          <Card className="p-6">
            <div className="font-semibold">SOPs + checklists that stick</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>• SOPs for high-friction workflows (templates + cadence)</li>
              <li>• Simple checklists for recurring tasks and handoffs</li>
              <li>• Optional training/coaching so adoption actually happens</li>
            </ul>
          </Card>

          <Card className="p-6">
            <div className="font-semibold">Owner-ready findings + roadmap</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>• Findings summary: risk, cost, time, and experience impacts</li>
              <li>• 30/60/90-day improvement roadmap</li>
              <li>• Suggested KPIs and cadence to keep progress visible</li>
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
              d: "Align on goals, scope, and where the current pain shows up (owners, tenants, team).",
            },
            {
              t: "2) Observe & review",
              d: "Review artifacts (reports, logs, SOPs) and interview stakeholders across functions.",
            },
            {
              t: "3) Diagnose",
              d: "Identify failure points: unclear ownership, weak controls, broken handoffs, missing cadence.",
            },
            {
              t: "4) Deliver & embed",
              d: "Deliver SOPs, templates, and a roadmap—and support the first cycle to help it stick.",
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
          <li>• Reduced “fire drill” work through clearer roles and recurring cadence</li>
          <li>• Stronger vendor performance with scope clarity and measurable KPIs</li>
          <li>• Fewer approval delays by defining thresholds and decision lanes</li>
          <li>• Cleaner reporting and fewer surprises for ownership</li>
        </ul>
      </section>

      {/* Best fit */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold tracking-tight">Best fit for</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Card className="p-6">
            <div className="font-semibold">Teams feeling “stretched thin”</div>
            <p className="mt-2 text-sm text-muted-foreground">
              You’re doing good work but spending too much time chasing information, reworking tasks,
              or getting stuck in approvals.
            </p>
          </Card>
          <Card className="p-6">
            <div className="font-semibold">Portfolios needing stronger control</div>
            <p className="mt-2 text-sm text-muted-foreground">
              You want stronger governance and visibility: vendor performance, spend controls, and
              predictable reporting.
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
              q: "Will this create more work for my team?",
              a: "The goal is the opposite. We keep the audit lightweight, then deliver practical SOPs and templates that reduce rework and make expectations clearer.",
            },
            {
              q: "Do you need access to our systems?",
              a: "Not always. Many audits can be done with exports, samples, and interviews. If deeper access helps, we’ll define what’s needed and why.",
            },
            {
              q: "What’s the typical engagement length?",
              a: "Many audits take 2–5 weeks depending on portfolio size and how many workflows and stakeholders are in scope.",
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
          <div className="text-lg font-semibold">Want your operations to feel lighter?</div>
          <p className="mt-2 text-sm text-muted-foreground">
            If you want clearer roles, stronger controls, and fewer surprises, let’s talk.
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
