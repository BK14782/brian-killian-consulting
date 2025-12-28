import type { Metadata } from "next";
import Link from "next/link";
import LetsTalkCTA from "@/components/LetsTalkCTA";

export const metadata: Metadata = {
  title: "Customer Experience & Retention | Brian Killian Consulting",
  description:
    "Customer experience and retention consulting for real estate owners and operators: service standards, communication cadence, vendor SLAs, and escalation playbooks that improve outcomes.",
  alternates: {
    canonical: "https://briankillianconsulting.com/services/customer-experience-retention",
  },
  openGraph: {
    type: "website",
    url: "https://briankillianconsulting.com/services/customer-experience-retention",
    title: "Customer Experience & Retention | Brian Killian Consulting",
    description:
      "Service standards, comms cadence, vendor SLAs/KPIs, and escalation playbooks that reduce churn and improve tenant experience.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Experience & Retention | Brian Killian Consulting",
    description:
      "Service standards, comms cadence, vendor SLAs/KPIs, and escalation playbooks that reduce churn and improve tenant experience.",
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://briankillianconsulting.com/#service-customer-experience-retention",
  name: "Customer Experience & Retention",
  description:
    "Customer experience and retention support for owners and operators: service standards, communication cadence, vendor SLAs/KPIs, and escalation playbooks.",
  serviceType: "Customer experience & retention consulting",
  provider: { "@id": "https://briankillianconsulting.com/#organization" },
  areaServed: "US",
  url: "https://briankillianconsulting.com/services/customer-experience-retention",
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
      name: "Customer Experience & Retention",
      item: "https://briankillianconsulting.com/services/customer-experience-retention",
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is this only for office buildings?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "No—these service standards work across office, retail, mixed-use, and residential operations. The playbooks and KPIs are tailored to your asset type and service model.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help with vendor performance and SLAs?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. We define clear SLAs/KPIs, expectations, and escalation lanes so vendors support the occupant experience and issues don’t linger.",
      },
    },
    {
      "@type": "Question",
      name: "What do we get at the end?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "A practical service playbook: standards, cadence, templates, SLAs/KPIs, and an escalation flow that your team can run immediately.",
      },
    },
  ],
};

export default function CustomerExperienceRetentionPage() {
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
        <span className="text-foreground">Customer Experience &amp; Retention</span>
      </div>

      <h1 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
        Customer experience that feels consistent — not accidental.
      </h1>

      <p className="mt-3 max-w-3xl text-muted-foreground">
        I help owners and operators define service standards, communication cadence, vendor expectations, and escalation
        lanes so occupants feel supported and issues get resolved quickly.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border bg-background p-6 shadow-sm">
          <div className="text-sm font-semibold">What we’ll improve</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>• Service standards (response times, comms, follow-through)</li>
            <li>• Vendor SLAs/KPIs aligned to the occupant experience</li>
            <li>• Escalation protocols and incident response playbooks</li>
            <li>• Reporting cadence: what’s open, what’s stuck, what’s trending</li>
          </ul>
        </div>

        <div className="rounded-3xl border bg-background p-6 shadow-sm">
          <div className="text-sm font-semibold">What you’ll receive</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>• Templates: updates, ticket summaries, stakeholder comms</li>
            <li>• KPI definitions and a simple weekly/monthly scorecard</li>
            <li>• Service playbook your team can run immediately</li>
            <li>• A rollout plan to implement without disrupting operations</li>
          </ul>
        </div>
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
