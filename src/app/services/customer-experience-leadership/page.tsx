import type { Metadata } from "next";
import Link from "next/link";
import LetsTalkCTA from "@/components/LetsTalkCTA";

export const metadata: Metadata = {
  title: "Customer Experience & Leadership | Brian Killian Consulting",
  description:
    "Customer experience and leadership consulting for owners and operators: tenant meeting cadence, warm-touch service standards, vendor SLAs/KPIs, escalation playbooks, and operator-first coaching that improves retention.",
  alternates: {
    canonical: "https://briankillianconsulting.com/services/customer-experience-leadership",
  },
  openGraph: {
    type: "website",
    url: "https://briankillianconsulting.com/services/customer-experience-leadership",
    title: "Customer Experience & Leadership | Brian Killian Consulting",
    description:
      "Tenant meeting cadence, warm-touch service standards, vendor SLAs/KPIs, escalation playbooks, and operator-first coaching that improves retention.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Experience & Leadership | Brian Killian Consulting",
    description:
      "Tenant meeting cadence, warm-touch service standards, vendor SLAs/KPIs, escalation playbooks, and operator-first coaching that improves retention.",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://briankillianconsulting.com/#service-customer-experience-leadership",
  name: "Customer Experience & Leadership",
  description:
    "Customer experience and leadership support for owners and operators: tenant meeting cadence, warm-touch service standards, vendor SLAs/KPIs, escalation playbooks, and operator-first coaching that improves retention and execution.",
  serviceType: "Customer experience & leadership consulting",
  provider: { "@id": "https://briankillianconsulting.com/#organization" },
  areaServed: "US",
  url: "https://briankillianconsulting.com/services/customer-experience-leadership",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://briankillianconsulting.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://briankillianconsulting.com/services" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Customer Experience & Leadership",
      item: "https://briankillianconsulting.com/services/customer-experience-leadership",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does “warm-touch” customer service mean in property operations?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "It means proactive, human follow-through: clear expectations, consistent updates, and small relationship-building touches that reduce friction and build trust with tenants and owners.",
      },
    },
    {
      "@type": "Question",
      name: "Do you help implement a tenant meeting cadence?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. We define who attends, how often, what’s reviewed, and the exact agenda/template so meetings drive action instead of becoming a status readout.",
      },
    },
    {
      "@type": "Question",
      name: "Is this a training program or operational consulting?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Operational consulting with coaching built in. The goal is a repeatable service model—standards, cadence, templates, and leadership rhythms that stick.",
      },
    },
  ],
};

const Card = ({ title, items }: { title: string; items: string[] }) => (
  <div className="rounded-3xl border bg-background p-6 shadow-sm">
    <div className="text-sm font-semibold">{title}</div>
    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
      {items.map((x) => (
        <li key={x}>• {x}</li>
      ))}
    </ul>
  </div>
);

export default function CustomerExperienceLeadershipPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      {/* Structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Breadcrumbs UI */}
      <div className="text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground underline underline-offset-4">
          Home
        </Link>{" "}
        <span className="mx-2">/</span>
        <Link href="/services" className="hover:text-foreground underline underline-offset-4">
          Services
        </Link>{" "}
        <span className="mx-2">/</span>
        <span className="text-foreground">Customer Experience &amp; Leadership</span>
      </div>

      <h1 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
        Customer experience that builds trust — backed by leadership rhythms that execute.
      </h1>

      <p className="mt-3 max-w-3xl text-muted-foreground">
        This offering combines tenant-facing service standards with operator-first leadership coaching. The outcome is a
        predictable service model: consistent tenant meetings, warm-touch communication, clear vendor expectations, and a
        team cadence that closes loops.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Card
          title="Customer experience & retention (what changes)"
          items={[
            "Tenant meeting cadence (monthly/quarterly) with a decision-driving agenda",
            "Warm-touch standards: proactive updates, follow-through, and relationship-building moments",
            "Escalation lanes and response-time expectations that reduce friction",
            "Owner/tenant communication templates that keep narratives consistent",
          ]}
        />
        <Card
          title="Leadership & servant-service mindset (how it sticks)"
          items={[
            "Servant-leadership operating principles (clarity, accountability, calm execution)",
            "Team cadence: weekly priorities, scorecards, and clean handoffs across PM/ENG/Accounting",
            "Vendor governance that supports the occupant experience (SLAs/KPIs + escalation)",
            "Coaching and implementation support so the playbook becomes habit",
          ]}
        />
      </div>

      <div className="mt-10 rounded-3xl border bg-background/60 p-6">
        <div className="text-sm font-semibold">Typical deliverables</div>
        <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
          <li>• Tenant meeting agenda + notes template + follow-up tracker</li>
          <li>• Service standards (response times, comms cadence, definitions of “done”)</li>
          <li>• Vendor SLA/KPI scorecard + escalation flow</li>
          <li>• Weekly operating rhythm: priorities, scorecard, and accountability template</li>
        </ul>
      </div>

      <div className="mt-10">
        <LetsTalkCTA />
      </div>

      <div className="mt-6">
        <Link
          href="/services"
          className="inline-flex items-center justify-center rounded-2xl border px-4 py-2 text-sm font-medium hover:bg-foreground/5"
        >
          Back to services
        </Link>
      </div>
    </main>
  );
}
